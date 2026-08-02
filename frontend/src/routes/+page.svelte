<script lang="ts">
  import {
    Brain,
    Building2,
    CheckCircle2,
    Code2,
    BookOpen,
    FolderGit2,
    Layers,
    Target,
    Search,
    ArrowRight,
    Sparkles,
    Flame,
    Award,
    TrendingUp,
    ChevronRight
  } from 'lucide-svelte';
  import { solvedQuestions } from '$lib/stores/progress';

  let searchQuery = $state('');

  const prepModules = [
    {
      id: 'aptitude',
      title: 'Quantitative Aptitude',
      subtitle: 'Master shortcuts and first principles across practice questions.',
      icon: Target,
      topicsCount: '19 Topics · 1,200+ MCQs',
      highlights: ['Time & Work', 'Speed & Distance', 'Percentages & Profit', 'Probability'],
      link: '/aptitude',
      tag: 'Aptitude Round',
      accent: 'border-orange-200 hover:border-orange-400 bg-white',
      badgeTone: 'bg-orange-100 text-orange-700',
      iconTone: 'bg-orange-50 text-orange-600 border-orange-200'
    },
    {
      id: 'reasoning',
      title: 'Logical Reasoning',
      subtitle: 'Build speed and clarity across reasoning patterns that appear in screening tests.',
      icon: Brain,
      topicsCount: '24 Topics · Pattern Drills',
      highlights: ['Coding-Decoding', 'Blood Relations', 'Syllogism', 'Seating Arrangements'],
      link: '/reasoning',
      tag: 'Screening Test',
      accent: 'border-blue-200 hover:border-blue-400 bg-white',
      badgeTone: 'bg-blue-100 text-blue-700',
      iconTone: 'bg-blue-50 text-blue-600 border-blue-200'
    },
    {
      id: 'dsa',
      title: 'DSA Practice Sheets',
      subtitle: 'A focused DSA workspace with the NeetCode 150 and deliberate practice paths.',
      icon: Code2,
      topicsCount: '150 Curated Problems',
      highlights: ['Arrays & Hashing', 'Two Pointers & Sliding Window', 'Trees & Graphs', 'Dynamic Programming'],
      link: '/dsa',
      tag: 'Coding Round',
      accent: 'border-emerald-200 hover:border-emerald-400 bg-white',
      badgeTone: 'bg-emerald-100 text-emerald-700',
      iconTone: 'bg-emerald-50 text-emerald-600 border-emerald-200'
    },
    {
      id: 'core-subjects',
      title: 'Core CS Subjects',
      subtitle: 'Verify your fundamentals across OS, DBMS, OOP, and Computer Networks.',
      icon: BookOpen,
      topicsCount: '5 Core Subjects · Concept MCQs',
      highlights: ['Operating Systems (OS)', 'DBMS & Normalization', 'Computer Networks (CN)', 'OOP & System Design'],
      link: '/mcq',
      tag: 'Technical Round',
      accent: 'border-purple-200 hover:border-purple-400 bg-white',
      badgeTone: 'bg-purple-100 text-purple-700',
      iconTone: 'bg-purple-50 text-purple-600 border-purple-200'
    },
    {
      id: 'projects',
      title: 'Resume-Ready Projects',
      subtitle: 'Full Stack, AI/ML & Systems projects with architecture & interview Q&As.',
      icon: FolderGit2,
      topicsCount: '6 Comprehensive Guides',
      highlights: ['AI Mock Interviewer', 'Collaborative Code Sandbox', 'Microservices Engine', 'ATS Resume Matcher'],
      link: '/projects',
      tag: 'Resume & HR Round',
      accent: 'border-rose-200 hover:border-rose-400 bg-white',
      badgeTone: 'bg-rose-100 text-rose-700',
      iconTone: 'bg-rose-50 text-rose-600 border-rose-200'
    },
    {
      id: 'companies',
      title: 'Company-Wise Prep',
      subtitle: 'Assessments, core topics, and interview questions tailored to dream roles.',
      icon: Building2,
      topicsCount: '50+ Company Tracks',
      highlights: ['TCS (NQT & Digital)', 'Infosys (Springboard)', 'Accenture & Cognizant', 'Amazon & Google'],
      link: '/companies',
      tag: 'Company Mocks',
      accent: 'border-amber-200 hover:border-amber-400 bg-white',
      badgeTone: 'bg-amber-100 text-amber-700',
      iconTone: 'bg-amber-50 text-amber-600 border-amber-200'
    }
  ];

  const topCompanies = [
    { name: 'TCS', id: 'tcs', type: 'Service / Digital', pattern: 'Aptitude + Coding' },
    { name: 'Infosys', id: 'infosys', type: 'Service / Specialist', pattern: 'Pseudocode + Logic' },
    { name: 'Accenture', id: 'accenture', type: 'Consulting / Tech', pattern: 'Cognitive Assessment' },
    { name: 'Cognizant', id: 'cognizant', type: 'Service / GenC', pattern: 'Automata Fix + MCQ' },
    { name: 'Capgemini', id: 'capgemini', type: 'Service / Exceller', pattern: 'Essay + Game-based' },
    { name: 'Wipro', id: 'wipro', type: 'Service / Turbo', pattern: 'NLTH + Coding' },
    { name: 'Deloitte', id: 'deloitte', type: 'Consulting', pattern: 'Quant + Reasoning' },
    { name: 'Zoho', id: 'zoho', type: 'Product', pattern: 'C/C++ & Problem Solving' }
  ];

  const filteredModules = $derived(
    prepModules.filter(m =>
      searchQuery.trim() === '' ||
      m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.highlights.some(h => h.toLowerCase().includes(searchQuery.toLowerCase()))
    )
  );

  function handleSearch(e?: Event) {
    e?.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = '/companies?q=' + encodeURIComponent(searchQuery.trim());
    }
  }
</script>

<svelte:head>
  <title>Overview — PlacementPro</title>
</svelte:head>

<div class="mx-auto max-w-7xl px-4 py-8 md:px-8 space-y-10">
  <!-- Top Dark Hero Card (Matching Photo 2 Theme) -->
  <section class="relative overflow-hidden rounded-[2.5rem] bg-[#0a0a0a] border border-border/50 shadow-2xl p-8 md:p-12 text-white">
    <div class="absolute inset-0 bg-gradient-to-br from-primary/25 to-purple-600/15 mix-blend-overlay"></div>
    <div class="absolute -top-[30%] -right-[10%] h-[500px] w-[500px] rounded-full bg-gradient-to-l from-primary blur-[120px] opacity-35"></div>

    <div class="relative z-10">
      <div class="flex flex-wrap items-center justify-between gap-4 mb-5">
        <p class="text-xs font-bold uppercase tracking-[.2em] text-orange-300 bg-orange-500/10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-orange-400/20">
          <Sparkles size={13} class="text-orange-400" /> Placement Workspace
        </p>

        <div class="flex items-center gap-4 text-xs font-semibold text-slate-300">
          <span class="flex items-center gap-1.5"><Flame size={15} class="text-orange-400" /> 12 Days Streak</span>
          <span class="flex items-center gap-1.5"><Award size={15} class="text-emerald-400" /> 6 Modules Ready</span>
        </div>
      </div>

      <h1 class="text-4xl md:text-5xl font-black tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70">
        Placement Preparation Hub
      </h1>
      <p class="mt-3 max-w-2xl text-base text-white/70 leading-relaxed font-medium">
        Everything structured for your campus placement: Aptitude, Reasoning, DSA Sheets, Core CS Subjects, Resume Projects, and Company-wise Mocks.
      </p>

      <!-- Search Input -->
      <div class="mt-7 relative max-w-xl">
        <Search class="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={18}/>
        <input
          bind:value={searchQuery}
          type="text"
          class="w-full rounded-2xl bg-white/10 border border-white/20 px-12 py-3.5 text-sm text-white placeholder-white/50 outline-none focus:border-primary focus:bg-white/15 transition-all backdrop-blur-md shadow-xl"
          placeholder="Search any topic, subject, project, or company..."
        />
      </div>
    </div>
  </section>

  <!-- Interactive Modules Section (6 Core Pillars) -->
  <section class="space-y-6">
    <div class="flex items-center justify-between">
      <div>
        <h2 class="text-2xl font-black text-slate-900">Interactive Preparation Modules</h2>
        <p class="text-xs text-slate-500 mt-1">Select a module below to start practicing directly.</p>
      </div>
      <span class="text-xs font-bold text-slate-400">{filteredModules.length} Modules</span>
    </div>

    <!-- 6 Modules Grid -->
    <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {#each filteredModules as mod (mod.id)}
        <a
          href={mod.link}
          class="group flex flex-col justify-between rounded-3xl border {mod.accent} p-6 shadow-2xs transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
        >
          <div>
            <!-- Top badge & icon -->
            <div class="flex items-center justify-between">
              <div class="grid h-12 w-12 place-items-center rounded-2xl border {mod.iconTone} shadow-xs">
                <mod.icon size={24} />
              </div>
              <span class="rounded-full px-2.5 py-0.5 text-[11px] font-bold {mod.badgeTone}">
                {mod.tag}
              </span>
            </div>

            <!-- Title & Subtitle -->
            <h3 class="mt-5 text-xl font-extrabold text-slate-900 group-hover:text-primary transition-colors">
              {mod.title}
            </h3>
            <p class="mt-1.5 text-xs leading-relaxed text-slate-600 line-clamp-2">
              {mod.subtitle}
            </p>

            <!-- Topic count -->
            <div class="mt-3.5 inline-block rounded-lg bg-slate-100/80 px-2.5 py-1 text-[11px] font-bold text-slate-700">
              {mod.topicsCount}
            </div>

            <!-- Highlights -->
            <div class="mt-4 space-y-1.5 border-t border-slate-100 pt-3.5">
              {#each mod.highlights as hl}
                <div class="flex items-center gap-2 text-xs font-medium text-slate-600">
                  <CheckCircle2 size={13} class="text-emerald-500 shrink-0" />
                  <span class="truncate">{hl}</span>
                </div>
              {/each}
            </div>
          </div>

          <!-- Bottom Action Button -->
          <div class="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 text-xs font-bold text-primary">
            <span>Open Track</span>
            <div class="grid h-7 w-7 place-items-center rounded-full bg-orange-50 transition-colors group-hover:bg-primary group-hover:text-white">
              <ArrowRight size={14} class="transition-transform group-hover:translate-x-0.5" />
            </div>
          </div>
        </a>
      {/each}
    </div>
  </section>

  <!-- Company-Wise Preparation Quick Hub -->
  <section class="space-y-4 rounded-3xl border border-border/80 bg-white p-6 md:p-8 shadow-2xs">
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
      <div>
        <h2 class="text-xl font-black text-slate-900">Company-Wise Preparation Tracks</h2>
        <p class="text-xs text-slate-500 mt-0.5">Specific exam patterns, previous year coding questions, and hiring rounds.</p>
      </div>
      <a href="/companies" class="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline">
        View All 50+ Companies <ChevronRight size={15} />
      </a>
    </div>

    <div class="grid gap-3 grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 pt-2">
      {#each topCompanies as co}
        <a
          href="/company-hub/{co.id}"
          class="group rounded-2xl border border-border/70 bg-slate-50/70 p-4 transition-all duration-200 hover:border-orange-300 hover:bg-white hover:shadow-xs"
        >
          <div class="flex items-center justify-between">
            <span class="text-sm font-extrabold text-slate-900 group-hover:text-primary transition-colors">
              {co.name}
            </span>
            <ArrowRight size={13} class="text-slate-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
          </div>
          <p class="mt-1 text-[11px] font-medium text-slate-500">{co.type}</p>
          <p class="mt-2 text-[10px] font-semibold text-primary truncate">
            {co.pattern}
          </p>
        </a>
      {/each}
    </div>
  </section>
</div>
