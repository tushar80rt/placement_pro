<script lang="ts">
  import { ArrowUpRight } from 'lucide-svelte';
  import type { Company } from '$lib/data/types';
  let { company }: { company: Company } = $props();

  function handleImgError(e: Event) {
    (e.currentTarget as HTMLImageElement).style.display = 'none';
  }
</script>

<a
  href="/company/{company.id}"
  data-sveltekit-reload
  class="group relative block overflow-hidden rounded-2xl border border-border/70 bg-white p-5 shadow-card transition duration-300 hover:-translate-y-1.5 hover:shadow-card-hover active:scale-95"
>
  <!-- Top color bar -->
  <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r {company.color}" aria-hidden="true"></div>

  <div class="flex items-start justify-between">
    <!-- Logo -->
    <div class="relative h-12 w-12 overflow-hidden rounded-2xl shadow-lg flex-shrink-0">
      <!-- Fallback initials (always rendered, hidden by img if logo loads) -->
      <div class="absolute inset-0 grid place-items-center bg-gradient-to-br {company.color} font-black text-white" aria-hidden="true">
        {company.initials}
      </div>
      <!-- Lazy-loaded logo with native browser lazy loading -->
      <img
        src={company.logo}
        alt="{company.name} logo"
        class="absolute inset-0 h-full w-full bg-white object-contain p-2"
        loading="lazy"
        decoding="async"
        width="48"
        height="48"
        onerror={handleImgError}
      />
    </div>
    <ArrowUpRight
      size={17}
      class="text-text-secondary transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary"
      aria-hidden="true"
    />
  </div>

  <h3 class="mt-5 font-bold text-text-primary">{company.name}</h3>
  <p class="mt-1 text-xs text-text-secondary">{company.sector}</p>

  <div class="mt-4 flex items-center justify-between">
    <span class="text-[10px] font-bold uppercase tracking-wider {company.hiring ? 'text-emerald-600' : 'text-text-secondary'}">
      {company.hiring ? '● Hiring now' : '○ Limited hiring'}
    </span>
    <div class="flex items-center gap-2">
      <span class="rounded-full bg-primary/10 text-primary px-2 py-1 text-[10px] font-bold">9 Modules</span>
      <span class="rounded-full bg-secondary-background px-2 py-1 text-[10px] font-bold text-text-secondary">{company.difficulty}</span>
    </div>
  </div>
</a>
