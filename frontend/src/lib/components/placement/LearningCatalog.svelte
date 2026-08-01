<script lang="ts">
  import type { LearningCategory } from '$lib/data/types';
  import DifficultyBadge from './DifficultyBadge.svelte';
  import { Search, FileText, Download, ArrowUpRight } from 'lucide-svelte';
  import { pdfResources } from '$lib/data/pdfs';

  let { title, subtitle, categories, basePath }: { title: string; subtitle: string; categories: LearningCategory[]; basePath: string } = $props();
  let query = $state('');
  
  let shown = $derived(categories.filter(c => c.title.toLowerCase().includes(query.toLowerCase())));
  
  // Incremental rendering — prevents rendering 50+ categories at once
  const PAGE_SIZE = 15;
  let visibleCount = $state(PAGE_SIZE);

  // Reset on search
  $effect(() => { query; visibleCount = PAGE_SIZE; });

  let visibleCategories = $derived(shown.slice(0, visibleCount));
  let hasMore = $derived(shown.length > visibleCount);
  
  // Filter PDFs based on basePath
  let pageTitle = $derived(title.toLowerCase());
  let relevantPdfs = $derived(pdfResources.filter(pdf => 
      pageTitle.includes(pdf.category.toLowerCase()) || 
      pdf.category === 'Comprehensive' || 
      (pageTitle.includes('dsa') && pdf.category === 'DSA')
  ).slice(0, 4));

  function loadMore() {
    visibleCount = Math.min(visibleCount + PAGE_SIZE, shown.length);
  }
</script>

<div class="mx-auto max-w-7xl px-4 py-8 md:px-8 space-y-12">
  <!-- Premium Header -->
  <section class="relative overflow-hidden rounded-[2.5rem] bg-[#0a0a0a] border border-border/50 shadow-2xl p-8 md:p-14 text-white">
      <div class="absolute inset-0 bg-gradient-to-br from-primary/30 to-purple-600/20 mix-blend-overlay"></div>
      <div class="absolute -top-[30%] -right-[10%] h-[500px] w-[500px] rounded-full bg-gradient-to-l from-primary blur-[120px] opacity-40"></div>
      
      <div class="relative z-10">
          <p class="text-xs font-bold uppercase tracking-[.2em] text-primary bg-primary/10 inline-block px-3 py-1 rounded-full border border-primary/20 mb-6">
              Practice Library
          </p>
          <h1 class="text-5xl md:text-6xl font-black tracking-tight leading-[1.05] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70">
              {title}
          </h1>
          <p class="mt-4 max-w-2xl text-lg text-white/70 leading-relaxed font-medium">
              {subtitle}
          </p>
          
          <div class="mt-8 relative max-w-xl">
              <Search class="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" size={18}/>
              <input 
                  bind:value={query} 
                  class="w-full rounded-2xl bg-white/10 border border-white/20 px-12 py-4 text-sm text-white placeholder-white/50 outline-none focus:border-primary focus:bg-white/15 transition-all backdrop-blur-md shadow-xl" 
                  placeholder="Search a topic or concept..."
              />
          </div>
      </div>
  </section>

  <!-- Categories Grid -->
  <section>
      <div class="flex items-center justify-between mb-6">
          <h2 class="text-2xl font-extrabold text-text-primary">Interactive Modules</h2>
          <span class="text-sm font-bold text-text-secondary">{shown.length} topics</span>
      </div>
      
      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {#each visibleCategories as category (category.slug)}
              <a href="{basePath}/{category.slug}" class="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border/70 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover hover:border-primary/40">
                  <div class="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight class="text-primary" size={20} />
                  </div>
                  
                  <div>
                      <div class="grid h-12 w-12 place-items-center rounded-2xl bg-secondary-background text-2xl text-primary transition-colors group-hover:bg-primary/10">
                          {category.icon}
                      </div>
                      <h3 class="mt-5 text-lg font-extrabold text-text-primary group-hover:text-primary transition-colors">{category.title}</h3>
                      <p class="mt-2 text-sm text-text-secondary line-clamp-2 leading-relaxed">
                          Theory, formulas, solved examples and <strong class="text-text-primary">{category.questions.length}</strong> guided questions.
                      </p>
                  </div>
                  
                  <div class="mt-6 flex flex-wrap gap-2 pt-4 border-t border-border/50">
                      {#each category.questions.slice(0, 3) as question}
                          <DifficultyBadge difficulty={question.difficulty}/>
                      {/each}
                      {#if category.questions.length > 3}
                          <span class="text-[10px] font-bold text-text-secondary self-center px-1">+{category.questions.length - 3}</span>
                      {/if}
                  </div>
              </a>
          {/each}
      </div>
      
      {#if hasMore}
          <div class="mt-8 flex justify-center">
            <button
              onclick={loadMore}
              class="rounded-2xl border border-border bg-white px-8 py-3 text-sm font-bold text-text-primary shadow-card transition hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-card-hover"
            >
              Load more ({shown.length - visibleCount} remaining)
            </button>
          </div>
      {/if}

      {#if shown.length === 0}
          <div class="py-12 text-center rounded-3xl border border-dashed border-border">
              <p class="text-text-secondary font-medium">No topics found matching "{query}"</p>
          </div>
      {/if}
  </section>

  <!-- PDF Resources Section -->
  {#if relevantPdfs.length > 0}
      <section class="rounded-[2rem] bg-secondary-background/30 border border-border/50 p-6 md:p-8">
          <div class="flex items-center gap-2 mb-6 border-b border-border/50 pb-4">
              <FileText class="text-primary" size={24} />
              <h2 class="text-xl font-outfit font-semibold text-text-primary">Relevant PDF Guides</h2>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              {#each relevantPdfs as pdf}
                  <a href={pdf.url} target="_blank" rel="noopener noreferrer" class="group flex items-start gap-4 p-5 rounded-2xl border border-border bg-white hover:border-primary/40 hover:shadow-card transition-all">
                      <div class="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-red-50 text-red-500 group-hover:bg-red-500 group-hover:text-white transition-colors shadow-sm">
                          <FileText size={20} />
                      </div>
                      <div class="flex-1 min-w-0">
                          <div class="flex items-center justify-between mb-1">
                              <span class="text-[10px] font-bold uppercase tracking-wider text-text-secondary">{pdf.category}</span>
                              <span class="text-[10px] font-mono text-text-secondary bg-secondary-background px-1.5 py-0.5 rounded">{pdf.size}</span>
                          </div>
                          <h3 class="font-bold text-text-primary truncate group-hover:text-primary transition-colors">{pdf.title}</h3>
                          <p class="mt-1 text-xs text-text-secondary line-clamp-2 leading-relaxed">{pdf.description}</p>
                      </div>
                      <div class="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-secondary-background text-text-secondary group-hover:bg-primary/10 group-hover:text-primary transition-colors self-center">
                          <Download size={14} />
                      </div>
                  </a>
              {/each}
          </div>
      </section>
  {/if}
</div>
