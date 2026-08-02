<script lang="ts">
	import { page } from '$app/stores';
	import { ArrowLeft, Calendar, CheckCircle2 } from 'lucide-svelte';
	import { mentors } from '$lib/data/mentors';
	let mentor = $derived(mentors.find((item) => item.slug === $page.params.slug) ?? mentors[0]);
</script>

<div class="mx-auto max-w-5xl px-4 py-8 md:px-8">
	<a href="/#mentors" class="inline-flex items-center gap-1 text-sm font-bold text-text-secondary hover:text-primary"><ArrowLeft size={16}/> All mentors</a>
	<section class="mt-6 grid gap-8 rounded-3xl bg-[#17202b] p-7 text-white md:grid-cols-[200px_1fr] md:p-10">
		<div class="grid aspect-square place-items-center self-start rounded-3xl bg-gradient-to-br {mentor.tone} text-4xl font-black">{mentor.initials}</div>
		<div><p class="text-xs font-bold uppercase tracking-[.18em] text-orange-200">{mentor.badge}</p><h1 class="mt-3 text-4xl font-extrabold">{mentor.name}</h1><p class="mt-4 max-w-xl leading-7 text-slate-300">{mentor.bio}</p><button class="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#17202b]"><Calendar size={16}/> Book a 1:1 session</button></div>
	</section>
	<section class="mt-8 grid gap-4 md:grid-cols-2">
		{#each [{ title: 'Companies cracked', items: mentor.offers }, { title: 'Expertise', items: mentor.expertise }, { title: 'What you can work on', items: ['DSA guidance', 'Resume review', 'Mock interviews', 'Interview preparation'] }, { title: 'Student outcomes', items: ['Success stories coming soon', 'Student reviews coming soon'] }] as section}
			<article class="rounded-2xl bg-white p-6 shadow-card"><h2 class="font-extrabold">{section.title}</h2><ul class="mt-4 space-y-3 text-sm text-text-secondary">{#each section.items as item}<li class="flex gap-2"><CheckCircle2 size={16} class="shrink-0 text-emerald-500"/>{item}</li>{/each}</ul></article>
		{/each}
	</section>
</div>
