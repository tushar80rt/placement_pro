<script lang="ts">
  import { page } from '$app/stores';
  import { 
    placementCompanies, dsaQuestions, aptitudeQuestions, reasoningQuestions, 
    technicalMCQs, hrQuestions, resumeTips, resourcesData 
  } from '$lib/data/catalogs';
  import { pdfResources } from '$lib/data/pdfs';
  import { FileText, Download } from 'lucide-svelte';
  import QuestionCard from '$lib/components/placement/QuestionCard.svelte';
  
  $: company = placementCompanies.find(item => item.id === $page.params.slug) ?? placementCompanies[0];
  $: module = $page.params.module || 'dsa';
  
  const copy: Record<string, {title:string; eyebrow:string}> = { 
    dsa:{title:'Company DSA sheet',eyebrow:'High-frequency problems'}, 
    aptitude:{title:'Quantitative Aptitude',eyebrow:'Timed preparation'}, 
    reasoning:{title:'Logical reasoning',eyebrow:'Patterns & practice'}, 
    mcq:{title:'Technical MCQs',eyebrow:'Role-ready foundations'}, 
    interview:{title:'General Preparation',eyebrow:'Verified Strategy'}, 
    resume:{title:'Resume preparation',eyebrow:'Signal your strongest work'}, 
    hr:{title:'HR interview practice',eyebrow:'Tell compelling stories'}, 
    coding:{title:'Coding round playbook',eyebrow:'OA · machine coding · design'}, 
    resources:{title:'Prep resources',eyebrow:'A focused toolkit'} 
  }; 
  $: content = copy[module] ?? copy.dsa;
  
  // Get relevant PDFs for this module
  $: relevantPdfs = pdfResources.filter(pdf => {
      if (module === 'dsa') return pdf.category === 'DSA' || pdf.category === 'Comprehensive';
      if (module === 'aptitude' || module === 'reasoning') return pdf.category.includes('Aptitude') || pdf.category.includes('Reasoning') || pdf.category === 'Comprehensive';
      if (module === 'mcq' || module === 'coding') return pdf.category === 'System Design' || pdf.category === 'Comprehensive';
      if (module === 'hr') return pdf.category === 'Behavioral' || pdf.category === 'Comprehensive';
      return false;
  }).slice(0, 2);
</script>

<div class="mx-auto max-w-6xl px-4 py-8 md:px-8">
  <a href="/company/{company.id}" class="text-sm font-bold text-text-secondary hover:text-primary">← {company.name} hub</a>
  <header class="mt-7 rounded-3xl border border-border bg-white p-7 shadow-card">
    <p class="text-xs font-bold uppercase tracking-[.18em] text-primary">{content.eyebrow}</p>
    <h1 class="mt-2 text-3xl font-extrabold">{company.name} · {content.title}</h1>
    <p class="mt-3 max-w-2xl text-sm leading-6 text-text-secondary">Authentic, curated preparation material designed to help you clear the {company.name} hiring loops.</p>
  </header>

  {#if module === 'dsa'}
    <section class="mt-7 grid gap-4 md:grid-cols-2">
      <!-- TODO: Replace QuestionCard with a proper DSA renderer if it's broken, but for now we map fields if they match -->
      {#each dsaQuestions as question}
        <article class="rounded-2xl border border-border bg-white p-6 shadow-card flex flex-col justify-between">
          <div>
            <div class="flex items-center gap-2 mb-2">
              <span class="px-2 py-1 text-[10px] font-bold rounded bg-primary/10 text-primary">{question.difficulty}</span>
              <span class="px-2 py-1 text-[10px] font-bold rounded bg-secondary-background text-text-secondary">{question.category}</span>
            </div>
            <h2 class="text-xl font-bold mt-1 text-text-primary">{question.title}</h2>
            <p class="text-sm text-text-secondary mt-2 line-clamp-3 leading-relaxed">{question.description}</p>
          </div>
          <div class="mt-5 pt-4 border-t border-border/50 flex justify-between items-center">
            <span class="text-xs font-medium text-text-secondary">Time: <b class="text-text-primary">{question.timeComplexity}</b></span>
            <a href={question.leetcodeUrl} target="_blank" rel="noreferrer" class="text-xs font-bold text-primary hover:underline">Solve on LeetCode →</a>
          </div>
        </article>
      {/each}
    </section>
  
  {:else if module === 'aptitude' || module === 'reasoning' || module === 'mcq'}
    {@const activeQuestions = module === 'aptitude' ? aptitudeQuestions : module === 'reasoning' ? reasoningQuestions : technicalMCQs}
    <section class="mt-7 space-y-6">
      {#each activeQuestions as question, i}
        <article class="rounded-2xl border border-border bg-white p-6 md:p-8 shadow-card">
          <div class="flex items-center justify-between">
            <span class="px-2 py-1 text-[10px] font-bold rounded bg-secondary-background text-text-secondary">{question.topic}</span>
            <span class="px-2 py-1 text-[10px] font-bold rounded {question.difficulty === 'Hard' ? 'bg-red-100 text-red-600' : 'bg-primary/10 text-primary'}">{question.difficulty}</span>
          </div>
          <h2 class="text-lg font-bold mt-4 leading-relaxed">{i + 1}. {question.question}</h2>
          <div class="mt-5 space-y-2">
            {#each question.options as opt, optIdx}
              <div class="p-3 rounded-lg border border-border/60 bg-secondary-background/30 text-sm font-medium {optIdx === question.answer ? 'ring-2 ring-emerald-500 bg-emerald-50' : ''}">
                {String.fromCharCode(65 + optIdx)}. {opt}
              </div>
            {/each}
          </div>
          <div class="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/10">
            <h3 class="text-xs font-bold uppercase tracking-wider text-primary">Explanation</h3>
            <p class="mt-2 text-sm text-text-secondary leading-relaxed">{question.explanation}</p>
            {#if question.shortcut}
              <p class="mt-3 text-sm font-bold text-emerald-600">💡 Shortcut: {question.shortcut}</p>
            {/if}
          </div>
        </article>
      {/each}
    </section>

  {:else if module === 'hr'}
    <section class="mt-7 space-y-6">
      {#each hrQuestions as question}
        <article class="rounded-2xl border border-border bg-white p-6 md:p-8 shadow-card">
          <h2 class="text-2xl font-black text-text-primary">"{question.question}"</h2>
          <p class="mt-3 text-sm text-text-secondary"><b>Purpose:</b> {question.purpose}</p>
          
          <div class="mt-6 grid md:grid-cols-2 gap-6">
            <div class="p-5 rounded-xl bg-emerald-50 border border-emerald-100">
              <h3 class="text-xs font-bold uppercase tracking-wider text-emerald-700">How to Answer</h3>
              <p class="mt-2 text-sm text-emerald-900 leading-relaxed">{question.howToAnswer}</p>
            </div>
            <div class="p-5 rounded-xl bg-red-50 border border-red-100">
              <h3 class="text-xs font-bold uppercase tracking-wider text-red-700">Common Mistakes</h3>
              <ul class="mt-2 text-sm text-red-900 list-disc list-inside space-y-1">
                {#each question.commonMistakes as mistake}
                  <li>{mistake}</li>
                {/each}
              </ul>
            </div>
          </div>
          <div class="mt-6 pt-6 border-t border-border">
            <h3 class="text-xs font-bold uppercase tracking-wider text-text-secondary">Example Answer</h3>
            <p class="mt-3 text-sm italic text-text-primary leading-relaxed border-l-4 border-primary pl-4">{question.exampleAnswer}</p>
          </div>
        </article>
      {/each}
    </section>

  {:else if module === 'resume'}
    <section class="mt-7 grid gap-6 md:grid-cols-2">
      {#each resumeTips as tip}
        <article class="rounded-2xl border border-border bg-white p-6 shadow-card">
          <span class="px-2 py-1 text-[10px] font-bold rounded bg-secondary-background text-text-secondary">{tip.category}</span>
          <h2 class="mt-3 text-lg font-bold">{tip.title}</h2>
          <p class="mt-2 text-sm text-text-secondary leading-relaxed">{tip.content}</p>
          
          <div class="mt-5 space-y-3">
            {#each tip.examples as ex}
              <div class="p-3 rounded-lg border border-red-100 bg-red-50/50 text-xs text-red-800">
                <span class="font-bold">❌ Bad:</span> {ex.bad}
              </div>
              <div class="p-3 rounded-lg border border-emerald-100 bg-emerald-50/50 text-xs text-emerald-800">
                <span class="font-bold">✅ Good:</span> {ex.good}
              </div>
            {/each}
          </div>
        </article>
      {/each}
    </section>
    
  {:else if module === 'resources'}
    <section class="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {#each resourcesData as res}
        <a href={res.url} target="_blank" rel="noreferrer" class="group rounded-2xl border border-border bg-white p-6 shadow-card transition hover:-translate-y-1 hover:border-primary hover:shadow-card-hover flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between">
              <span class="px-2 py-1 text-[10px] font-bold rounded bg-primary/10 text-primary">{res.category}</span>
            </div>
            <h2 class="mt-4 text-lg font-bold text-text-primary group-hover:text-primary transition">{res.title}</h2>
            <p class="mt-2 text-sm text-text-secondary leading-relaxed line-clamp-3">{res.description}</p>
          </div>
          <div class="mt-5 pt-4 border-t border-border/50">
            <span class="text-xs font-medium text-text-secondary line-clamp-2"><b>Why it's useful:</b> {res.whyUseful}</span>
          </div>
        </a>
      {/each}
    </section>

  {:else if module === 'interview'}
    <section class="mt-7 space-y-6">
      <article class="rounded-2xl border border-border bg-white p-8 shadow-card">
        <h2 class="text-2xl font-black text-text-primary">General Preparation Strategy</h2>
        <div class="mt-6 p-6 rounded-xl bg-secondary-background/50 border border-border">
          <p class="text-lg leading-relaxed text-text-primary">{company.generalStrategy}</p>
        </div>
      </article>

      {#if company.interviewQuestions && company.interviewQuestions.length > 0}
        <h2 class="text-2xl font-black text-text-primary mt-12 mb-6 px-2">Authentic Interview Questions</h2>
        {#each company.interviewQuestions as q}
          <article class="rounded-2xl border border-border bg-white p-6 md:p-8 shadow-card">
            <span class="px-3 py-1 text-xs font-bold rounded-full bg-primary/10 text-primary uppercase tracking-wide">{q.round}</span>
            <h3 class="mt-5 text-xl font-bold text-text-primary leading-relaxed">"{q.question}"</h3>
            <div class="mt-6 p-5 rounded-xl bg-emerald-50/80 border border-emerald-100">
              <h4 class="text-xs font-bold uppercase tracking-wider text-emerald-700">Expert Advice</h4>
              <p class="mt-2 text-sm text-emerald-900 leading-relaxed">{q.advice}</p>
            </div>
          </article>
        {/each}
      {/if}
    </section>

  {:else}
    <section class="mt-7 rounded-3xl border border-border bg-white p-7 shadow-card">
      <h2 class="text-xl font-extrabold">Preparation Content Coming Soon</h2>
      <p class="mt-3 max-w-2xl text-sm leading-6 text-text-secondary">We are currently verifying the authenticity of this content before publishing.</p>
    </section>
  {/if}
  
  <!-- Dedicated PDF Resources Section for all modules -->
  {#if relevantPdfs.length > 0}
    <section class="mt-12 rounded-[2rem] bg-[#f8f9fa] border border-border/50 p-6 md:p-8">
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
