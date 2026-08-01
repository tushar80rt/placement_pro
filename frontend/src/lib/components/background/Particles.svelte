<script lang="ts">
  import { onMount } from 'svelte';
  // Only show 6 particles on desktop. None on mobile (handled by parent).
  const COUNT = 6;
  
  type Particle = {
    x: number; y: number; size: number;
    delay: number; duration: number;
    xMove: number; yMove: number;
  };

  let particles: Particle[] = [];

  onMount(() => {
    particles = Array.from({ length: COUNT }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 2,       // 2–5px only
      delay: -(Math.random() * 30),      // start mid-animation
      duration: Math.random() * 25 + 30, // 30–55s — very slow
      xMove: (Math.random() - 0.5) * 120,
      yMove: (Math.random() - 0.5) * 120,
    }));
  });
</script>

<div class="particles-container" aria-hidden="true">
  {#each particles as p}
    <div
      class="particle"
      style="
        --x: {p.x}%;
        --y: {p.y}%;
        --size: {p.size}px;
        --delay: {p.delay}s;
        --dur: {p.duration}s;
        --dx: {p.xMove}px;
        --dy: {p.yMove}px;
      "
    ></div>
  {/each}
</div>

<style>
  .particles-container {
    position: absolute;
    inset: 0;
    overflow: hidden;
    pointer-events: none;
    z-index: 5;
    opacity: 0.5;
    contain: paint;
  }

  .particle {
    position: absolute;
    left: var(--x);
    top: var(--y);
    width: var(--size);
    height: var(--size);
    background: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    will-change: transform, opacity;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    animation: float-p var(--dur) linear infinite var(--delay);
  }

  @keyframes float-p {
    0%   { transform: translate3d(0, 0, 0); opacity: 0; }
    15%  { opacity: 0.7; }
    50%  { transform: translate3d(var(--dx), var(--dy), 0); opacity: 0.6; }
    85%  { opacity: 0.7; }
    100% { transform: translate3d(calc(var(--dx) * 1.8), calc(var(--dy) * 1.8), 0); opacity: 0; }
  }

  @media (prefers-reduced-motion: reduce) {
    .particle { animation: none; opacity: 0; }
  }
</style>
