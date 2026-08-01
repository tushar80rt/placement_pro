<script lang="ts">
  import { ArrowRight, BookOpen, Brain, Building2, CheckCircle2, ChevronRight, Code2, FileText, GraduationCap, Search, Sparkles, Target, UsersRound, Menu, X } from 'lucide-svelte';
  import Footer from '$lib/components/ui/Footer.svelte';
  import InView from '$lib/components/ui/InView.svelte';
  import { mentors } from '$lib/data/mentors';
  import AnimatedBackground from '$lib/components/background/AnimatedBackground.svelte';

  const topics = ['Aptitude', 'Python practice', 'TCS NQT', 'DSA questions', 'Mock tests'];

  // Static data — defined outside component to avoid re-creation on re-renders
  const essentials = [
    { icon: Brain,     title: 'Aptitude',      text: 'Sharpen quant, reasoning, and verbal skills with topic-wise practice.',  tone: 'bg-orange-100 text-orange-600' },
    { icon: Code2,     title: 'Programming',   text: 'Solve curated coding questions in the languages companies expect.',       tone: 'bg-blue-100 text-blue-600' },
    { icon: Building2, title: 'Company prep',  text: 'Follow focused tracks built around real hiring patterns.',               tone: 'bg-violet-100 text-violet-600' },
    { icon: FileText,  title: 'Career toolkit',text: 'Build a resume, prepare interviews, and apply with confidence.',         tone: 'bg-emerald-100 text-emerald-600' }
  ] as const;

  const tracks = [
    { title: 'Quantitative aptitude', lessons: '28 topics',            color: 'border-orange-200 bg-orange-50' },
    { title: 'Logical reasoning',     lessons: '24 topics',            color: 'border-blue-200 bg-blue-50' },
    { title: 'Technical MCQs',        lessons: '1,200+ questions',     color: 'border-violet-200 bg-violet-50' },
    { title: 'DSA practice',          lessons: '150 curated problems', color: 'border-emerald-200 bg-emerald-50' }
  ] as const;

  const companies = ['TCS', 'Infosys', 'Accenture', 'Cognizant', 'Capgemini', 'Wipro', 'Deloitte', 'Zoho'];

  let isMenuOpen = $state(false);
  let searchQuery = $state('');

  function handleSearch(e?: Event) {
    e?.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = '/companies?q=' + encodeURIComponent(searchQuery.trim());
    }
  }

  function handleSearchKey(e: KeyboardEvent) {
    if (e.key === 'Enter') handleSearch();
  }

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    if (typeof document !== 'undefined') {
      document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    }
  }

  function closeMenu() {
    isMenuOpen = false;
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
  }
</script>

<svelte:head>
  <title>PlacementPro — Placement preparation, simplified</title>
  <meta name="description" content="Practice smarter with company-focused questions, guided learning tracks, mock tests, and career tools that move you forward." />
</svelte:head>

<AnimatedBackground />

<!-- Announcement bar -->
<div class="announcement-bar">
  <a href="/companies" class="announcement-inner" aria-label="Explore company assessments">
    <span class="ann-pill">
      <Sparkles size={12} /> What's new
    </span>
    <span class="ann-text">Company mock assessments are live — TCS, Infosys, Accenture &amp; more</span>
    <span class="ann-arrow">
      Explore <ArrowRight size={13} />
    </span>
  </a>
</div>

<!-- Sticky header -->
<header class="site-header">
  <div class="header-glow" aria-hidden="true"></div>
  <nav class="site-nav">
    <!-- Logo -->
    <a href="/" class="site-logo">
      <div class="logo-mark">
        <span class="logo-letter">P</span>
      </div>
      <div class="logo-text">
        <span class="logo-name">PlacementPro</span>
      </div>
    </a>

    <!-- Desktop nav -->
    <div class="nav-links" role="navigation" aria-label="Main navigation">
      <a href="/dsa"       class="nav-link">Preparation</a>
      <a href="/aptitude"  class="nav-link">Practice</a>
      <a href="/companies" class="nav-link">Companies</a>
      <a href="/resources" class="nav-link">Resources</a>
    </div>

    <!-- Actions -->
    <div class="nav-actions">
      <a href="/dsa" class="nav-login">Log in</a>
      <a href="#prep" class="nav-cta">
        <span>Start free</span>
        <ArrowRight size={15} />
      </a>
      <button class="nav-hamburger" onclick={toggleMenu} aria-label="Toggle menu" aria-expanded={isMenuOpen}>
        {#if isMenuOpen}<X size={18} />{:else}<Menu size={18} />{/if}
      </button>
    </div>
  </nav>
</header>

<!-- Mobile drawer -->
{#if isMenuOpen}
  <div class="mobile-drawer" style="padding-top: env(safe-area-inset-top);" role="dialog" aria-modal="true" aria-label="Navigation menu">
    <div class="mobile-drawer-header">
      <a href="/" class="site-logo" onclick={closeMenu}>
        <span class="logo-icon">P</span>
        <span>PlacementPro</span>
      </a>
      <button class="nav-hamburger" onclick={closeMenu} aria-label="Close menu"><X size={20} /></button>
    </div>
    <nav class="mobile-drawer-nav" aria-label="Mobile navigation">
      <a href="/dsa"       class="mobile-nav-link" onclick={closeMenu}>Preparation <ArrowRight size={18} class="text-text-secondary" /></a>
      <a href="/aptitude"  class="mobile-nav-link" onclick={closeMenu}>Practice    <ArrowRight size={18} class="text-text-secondary" /></a>
      <a href="/companies" class="mobile-nav-link" onclick={closeMenu}>Companies   <ArrowRight size={18} class="text-text-secondary" /></a>
      <a href="/resources" class="mobile-nav-link" onclick={closeMenu}>Resources   <ArrowRight size={18} class="text-text-secondary" /></a>
    </nav>
    <div class="mobile-drawer-footer" style="padding-bottom: max(1.25rem, env(safe-area-inset-bottom));">
      <a href="/dsa"  class="mobile-login-btn"  onclick={closeMenu}>Log in</a>
      <a href="#prep" class="mobile-start-btn"  onclick={closeMenu}>Start for free</a>
    </div>
  </div>
{/if}

<main class="relative" style="color: #17202b; min-height: 100svh;">
  <!-- HERO — above fold, renders immediately -->
  <section class="hero-section">
    <div class="hero-inner">
      <!-- Badge -->
      <div class="hero-badge">
        <Sparkles size={18} class="text-orange-500" /> Built for your next big offer
      </div>

      <!-- Headline -->
      <h1 class="hero-h1">
        Your placement prep, <br class="hero-br" />
        <span class="hero-gradient-text">finally in one place.</span>
      </h1>

      <!-- Subheadline -->
      <p class="hero-sub">
        Practice smarter with company-focused questions, guided learning tracks, mock tests, and the career tools that move you forward.
      </p>

      <!-- Search bar -->
      <div class="search-wrap">
        <div class="search-glow" aria-hidden="true"></div>
        <div class="search-box">
          <div class="search-icon-wrap" aria-hidden="true"><Search size={24} /></div>
          <input
            bind:value={searchQuery}
            onkeydown={handleSearchKey}
            aria-label="Search placement resources"
            class="search-input"
            placeholder="Search topics..."
          />
          <button class="search-btn" onclick={handleSearch}>Search</button>
        </div>
      </div>

      <!-- Trending tags -->
      <div class="trending-wrap" aria-label="Trending searches">
        <span class="trending-label">Trending:</span>
        {#each topics as topic}
          <a href="#prep" class="trending-tag">{topic}</a>
        {/each}
      </div>

      <!-- Stats cards — still above fold on most screens -->
      <div class="stats-grid">
        <div class="stat-card stat-orange">
          <div class="stat-icon bg-orange-100 text-orange-600"><Code2 size={28} /></div>
          <p class="stat-number">4,000+</p>
          <p class="stat-label">Practice questions</p>
        </div>
        <div class="stat-card stat-violet">
          <div class="stat-icon bg-violet-100 text-violet-600"><Building2 size={28} /></div>
          <p class="stat-number">50+</p>
          <p class="stat-label">Company tracks</p>
        </div>
        <div class="stat-card stat-emerald">
          <div class="stat-icon bg-emerald-100 text-emerald-600"><UsersRound size={28} /></div>
          <p class="stat-number">100k+</p>
          <p class="stat-label">Active learners</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ESSENTIALS — below fold, lazy render -->
  <InView rootMargin="300px 0px">
    <section id="prep" class="section z-10 px-5 py-20 lg:py-24">
      <div class="mx-auto max-w-7xl">
        <div class="mb-11 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p class="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-primary">Placement essentials</p>
            <h2 class="text-3xl font-extrabold sm:text-4xl">Everything you need to get interview-ready.</h2>
          </div>
          <a href="#features" class="group flex items-center gap-1 font-bold text-primary">
            View all resources <ArrowRight class="transition group-hover:translate-x-1" size={18} />
          </a>
        </div>
        <div class="grid gap-5 grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
          {#each essentials as item}
            <article class="group rounded-3xl border border-border bg-background p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-card">
              <div class="grid h-12 w-12 place-items-center rounded-2xl {item.tone}">
                <item.icon size={23} />
              </div>
              <h3 class="mt-6 text-xl font-bold">{item.title}</h3>
              <p class="mt-2 text-sm leading-6 text-text-secondary">{item.text}</p>
              <a href="/resources" class="mt-5 flex items-center gap-1 text-sm font-bold text-primary">Explore <ChevronRight size={16} /></a>
            </article>
          {/each}
        </div>
      </div>
    </section>
  </InView>

  <!-- TRACKS — lazy -->
  <InView rootMargin="200px 0px">
    <section id="features" class="section z-10 px-5 py-20 lg:py-24">
      <div class="mx-auto max-w-7xl">
        <div class="mx-auto mb-11 max-w-2xl text-center">
          <p class="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-primary">Learn by doing</p>
          <h2 class="text-3xl font-extrabold sm:text-4xl">Small steps. Serious progress.</h2>
          <p class="mt-4 leading-7 text-text-secondary">Pick a skill, follow the roadmap, and see exactly what to practise next.</p>
        </div>
        <div class="grid gap-5 grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
          {#each tracks as track}
            <a href="/dsa" class="group rounded-2xl border p-5 transition hover:-translate-y-1 hover:shadow-card {track.color}">
              <div class="flex justify-between">
                <Target size={22} />
                <ArrowRight size={18} class="opacity-50 transition group-hover:translate-x-1 group-hover:opacity-100" />
              </div>
              <h3 class="mt-12 text-lg font-bold">{track.title}</h3>
              <p class="mt-1 text-sm text-text-secondary">{track.lessons}</p>
            </a>
          {/each}
        </div>
      </div>
    </section>
  </InView>

  <!-- COMPANIES — lazy -->
  <InView rootMargin="200px 0px">
    <section id="companies" class="section z-10 px-5 pb-20 lg:pb-24">
      <div class="mx-auto max-w-7xl rounded-[2rem] bg-[#17202b] px-6 py-12 text-white sm:px-10 lg:flex lg:items-center lg:gap-16 lg:px-16">
        <div class="max-w-md">
          <p class="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-orange-300">Company-specific preparation</p>
          <h2 class="text-3xl font-extrabold leading-tight sm:text-4xl">Know what your dream company is looking for.</h2>
          <p class="mt-5 leading-7 text-slate-300">Get familiar with assessments, core topics, interview questions, and preparation plans tailored to the roles you want.</p>
          <a href="/company-hub" class="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold hover:bg-[#df5642]">Explore company hub <ArrowRight size={17} /></a>
        </div>
        <div class="mt-10 grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-3 lg:mt-0 lg:flex-1">
          {#each [
            { name: 'TCS',        id: 'tcs' },
            { name: 'Infosys',    id: 'infosys' },
            { name: 'Accenture', id: 'accenture' },
            { name: 'Cognizant', id: 'cognizant' },
            { name: 'Capgemini', id: 'capgemini' },
            { name: 'Wipro',     id: 'wipro' },
            { name: 'Deloitte',  id: 'deloitte' },
            { name: 'Zoho',      id: 'zoho' },
          ] as co}
            <a href="/company-hub/{co.id}" class="rounded-xl border border-white/10 bg-white/5 px-4 py-5 text-center text-sm font-bold text-white transition hover:border-orange-300/60 hover:bg-white/10">
              {co.name}
            </a>
          {/each}
        </div>
      </div>
    </section>
  </InView>

  <!-- GUIDANCE CTA — lazy -->
  <InView rootMargin="150px 0px">
    <section id="guidance" class="section z-10 px-5 py-20">
      <div class="mx-auto grid max-w-5xl items-center gap-10 rounded-[2rem] bg-secondary-background px-7 py-10 md:grid-cols-[1fr_auto] md:px-12 md:py-14">
        <div>
          <div class="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-white text-primary shadow-card">
            <GraduationCap size={28} />
          </div>
          <h2 class="text-3xl font-extrabold">Not sure where to begin?</h2>
          <p class="mt-3 max-w-xl leading-7 text-text-secondary">Tell us your target role and graduation year. We'll help you build a clear, practical preparation path.</p>
        </div>
        <a href="/community" class="inline-flex items-center justify-center gap-2 rounded-full bg-text-primary px-6 py-3.5 text-sm font-bold text-white hover:bg-slate-700">Get free guidance <ArrowRight size={17} /></a>
      </div>
    </section>
  </InView>
</main>

<!-- AI CTA — lazy -->
<InView rootMargin="150px 0px">
  <section class="section z-10 mx-auto max-w-7xl px-5 py-10 md:px-8">
    <a href="/resources/ai-engineer-questions" class="group relative block overflow-hidden rounded-3xl bg-gradient-to-r from-[#17202b] to-[#263e5d] p-6 text-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-card-hover md:p-8">
      <div class="absolute -right-12 -top-16 h-48 w-48 rounded-full bg-primary/25 blur-3xl" aria-hidden="true"></div>
      <div class="relative flex flex-col justify-between gap-6 md:flex-row md:items-center">
        <div>
          <p class="flex items-center gap-2 text-xs font-bold uppercase tracking-[.18em] text-orange-200">
            <Sparkles size={14} /> Trending now · 2026 edition
          </p>
          <h2 class="mt-3 max-w-2xl text-2xl font-extrabold md:text-3xl">100 Must-Prepare AI Engineer Interview Questions</h2>
          <p class="mt-2 max-w-2xl text-sm text-slate-300">For AI Engineer, LLM Engineer, GenAI Engineer and Applied AI roles.</p>
        </div>
        <span class="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-bold text-[#17202b] transition group-hover:bg-orange-100">Read the pack <ArrowRight size={16} /></span>
      </div>
    </a>
  </section>
</InView>

<!-- MENTORS — lazy, most expensive section (avatar rendering) -->
<InView rootMargin="100px 0px">
  <section id="mentors" class="section z-10 border-t border-border/60 bg-[#17202b] py-20 text-white">
    <div class="mx-auto max-w-7xl px-5 md:px-8">
      <div class="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p class="text-xs font-bold uppercase tracking-[.18em] text-orange-200">1:1 mentorship</p>
          <h2 class="mt-3 text-3xl font-extrabold">Meet our mentors.</h2>
        </div>
        <p class="max-w-md text-sm leading-6 text-slate-300">Personal guidance from people who have navigated campus placements and software interviews themselves.</p>
      </div>
      <div class="mt-9 grid gap-4 grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
        {#each mentors as mentor}
          <article class="rounded-2xl border border-white/10 bg-white/[.06] p-5 transition duration-300 hover:-translate-y-1 hover:bg-white/[.1]">
            <div class="flex items-center gap-3">
              <div class="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br {mentor.tone} text-sm font-black" aria-hidden="true">{mentor.initials}</div>
              <div>
                <h3 class="font-extrabold">{mentor.name}</h3>
                <p class="text-xs text-slate-300">Placement Mentor</p>
              </div>
            </div>
            <p class="mt-5 text-sm leading-6 text-slate-300">{mentor.bio}</p>
            <p class="mt-4 text-xs font-bold text-orange-200">{mentor.badge}</p>
            <p class="mt-2 text-xs text-slate-400">{mentor.offers.join(' · ')}</p>
            <div class="mt-5 flex gap-2">
              <a href="/mentors/{mentor.slug}" class="rounded-lg bg-white px-3 py-2 text-xs font-bold text-[#17202b]">View profile</a>
              <button class="rounded-lg border border-white/20 px-3 py-2 text-xs font-bold transition hover:bg-white/10">Book 1:1</button>
            </div>
          </article>
        {/each}
      </div>
    </div>
  </section>
</InView>

<div class="relative z-10">
  <Footer />
</div>

<style>
  /* ================================================
     ANNOUNCEMENT BAR
  ================================================ */
  .announcement-bar {
    position: relative;
    z-index: 41;
    background: linear-gradient(90deg,
      rgba(249,115,22,0.07) 0%,
      rgba(241,103,82,0.06) 50%,
      rgba(124,58,237,0.06) 100%
    );
    border-bottom: 1px solid rgba(242,103,82,0.15);
  }
  .announcement-inner {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.625rem;
    max-width: 80rem;
    margin: 0 auto;
    padding: 0.5rem 1.25rem;
    font-size: 0.8rem;
    color: #64748b;
    text-decoration: none;
    transition: color 0.15s;
  }
  .announcement-inner:hover .ann-arrow { gap: 0.375rem; }
  .ann-pill {
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
    padding: 0.2rem 0.625rem;
    border-radius: 9999px;
    background: rgba(242,103,82,0.12);
    border: 1px solid rgba(242,103,82,0.25);
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    color: #f26752;
    flex-shrink: 0;
    text-transform: uppercase;
  }
  .ann-text {
    font-weight: 500;
    color: #475569;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .ann-arrow {
    display: inline-flex;
    align-items: center;
    gap: 0.2rem;
    font-weight: 700;
    color: #f26752;
    flex-shrink: 0;
    transition: gap 0.2s;
    white-space: nowrap;
  }

  /* ================================================
     HEADER / NAVBAR
  ================================================ */
  .site-header {
    position: sticky;
    top: 0;
    z-index: 40;
    /* Layered border: gradient on top of a subtle line */
    border-bottom: 1px solid rgba(240,229,223,0.7);
    background: rgba(255,250,247,0.82);
    backdrop-filter: blur(20px) saturate(180%);
    -webkit-backdrop-filter: blur(20px) saturate(180%);
    /* Subtle gradient shimmer at the top */
    box-shadow: 0 1px 0 rgba(255,255,255,0.8) inset, 0 1px 12px rgba(0,0,0,0.04);
    overflow: visible;
  }

  /* Gradient accent line at the very top of the header */
  .header-glow {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg,
      transparent 0%,
      rgba(249,115,22,0.6) 20%,
      rgba(242,103,82,0.8) 50%,
      rgba(124,58,237,0.6) 80%,
      transparent 100%
    );
    opacity: 0.7;
  }

  .site-nav {
    display: flex;
    height: 64px;
    max-width: 80rem;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
    padding: 0 1.25rem;
    gap: 1rem;
  }
  @media (min-width: 1024px) { .site-nav { height: 68px; padding: 0 2.5rem; } }

  /* Logo */
  .site-logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    flex-shrink: 0;
  }
  .logo-mark {
    position: relative;
    width: 34px;
    height: 34px;
    border-radius: 10px;
    background: linear-gradient(135deg, #f97316 0%, #f26752 60%, #e11d48 100%);
    display: grid;
    place-items: center;
    box-shadow: 0 2px 8px rgba(242,103,82,0.4), 0 0 0 1px rgba(255,255,255,0.3) inset;
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .site-logo:hover .logo-mark {
    transform: rotate(-5deg) scale(1.05);
    box-shadow: 0 4px 16px rgba(242,103,82,0.5);
  }
  .logo-letter {
    font-size: 1rem;
    font-weight: 900;
    color: white;
    line-height: 1;
  }
  .logo-text { display: flex; flex-direction: column; }
  .logo-name {
    font-size: 0.9375rem;
    font-weight: 800;
    color: #17202b;
    letter-spacing: -0.04em;
    line-height: 1;
  }

  /* Desktop nav links */
  .nav-links {
    display: none;
    align-items: center;
    gap: 0.25rem;
  }
  @media (min-width: 768px) { .nav-links { display: flex; } }

  .nav-link {
    position: relative;
    padding: 0.375rem 0.75rem;
    border-radius: 8px;
    font-size: 0.875rem;
    font-weight: 500;
    color: #64748b;
    text-decoration: none;
    transition: color 0.15s, background 0.15s;
    white-space: nowrap;
  }
  .nav-link:hover {
    color: #17202b;
    background: rgba(23,32,43,0.05);
  }
  /* Animated underline accent */
  .nav-link::after {
    content: '';
    position: absolute;
    bottom: 3px;
    left: 50%;
    transform: translateX(-50%) scaleX(0);
    width: 16px;
    height: 2px;
    border-radius: 9999px;
    background: #f26752;
    transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  .nav-link:hover::after { transform: translateX(-50%) scaleX(1); }

  /* Actions */
  .nav-actions {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-shrink: 0;
  }

  .nav-login {
    display: none;
    align-items: center;
    padding: 0.375rem 0.875rem;
    border-radius: 8px;
    font-size: 0.875rem;
    font-weight: 500;
    color: #64748b;
    text-decoration: none;
    transition: color 0.15s, background 0.15s;
    min-height: 44px;
    white-space: nowrap;
  }
  @media (min-width: 480px) { .nav-login { display: flex; } }
  .nav-login:hover { color: #17202b; background: rgba(23,32,43,0.05); }

  .nav-cta {
    display: inline-flex;
    align-items: center;
    gap: 0.375rem;
    padding: 0.5rem 1.125rem;
    border-radius: 10px;
    background: linear-gradient(135deg, #f97316 0%, #f26752 100%);
    font-size: 0.8125rem;
    font-weight: 700;
    color: white;
    text-decoration: none;
    min-height: 38px;
    white-space: nowrap;
    box-shadow: 0 1px 3px rgba(242,103,82,0.3), 0 1px 0 rgba(255,255,255,0.2) inset;
    transition: transform 0.15s, box-shadow 0.15s, filter 0.15s;
  }
  .nav-cta:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 16px rgba(242,103,82,0.45);
    filter: brightness(1.05);
  }
  .nav-cta:active { transform: translateY(0); }

  .nav-hamburger {
    display: flex;
    width: 38px;
    height: 38px;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    border: 1px solid rgba(240,229,223,0.8);
    background: white;
    color: #17202b;
    cursor: pointer;
    transition: background 0.15s, border-color 0.15s, transform 0.15s;
    box-shadow: 0 1px 4px rgba(0,0,0,0.06);
  }
  @media (min-width: 768px) { .nav-hamburger { display: none; } }
  .nav-hamburger:hover {
    background: #fff7ed;
    border-color: rgba(242,103,82,0.3);
    transform: scale(1.04);
  }

  /* Mobile drawer */
  .mobile-drawer {
    position: fixed;
    inset: 0;
    z-index: 50;
    display: flex;
    flex-direction: column;
    background: color-mix(in srgb, var(--background) 95%, transparent);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
  }
  @media (min-width: 768px) { .mobile-drawer { display: none; } }
  .mobile-drawer-header {
    display: flex;
    height: 72px;
    align-items: center;
    justify-content: space-between;
    padding: 0 1.25rem;
    border-bottom: 1px solid color-mix(in srgb, var(--border) 50%, transparent);
  }
  .mobile-drawer-nav {
    flex: 1;
    overflow-y: auto;
    padding: 2rem 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0;
  }
  .mobile-nav-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid color-mix(in srgb, var(--border) 50%, transparent);
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    font-size: 1.125rem;
    font-weight: 700;
    color: var(--text-primary);
    text-decoration: none;
  }
  .mobile-drawer-footer {
    padding: 1.25rem;
    border-top: 1px solid color-mix(in srgb, var(--border) 50%, transparent);
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .mobile-login-btn {
    display: flex;
    height: 3rem;
    width: 100%;
    align-items: center;
    justify-content: center;
    border-radius: 0.75rem;
    border: 1px solid var(--border);
    font-weight: 700;
    color: var(--text-primary);
    text-decoration: none;
  }
  .mobile-start-btn {
    display: flex;
    height: 3rem;
    width: 100%;
    align-items: center;
    justify-content: center;
    border-radius: 0.75rem;
    background: var(--primary);
    font-weight: 700;
    color: white;
    text-decoration: none;
    box-shadow: 0 0 20px color-mix(in srgb, var(--primary) 30%, transparent);
  }

  /* Hero */
  .hero-section {
    position: relative;
    padding: 5rem 1.25rem 6rem;
    text-align: center;
    z-index: 10;
  }
  @media (min-width: 1024px) { .hero-section { padding: 7rem 1.25rem 8rem; } }
  .hero-inner {
    position: relative;
    margin: 0 auto;
    max-width: 64rem;
    z-index: 10;
  }

  .hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 2rem;
    border-radius: 9999px;
    border: 1px solid #fed7aa;
    background: rgba(255, 237, 213, 0.8);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    padding: 0.5rem 1.25rem;
    font-size: 0.875rem;
    font-weight: 700;
    color: #ea580c;
    box-shadow: 0 1px 3px rgba(0,0,0,0.05);
  }

  .hero-h1 {
    margin: 0 auto;
    max-width: 56rem;
    font-size: clamp(2.5rem, 6vw, 4.5rem);
    font-weight: 900;
    letter-spacing: -0.04em;
    line-height: 1.05;
    color: #0f172a;
  }
  .hero-br { display: none; }
  @media (min-width: 640px) { .hero-br { display: block; } }

  .hero-gradient-text {
    /* Static gradient — no animation, saves GPU */
    background: linear-gradient(135deg, #f97316, #e11d48, #7c3aed);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .hero-sub {
    margin: 2rem auto 0;
    max-width: 42rem;
    font-size: clamp(1rem, 2vw, 1.25rem);
    line-height: 1.7;
    color: #475569;
  }

  /* Search */
  .search-wrap {
    position: relative;
    margin: 3rem auto 0;
    max-width: 42rem;
  }
  .search-glow {
    position: absolute;
    inset: -4px;
    border-radius: 1.5rem;
    background: linear-gradient(90deg, #fb923c, #f43f5e, #818cf8);
    opacity: 0.2;
    filter: blur(12px);
    pointer-events: none;
  }
  .search-box {
    position: relative;
    display: flex;
    align-items: center;
    border-radius: 1rem;
    border: 1px solid rgba(226, 232, 240, 0.5);
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    padding: 0.625rem;
    box-shadow: 0 8px 32px rgba(0,0,0,0.08);
  }
  .search-box:focus-within {
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--primary) 20%, transparent), 0 8px 32px rgba(0,0,0,0.08);
  }
  .search-icon-wrap {
    display: none;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    border-radius: 0.75rem;
    background: #fff7ed;
    color: #f97316;
    flex-shrink: 0;
  }
  @media (min-width: 640px) { .search-icon-wrap { display: flex; } }
  .search-input {
    flex: 1;
    min-width: 0;
    border: none;
    background: transparent;
    padding: 0.75rem 0.75rem 0.75rem 1.25rem;
    font-size: 1rem;
    font-weight: 500;
    color: #0f172a;
    outline: none;
  }
  @media (min-width: 640px) { .search-input { font-size: 1.125rem; padding: 1rem 1.25rem; } }
  .search-btn {
    border-radius: 0.75rem;
    background: linear-gradient(135deg, #f97316, #e11d48);
    padding: 0.75rem 1.5rem;
    font-size: 0.875rem;
    font-weight: 700;
    color: white;
    border: none;
    cursor: pointer;
    white-space: nowrap;
    transition: box-shadow 0.2s, transform 0.2s;
  }
  @media (min-width: 640px) { .search-btn { padding: 1rem 2rem; font-size: 1rem; } }
  .search-btn:hover { box-shadow: 0 4px 16px rgba(249,115,22,0.4); transform: translateY(-1px); }
  .search-btn:active { transform: translateY(0); }

  /* Trending */
  .trending-wrap {
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    font-size: 0.875rem;
    font-weight: 500;
  }
  .trending-label { color: #94a3b8; margin-right: 0.5rem; }
  .trending-tag {
    border-radius: 9999px;
    border: 1px solid #e2e8f0;
    background: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(8px);
    padding: 0.5rem 1rem;
    color: #475569;
    text-decoration: none;
    box-shadow: 0 1px 3px rgba(0,0,0,0.04);
    transition: transform 0.2s, border-color 0.2s, background 0.2s, color 0.2s, box-shadow 0.2s;
  }
  .trending-tag:hover {
    transform: translateY(-3px);
    border-color: #fdba74;
    background: #fff7ed;
    color: #ea580c;
    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  }

  /* Stats */
  .stats-grid {
    margin-top: 5rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1.5rem 2rem;
    max-width: 56rem;
    margin-left: auto;
    margin-right: auto;
  }
  .stat-card {
    position: relative;
    border-radius: 1.5rem;
    border: 1px solid rgba(226, 232, 240, 0.6);
    background: rgba(255, 255, 255, 0.65);
    padding: 2rem;
    text-align: center;
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    box-shadow: 0 4px 24px rgba(0,0,0,0.06);
    transition: transform 0.25s, box-shadow 0.25s;
  }
  .stat-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 32px rgba(0,0,0,0.1);
  }
  .stat-icon {
    display: grid;
    width: 3.5rem;
    height: 3.5rem;
    place-items: center;
    border-radius: 1rem;
    margin: 0 auto 1rem;
    box-shadow: inset 0 1px 3px rgba(0,0,0,0.05);
    transition: transform 0.2s;
  }
  .stat-card:hover .stat-icon { transform: scale(1.1); }
  .stat-number { font-size: 2.25rem; font-weight: 900; color: #0f172a; }
  .stat-label  { margin-top: 0.5rem; font-size: 0.875rem; font-weight: 600; color: #64748b; }

  /* Section base */
  .section { position: relative; }
</style>
