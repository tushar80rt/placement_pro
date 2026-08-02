import { writable } from 'svelte/store';
import { browser } from '$app/environment';
import { supabase } from '$lib/supabaseClient';
import { currentUser, userProfile } from '$lib/stores/auth';

export interface UserProgressState {
  solved: Record<string, boolean>;
  bookmarked: Record<string, boolean>;
  loaded: boolean;
}

const initialProgress: UserProgressState = {
  solved: {},
  bookmarked: {},
  loaded: false
};

export const aptitudeProgress = writable<UserProgressState>(initialProgress);

let currentUserId = 'guest';

// Subscribe to auth state changes to dynamically load user-specific data
if (browser) {
  currentUser.subscribe(async (user) => {
    const newUserId = user?.id || 'guest';
    currentUserId = newUserId;
    await loadUserAptitudeProgress(newUserId);
  });
}

/**
 * Load progress specifically for the active user ID
 */
export async function loadUserAptitudeProgress(userId: string) {
  if (!browser) return;

  const localSolvedKey = `placementpro_solved_aptitude_${userId}`;
  const localBookmarkKey = `placementpro_bookmarked_aptitude_${userId}`;

  let solved: Record<string, boolean> = {};
  let bookmarked: Record<string, boolean> = {};

  // 1. Try local storage first for fast instant UI render
  try {
    const savedSolved = localStorage.getItem(localSolvedKey);
    if (savedSolved) solved = JSON.parse(savedSolved);

    const savedBookmarks = localStorage.getItem(localBookmarkKey);
    if (savedBookmarks) bookmarked = JSON.parse(savedBookmarks);
  } catch (e) {
    console.warn('Failed to parse local progress', e);
  }

  // Set local state immediately
  aptitudeProgress.set({
    solved,
    bookmarked,
    loaded: true
  });

  // 2. If authenticated with Supabase, sync from cloud database
  if (userId && userId !== 'guest' && !userId.startsWith('local_')) {
    try {
      const { data, error } = await supabase
        .from('user_progress')
        .select('item_id, completed')
        .eq('user_id', userId)
        .eq('category', 'aptitude');

      if (!error && data) {
        data.forEach(row => {
          if (row.completed) solved[row.item_id] = true;
        });

        // Also fetch bookmarks
        const { data: bData } = await supabase
          .from('user_bookmarks')
          .select('item_id')
          .eq('user_id', userId)
          .eq('category', 'aptitude');

        if (bData) {
          bData.forEach(row => {
            bookmarked[row.item_id] = true;
          });
        }

        // Cache locally for this user
        localStorage.setItem(localSolvedKey, JSON.stringify(solved));
        localStorage.setItem(localBookmarkKey, JSON.stringify(bookmarked));

        aptitudeProgress.set({
          solved: { ...solved },
          bookmarked: { ...bookmarked },
          loaded: true
        });
      }
    } catch (err) {
      console.warn('Could not sync cloud progress for user', userId, err);
    }
  }
}

/**
 * Toggle solved status for an aptitude question under active user's ID
 */
export async function toggleAptitudeSolved(qId: string) {
  if (!browser) return;

  aptitudeProgress.update(state => {
    const nextSolved = { ...state.solved, [qId]: !state.solved[qId] };
    const localSolvedKey = `placementpro_solved_aptitude_${currentUserId}`;
    try {
      localStorage.setItem(localSolvedKey, JSON.stringify(nextSolved));
    } catch {}

    // Cloud sync in background
    if (currentUserId && currentUserId !== 'guest' && !currentUserId.startsWith('local_')) {
      if (nextSolved[qId]) {
        supabase.from('user_progress').upsert({
          user_id: currentUserId,
          category: 'aptitude',
          item_id: qId,
          completed: true,
          solved_at: new Date().toISOString()
        }).then();
      } else {
        supabase.from('user_progress').delete()
          .eq('user_id', currentUserId)
          .eq('category', 'aptitude')
          .eq('item_id', qId).then();
      }
    }

    return {
      ...state,
      solved: nextSolved
    };
  });
}

/**
 * Toggle bookmark status for an aptitude question under active user's ID
 */
export async function toggleAptitudeBookmark(qId: string) {
  if (!browser) return;

  aptitudeProgress.update(state => {
    const nextBookmarked = { ...state.bookmarked, [qId]: !state.bookmarked[qId] };
    const localBookmarkKey = `placementpro_bookmarked_aptitude_${currentUserId}`;
    try {
      localStorage.setItem(localBookmarkKey, JSON.stringify(nextBookmarked));
    } catch {}

    // Cloud sync in background
    if (currentUserId && currentUserId !== 'guest' && !currentUserId.startsWith('local_')) {
      if (nextBookmarked[qId]) {
        supabase.from('user_bookmarks').upsert({
          user_id: currentUserId,
          category: 'aptitude',
          item_id: qId,
          created_at: new Date().toISOString()
        }).then();
      } else {
        supabase.from('user_bookmarks').delete()
          .eq('user_id', currentUserId)
          .eq('category', 'aptitude')
          .eq('item_id', qId).then();
      }
    }

    return {
      ...state,
      bookmarked: nextBookmarked
    };
  });
}
