<script lang="ts">
  import {
    currentUser,
    userProfile,
    authLoading,
    openAuthModal,
    signOutUser
  } from '$lib/stores/auth';
  import { User, LogOut, Shield, Flame, BookOpen, ChevronDown } from 'lucide-svelte';

  let menuOpen = $state(false);

  function getInitials(name?: string, email?: string) {
    if (name) {
      const parts = name.trim().split(' ');
      if (parts.length >= 2) return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
      return name.slice(0, 2).toUpperCase();
    }
    if (email) return email.slice(0, 2).toUpperCase();
    return 'SS';
  }

  async function handleSignOut() {
    menuOpen = false;
    await signOutUser();
  }
</script>

<div class="relative">
  {#if $authLoading}
    <div class="h-9 w-24 animate-pulse rounded-xl bg-slate-200"></div>
  {:else if $currentUser && $userProfile}
    <!-- Logged in user button -->
    <button
      onclick={() => menuOpen = !menuOpen}
      class="flex items-center gap-2.5 rounded-2xl border border-slate-200/90 bg-white px-3 py-1.5 shadow-2xs transition hover:border-slate-300 hover:shadow-xs"
      aria-expanded={menuOpen}
    >
      {#if $userProfile.avatar_url}
        <img
          src={$userProfile.avatar_url}
          alt={$userProfile.full_name}
          class="h-7 w-7 rounded-full object-cover border border-slate-200"
        />
      {:else}
        <div class="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-primary to-orange-400 text-[11px] font-black text-white shadow-2xs">
          {getInitials($userProfile.full_name, $userProfile.email)}
        </div>
      {/if}

      <div class="hidden text-left sm:block">
        <p class="text-xs font-extrabold text-slate-900 leading-tight truncate max-w-[120px]">
          {$userProfile.full_name || 'Student'}
        </p>
        <p class="text-[10px] font-bold text-primary uppercase tracking-wider">
          {$userProfile.role || 'STUDENT'}
        </p>
      </div>

      <ChevronDown size={14} class="text-slate-400 transition-transform {menuOpen ? 'rotate-180' : ''}" />
    </button>

    <!-- Dropdown Menu -->
    {#if menuOpen}
      <!-- Backdrop for closing -->
      <div
        class="fixed inset-0 z-40"
        onclick={() => menuOpen = false}
        onkeydown={(e) => e.key === 'Escape' && (menuOpen = false)}
        role="button"
        tabindex="-1"
        aria-label="Close menu overlay"
      ></div>

      <div class="absolute right-0 top-12 z-50 w-64 rounded-2xl border border-slate-200 bg-white p-3.5 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-150">
        <!-- User Info Header -->
        <div class="border-b border-slate-100 pb-3 px-1">
          <p class="text-xs font-black text-slate-900 truncate">{$userProfile.full_name}</p>
          <p class="text-[11px] font-medium text-slate-500 truncate">{$userProfile.email}</p>
          <div class="mt-2.5 flex items-center gap-2">
            <span class="rounded-full bg-orange-100 px-2.5 py-0.5 text-[10px] font-extrabold text-orange-700 inline-flex items-center gap-1">
              <Flame size={11} class="text-orange-500" /> 12 Days Streak
            </span>
            <span class="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-700">
              Active Student
            </span>
          </div>
        </div>

        <!-- Navigation Links -->
        <div class="py-2.5 space-y-1">
          <a
            href="/dsa"
            onclick={() => menuOpen = false}
            class="flex items-center gap-2.5 rounded-xl px-2.5 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors"
          >
            <BookOpen size={15} class="text-slate-400" />
            <span>My Solved DSA Problems</span>
          </a>

          {#if $userProfile.role === 'admin'}
            <a
              href="/companies"
              onclick={() => menuOpen = false}
              class="flex items-center gap-2.5 rounded-xl px-2.5 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              <Shield size={15} class="text-primary" />
              <span>Admin Dashboard</span>
            </a>
          {/if}
        </div>

        <!-- Log Out Button -->
        <div class="border-t border-slate-100 pt-2">
          <button
            onclick={handleSignOut}
            class="flex w-full items-center justify-between rounded-xl px-2.5 py-2 text-xs font-bold text-rose-600 bg-rose-50/50 hover:bg-rose-100/70 transition-colors"
          >
            <span class="flex items-center gap-2">
              <LogOut size={15} />
              <span>Log Out</span>
            </span>
            <span class="text-[10px] text-rose-500 font-semibold">Exit</span>
          </button>
        </div>
      </div>
    {/if}
  {:else}
    <!-- Logged out state buttons -->
    <div class="flex items-center gap-2">
      <button
        onclick={() => openAuthModal('signin')}
        class="h-9 rounded-xl border border-slate-200 bg-white px-3 text-xs font-bold text-slate-700 transition hover:bg-slate-50 shadow-2xs"
      >
        Sign In
      </button>

      <button
        onclick={() => openAuthModal('signup')}
        class="h-9 rounded-xl bg-primary px-3.5 text-xs font-black text-white shadow-sm transition hover:bg-[#df5642]"
      >
        Get Started
      </button>
    </div>
  {/if}
</div>
