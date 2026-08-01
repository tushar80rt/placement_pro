<script lang="ts">
  export let reducedMotion = false;
  export let isMobile = false;
</script>

<div class="ambient-lights" style:opacity={isMobile ? '0.3' : '0.6'}>
  <div class="light light-1" class:static={reducedMotion}></div>
  <div class="light light-2" class:static={reducedMotion}></div>
  <div class="light light-3" class:static={reducedMotion}></div>
  <div class="light light-4" class:static={reducedMotion}></div>
</div>

<style>
  .ambient-lights {
    position: absolute;
    inset: 0;
    overflow: hidden;
    pointer-events: none;
    z-index: 2;
  }

  .light {
    position: absolute;
    border-radius: 50%;
    will-change: transform;
    mix-blend-mode: screen;
  }

  .light-1 {
    top: -10%;
    left: -10%;
    width: 60%;
    height: 60%;
    background: radial-gradient(circle, rgba(147, 51, 234, 0.4) 0%, rgba(147, 51, 234, 0) 70%); /* Purple */
    animation: float1 25s ease-in-out infinite alternate;
  }

  .light-2 {
    bottom: -20%;
    right: -10%;
    width: 70%;
    height: 70%;
    background: radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(59, 130, 246, 0) 70%); /* Blue */
    animation: float2 30s ease-in-out infinite alternate-reverse;
  }

  .light-3 {
    top: 30%;
    left: 40%;
    width: 50%;
    height: 50%;
    background: radial-gradient(circle, rgba(16, 185, 129, 0.25) 0%, rgba(16, 185, 129, 0) 70%); /* Green */
    animation: float3 35s ease-in-out infinite alternate;
  }
  
  .light-4 {
    top: 10%;
    right: 20%;
    width: 40%;
    height: 40%;
    background: radial-gradient(circle, rgba(249, 115, 22, 0.25) 0%, rgba(249, 115, 22, 0) 70%); /* Orange */
    animation: float4 40s ease-in-out infinite alternate-reverse;
  }

  @keyframes float1 {
    0% { transform: translate3d(0, 0, 0) scale(1); }
    100% { transform: translate3d(20%, 20%, 0) scale(1.2); }
  }

  @keyframes float2 {
    0% { transform: translate3d(0, 0, 0) scale(1); }
    100% { transform: translate3d(-20%, -10%, 0) scale(1.1); }
  }

  @keyframes float3 {
    0% { transform: translate3d(0, 0, 0) scale(1); }
    100% { transform: translate3d(-30%, 10%, 0) scale(1.3); }
  }
  
  @keyframes float4 {
    0% { transform: translate3d(0, 0, 0) scale(1); }
    100% { transform: translate3d(15%, 30%, 0) scale(0.9); }
  }

  .light.static {
    animation: none;
    transform: translate3d(0,0,0) scale(1);
  }
</style>
