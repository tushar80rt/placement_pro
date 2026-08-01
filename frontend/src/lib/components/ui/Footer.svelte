<script lang="ts">
  import { Twitter, BookOpen } from "lucide-svelte";
</script>

<footer
  class="relative w-full bg-[#0a0a0a] text-white pt-20 pb-6 overflow-hidden flex flex-col items-center border-t border-white/5"
>
  <!-- Logo -->
  <div class="z-10 mb-6">
    <h2 class="text-3xl font-extrabold text-orange-500 tracking-tight">
      PlacementPro
    </h2>
  </div>

  <!-- Social Icons -->
  <div class="z-10 flex space-x-4 mb-10">
    <button
      class="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
    >
      <Twitter class="w-5 h-5 text-gray-400 hover:text-white" />
    </button>
    <button
      class="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
    >
      <BookOpen class="w-5 h-5 text-gray-400 hover:text-white" />
    </button>
  </div>

  <!-- Navigation Links -->
  <div class="z-10 flex flex-col items-center space-y-4 mb-24">
    <ul
      class="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-gray-400"
    >
      <li>
        <a href="/" class="hover:text-white transition-colors">Features</a>
      </li>
      <li>
        <a href="/" class="hover:text-white transition-colors">Workflow</a>
      </li>
      <li>
        <a href="/" class="hover:text-white transition-colors">Pricing</a>
      </li>
      <li>
        <a href="/" class="hover:text-white transition-colors">Download</a>
      </li>
      <li><a href="/" class="hover:text-white transition-colors">About</a></li>
      <li>
        <a href="/" class="hover:text-white transition-colors">Contact</a>
      </li>
    </ul>
    <ul
      class="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-gray-400"
    >
      <li>
        <a href="/" class="hover:text-white transition-colors">Changelog</a>
      </li>
      <li><a href="/" class="hover:text-white transition-colors">Blog</a></li>
<li><a href="https://www.example.com/100-must-prepare-ai-engineer-interview-questions-2026" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">AI Interview Questions</a></li>
    </ul>
  </div>

  <!-- Giant Background Text & Main Logo Overlay -->
  <div
    class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[20%] w-full flex justify-center pointer-events-none select-none overflow-hidden h-64"
  >
    <span
      class="text-[11vw] font-black tracking-tighter text-white/[0.03] leading-none whitespace-nowrap"
    >
      PLACEMENTPRO
    </span>
  </div>

  <!-- Orange Logo Button Container (Positioned Over Line) -->
  <div class="relative z-20 w-full flex justify-center mt-12 mb-8">
    <!-- Horizontal Line -->
    <div
      class="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/30 to-transparent -translate-y-1/2"
    ></div>

    <!-- Central Orange Button -->
    <div
      class="relative w-24 h-24 bg-[#ff6b2b] rounded-2xl flex items-center justify-center shadow-[0_0_60px_rgba(255,107,43,0.5)] border-[4px] border-[#0a0a0a] cursor-pointer hover:scale-105 transition-transform duration-300"
    >
      <!-- Inner Dark Container for Logo -->
      <div
        class="w-[85%] h-[85%] bg-[#0a0a0a] rounded-xl flex items-center justify-center"
      >
        <!-- Logo P (stylized) -->
        <span class="text-4xl font-bold italic text-[#ff6b2b]">P</span>
      </div>
    </div>
  </div>

  <!-- Bottom Section -->
  <div
    class="z-10 w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 mt-4 space-y-4 md:space-y-0"
  >
    <div class="flex items-center space-x-6">
      <p>&copy; 2026 PlacementPro. Built for ambitious learners.</p>
    </div>

    <div class="flex items-center space-x-6">
      <a href="/" class="hover:text-gray-300 transition-colors"
        >Terms and Conditions</a
      >
      <a href="/" class="hover:text-gray-300 transition-colors"
        >Privacy Policy</a
      >

      <!-- Visitor Badge Mockup -->
      <div
        class="hidden lg:flex items-center space-x-3 bg-white/5 border border-white/10 rounded-full px-3 py-1.5 ml-4"
      >
        <div class="flex items-center space-x-1.5">
          <div class="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
          <span class="text-white font-medium">1</span>
          <span>live now</span>
        </div>
        <div class="w-px h-3 bg-white/20"></div>
        <div class="flex items-center space-x-1.5">
          <span class="text-white font-medium">867</span>
          <span>views</span>
          <span class="bg-blue-500/20 text-blue-400 px-1.5 rounded text-[10px]"
            >30d</span
          >
        </div>
      </div>
    </div>
  </div>
</footer>
