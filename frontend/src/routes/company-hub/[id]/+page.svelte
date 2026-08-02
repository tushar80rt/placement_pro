<script lang="ts">
	import { page } from '$app/stores';
	import Breadcrumbs from '$lib/components/ui/Breadcrumbs.svelte';
	import { companiesData as companies } from '$lib/data/companies/index';
	import { Code2, Brain, Puzzle, FileQuestion, ArrowRight } from 'lucide-svelte';

	let companyId = $derived($page.params.id || '');
	let company = $derived(companies.find(c => c.id === companyId));

	const categories = [
		{ id: 'dsa', title: 'DSA Sheet', icon: Code2, desc: 'Company-specific coding questions', color: 'text-blue-500', bg: 'bg-blue-50' },
		{ id: 'aptitude', title: 'Aptitude', icon: Brain, desc: 'Quantitative & verbal reasoning', color: 'text-orange-500', bg: 'bg-orange-50' },
		{ id: 'logical-reasoning', title: 'Logical Reasoning', icon: Puzzle, desc: 'Puzzles and logical patterns', color: 'text-violet-500', bg: 'bg-violet-50' },
		{ id: 'technical-mcq', title: 'Technical MCQ', icon: FileQuestion, desc: 'Core computer science concepts', color: 'text-emerald-500', bg: 'bg-emerald-50' }
	];
</script>

<div class="max-w-5xl mx-auto py-8 px-4 md:px-8 space-y-8">
	{#if company}
		<header class="border-b border-border/50 pb-8">
			<Breadcrumbs items={[
				{ label: 'Company Hub', href: '/company-hub' },
				{ label: company.name }
			]} />
			
			<div class="flex items-center gap-5 mt-6">
				<div class="w-16 h-16 rounded-2xl border border-border flex items-center justify-center text-3xl font-bold text-white bg-gradient-to-br {company.color}">
					{company.initials}
				</div>
				<div>
					<h1 class="text-3xl font-outfit font-semibold text-text-primary">
						{company.name} Preparation
					</h1>
					<p class="text-text-secondary mt-1">{company.sector}</p>
				</div>
			</div>
		</header>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
			{#each categories as cat}
				{@const Icon = cat.icon}
				<a href="/company-hub/{company.id}/{cat.id}" data-sveltekit-reload class="group rounded-2xl border border-border/50 bg-card-background/30 p-6 hover:bg-secondary-background/50 hover:border-border transition-all hover:-translate-y-1 hover:shadow-card flex flex-col h-full">
					<div class="flex items-start justify-between mb-8">
						<div class="w-12 h-12 rounded-xl flex items-center justify-center shadow-inner {cat.bg} {cat.color}">
							<Icon size={24} />
						</div>
						<div class="w-8 h-8 rounded-full border border-border flex items-center justify-center text-text-secondary group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all">
							<ArrowRight size={16} />
						</div>
					</div>
					<div class="mt-auto">
						<h3 class="text-xl font-semibold text-text-primary mb-2">{cat.title}</h3>
						<p class="text-text-secondary text-sm">{cat.desc}</p>
					</div>
				</a>
			{/each}
		</div>
	{:else}
		<div class="py-20 text-center text-text-secondary">
			Company not found.
		</div>
	{/if}
</div>
