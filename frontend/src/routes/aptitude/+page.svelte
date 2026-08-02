<script lang="ts">
  import { onMount } from 'svelte';
  import { aptitudeChapters, type AptitudeChapter, type AptitudeQuestion } from '$lib/data/aptitudeChapters';
  import { 
    aptitudeProgress, 
    toggleAptitudeSolved, 
    toggleAptitudeBookmark 
  } from '$lib/stores/progress';
  import { 
    CheckCircle2, Circle, Bookmark, Search, Filter, Sparkles, BookOpen, 
    ChevronDown, ChevronUp, Award, Zap, HelpCircle, ArrowRight, Share2, 
    RefreshCw, Check, X, ShieldCheck, Flame, Briefcase, TrendingUp, Scale,
    BarChart2, Percent, Navigation, Hash, Layers, Users
  } from 'lucide-svelte';

  // Active chapter
  let selectedChapterId = 'percentage';
  $: activeChapter = aptitudeChapters.find(c => c.id === selectedChapterId) || aptitudeChapters[0];

  // Filters & Search
  let searchQuery = '';
  let selectedCompany = 'All';
  let selectedDifficulty = 'All';
  let filterStatus = 'all'; // 'all' | 'solved' | 'unsolved' | 'bookmarked'
  let showCheatSheet = false;
  let expandedQuestions: Record<string, boolean> = {};
  let selectedAnswers: Record<string, string> = {};
  let showAnswerFeedback: Record<string, boolean> = {};

  // User-scoped Progress Tracking reactive shortcuts
  $: solvedQuestions = $aptitudeProgress.solved;
  $: bookmarkedQuestions = $aptitudeProgress.bookmarked;

  function toggleSolved(qId: string) {
    toggleAptitudeSolved(qId);
  }

  function toggleBookmark(qId: string) {
    toggleAptitudeBookmark(qId);
  }

  function toggleExpand(qId: string) {
    expandedQuestions[qId] = !expandedQuestions[qId];
    expandedQuestions = { ...expandedQuestions };
  }

  function selectOption(qId: string, option: string, correctAns?: string) {
    selectedAnswers[qId] = option;
    showAnswerFeedback[qId] = true;
    selectedAnswers = { ...selectedAnswers };
    showAnswerFeedback = { ...showAnswerFeedback };

    if (correctAns && option === correctAns) {
      if (!solvedQuestions[qId]) {
        toggleAptitudeSolved(qId);
      }
    }
  }

  // All unique companies for filter
  $: allCompanies = [
    'All',
    'TCS',
    'Infosys',
    'Accenture',
    'Capgemini',
    'Wipro',
    'Cognizant',
    'Deloitte',
    'Oracle',
    'EY',
    'Amazon'
  ];

  // Filter questions
  $: filteredQuestions = activeChapter.questions.filter(q => {
    const matchesSearch = !searchQuery || 
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.companies.some(c => c.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (q.formula && q.formula.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCompany = selectedCompany === 'All' || q.companies.some(c => c.toLowerCase() === selectedCompany.toLowerCase());
    const matchesDiff = selectedDifficulty === 'All' || q.difficulty === selectedDifficulty;
    
    let matchesStatus = true;
    if (filterStatus === 'solved') matchesStatus = !!solvedQuestions[q.id];
    if (filterStatus === 'unsolved') matchesStatus = !solvedQuestions[q.id];
    if (filterStatus === 'bookmarked') matchesStatus = !!bookmarkedQuestions[q.id];

    return matchesSearch && matchesCompany && matchesDiff && matchesStatus;
  });

  // Calculate chapter progress
  $: chapterSolvedCount = activeChapter.questions.filter(q => solvedQuestions[q.id]).length;
  $: chapterProgressPct = Math.round((chapterSolvedCount / activeChapter.questions.length) * 100);

  // Overall totals across all 22 chapters
  $: totalAllQuestions = aptitudeChapters.reduce((acc, c) => acc + c.questions.length, 0);
  $: totalAllSolved = aptitudeChapters.reduce((acc, c) => acc + c.questions.filter(q => solvedQuestions[q.id]).length, 0);
  $: overallProgressPct = Math.round((totalAllSolved / totalAllQuestions) * 100) || 0;

  // Company badge color helper
  function getCompanyBadgeClass(company: string) {
    const c = company.toLowerCase();
    if (c.includes('tcs')) return 'bg-sky-500/10 text-sky-400 border-sky-500/20';
    if (c.includes('infosys')) return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
    if (c.includes('accenture')) return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
    if (c.includes('capgemini')) return 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20';
    if (c.includes('wipro')) return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
    if (c.includes('cognizant')) return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
    if (c.includes('deloitte')) return 'bg-green-500/10 text-green-400 border-green-500/20';
    if (c.includes('amazon')) return 'bg-orange-500/10 text-orange-400 border-orange-500/20';
    return 'bg-slate-800 text-slate-300 border-slate-700';
  }
</script>

<svelte:head>
  <title>Quantitative Aptitude - {aptitudeChapters.length} Chapters & {totalAllQuestions} Questions | PlacementPro</title>
  <meta name="description" content="Master Quantitative Aptitude chapter by chapter with {totalAllQuestions} top questions across {aptitudeChapters.length} chapters asked in TCS, Infosys, Accenture, Capgemini, Deloitte, Wipro, Cognizant and more." />
</svelte:head>

<div class="min-h-screen bg-slate-950 text-slate-100 pb-20">
  <!-- Top Banner / Hero -->
  <div class="border-b border-slate-800/80 bg-gradient-to-b from-slate-900/90 via-slate-900/40 to-slate-950">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-3">
            <Sparkles class="w-3.5 h-3.5" />
            Complete Quantitative Aptitude Syllabus
          </div>
          <h1 class="text-3xl md:text-4xl font-extrabold text-white tracking-tight flex items-center gap-3">
            Quantitative Aptitude Mastery
          </h1>
          <p class="mt-2 text-slate-400 max-w-2xl text-sm md:text-base">
            {aptitudeChapters.length} high-yield chapters, {totalAllQuestions} curated questions with company tags, shortcut formulas, and step-by-step verified solutions.
          </p>
        </div>

        <!-- Overall Progress Card -->
        <div class="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 md:p-5 flex items-center gap-5 backdrop-blur-sm min-w-[280px]">
          <div class="relative w-16 h-16 flex items-center justify-center">
            <svg class="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
              <path
                class="text-slate-800"
                stroke-width="3.5"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                class="text-emerald-500 transition-all duration-500 ease-out"
                stroke-dasharray="{overallProgressPct}, 100"
                stroke-width="3.5"
                stroke-linecap="round"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <span class="absolute text-sm font-bold text-white">{overallProgressPct}%</span>
          </div>
          <div>
            <div class="text-xs text-slate-400 uppercase tracking-wider font-semibold">Total Solved</div>
            <div class="text-xl font-black text-white mt-0.5">
              {totalAllSolved} <span class="text-sm font-normal text-slate-500">/ {totalAllQuestions} Qs</span>
            </div>
            <div class="text-xs text-emerald-400 mt-1 flex items-center gap-1">
              <Flame class="w-3.5 h-3.5" /> {aptitudeChapters.length} Chapters Available
            </div>
          </div>
        </div>
      </div>

      <!-- Chapter Tabs / Navigation (Horizontal Scrollable) -->
      <div class="mt-8 border-t border-slate-800/60 pt-6">
        <div class="flex items-center justify-between mb-3">
          <span class="text-xs uppercase font-bold tracking-wider text-slate-400 flex items-center gap-1.5">
            <BookOpen class="w-4 h-4 text-emerald-400" /> Select Chapter ({aptitudeChapters.length})
          </span>
          <button 
            on:click={() => showCheatSheet = !showCheatSheet}
            class="text-xs font-semibold px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <Zap class="w-3.5 h-3.5" />
            {showCheatSheet ? 'Hide Formulas' : `${activeChapter.title} Formulas`}
          </button>
        </div>

        <div class="flex gap-2.5 overflow-x-auto pb-3 scrollbar-thin scrollbar-thumb-slate-800">
          {#each aptitudeChapters as ch, idx}
            {@const isCurrent = ch.id === selectedChapterId}
            {@const chSolved = ch.questions.filter(q => solvedQuestions[q.id]).length}
            {@const isDone = chSolved === ch.questions.length}

            <button
              on:click={() => { selectedChapterId = ch.id; searchQuery = ''; }}
              class="flex-shrink-0 px-4 py-3 rounded-xl border text-left transition-all duration-200 cursor-pointer {
                isCurrent 
                  ? 'bg-emerald-500/15 border-emerald-500/50 shadow-lg shadow-emerald-950/40' 
                  : 'bg-slate-900/60 border-slate-800/80 hover:bg-slate-850 hover:border-slate-700'
              }"
            >
              <div class="flex items-center gap-2">
                <span class="text-xs font-mono {isCurrent ? 'text-emerald-400 font-bold' : 'text-slate-500'}">
                  {(idx + 1).toString().padStart(2, '0')}.
                </span>
                <span class="text-sm font-semibold whitespace-nowrap {isCurrent ? 'text-white' : 'text-slate-300'}">
                  {ch.title}
                </span>
                {#if isDone}
                  <CheckCircle2 class="w-3.5 h-3.5 text-emerald-400 ml-1" />
                {/if}
              </div>
              <div class="flex items-center justify-between text-[11px] text-slate-400 mt-1.5 gap-3">
                <span>{ch.badge}</span>
                <span class="{chSolved > 0 ? 'text-emerald-400 font-medium' : 'text-slate-500'}">
                  {chSolved}/{ch.questions.length} Solved
                </span>
              </div>
            </button>
          {/each}
        </div>
      </div>
    </div>
  </div>

  <!-- Formula Cheat Sheet Drawer (Toggled) -->
  {#if showCheatSheet}
    <div class="bg-gradient-to-r from-emerald-950/40 via-slate-900/80 to-emerald-950/40 border-b border-emerald-500/20 py-6 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center gap-2">
            <Zap class="w-5 h-5 text-emerald-400" />
            <h3 class="text-lg font-bold text-white">
              {activeChapter.title} — Shortcut Formulas & Cheat Sheet
            </h3>
          </div>
          <button 
            on:click={() => showCheatSheet = false}
            class="text-xs text-slate-400 hover:text-white p-1"
          >
            ✕ Close
          </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {#each activeChapter.formulas as f}
            <div class="bg-slate-900/90 border border-emerald-500/30 rounded-xl p-4 relative overflow-hidden">
              <div class="absolute -right-2 -bottom-2 opacity-5 text-emerald-400">
                <Zap class="w-20 h-20" />
              </div>
              <h4 class="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1.5">{f.title}</h4>
              <div class="font-mono text-sm font-semibold text-white bg-slate-950/80 border border-slate-800 rounded-lg p-2.5 mb-2">
                {f.formula}
              </div>
              <p class="text-xs text-slate-400 leading-relaxed">
                💡 <span class="text-slate-300 font-medium">Tip:</span> {f.tip}
              </p>
            </div>
          {/each}
        </div>
      </div>
    </div>
  {/if}

  <!-- Main Content Area -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    
    <!-- Chapter Header & Filters Bar -->
    <div class="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 mb-6 backdrop-blur-sm">
      <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <div class="flex items-center gap-3">
            <h2 class="text-2xl font-bold text-white tracking-tight">
              {activeChapter.title}
            </h2>
            <span class="px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              {filteredQuestions.length} Questions
            </span>
          </div>
          <p class="text-xs md:text-sm text-slate-400 mt-1 max-w-2xl">
            {activeChapter.description}
          </p>
        </div>

        <!-- Filter Controls -->
        <div class="flex flex-wrap items-center gap-3">
          <!-- Search input -->
          <div class="relative min-w-[200px] flex-1 sm:flex-none">
            <Search class="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              bind:value={searchQuery}
              placeholder="Search question, keyword..."
              class="w-full pl-9 pr-3 py-2 text-xs bg-slate-950/80 border border-slate-800 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/50"
            />
          </div>

          <!-- Company Filter -->
          <select
            bind:value={selectedCompany}
            class="text-xs bg-slate-950/80 border border-slate-800 rounded-xl px-3 py-2 text-slate-300 focus:outline-none focus:border-emerald-500/60 cursor-pointer"
          >
            {#each allCompanies as comp}
              <option value={comp}>{comp === 'All' ? '🏢 All Companies' : `🏷️ ${comp}`}</option>
            {/each}
          </select>

          <!-- Status Filter Tabs -->
          <div class="inline-flex rounded-xl bg-slate-950/80 p-1 border border-slate-800 text-xs">
            <button
              on:click={() => filterStatus = 'all'}
              class="px-2.5 py-1 rounded-lg transition-all {filterStatus === 'all' ? 'bg-emerald-500/20 text-emerald-400 font-semibold' : 'text-slate-400 hover:text-slate-200'}"
            >
              All ({activeChapter.questions.length})
            </button>
            <button
              on:click={() => filterStatus = 'unsolved'}
              class="px-2.5 py-1 rounded-lg transition-all {filterStatus === 'unsolved' ? 'bg-emerald-500/20 text-emerald-400 font-semibold' : 'text-slate-400 hover:text-slate-200'}"
            >
              Unsolved
            </button>
            <button
              on:click={() => filterStatus = 'solved'}
              class="px-2.5 py-1 rounded-lg transition-all {filterStatus === 'solved' ? 'bg-emerald-500/20 text-emerald-400 font-semibold' : 'text-slate-400 hover:text-slate-200'}"
            >
              Solved ({chapterSolvedCount})
            </button>
            <button
              on:click={() => filterStatus = 'bookmarked'}
              class="px-2.5 py-1 rounded-lg transition-all {filterStatus === 'bookmarked' ? 'bg-amber-500/20 text-amber-400 font-semibold' : 'text-slate-400 hover:text-slate-200'}"
            >
              ★ Saved
            </button>
          </div>
        </div>
      </div>

      <!-- Chapter Solved Progress Bar -->
      <div class="mt-4 pt-3 border-t border-slate-800/60 flex items-center gap-3">
        <div class="text-xs text-slate-400 font-medium">Chapter Progress:</div>
        <div class="flex-1 h-2 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
          <div 
            class="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-300"
            style="width: {chapterProgressPct}%"
          ></div>
        </div>
        <div class="text-xs font-mono font-semibold text-emerald-400">
          {chapterSolvedCount} / {activeChapter.questions.length} ({chapterProgressPct}%)
        </div>
      </div>
    </div>

    <!-- Questions List (Table / Card Grid) -->
    {#if filteredQuestions.length === 0}
      <div class="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-12 text-center">
        <HelpCircle class="w-12 h-12 text-slate-600 mx-auto mb-3" />
        <h3 class="text-lg font-bold text-slate-300">No questions match your current filters</h3>
        <p class="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
          Try resetting the search query or company filter to see questions.
        </p>
        <button
          on:click={() => { searchQuery = ''; selectedCompany = 'All'; filterStatus = 'all'; }}
          class="mt-4 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white transition-all cursor-pointer"
        >
          Reset Filters
        </button>
      </div>
    {:else}
      <div class="space-y-4">
        {#each filteredQuestions as q (q.id)}
          {@const isSolved = !!solvedQuestions[q.id]}
          {@const isBookmarked = !!bookmarkedQuestions[q.id]}
          {@const isExpanded = !!expandedQuestions[q.id]}
          {@const userChoice = selectedAnswers[q.id]}
          {@const showFeedback = !!showAnswerFeedback[q.id]}

          <div class="bg-slate-900/80 border transition-all duration-200 rounded-2xl p-5 {
            isSolved 
              ? 'border-emerald-500/30 bg-gradient-to-b from-slate-900/90 to-emerald-950/10' 
              : 'border-slate-800/90 hover:border-slate-700'
          }">
            <!-- Card Header: Number, Question, Solved Status, Bookmark -->
            <div class="flex items-start justify-between gap-4">
              <div class="flex items-start gap-3.5 flex-1">
                <!-- Checkbox / Number -->
                <button
                  on:click={() => toggleSolved(q.id)}
                  title={isSolved ? 'Mark as unsolved' : 'Mark as solved'}
                  class="mt-0.5 flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center transition-all cursor-pointer {
                    isSolved 
                      ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20' 
                      : 'bg-slate-950 border border-slate-800 text-slate-500 hover:border-emerald-500/50 hover:text-emerald-400'
                  }"
                >
                  {#if isSolved}
                    <Check class="w-4 h-4 stroke-[3]" />
                  {:else}
                    <span class="text-xs font-mono font-bold">{q.qNumber}</span>
                  {/if}
                </button>

                <!-- Question Title & Metadata -->
                <div class="flex-1">
                  <div class="flex flex-wrap items-center gap-2 mb-1.5">
                    <span class="text-xs font-mono font-semibold text-slate-500">
                      Q#{q.qNumber}
                    </span>

                    <!-- Difficulty Badge -->
                    <span class="text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full {
                      q.difficulty === 'Easy' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                      q.difficulty === 'Medium' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
                      'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                    }">
                      {q.difficulty}
                    </span>

                    <!-- Company Tags -->
                    {#each q.companies as comp}
                      <span class="text-[11px] font-medium px-2.5 py-0.5 rounded-md border {getCompanyBadgeClass(comp)}">
                        🏷️ {comp}
                      </span>
                    {/each}
                  </div>

                  <!-- Question Text -->
                  <h3 class="text-base md:text-lg font-semibold text-slate-100 leading-snug">
                    {q.question}
                  </h3>
                </div>
              </div>

              <!-- Top Right Actions (Bookmark & Expand) -->
              <div class="flex items-center gap-1.5 flex-shrink-0">
                <button
                  on:click={() => toggleBookmark(q.id)}
                  title={isBookmarked ? 'Remove bookmark' : 'Bookmark question'}
                  class="p-2 rounded-xl transition-all cursor-pointer {
                    isBookmarked 
                      ? 'text-amber-400 bg-amber-500/10 border border-amber-500/30' 
                      : 'text-slate-500 hover:text-slate-300 bg-slate-950/60 border border-slate-800'
                  }"
                >
                  <Bookmark class="w-4 h-4 {isBookmarked ? 'fill-amber-400' : ''}" />
                </button>

                <button
                  on:click={() => toggleExpand(q.id)}
                  class="px-3 py-2 rounded-xl bg-slate-950/60 hover:bg-slate-800 border border-slate-800 text-xs font-semibold text-slate-300 transition-all flex items-center gap-1 cursor-pointer"
                >
                  <span>{isExpanded ? 'Hide' : 'Solution'}</span>
                  {#if isExpanded}
                    <ChevronUp class="w-3.5 h-3.5" />
                  {:else}
                    <ChevronDown class="w-3.5 h-3.5" />
                  {/if}
                </button>
              </div>
            </div>

            <!-- Multiple Choice Options (If Available) -->
            {#if q.options && q.options.length > 0}
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 mt-4 pt-3 border-t border-slate-800/60">
                {#each q.options as opt, optIdx}
                  {@const optLetter = String.fromCharCode(65 + optIdx)}
                  {@const isSelected = userChoice === opt}
                  {@const isCorrect = q.correctAnswer === opt}

                  <button
                    on:click={() => selectOption(q.id, opt, q.correctAnswer)}
                    class="px-3.5 py-2.5 rounded-xl border text-left transition-all duration-150 flex items-center justify-between gap-2 cursor-pointer {
                      showFeedback && isSelected && isCorrect ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold' :
                      showFeedback && isSelected && !isCorrect ? 'bg-rose-500/20 border-rose-500 text-rose-300' :
                      showFeedback && !isSelected && isCorrect ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-400' :
                      'bg-slate-950/60 border-slate-800/90 text-slate-300 hover:bg-slate-800 hover:border-slate-700'
                    }"
                  >
                    <div class="flex items-center gap-2.5 overflow-hidden">
                      <span class="w-5 h-5 rounded-md text-[11px] font-mono font-bold flex items-center justify-center flex-shrink-0 {
                        showFeedback && isSelected && isCorrect ? 'bg-emerald-500 text-slate-950' :
                        showFeedback && isSelected && !isCorrect ? 'bg-rose-500 text-white' :
                        'bg-slate-800 text-slate-400'
                      }">
                        {optLetter}
                      </span>
                      <span class="text-xs md:text-sm truncate">{opt}</span>
                    </div>

                    {#if showFeedback && isSelected}
                      {#if isCorrect}
                        <Check class="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      {:else}
                        <X class="w-4 h-4 text-rose-400 flex-shrink-0" />
                      {/if}
                    {/if}
                  </button>
                {/each}
              </div>
            {/if}

            <!-- Expandable Detailed Solution / Formula Accordion -->
            {#if isExpanded}
              <div class="mt-4 pt-4 border-t border-slate-800 space-y-3 bg-slate-950/60 rounded-xl p-4">
                {#if q.correctAnswer}
                  <div class="flex items-center gap-2">
                    <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Correct Answer:</span>
                    <span class="text-sm font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-lg border border-emerald-500/20">
                      {q.correctAnswer}
                    </span>
                  </div>
                {/if}

                {#if q.formula}
                  <div>
                    <div class="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <Zap class="w-3.5 h-3.5 text-amber-400" />
                      Core Shortcut / Formula:
                    </div>
                    <div class="font-mono text-xs md:text-sm bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-amber-300">
                      {q.formula}
                    </div>
                  </div>
                {/if}

                {#if q.solution}
                  <div>
                    <div class="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <CheckCircle2 class="w-3.5 h-3.5 text-emerald-400" />
                      Step-by-Step Solution:
                    </div>
                    <div class="text-xs md:text-sm text-slate-300 leading-relaxed bg-slate-900 border border-slate-800 rounded-lg p-3">
                      {q.solution}
                    </div>
                  </div>
                {/if}
              </div>
            {/if}
          </div>
        {/each}
      </div>
    {/if}
  </div>
</div>
