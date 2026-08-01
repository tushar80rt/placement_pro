<script lang="ts">
  import { ArrowUpRight, Sparkles } from 'lucide-svelte';
  import type { Company } from '$lib/data/types';
  let { company }: { company: Company } = $props();
</script>
<a href="/company/{company.id}" data-sveltekit-reload class="group relative block overflow-hidden rounded-2xl border border-border/70 bg-white p-5 shadow-card transition duration-300 hover:-translate-y-1.5 hover:shadow-card-hover">
  <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r {company.color}"></div>
  <div class="flex items-start justify-between"><div class="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br {company.color} font-black text-white shadow-lg">{company.initials}</div><ArrowUpRight size={17} class="text-text-secondary transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary"/></div>
  <h3 class="mt-5 font-bold text-text-primary">{company.name}</h3><p class="mt-1 text-xs text-text-secondary">{company.sector}</p>
  <div class="mt-4 flex items-center justify-between"><span class="text-[10px] font-bold uppercase tracking-wider {company.hiring ? 'text-emerald-600' : 'text-text-secondary'}">{company.hiring ? '● Hiring now' : '○ Limited hiring'}</span><span class="rounded-full bg-secondary-background px-2 py-1 text-[10px] font-bold text-text-secondary">{company.difficulty}</span></div>
</a>
