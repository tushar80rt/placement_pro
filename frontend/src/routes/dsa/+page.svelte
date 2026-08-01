<script lang="ts">
  import { Flame, Trophy, Search, ArrowRight, Code2, Bookmark, CircleCheck, Sparkles, Filter } from 'lucide-svelte';
  import { dsaQuestions as neetcode150 } from '$lib/data/catalogs';
  import QuestionCard from '$lib/components/placement/QuestionCard.svelte';
  import { solvedQuestions, bookmarkedQuestions } from '$lib/stores/progress';

  let query = '';
  let active = 'All';
  let activeDifficulty = 'All';

  // Compute topics once — not reactive, data is static
  const topics = Array.from(new Set(neetcode150.map(q => q.category)));

  // Filtered list — reactive only to query/active/difficulty
  $: filtered = neetcode150.filter(q =>
    (!query || q.title.toLowerCase().includes(query.toLowerCase()) || q.category.toLowerCase().includes(query.toLowerCase())) &&
    (active === 'All' || q.category === active) &&
    (activeDifficulty === 'All' || q.difficulty === activeDifficulty)
  );

  // Incremental rendering — start with 30, load more on demand
  const PAGE_SIZE = 30;
  let visibleCount = PAGE_SIZE;

  // Reset pagination whenever filter changes
  $: { filtered; visibleCount = PAGE_SIZE; }

  $: visibleItems = filtered.slice(0, visibleCount);
  $: hasMore = filtered.length > visibleCount;

  function loadMore() {
    visibleCount = Math.min(visibleCount + PAGE_SIZE, filtered.length);
  }

  // For the "continue" card — stable index
  $: continueIdx = $solvedQuestions.length % 150;
</script>

<div class="mx-auto max-w-7xl px-4 py-7 md:px-8 md:py-10">
  <section class="relative overflow-hidden rounded-[2rem] bg-[#17202b] px-6 py-8 text-white shadow-2xl md:px-10 md:py-10">
    <div class="absolute -right-16 -top-20 h-72 w-72 rounded-full bg-primary/30 blur-3xl" aria-hidden="true"></div>
    <div class="absolute bottom-0 left-1/3 h-40 w-72 rounded-full bg-accent/30 blur-3xl" aria-hidden="true"></div>
    <div class="relative grid gap-8 lg:grid-cols-[1.35fr_.85fr]">
      <div>
        <div class="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-orange-100">
          <Sparkles size={13} /> Your interview operating system
        </div>
        <h1 class="mt-5 max-w-xl text-3xl font-extrabold leading-tight md:text-5xl">Build instincts that hold up under pressure.</h1>
        <p class="mt-4 max-w-xl text-sm leading-6 text-slate-300">A focused DSA workspace with the NeetCode 150, deliberate practice paths, and progress that makes your next interview feel earned.</p>
        <div class="relative mt-6 max-w-xl">
          <Search size={18} class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" aria-hidden="true" />
          <input bind:value={query} placeholder="Search all 150 questions..." aria-label="Search questions" class="w-full rounded-2xl border border-white/10 bg-white px-11 py-4 text-sm text-text-primary outline-none ring-primary focus:ring-2" />
        </div>
      </div>
      <div class="grid grid-cols-2 gap-3 self-end">
        <div class="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
          <Flame class="text-orange-300" size={21} aria-hidden="true" />
          <p class="mt-5 text-2xl font-extrabold">12 days</p>
          <p class="text-xs text-slate-300">Current streak</p>
        </div>
        <div class="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
          <Trophy class="text-yellow-300" size={21} aria-hidden="true" />
          <p class="mt-5 text-2xl font-extrabold">{$solvedQuestions.length * 15}</p>
          <p class="text-xs text-slate-300">XP earned</p>
        </div>
        <div class="col-span-2 rounded-2xl border border-white/10 bg-white/10 p-4">
          <div class="flex items-center justify-between text-xs text-slate-300">
            <span>NeetCode 150 progress</span>
            <span>{$solvedQuestions.length} / 150</span>
          </div>
          <div class="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
            <div
              class="h-full rounded-full bg-gradient-to-r from-primary to-orange-300 transition-[width] duration-500"
              style="width: {($solvedQuestions.length / 150) * 100}%"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
    <div class="rounded-2xl border border-border/70 bg-white p-5 shadow-card">
      <CircleCheck class="text-emerald-500" aria-hidden="true" />
      <p class="mt-4 text-2xl font-extrabold">{$solvedQuestions.length}</p>
      <p class="text-xs text-text-secondary">Questions solved</p>
    </div>
    <div class="rounded-2xl border border-border/70 bg-white p-5 shadow-card">
      <Bookmark class="text-primary" aria-hidden="true" />
      <p class="mt-4 text-2xl font-extrabold">{$bookmarkedQuestions.length}</p>
      <p class="text-xs text-text-secondary">Saved for later</p>
    </div>
    <div class="rounded-2xl border border-border/70 bg-white p-5 shadow-card">
      <Code2 class="text-accent" aria-hidden="true" />
      <p class="mt-4 text-2xl font-extrabold">16</p>
      <p class="text-xs text-text-secondary">Topics available</p>
    </div>
    <a href="/dsa/question/{neetcode150[continueIdx].id}" class="rounded-2xl bg-secondary-background p-5 transition hover:bg-secondary hover:shadow-card">
      <p class="text-xs font-bold uppercase tracking-wider text-primary">Continue learning</p>
      <p class="mt-3 font-bold">{neetcode150[continueIdx].title}</p>
      <span class="mt-4 inline-flex items-center gap-1 text-xs font-bold text-primary">Resume <ArrowRight size={14} /></span>
    </a>
  </section>

  <section class="mt-10">
    <div class="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
      <div>
        <p class="text-xs font-bold uppercase tracking-[.18em] text-primary">The core path</p>
        <h2 class="mt-2 text-2xl font-extrabold">NeetCode 150</h2>
      </div>
      <div class="flex items-center gap-2">
        <Filter size={16} class="text-text-secondary" aria-hidden="true" />
        <select bind:value={activeDifficulty} class="rounded-xl border border-border bg-white px-3 py-2 text-sm font-bold text-text-primary outline-none" aria-label="Filter by difficulty">
          <option value="All">All Difficulties</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </div>
    </div>
    <div class="mt-5 flex gap-2 overflow-x-auto pb-1" role="tablist" aria-label="Filter by topic">
      {#each ['All', ...topics] as topic}
        <button
          role="tab"
          aria-selected={active === topic}
          onclick={() => active = topic}
          class="whitespace-nowrap rounded-full px-4 py-2 text-xs font-bold transition {active === topic ? 'bg-text-primary text-white' : 'border border-border bg-white text-text-secondary hover:border-primary'}"
        >{topic}</button>
      {/each}
    </div>
  </section>

  <section id="questions" class="mt-6">
    <!-- Question count feedback -->
    <p class="mb-4 text-xs text-text-secondary font-medium">
      Showing <strong>{visibleItems.length}</strong> of <strong>{filtered.length}</strong> questions
    </p>

    <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {#each visibleItems as question (question.id)}
        <QuestionCard {question} />
      {/each}
    </div>

    <!-- Load more button — incremental rendering -->
    {#if hasMore}
      <div class="mt-8 flex justify-center">
        <button
          onclick={loadMore}
          class="rounded-2xl border border-border bg-white px-8 py-3 text-sm font-bold text-text-primary shadow-card transition hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-card-hover"
        >
          Load more ({filtered.length - visibleCount} remaining)
        </button>
      </div>
    {/if}
  </section>

  <section class="mt-12 grid gap-4 md:grid-cols-3">
    {#each ['Blind 75', 'Topic-wise practice', 'Company-wise rounds'] as title, i}
      <a href={i === 2 ? '/companies' : '/dsa'} class="group rounded-3xl border border-border/70 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-card-hover">
        <p class="text-xs font-bold uppercase tracking-wider text-primary">Curated path</p>
        <h3 class="mt-8 text-xl font-extrabold">{title}</h3>
        <p class="mt-2 text-sm text-text-secondary">A deliberate route with the right level of repetition.</p>
        <ArrowRight class="mt-5 transition group-hover:translate-x-1" size={18} aria-hidden="true" />
      </a>
    {/each}
  </section>
</div>
