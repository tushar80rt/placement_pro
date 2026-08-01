<script lang="ts">
  import { Search, Building2, Sparkles } from 'lucide-svelte';
  import CompanyCard from '$lib/components/placement/CompanyCard.svelte';
  import { placementCompanies } from '$lib/data/catalogs';

  let query = '';

  // Derived filtered list
  $: visible = placementCompanies.filter(
    company => company.name.toLowerCase().includes(query.toLowerCase())
  );

  // Incremental rendering — 20 cards initially
  const PAGE_SIZE = 20;
  let visibleCount = PAGE_SIZE;
  $: { visible; visibleCount = PAGE_SIZE; } // reset on filter change

  $: displayedCompanies = visible.slice(0, visibleCount);
  $: hasMore = visible.length > visibleCount;

  function loadMore() {
    visibleCount = Math.min(visibleCount + PAGE_SIZE, visible.length);
  }
</script>

<div class="mx-auto max-w-7xl px-4 py-8 md:px-8">
  <section class="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#17202b] via-[#202e45] to-[#3b2d4e] p-8 text-white md:p-12">
    <div class="absolute -right-12 -top-20 h-80 w-80 rounded-full bg-primary/20 blur-3xl" aria-hidden="true"></div>
    <div class="relative max-w-2xl">
      <p class="flex items-center gap-2 text-xs font-bold uppercase tracking-[.2em] text-orange-200">
        <Sparkles size={14} aria-hidden="true" /> Company intelligence
      </p>
      <h1 class="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">Prepare for the companies you actually want.</h1>
      <p class="mt-4 text-sm leading-6 text-slate-300">Focused DSA sheets, interview patterns, resume signals, and first-hand experience—organized into one preparation hub.</p>
      <div class="relative mt-7">
        <Search size={18} class="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" aria-hidden="true" />
        <input
          bind:value={query}
          class="w-full rounded-2xl bg-white py-4 pl-11 pr-4 text-sm text-text-primary outline-none"
          placeholder="Find a company..."
          aria-label="Search companies"
        />
      </div>
    </div>
  </section>

  <div class="mt-9 flex items-center justify-between">
    <div>
      <p class="text-xs font-bold uppercase tracking-[.18em] text-primary">Company directory</p>
      <h2 class="mt-1 text-2xl font-extrabold">{visible.length} preparation hubs</h2>
    </div>
    <Building2 class="text-primary" aria-hidden="true" />
  </div>

  <div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {#each displayedCompanies as company (company.id)}
      <CompanyCard {company} />
    {/each}
  </div>

  {#if hasMore}
    <div class="mt-8 flex justify-center">
      <button
        onclick={loadMore}
        class="rounded-2xl border border-border bg-white px-8 py-3 text-sm font-bold text-text-primary shadow-card transition hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-card-hover"
      >
        Load more companies ({visible.length - visibleCount} remaining)
      </button>
    </div>
  {/if}
</div>
