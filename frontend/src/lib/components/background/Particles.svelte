<script lang="ts">
  import { onMount } from 'svelte';
  export let isMobile = false;
  
  // Generating particles mostly purely via CSS / basic HTML elements for performance.
  // Instead of JS animation, we just define multiple CSS keyframes.
  const particleCount = 20;
  let particles: { x: number, y: number, size: number, delay: number, duration: number, xMove: number, yMove: number }[] = [];

  $: activeParticles = isMobile ? particles.slice(0, Math.floor(particleCount * 0.3)) : particles;

  onMount(() => {
    // Generate static values to avoid SSR mismatch and ensure purely CSS-driven motion
    particles = Array.from({ length: particleCount }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2, // 2px to 6px
      delay: Math.random() * -20, // Negative delay to start mid-animation
      duration: Math.random() * 20 + 20, // 20-40s
      xMove: (Math.random() - 0.5) * 200, // Move -100px to 100px
      yMove: (Math.random() - 0.5) * 200
    }));
  });
</script>

<div class="particles-container">
  {#each activeParticles as p, i}
    <div 
      class="particle"
      style="
        --x: {p.x}%; 
        --y: {p.y}%; 
        --size: {p.size}px; 
        --delay: {p.delay}s; 
        --duration: {p.duration}s;
        --x-move: {p.xMove}px;
        --y-move: {p.yMove}px;
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
    opacity: 0.6;
  }

  .particle {
    position: absolute;
    left: var(--x);
    top: var(--y);
    width: var(--size);
    height: var(--size);
    background: rgba(255, 255, 255, 0.4);
    border-radius: 50%;
    animation: float-particle var(--duration) linear infinite;
    animation-delay: var(--delay);
  }

  @keyframes float-particle {
    0% {
      transform: translate3d(0, 0, 0) scale(0.5);
      opacity: 0;
    }
    20% {
      opacity: 0.8;
    }
    50% {
      transform: translate3d(var(--x-move), var(--y-move), 0) scale(1);
    }
    80% {
      opacity: 0.8;
    }
    100% {
      transform: translate3d(calc(var(--x-move) * 2), calc(var(--y-move) * 2), 0) scale(0.5);
      opacity: 0;
    }
  }

  @media (prefers-reduced-motion) {
    .particle {
      animation: none;
      opacity: 0.3;
      transform: translate3d(0,0,0);
    }
  }
</style>
