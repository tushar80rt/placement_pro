<script lang="ts">
  export let reducedMotion = false;
  export let isMobile = false;
  export let isLowEnd = false;
</script>

<!-- On low-end devices, skip entirely — just rely on background-color -->
{#if !isLowEnd}
  <div
    class="gradient-mesh"
    class:static={reducedMotion || isMobile}
    style:opacity={isMobile ? '0.35' : '0.22'}
  >
    <div class="mesh-layer layer-1"></div>
    <!-- Skip second layer on mobile — halves GPU cost -->
    {#if !isMobile}
      <div class="mesh-layer layer-2"></div>
    {/if}
  </div>
{/if}

<style>
  .gradient-mesh {
    position: absolute;
    /* Smaller than before — was inset: -50% which was HUGE */
    inset: -20%;
    width: 140%;
    height: 140%;
    z-index: 1;
    pointer-events: none;
    overflow: hidden;
    /* Critical: contain paint to avoid triggering layout on parent */
    contain: paint;
  }

  .mesh-layer {
    position: absolute;
    inset: 0;
    /* Force GPU layer, prevent layout work */
    will-change: transform;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
  }

  .layer-1 {
    background:
      radial-gradient(ellipse at 15% 50%, rgba(255, 107, 107, 0.35) 0%, transparent 50%),
      radial-gradient(ellipse at 85% 30%, rgba(78, 205, 196, 0.35) 0%, transparent 50%),
      radial-gradient(ellipse at 50% 85%, rgba(69, 183, 209, 0.3) 0%, transparent 45%);
    animation: rotateLayer1 90s linear infinite;
  }

  .layer-2 {
    background:
      radial-gradient(ellipse at 80% 80%, rgba(150, 201, 61, 0.25) 0%, transparent 45%),
      radial-gradient(ellipse at 20% 20%, rgba(255, 190, 11, 0.25) 0%, transparent 40%),
      radial-gradient(ellipse at 50% 50%, rgba(155, 89, 182, 0.2) 0%, transparent 50%);
    animation: rotateLayer2 120s linear infinite reverse;
    mix-blend-mode: overlay;
  }

  /* Slow, smooth — no scale() which forces compositing layer recalc */
  @keyframes rotateLayer1 {
    from { transform: rotate(0deg) translate3d(0, 0, 0); }
    to   { transform: rotate(360deg) translate3d(0, 0, 0); }
  }
  @keyframes rotateLayer2 {
    from { transform: rotate(0deg) translate3d(0, 0, 0); }
    to   { transform: rotate(360deg) translate3d(0, 0, 0); }
  }

  .gradient-mesh.static .mesh-layer {
    animation: none;
    transform: translate3d(0, 0, 0);
  }

  @media (prefers-reduced-motion: reduce) {
    .mesh-layer { animation: none; }
  }
</style>
