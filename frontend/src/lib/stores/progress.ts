import { writable, type Writable } from 'svelte/store';
import { browser } from '$app/environment';

function persistentStore<T>(key: string, startValue: T): Writable<T> {
    const storedValue = browser ? window.localStorage.getItem(key) : null;
    const initial = storedValue ? JSON.parse(storedValue) : startValue;
    const store = writable<T>(initial);

    if (browser) {
        store.subscribe((value) => {
            window.localStorage.setItem(key, JSON.stringify(value));
        });
    }

    return store;
}

export const solvedQuestions = persistentStore<string[]>('solvedQuestions', []);
export const bookmarkedQuestions = persistentStore<string[]>('bookmarkedQuestions', []);
