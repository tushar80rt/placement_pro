<script lang="ts">
  import { Sparkles, FolderGit2, Search, ExternalLink, Code2, Layers, HelpCircle, CheckCircle2, ChevronDown, ChevronUp, Github, ArrowUpRight, Cpu } from 'lucide-svelte';
  import { placementProjects, type ProjectGuide } from '$lib/data/catalogs';

  let searchQuery = $state('');
  let selectedCategory = $state<string>('All');
  let selectedDifficulty = $state<string>('All');
  let expandedProject = $state<string | null>(null);
  let activeTab = $state<Record<string, 'overview' | 'architecture' | 'interview'>>({});

  const categories = ['All', 'Full Stack & MERN', 'AI & Machine Learning', 'Cloud & Systems'];
  const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const filteredProjects = $derived(
    placementProjects.filter((p) => {
      const matchesSearch =
        searchQuery.trim() === '' ||
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCat = selectedCategory === 'All' || p.category === selectedCategory;
      const matchesDiff = selectedDifficulty === 'All' || p.difficulty === selectedDifficulty;

      return matchesSearch && matchesCat && matchesDiff;
    })
  );

  function toggleProject(id: string) {
    if (expandedProject === id) {
      expandedProject = null;
    } else {
      expandedProject = id;
      if (!activeTab[id]) {
        activeTab[id] = 'overview';
      }
    }
  }

  function setProjectTab(id: string, tab: 'overview' | 'architecture' | 'interview') {
    activeTab[id] = tab;
  }
</script>

<svelte:head>
  <title>Resume-Ready Placement Projects — PlacementPro</title>
  <meta name="description" content="Curated full stack, AI/ML, and distributed systems projects with architecture diagrams, source code, and frequently asked interview questions." />
</svelte:head>

<div class="mx-auto max-w-7xl px-4 py-8 md:px-8">
  <!-- Hero Section -->
  <section class="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#17202b] via-[#1e2e42] to-[#2b274c] p-8 text-white shadow-2xl md:p-12">
    <div class="absolute -right-16 -top-20 h-80 w-80 rounded-full bg-primary/25 blur-3xl" aria-hidden="true"></div>
    <div class="absolute -left-12 -bottom-16 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" aria-hidden="true"></div>

    <div class="relative max-w-3xl">
      <div class="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-orange-200 backdrop-blur-md">
        <Sparkles size={14} class="text-orange-400" /> Stand Out in Technical Interviews
      </div>
      <h1 class="mt-5 text-3xl font-extrabold tracking-tight sm:text-5xl leading-tight">
        Resume-Ready Projects <br />
        <span class="bg-gradient-to-r from-orange-300 via-rose-300 to-amber-200 bg-clip-text text-transparent">
          Built for High-Package Placements.
        </span>
      </h1>
      <p class="mt-4 text-base leading-7 text-slate-300">
        Skip generic clone tutorials. Explore industry-grade projects with complete system architectures, tech stacks, and <span class="font-bold text-white">frequently asked interview questions</span> with model answers.
      </p>

      <!-- Search & Filters in Hero -->
      <div class="mt-8 relative max-w-2xl">
        <Search size={19} class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          bind:value={searchQuery}
          type="text"
          placeholder="Search by tech stack (e.g., Docker, Kafka, Next.js, WebRTC, Raft)..."
          class="w-full rounded-2xl border border-white/20 bg-white/95 px-12 py-4 text-sm font-medium text-slate-900 placeholder:text-slate-500 shadow-lg outline-none ring-primary transition focus:bg-white focus:ring-2"
        />
      </div>
    </div>
  </section>

  <!-- Filter Buttons Bar -->
  <div class="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-border/80 pb-6">
    <!-- Category pills -->
    <div class="flex flex-wrap items-center gap-2">
      {#each categories as cat}
        <button
          onclick={() => selectedCategory = cat}
          class="rounded-xl px-4 py-2 text-xs font-bold transition duration-200 {selectedCategory === cat ? 'bg-primary text-white shadow-md shadow-primary/20' : 'bg-white border border-border text-text-secondary hover:bg-slate-50 hover:text-text-primary'}"
        >
          {cat}
        </button>
      {/each}
    </div>

    <!-- Difficulty selector -->
    <div class="flex items-center gap-2">
      <span class="text-xs font-bold uppercase tracking-wider text-text-secondary">Difficulty:</span>
      <div class="flex items-center gap-1">
        {#each difficulties as diff}
          <button
            onclick={() => selectedDifficulty = diff}
            class="rounded-lg px-2.5 py-1 text-xs font-semibold transition {selectedDifficulty === diff ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}"
          >
            {diff}
          </button>
        {/each}
      </div>
    </div>
  </div>

  <!-- Projects Grid -->
  <div class="mt-8 space-y-6">
    {#if filteredProjects.length === 0}
      <div class="rounded-3xl border border-dashed border-border bg-white p-12 text-center">
        <FolderGit2 size={40} class="mx-auto text-slate-400" />
        <h3 class="mt-4 text-lg font-bold text-slate-800">No projects matched your criteria</h3>
        <p class="mt-1 text-sm text-slate-500">Try adjusting your search query or reset the filters.</p>
        <button
          onclick={() => { searchQuery = ''; selectedCategory = 'All'; selectedDifficulty = 'All'; }}
          class="mt-4 rounded-xl bg-primary px-4 py-2 text-xs font-bold text-white"
        >
          Reset Filters
        </button>
      </div>
    {:else}
      {#each filteredProjects as proj (proj.id)}
        <div class="overflow-hidden rounded-3xl border border-border bg-white shadow-sm transition hover:border-orange-200 hover:shadow-md">
          <!-- Card Header -->
          <div class="p-6 md:p-8">
            <div class="flex flex-wrap items-center justify-between gap-3">
              <div class="flex flex-wrap items-center gap-2">
                <span class="rounded-lg bg-orange-100 px-3 py-1 text-xs font-bold text-orange-700">
                  {proj.category}
                </span>
                <span class="rounded-lg px-3 py-1 text-xs font-bold {proj.difficulty === 'Advanced' ? 'bg-rose-100 text-rose-700' : 'bg-blue-100 text-blue-700'}">
                  {proj.difficulty} Level
                </span>
              </div>
              <div class="flex items-center gap-2">
                <a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-1.5 rounded-xl border border-border bg-slate-50 px-3.5 py-1.5 text-xs font-bold text-slate-700 transition hover:bg-slate-100 hover:text-black"
                >
                  <Github size={14} /> Open Code Topics <ArrowUpRight size={13} />
                </a>
              </div>
            </div>

            <h2 class="mt-4 text-2xl font-black text-slate-900 md:text-3xl">
              {proj.title}
            </h2>
            <p class="mt-2 text-sm leading-relaxed text-slate-600 md:text-base">
              {proj.tagline}
            </p>

            <!-- Tech Stack Badges -->
            <div class="mt-5 flex flex-wrap items-center gap-2">
              <span class="text-xs font-bold text-slate-400">Tech Stack:</span>
              {#each proj.techStack as tech}
                <span class="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700">
                  {tech}
                </span>
              {/each}
            </div>

            <!-- Key Highlights Pill Bar -->
            <div class="mt-5 grid gap-2 sm:grid-cols-3">
              {#each proj.highlights as hl}
                <div class="flex items-center gap-2 rounded-xl bg-orange-50/60 border border-orange-100/80 px-3 py-2 text-xs font-medium text-slate-700">
                  <CheckCircle2 size={15} class="text-orange-500 shrink-0" />
                  <span class="truncate">{hl}</span>
                </div>
              {/each}
            </div>

            <!-- Expand / Collapse Button -->
            <div class="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
              <button
                onclick={() => toggleProject(proj.id)}
                class="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-xs font-bold text-white transition hover:bg-primary shadow-sm"
              >
                {#if expandedProject === proj.id}
                  Hide System Design & Interview Qs <ChevronUp size={16} />
                {:else}
                  Explore Architecture & Interview Qs ({proj.interviewQuestions.length}) <ChevronDown size={16} />
                {/if}
              </button>

              <span class="text-xs font-semibold text-slate-400">
                {proj.interviewQuestions.length} Verified Interview Questions
              </span>
            </div>
          </div>

          <!-- Expanded Deep-Dive Panel -->
          {#if expandedProject === proj.id}
            <div class="border-t border-border/80 bg-slate-50/80 p-6 md:p-8 animate-fadeIn">
              <!-- Internal Navigation Tabs -->
              <div class="flex items-center gap-2 border-b border-slate-200 pb-4">
                <button
                  onclick={() => setProjectTab(proj.id, 'overview')}
                  class="flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-bold transition {(activeTab[proj.id] || 'overview') === 'overview' ? 'bg-white text-primary shadow-sm border border-border' : 'text-slate-600 hover:text-black'}"
                >
                  <Layers size={14} /> Features & Summary
                </button>
                <button
                  onclick={() => setProjectTab(proj.id, 'architecture')}
                  class="flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-bold transition {activeTab[proj.id] === 'architecture' ? 'bg-white text-primary shadow-sm border border-border' : 'text-slate-600 hover:text-black'}"
                >
                  <Cpu size={14} /> System Architecture Flow
                </button>
                <button
                  onclick={() => setProjectTab(proj.id, 'interview')}
                  class="flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-bold transition {activeTab[proj.id] === 'interview' ? 'bg-white text-primary shadow-sm border border-border' : 'text-slate-600 hover:text-black'}"
                >
                  <HelpCircle size={14} /> Interview Q&A ({proj.interviewQuestions.length})
                </button>
              </div>

              <!-- Tab Content -->
              <div class="mt-6">
                {#if (activeTab[proj.id] || 'overview') === 'overview'}
                  <div>
                    <h4 class="text-sm font-bold uppercase tracking-wider text-slate-900">Project Overview</h4>
                    <p class="mt-2 text-sm leading-relaxed text-slate-700">{proj.overview}</p>

                    <h4 class="mt-6 text-sm font-bold uppercase tracking-wider text-slate-900">Core Functional Features</h4>
                    <ul class="mt-3 grid gap-2.5 sm:grid-cols-2">
                      {#each proj.keyFeatures as feat}
                        <li class="flex items-start gap-2.5 rounded-xl bg-white border border-border/80 p-3.5 text-xs font-medium text-slate-800 shadow-2xs">
                          <CheckCircle2 size={16} class="text-emerald-500 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      {/each}
                    </ul>
                  </div>
                {:else if activeTab[proj.id] === 'architecture'}
                  <div>
                    <h4 class="text-sm font-bold uppercase tracking-wider text-slate-900">Data Flow & System Architecture</h4>
                    <div class="mt-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs">
                      <p class="font-mono text-xs leading-relaxed text-slate-800 bg-slate-900 text-orange-200 p-4 rounded-xl overflow-x-auto">
                        {proj.systemArchitecture}
                      </p>
                    </div>
                  </div>
                {:else if activeTab[proj.id] === 'interview'}
                  <div class="space-y-4">
                    <div class="flex items-center justify-between">
                      <h4 class="text-sm font-bold uppercase tracking-wider text-slate-900">Questions Interviewers Ask About This Project</h4>
                      <span class="rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-700">Crucial for HR & Tech Rounds</span>
                    </div>

                    {#each proj.interviewQuestions as qa, i}
                      <div class="rounded-2xl border border-border bg-white p-5 shadow-2xs">
                        <div class="flex items-start gap-3">
                          <span class="grid h-6 w-6 place-items-center rounded-full bg-slate-900 text-xs font-black text-white shrink-0">
                            {i + 1}
                          </span>
                          <div class="flex-1">
                            <h5 class="text-sm font-bold text-slate-900">"{qa.question}"</h5>
                            <p class="mt-2 text-xs leading-relaxed text-slate-700 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                              <span class="font-bold text-primary">Model Answer: </span>{qa.answer}
                            </p>
                            {#if qa.keyTip}
                              <p class="mt-2 text-xs font-medium text-amber-700 bg-amber-50/70 px-3 py-1.5 rounded-lg inline-flex items-center gap-1.5">
                                💡 <span class="font-bold">Pro Tip:</span> {qa.keyTip}
                              </p>
                            {/if}
                          </div>
                        </div>
                      </div>
                    {/each}
                  </div>
                {/if}
              </div>
            </div>
          {/if}
        </div>
      {/each}
    {/if}
  </div>
</div>

<style>
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-4px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fadeIn {
    animation: fadeIn 0.25s ease-out forwards;
  }
</style>
