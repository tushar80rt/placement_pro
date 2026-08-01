<script lang="ts">
  import { onMount } from 'svelte';
  import NoiseOverlay from './NoiseOverlay.svelte';
  import Particles from './Particles.svelte';
  import AmbientLights from './AmbientLights.svelte';
  import GradientMesh from './GradientMesh.svelte';
  import FloatingShapes from './FloatingShapes.svelte';

  // Parallax logic
  let mouseX = 0;
  let mouseY = 0;
  let currentX = 0;
  let currentY = 0;
  let animationFrame = 0;
  let reducedMotion = false;
  let isMobile = false;
  let scrollY = 0;

  // Smoothing factor for parallax
  const easing = 0.05;

  onMount(() => {
    // Check for reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    reducedMotion = mediaQuery.matches;

    const updateMotion = (e: MediaQueryListEvent) => {
      reducedMotion = e.matches;
    };
    mediaQuery.addEventListener('change', updateMotion);

    const checkMobile = () => { isMobile = window.innerWidth <= 768; };
    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });

    if (!reducedMotion) {
      const handleMouseMove = (e: MouseEvent) => {
        // Calculate mouse position relative to center of screen, normalized from -1 to 1
        mouseX = (e.clientX / window.innerWidth) * 2 - 1;
        mouseY = (e.clientY / window.innerHeight) * 2 - 1;
        
        if (!animationFrame) {
          animate();
        }
      };

      const handleScroll = () => {
        scrollY = window.scrollY;
      };

      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      window.addEventListener('scroll', handleScroll, { passive: true });

      const animate = () => {
        const dx = mouseX - currentX;
        const dy = mouseY - currentY;
        
        if (Math.abs(dx) > 0.001 || Math.abs(dy) > 0.001) {
          currentX += dx * easing;
          currentY += dy * easing;
          animationFrame = requestAnimationFrame(animate);
        } else {
          animationFrame = 0;
        }
      };
      
      animate();

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', checkMobile);
        mediaQuery.removeEventListener('change', updateMotion);
        if (animationFrame) cancelAnimationFrame(animationFrame);
      };
    } else {
      return () => {
        window.removeEventListener('resize', checkMobile);
        mediaQuery.removeEventListener('change', updateMotion);
      };
    }
  });

  // Calculate parallax offsets based on mouse and scroll
  // The scroll parallax makes the background move UP slower than the content
  $: parallaxX = currentX * -20; // max 20px shift horizontally
  $: parallaxY = currentY * -20 + (scrollY * 0.2); // max 20px shift vertically + 20% scroll speed
  
</script>

<div class="animated-background-wrapper">
  <div class="background-container"
       style:transform={reducedMotion ? 'none' : `translate3d(${parallaxX}px, ${parallaxY}px, 0)`}>
    
    <GradientMesh {reducedMotion} {isMobile} />
    <AmbientLights {reducedMotion} {isMobile} />
    <FloatingShapes {reducedMotion} {isMobile} />
    {#if !reducedMotion}
      <Particles {isMobile} />
    {/if}
  </div>
  
  <NoiseOverlay opacity={0.02} />
</div>

<style>
  .animated-background-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    z-index: 0; /* Keep it strictly behind */
    pointer-events: none;
    background-color: var(--background, #fff8f4); /* Base fallback color from existing design */
  }

  .background-container {
    position: absolute;
    inset: -5%; /* slightly larger to avoid edges showing during parallax */
    width: 110%;
    height: 110%;
    will-change: transform;
    /* Soften the whole composition */
    opacity: 0.8;
  }


</style>
