<script lang="ts">
  export let opacity: number = 0.02;
  // On mobile, parent passes opacity=0, so this becomes a no-op.
  // The grain animation is expensive (steps(10) forces 10 repaints/cycle).
  // We use a CSS media query to disable it on mobile.
</script>

{#if opacity > 0}
  <div class="noise-overlay" style="opacity: {opacity}" aria-hidden="true"></div>
{/if}

<style>
  .noise-overlay {
    position: absolute;
    /* Reduced from -50%/200% — still covers parallax drift but less memory */
    inset: -15%;
    width: 130%;
    height: 130%;
    pointer-events: none;
    z-index: 10;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
    /* Reduced from steps(10) to steps(6) — fewer repaints */
    animation: grain 10s steps(6) infinite;
    mix-blend-mode: multiply;
    will-change: transform;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    contain: paint;
  }

  @keyframes grain {
    0%   { transform: translate3d(0, 0, 0); }
    16%  { transform: translate3d(-5%, -8%, 0); }
    33%  { transform: translate3d(-12%, 5%, 0); }
    50%  { transform: translate3d(7%, -20%, 0); }
    66%  { transform: translate3d(-4%, 22%, 0); }
    83%  { transform: translate3d(12%, 0%, 0); }
    100% { transform: translate3d(0, 0, 0); }
  }

  @media (prefers-reduced-motion: reduce),
         (max-width: 1024px) {
    .noise-overlay {
      animation: none;
      transform: translate3d(0, 0, 0);
    }
  }
</style>
