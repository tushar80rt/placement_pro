<script lang="ts">
  export let reducedMotion = false;
  export let isMobile = false;
</script>

<div class="floating-shapes" style:opacity={isMobile ? '0.5' : '1'}>
  <!-- Apple-inspired: Apple-like curves and smooth simple shapes -->
  <svg class="shape apple-shape" class:static={reducedMotion} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 20 C150 20 180 50 180 100 C180 150 150 180 100 180 C50 180 20 150 20 100 C20 50 50 20 100 20 Z" stroke="url(#apple-grad)" stroke-width="2" />
    <path d="M120 40 C140 40 150 50 150 70 C150 90 140 100 120 100 C100 100 90 90 90 70 C90 50 100 40 120 40 Z" fill="url(#apple-grad)" opacity="0.1"/>
    <defs>
      <linearGradient id="apple-grad" x1="20" y1="20" x2="180" y2="180" gradientUnits="userSpaceOnUse">
        <stop stop-color="#fff" stop-opacity="0.8"/>
        <stop offset="1" stop-color="#fff" stop-opacity="0.1"/>
      </linearGradient>
    </defs>
  </svg>

  <!-- Google-inspired: 4 colored overlapping arcs -->
  <svg class="shape google-shape" class:static={reducedMotion} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="60" stroke="#EA4335" stroke-width="4" stroke-dasharray="100 300" stroke-linecap="round"/>
    <circle cx="100" cy="100" r="70" stroke="#4285F4" stroke-width="4" stroke-dasharray="150 250" stroke-linecap="round" transform="rotate(90 100 100)"/>
    <circle cx="100" cy="100" r="50" stroke="#FBBC05" stroke-width="4" stroke-dasharray="80 300" stroke-linecap="round" transform="rotate(180 100 100)"/>
    <circle cx="100" cy="100" r="80" stroke="#34A853" stroke-width="4" stroke-dasharray="120 300" stroke-linecap="round" transform="rotate(270 100 100)"/>
  </svg>

  <!-- Amazon-inspired: curved arrow-like smile -->
  <svg class="shape amazon-shape" class:static={reducedMotion} viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 50 C 60 90, 140 90, 180 40" stroke="#FF9900" stroke-width="6" stroke-linecap="round"/>
    <path d="M165 35 L182 38 L175 55" stroke="#FF9900" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>

  <!-- Microsoft-inspired: 4 colored squares in perspective -->
  <svg class="shape ms-shape" class:static={reducedMotion} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="50" y="50" width="45" height="45" rx="4" fill="#F25022" opacity="0.6"/>
    <rect x="105" y="50" width="45" height="45" rx="4" fill="#7FBA00" opacity="0.6"/>
    <rect x="50" y="105" width="45" height="45" rx="4" fill="#00A4EF" opacity="0.6"/>
    <rect x="105" y="105" width="45" height="45" rx="4" fill="#FFB900" opacity="0.6"/>
  </svg>

  <!-- Meta-inspired: Infinity loop abstract -->
  <svg class="shape meta-shape" class:static={reducedMotion} viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 50 C20 50 20 20 50 20 C80 20 120 80 150 80 C180 80 180 50 150 50 C120 50 80 20 50 20" stroke="url(#meta-grad)" stroke-width="8" stroke-linecap="round"/>
    <defs>
      <linearGradient id="meta-grad" x1="0" y1="50" x2="200" y2="50" gradientUnits="userSpaceOnUse">
        <stop stop-color="#0668E1"/>
        <stop offset="1" stop-color="#00C6FF"/>
      </linearGradient>
    </defs>
  </svg>

  <!-- OpenAI-inspired: Geometric floral pattern -->
  <svg class="shape openai-shape" class:static={reducedMotion} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 20 L120 80 L180 100 L120 120 L100 180 L80 120 L20 100 L80 80 Z" stroke="#10A37F" stroke-width="4" stroke-linejoin="round"/>
    <circle cx="100" cy="100" r="30" stroke="#10A37F" stroke-width="2" stroke-dasharray="4 4"/>
  </svg>

  <!-- NVIDIA-inspired: Flowing green waves -->
  <svg class="shape nvidia-shape" class:static={reducedMotion} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 100 Q 50 50 100 100 T 190 100" stroke="#76B900" stroke-width="8" stroke-linecap="round" fill="none"/>
    <path d="M10 120 Q 50 70 100 120 T 190 120" stroke="#76B900" stroke-width="4" stroke-linecap="round" fill="none" opacity="0.5"/>
  </svg>
</div>

<style>
  .floating-shapes {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 3;
    overflow: hidden;
  }

  .shape {
    position: absolute;
    opacity: 0.15;
  }

  .apple-shape {
    width: 300px;
    height: 300px;
    top: 5%;
    left: 5%;
    animation: floatShape 40s ease-in-out infinite;
  }

  .google-shape {
    width: 250px;
    height: 250px;
    bottom: 10%;
    right: 5%;
    animation: floatShape 35s ease-in-out infinite reverse;
  }

  .amazon-shape {
    width: 200px;
    height: 100px;
    top: 30%;
    left: 40%;
    animation: floatShape2 30s ease-in-out infinite;
  }

  .ms-shape {
    width: 150px;
    height: 150px;
    top: 60%;
    left: 15%;
    animation: floatShape 45s linear infinite;
  }

  .meta-shape {
    width: 200px;
    height: 100px;
    bottom: 25%;
    right: 35%;
    animation: floatShape2 38s ease-in-out infinite reverse;
  }
  
  .openai-shape {
    width: 180px;
    height: 180px;
    top: 15%;
    right: 25%;
    animation: floatShape 42s ease-in-out infinite;
  }

  .nvidia-shape {
    width: 220px;
    height: 220px;
    bottom: -5%;
    left: 30%;
    animation: floatShape2 32s ease-in-out infinite;
  }

  @keyframes floatShape {
    0% { transform: translate3d(0, 0, 0) rotate(0deg) scale(1); }
    33% { transform: translate3d(30px, -40px, 0) rotate(15deg) scale(1.05); }
    66% { transform: translate3d(-20px, 20px, 0) rotate(-10deg) scale(0.95); }
    100% { transform: translate3d(0, 0, 0) rotate(0deg) scale(1); }
  }

  @keyframes floatShape2 {
    0% { transform: translate3d(0, 0, 0) rotate(0deg) scale(1); }
    50% { transform: translate3d(-40px, -20px, 0) rotate(-15deg) scale(1.1); }
    100% { transform: translate3d(0, 0, 0) rotate(0deg) scale(1); }
  }

  .shape.static {
    animation: none;
    transform: translate3d(0,0,0);
  }
</style>
