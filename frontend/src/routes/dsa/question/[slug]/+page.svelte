<script lang="ts">
  import { page } from '$app/stores';
  import { dsaQuestions as neetcode150 } from '$lib/data/catalogs';
  import { ExternalLink, ChevronLeft, Check, Lightbulb, PlayCircle, Bookmark } from 'lucide-svelte';
  import { solvedQuestions, bookmarkedQuestions } from '$lib/stores/progress';
  let question = $derived(neetcode150.find((item) => item.id === $page.params.slug) || neetcode150[0]);
  let questionIndex = $derived(neetcode150.findIndex((item) => item.id === question.id));
  let isSolved = $derived($solvedQuestions.includes(question.id));
  let isBookmarked = $derived($bookmarkedQuestions.includes(question.id));
  
  function toggleSolved() {
    if (isSolved) $solvedQuestions = $solvedQuestions.filter(id => id !== question.id);
    else $solvedQuestions = [...$solvedQuestions, question.id];
  }

  function toggleBookmark() {
    if (isBookmarked) $bookmarkedQuestions = $bookmarkedQuestions.filter(id => id !== question.id);
    else $bookmarkedQuestions = [...$bookmarkedQuestions, question.id];
  }
</script>

<div class="mx-auto max-w-6xl px-4 py-8 md:px-8">
  <a href="/dsa" class="inline-flex items-center gap-1 text-sm font-bold text-text-secondary hover:text-primary"><ChevronLeft size={16}/> Back to DSA</a>
  <div class="mt-5 grid gap-7 lg:grid-cols-[1fr_300px]">
    <article class="rounded-3xl border border-border/70 bg-white p-6 shadow-card md:p-9">
      <div class="flex flex-wrap items-start justify-between gap-4"><div><p class="text-xs font-bold uppercase tracking-[.18em] text-primary">NeetCode 150 · {question.category}</p><h1 class="mt-2 text-3xl font-extrabold">{question.title}</h1><div class="mt-4 flex flex-wrap gap-2"><span class="rounded-full px-3 py-1 text-xs font-bold {question.difficulty === 'Easy' ? 'bg-emerald-50 text-emerald-700' : question.difficulty === 'Hard' ? 'bg-rose-50 text-rose-700' : 'bg-amber-50 text-amber-700'}">{question.difficulty}</span>{#each question.tags as tag}<span class="rounded-full bg-secondary-background px-3 py-1 text-xs font-semibold text-text-secondary">{tag}</span>{/each}</div></div><button aria-label="Bookmark" onclick={toggleBookmark} class="grid h-10 w-10 place-items-center rounded-xl border border-border hover:text-primary {isBookmarked ? 'text-primary bg-primary/10' : ''}"><Bookmark fill={isBookmarked ? 'currentColor' : 'none'} size={17}/></button></div>
      <p class="mt-8 leading-7 text-text-secondary">{question.description}</p><h2 class="mt-9 text-xl font-extrabold">Examples</h2>{#each question.examples as example}<div class="mt-4 rounded-2xl bg-[#17202b] p-5 font-mono text-sm leading-7 text-slate-200"><p>{example.input}</p><p>{example.output}</p><p class="mt-3 text-slate-400">{example.explanation}</p></div>{/each}<h2 class="mt-9 text-xl font-extrabold">Constraints</h2><ul class="mt-3 space-y-2 text-sm text-text-secondary">{#each question.constraints as constraint}<li>• {constraint}</li>{/each}</ul><div class="mt-9 rounded-2xl border border-amber-200 bg-amber-50 p-5"><p class="flex items-center gap-2 font-bold text-amber-900"><Lightbulb size={17}/> Hints</p>{#each question.hints as hint}<p class="mt-2 text-sm text-amber-800">{hint}</p>{/each}</div><details open class="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50/50 p-5"><summary class="cursor-pointer font-bold text-emerald-900">Explanation & Optimal Pattern</summary><p class="mt-3 text-sm leading-6 text-emerald-800"><b>Pattern:</b> {question.pattern}</p><p class="mt-2 text-sm leading-6 text-emerald-800">{question.explanation}</p></details>
      {#if question.relatedQuestions && question.relatedQuestions.length > 0}
        <h2 class="mt-9 text-xl font-extrabold">Related Questions</h2>
        <ul class="mt-3 space-y-2 text-sm text-text-secondary">
          {#each question.relatedQuestions as rq}
            <li><a href="/dsa/question/{rq.toLowerCase().replace(/[^a-z0-9]+/g, '-')}" class="text-primary hover:underline">• {rq}</a></li>
          {/each}
        </ul>
      {/if}
    </article>
    <aside class="space-y-4"><div class="rounded-3xl border border-border bg-white p-5 shadow-card"><p class="text-xs font-bold uppercase tracking-wider text-text-secondary">Interview profile</p><div class="mt-4 space-y-3 text-sm"><p><span class="text-text-secondary">Companies</span><br/><b>{question.companies.join(' · ')}</b></p><p><span class="text-text-secondary">Acceptance</span><br/><b>{question.acceptance}</b></p><p><span class="text-text-secondary">Complexity</span><br/><b>{question.timeComplexity} time · {question.spaceComplexity} space</b></p></div></div><a href={question.leetcodeUrl} target="_blank" rel="noopener noreferrer" class="flex items-center justify-center gap-2 rounded-2xl bg-text-primary px-4 py-3 text-sm font-bold text-white hover:bg-primary">Solve on LeetCode <ExternalLink size={15}/></a><button onclick={toggleSolved} class="flex w-full items-center justify-center gap-2 rounded-2xl border {isSolved ? 'border-emerald-200 bg-emerald-50 text-emerald-700' : 'border-border bg-white text-text-secondary hover:text-text-primary'} px-4 py-3 text-sm font-bold"><Check size={16}/>{isSolved ? 'Marked solved' : 'Mark as solved'}</button><div class="grid grid-cols-2 gap-2">{#if questionIndex > 0}<a class="rounded-xl border border-border p-3 text-xs font-bold hover:bg-secondary-background" href="/dsa/question/{neetcode150[questionIndex-1].id}">← Previous</a>{/if}{#if questionIndex < neetcode150.length-1}<a class="rounded-xl border border-border p-3 text-right text-xs font-bold hover:bg-secondary-background" href="/dsa/question/{neetcode150[questionIndex+1].id}">Next →</a>{/if}</div></aside>
  </div>
</div>
