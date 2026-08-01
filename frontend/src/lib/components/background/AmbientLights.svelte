<script lang="ts">
  export let reducedMotion = false;
  export let isMobile = false;
  export let isLowEnd = false;
</script>

{#if !isLowEnd}
  <div
    class="ambient-lights"
    class:mobile={isMobile}
    style:opacity={isMobile ? '0.25' : '0.55'}
  >
    <div class="light light-1" class:static={reducedMotion || isMobile}></div>
    <div class="light light-2" class:static={reducedMotion || isMobile}></div>
    <!-- Only render lights 3 & 4 on desktop -->
    {#if !isMobile}
      <div class="light light-3" class:static={reducedMotion}></div>
      <div class="light light-4" class:static={reducedMotion}></div>
    {/if}
  </div>
{/if}

<style>
  .ambient-lights {
    position: absolute;
    inset: 0;
    overflow: hidden;
    pointer-events: none;
    z-index: 2;
    contain: paint;
  }

  .light {
    position: absolute;
    border-radius: 50%;
    will-change: transform;
    /* CRITICAL: Removed mix-blend-mode: screen from here.
       mix-blend-mode forces the browser to create a stacking context
       and repaint on every frame — devastating on mobile.
       Only keep it on desktop via class. */
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
  }

  /* mix-blend-mode only on non-mobile (applied via absence of .mobile class) */
  .ambient-lights:not(.mobile) .light {
    mix-blend-mode: screen;
  }

  .light-1 {
    top: -10%;
    left: -10%;
    width: 55%;
    height: 55%;
    background: radial-gradient(circle, rgba(147, 51, 234, 0.45) 0%, transparent 70%);
    animation: float1 30s ease-in-out infinite alternate;
  }

  .light-2 {
    bottom: -20%;
    right: -10%;
    width: 65%;
    height: 65%;
    background: radial-gradient(circle, rgba(59, 130, 246, 0.35) 0%, transparent 70%);
    animation: float2 36s ease-in-out infinite alternate-reverse;
  }

  .light-3 {
    top: 30%;
    left: 40%;
    width: 45%;
    height: 45%;
    background: radial-gradient(circle, rgba(16, 185, 129, 0.28) 0%, transparent 70%);
    animation: float3 42s ease-in-out infinite alternate;
  }

  .light-4 {
    top: 10%;
    right: 20%;
    width: 38%;
    height: 38%;
    background: radial-gradient(circle, rgba(249, 115, 22, 0.28) 0%, transparent 70%);
    animation: float4 50s ease-in-out infinite alternate-reverse;
  }

  /* Pure transform animations — no layout, no paint */
  @keyframes float1 {
    0%   { transform: translate3d(0, 0, 0); }
    100% { transform: translate3d(18%, 18%, 0); }
  }
  @keyframes float2 {
    0%   { transform: translate3d(0, 0, 0); }
    100% { transform: translate3d(-18%, -10%, 0); }
  }
  @keyframes float3 {
    0%   { transform: translate3d(0, 0, 0); }
    100% { transform: translate3d(-28%, 10%, 0); }
  }
  @keyframes float4 {
    0%   { transform: translate3d(0, 0, 0); }
    100% { transform: translate3d(12%, 28%, 0); }
  }

  .light.static {
    animation: none;
    transform: translate3d(0, 0, 0);
  }

  @media (prefers-reduced-motion: reduce) {
    .light { animation: none; transform: translate3d(0, 0, 0); }
  }
</style>
