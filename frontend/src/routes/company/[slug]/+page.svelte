<script lang="ts">
  import { page } from '$app/stores';
  import { ArrowRight, BadgeCheck, BriefcaseBusiness, BarChart3, FileText, Mic, BrainCircuit, Code2, BookOpen, MessagesSquare } from 'lucide-svelte';
  import { placementCompanies } from '$lib/data/catalogs';

  // Memoize — only recompute when slug changes
  let company = $derived(placementCompanies.find(item => item.id === $page.params.slug) ?? placementCompanies[0]);

  // Static module config — not reactive
  const modules = [
    { label: 'DSA Sheet',           icon: Code2,          path: 'dsa',       copy: 'High-frequency questions and progress.' },
    { label: 'Aptitude',            icon: BrainCircuit,   path: 'aptitude',  copy: 'Shortcuts and timed drills.' },
    { label: 'Logical Reasoning',   icon: MessagesSquare, path: 'reasoning', copy: 'Patterns for your assessment.' },
    { label: 'Technical MCQ',       icon: BookOpen,       path: 'mcq',       copy: 'Core CS and role-specific topics.' },
    { label: 'Interview Experience', icon: Mic,           path: 'interview', copy: 'Round-by-round candidate reports.' },
    { label: 'Resume Tips',         icon: FileText,       path: 'resume',    copy: 'Keywords, projects, ATS checklist.' },
    { label: 'HR Questions',        icon: BadgeCheck,     path: 'hr',        copy: 'Answer frameworks and practice.' },
    { label: 'Coding Rounds',       icon: BriefcaseBusiness, path: 'coding', copy: 'OA, machine coding, LLD & HLD.' },
    { label: 'Resources',           icon: BarChart3,      path: 'resources', copy: 'A curated prep toolkit.' }
  ] as const;

  function handleCoverError(e: Event) {
    (e.currentTarget as HTMLImageElement).style.display = 'none';
  }
  function handleLogoError(e: Event) {
    (e.currentTarget as HTMLImageElement).style.display = 'none';
  }
</script>

<div class="mx-auto max-w-7xl px-4 py-8 md:px-8">
  <a class="text-sm font-bold text-text-secondary hover:text-primary transition-colors" href="/companies">← All companies</a>

  <section class="relative mt-6 overflow-hidden rounded-[2.5rem] border border-border/50 bg-[#0a0a0a] shadow-2xl">
    <!-- Company Cover Photo — no hover animation (expensive layer promotion) -->
    <div class="absolute inset-0">
      <img
        src="/api/cover/{company.id}"
        alt=""
        role="presentation"
        class="h-full w-full object-cover opacity-50"
        loading="lazy"
        decoding="async"
        onerror={handleCoverError}
      />
    </div>

    <!-- Overlays -->
    <div class="absolute inset-0 bg-[#0a0a0a]/60" aria-hidden="true"></div>
    <div class="absolute inset-0 opacity-60 bg-gradient-to-br {company.color} mix-blend-overlay" aria-hidden="true"></div>

    <!-- Reduced to ONE blur orb instead of FOUR — huge GPU saving on mobile -->
    <div class="absolute -top-[15%] -right-[8%] h-[350px] w-[350px] rounded-full bg-gradient-to-l {company.color} blur-[80px] opacity-25 hidden md:block" aria-hidden="true"></div>

    <div class="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/75 to-transparent" aria-hidden="true"></div>

    <div class="relative z-10 p-8 md:p-14 lg:p-16 text-white">
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-12">
        <div class="max-w-2xl">
          <!-- Company logo -->
          <div class="relative mb-8 h-24 w-24 overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/20 bg-white">
            <div class="absolute inset-0 grid place-items-center bg-white/10 text-3xl font-black text-white backdrop-blur-md" aria-hidden="true">
              {company.initials}
            </div>
            <img
              src={company.logo}
              alt="{company.name} logo"
              class="absolute inset-0 h-full w-full bg-white object-contain p-3"
              loading="lazy"
              decoding="async"
              width="96"
              height="96"
              onerror={handleLogoError}
            />
          </div>

          <h1 class="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70">
            {company.name}
          </h1>
          <p class="mt-5 text-lg text-white/70 max-w-xl font-medium leading-relaxed">
            A highly structured path from your first DSA problem to the final behavioral conversation, tuned specifically to the {company.name} hiring loop.
          </p>
        </div>

        <div class="grid grid-cols-2 gap-4 w-full md:w-auto self-end">
          <div class="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
            <span class="text-xs font-bold uppercase tracking-wider text-white/50">Hiring Status</span>
            <div class="mt-2 flex items-center gap-2">
              <span class="relative flex h-3 w-3" aria-hidden="true">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full {company.hiring ? 'bg-emerald-400' : 'bg-amber-400'} opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 {company.hiring ? 'bg-emerald-500' : 'bg-amber-500'}"></span>
              </span>
              <b class="text-lg font-extrabold tracking-tight">{company.hiring ? 'Hiring Now' : 'Watchlist'}</b>
            </div>
          </div>

          <div class="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
            <span class="text-xs font-bold uppercase tracking-wider text-white/50">Difficulty</span>
            <b class="mt-2 block text-lg font-extrabold tracking-tight text-white">{company.difficulty}</b>
          </div>

          <div class="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm col-span-2">
            <span class="text-xs font-bold uppercase tracking-wider text-white/50">Estimated Package (CTC)</span>
            <div class="mt-2 flex items-center justify-between">
              <b class="text-2xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">{company.ctc}</b>
              <span class="text-xs font-bold text-white/40">{company.pattern.split('·')[1]?.trim() || 'Assessment'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="mt-12">
    <p class="text-xs font-bold uppercase tracking-[.18em] text-primary">Your preparation map</p>
    <h2 class="mt-2 text-2xl font-extrabold">Pick up where you need confidence.</h2>
    <div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {#each modules as mod}
        {@const Icon = mod.icon}
        <a
          href="/company/{company.id}/{mod.path}"
          class="group rounded-3xl border border-border/70 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-card-hover"
        >
          <Icon size={21} class="text-primary" aria-hidden="true" />
          <h3 class="mt-7 font-extrabold">{mod.label}</h3>
          <p class="mt-2 text-sm text-text-secondary">{mod.copy}</p>
          <ArrowRight size={17} class="mt-5 transition group-hover:translate-x-1" aria-hidden="true" />
        </a>
      {/each}
    </div>
  </section>
</div>
