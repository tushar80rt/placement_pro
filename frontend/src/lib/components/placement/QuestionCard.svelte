<script lang="ts">
  import { ArrowUpRight, CheckCircle2 } from 'lucide-svelte';
  import DifficultyBadge from './DifficultyBadge.svelte';
  import BookmarkButton from './BookmarkButton.svelte';
  import type { DsaQuestion } from '$lib/data/types';
  let { question }: { question: DsaQuestion } = $props();
</script>
<article class="group rounded-2xl border border-border/70 bg-white p-4 shadow-card transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-card-hover">
  <div class="flex items-start gap-3">
    <div class="mt-1">{#if question.status === 'Solved'}<CheckCircle2 size={17} class="text-emerald-500" />{:else}<span class="block h-4 w-4 rounded-full border-2 border-border"></span>{/if}</div>
    <div class="min-w-0 flex-1">
      <div class="flex items-center justify-between gap-3"><a href="/dsa/question/{question.slug}" class="truncate font-bold text-text-primary transition group-hover:text-primary">{question.title}</a><DifficultyBadge difficulty={question.difficulty} /></div>
      <p class="mt-1 text-xs text-text-secondary">{question.category} · {question.acceptance} acceptance</p>
      <div class="mt-3 flex items-center justify-between"><div class="flex gap-1.5">{#each question.tags.slice(0, 2) as tag}<span class="rounded-md bg-secondary-background px-2 py-1 text-[10px] font-semibold text-text-secondary">{tag}</span>{/each}</div><div class="flex gap-2"><BookmarkButton active={question.bookmarked}/><a href="/dsa/question/{question.slug}" class="grid h-9 w-9 place-items-center rounded-xl bg-text-primary text-white transition hover:bg-primary"><ArrowUpRight size={16}/></a></div></div>
    </div>
  </div>
</article>
