<script lang="ts">
  export let reducedMotion = false;
  export let isMobile = false;
</script>

<div class="gradient-mesh" class:static={reducedMotion} style:opacity={isMobile ? '0.5' : '1'}>
  <div class="mesh-layer layer-1"></div>
  <div class="mesh-layer layer-2"></div>
</div>

<style>
  .gradient-mesh {
    position: absolute;
    inset: -50%;
    width: 200%;
    height: 200%;
    z-index: 1;
    pointer-events: none;
    opacity: 0.25; /* Soft overall opacity */
    overflow: hidden;
  }

  .mesh-layer {
    position: absolute;
    inset: 0;
    will-change: transform, opacity;
  }

  .layer-1 {
    background: 
      radial-gradient(circle at 15% 50%, rgba(255, 107, 107, 0.4), transparent 25%),
      radial-gradient(circle at 85% 30%, rgba(78, 205, 196, 0.4), transparent 25%),
      radial-gradient(circle at 50% 80%, rgba(69, 183, 209, 0.4), transparent 25%);
    animation: rotate 60s linear infinite;
  }

  .layer-2 {
    background: 
      radial-gradient(circle at 80% 80%, rgba(150, 201, 61, 0.3), transparent 30%),
      radial-gradient(circle at 20% 20%, rgba(255, 190, 11, 0.3), transparent 30%),
      radial-gradient(circle at 50% 50%, rgba(155, 89, 182, 0.3), transparent 40%);
    animation: rotate 80s linear infinite reverse;
    mix-blend-mode: overlay;
  }

  @keyframes rotate {
    0% { transform: rotate(0deg) scale(1); }
    50% { transform: rotate(180deg) scale(1.1); }
    100% { transform: rotate(360deg) scale(1); }
  }

  .gradient-mesh.static .mesh-layer {
    animation: none;
    transform: none;
  }
</style>
