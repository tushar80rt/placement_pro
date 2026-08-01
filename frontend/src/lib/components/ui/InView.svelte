<script lang="ts">
  /**
   * InView — renders children only once they are near the viewport.
   * Uses IntersectionObserver for zero-cost detection.
   * Once visible, content stays rendered (no unmount on scroll-out).
   *
   * Props:
   *   threshold — 0–1, what % of element must be visible (default: 0)
   *   rootMargin — CSS margin string for early triggering (default: "200px 0px")
   *   once       — if true, disconnect observer after first trigger (default: true)
   */
  import { onDestroy } from 'svelte';
  import type { Snippet } from 'svelte';

  let {
    threshold = 0,
    rootMargin = '200px 0px',
    once = true,
    children,
  }: {
    threshold?: number;
    rootMargin?: string;
    once?: boolean;
    children: Snippet;
  } = $props();

  let visible = $state(false);
  let el: HTMLElement | null = null;
  let observer: IntersectionObserver | null = null;

  function observe(node: HTMLElement) {
    el = node;
    if (typeof IntersectionObserver === 'undefined') {
      // SSR or old browsers — just show immediately
      visible = true;
      return;
    }

    observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          visible = true;
          if (once && observer) {
            observer.disconnect();
            observer = null;
          }
        } else if (!once) {
          visible = false;
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(node);
  }

  onDestroy(() => {
    if (observer) {
      observer.disconnect();
      observer = null;
    }
  });
</script>

<div use:observe class="inview-wrapper">
  {#if visible}
    {@render children()}
  {:else}
    <!-- Placeholder keeps the scroll height stable (prevents CLS) -->
    <div class="inview-placeholder" aria-hidden="true"></div>
  {/if}
</div>

<style>
  .inview-wrapper {
    /* Block display so IntersectionObserver can measure the element correctly.
       display: contents breaks observation since the element has no box. */
    display: block;
    /* Ensure no extra spacing is added */
    margin: 0;
    padding: 0;
  }
  .inview-placeholder {
    /* Minimum height so the page has approximate layout before content loads.
       This prevents sections from "jumping in" unexpectedly. */
    min-height: 1px;
  }
</style>
