<script lang="ts">
  import { onMount } from 'svelte';
  import NoiseOverlay from './NoiseOverlay.svelte';
  import Particles from './Particles.svelte';
  import AmbientLights from './AmbientLights.svelte';
  import GradientMesh from './GradientMesh.svelte';
  import FloatingShapes from './FloatingShapes.svelte';

  // Device tier: 'desktop' | 'tablet' | 'mobile' | 'low-end'
  let deviceTier = $state<'desktop' | 'tablet' | 'mobile' | 'low-end'>('desktop');
  let reducedMotion = $state(false);
  
  // Parallax — only on desktop
  let parallaxX = $state(0);
  let parallaxY = $state(0);
  let targetX = 0;
  let targetY = 0;
  let animFrame = 0;
  let isAnimating = false;

  const EASING = 0.06;

  function detectDevice() {
    const width = window.innerWidth;
    // Low-end detection: low memory, slow CPU
    const isLowEnd = (navigator as any).deviceMemory !== undefined 
      ? (navigator as any).deviceMemory < 4 
      : false;
    const isSlowCPU = (navigator as any).hardwareConcurrency !== undefined
      ? (navigator as any).hardwareConcurrency <= 4
      : false;

    if (width <= 640 || (isLowEnd && isSlowCPU)) {
      deviceTier = 'low-end';
    } else if (width <= 1024) {
      deviceTier = width <= 768 ? 'mobile' : 'tablet';
    } else {
      deviceTier = isLowEnd ? 'mobile' : 'desktop';
    }
  }

  function lerp(a: number, b: number, t: number) {
    return a + (b - a) * t;
  }

  function animate() {
    const dx = targetX - parallaxX;
    const dy = targetY - parallaxY;

    if (Math.abs(dx) > 0.01 || Math.abs(dy) > 0.01) {
      parallaxX = lerp(parallaxX, targetX, EASING);
      parallaxY = lerp(parallaxY, targetY, EASING);
      animFrame = requestAnimationFrame(animate);
    } else {
      parallaxX = targetX;
      parallaxY = targetY;
      isAnimating = false;
      animFrame = 0;
    }
  }

  onMount(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    reducedMotion = mq.matches;

    detectDevice();

    const onMQ = (e: MediaQueryListEvent) => { reducedMotion = e.matches; };
    mq.addEventListener('change', onMQ);

    let resizeTimer: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(detectDevice, 200);
    };
    window.addEventListener('resize', onResize, { passive: true });

    // Only enable mouse parallax on desktop
    let onMouseMove: ((e: MouseEvent) => void) | null = null;
    if (!reducedMotion && deviceTier === 'desktop') {
      onMouseMove = (e: MouseEvent) => {
        targetX = ((e.clientX / window.innerWidth) * 2 - 1) * -18;
        targetY = ((e.clientY / window.innerHeight) * 2 - 1) * -18;
        if (!isAnimating) {
          isAnimating = true;
          animFrame = requestAnimationFrame(animate);
        }
      };
      window.addEventListener('mousemove', onMouseMove, { passive: true });
    }

    return () => {
      mq.removeEventListener('change', onMQ);
      window.removeEventListener('resize', onResize);
      if (onMouseMove) window.removeEventListener('mousemove', onMouseMove);
      if (animFrame) cancelAnimationFrame(animFrame);
      clearTimeout(resizeTimer);
    };
  });

  let isMobile = $derived(deviceTier === 'mobile' || deviceTier === 'low-end');
  let isLowEnd = $derived(deviceTier === 'low-end');
  let showParticles = $derived(!reducedMotion && deviceTier === 'desktop');
  let showShapes = $derived(!isLowEnd);
  let transform = $derived((reducedMotion || deviceTier !== 'desktop')
    ? 'translate3d(0,0,0)'
    : `translate3d(${parallaxX}px,${parallaxY}px,0)`);
</script>

<div class="animated-bg-wrapper">
  <div
    class="bg-container"
    style:transform={transform}
  >
    <GradientMesh {reducedMotion} {isMobile} {isLowEnd} />
    <AmbientLights {reducedMotion} {isMobile} {isLowEnd} />
    {#if showShapes}
      <FloatingShapes {reducedMotion} {isMobile} />
    {/if}
    {#if showParticles}
      <Particles />
    {/if}
  </div>

  {#if !isLowEnd}
    <NoiseOverlay opacity={isMobile ? 0 : 0.02} />
  {/if}
</div>

<style>
  .animated-bg-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    z-index: 0;
    pointer-events: none;
    background-color: var(--background, #fff8f4);
    contain: strict;
  }

  .bg-container {
    position: absolute;
    inset: -5%;
    width: 110%;
    height: 110%;
    will-change: transform;
    opacity: 0.85;
    /* Force GPU layer */
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
  }
</style>
