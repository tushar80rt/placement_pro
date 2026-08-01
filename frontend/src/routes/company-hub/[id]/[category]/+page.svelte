<script lang="ts">
	import { page } from '$app/stores';
	import Breadcrumbs from '$lib/components/ui/Breadcrumbs.svelte';
	import { companies } from '$lib/data/companies';
	import { neetcode150 } from '$lib/data/dsa';
	import { aptitudeQuestions } from '$lib/data/aptitude';
	import { ExternalLink, CheckCircle2, ChevronDown } from 'lucide-svelte';

	let companyId = '';
	let categoryId = '';
	let company: any = null;

	$: {
		companyId = $page.params.id || '';
		categoryId = $page.params.category || '';
		company = companies.find(c => c.id === companyId);
	}

	const categoryTitles: Record<string, string> = {
		'dsa': 'DSA Sheet',
		'aptitude': 'Aptitude Practice',
		'logical-reasoning': 'Logical Reasoning',
		'technical-mcq': 'Technical MCQ'
	};

	let openQuestionId: number | null = null;
	function toggleQuestion(id: number) {
		openQuestionId = openQuestionId === id ? null : id;
	}
</script>

<div class="max-w-5xl mx-auto py-8 px-4 md:px-8 space-y-8">
	{#if company && categoryTitles[categoryId]}
		<header class="border-b border-border/50 pb-8">
			<Breadcrumbs items={[
				{ label: 'Company Hub', href: '/company-hub' },
				{ label: company.name, href: `/company-hub/${company.id}` },
				{ label: categoryTitles[categoryId] }
			]} />
			
			<div class="flex items-center gap-5 mt-6">
				<div class="w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold {company.color}">
					{company.logoText}
				</div>
				<div>
					<h1 class="text-2xl font-outfit font-semibold text-text-primary">
						{company.name} {categoryTitles[categoryId]}
					</h1>
					<p class="text-sm text-text-secondary mt-1">Practice questions specifically asked in {company.name} interviews.</p>
				</div>
			</div>
		</header>

		<!-- CONTENT RENDERING -->
		{#if categoryId === 'dsa'}
			<div class="border border-border/50 rounded-xl bg-card-background/20 overflow-hidden flex flex-col">
				<div class="flex items-center px-4 py-3 bg-secondary-background/30 border-b border-border/50 text-xs font-medium text-text-secondary uppercase tracking-wider">
					<div class="w-10 text-center">Status</div>
					<div class="flex-1 px-4">Title</div>
					<div class="w-24">Difficulty</div>
				</div>
				<div class="divide-y divide-border/30">
					{#each neetcode150.slice(0, 15) as prob}
						<div class="group flex items-center px-4 py-3 hover:bg-secondary-background/40 transition-colors cursor-pointer">
							<div class="w-10 flex justify-center">
								{#if prob.status === 'Solved'}
									<CheckCircle2 size={16} class="text-success" />
								{:else}
									<div class="w-4 h-4 rounded border border-border group-hover:border-text-primary/50 transition-colors"></div>
								{/if}
							</div>
							<div class="flex-1 px-4 flex items-center gap-3">
								<span class="text-sm text-text-secondary font-mono">{prob.id}.</span>
								<a href={prob.leetcodeUrl} target="_blank" rel="noopener noreferrer" class="text-sm font-medium text-text-primary hover:text-primary transition-colors flex items-center gap-2 group/link">
									{prob.title}
									<ExternalLink size={12} class="opacity-0 group-hover/link:opacity-100 transition-opacity" />
								</a>
							</div>
							<div class="w-24">
								<span class="text-xs font-medium {prob.difficulty === 'Easy' ? 'text-success' : ''} {prob.difficulty === 'Medium' ? 'text-warning' : ''} {prob.difficulty === 'Hard' ? 'text-danger' : ''}">
									{prob.difficulty}
								</span>
							</div>
						</div>
					{/each}
				</div>
			</div>
		{:else}
			<!-- APTITUDE / LOGICAL / MCQ RENDERING -->
			<div class="space-y-4">
				{#each aptitudeQuestions as q}
					<!-- Simple filtering to show they are different -->
					{#if categoryId === 'aptitude' && q.category === 'Quantitative Aptitude' || 
						 categoryId === 'logical-reasoning' && q.category === 'Logical Reasoning' || 
						 categoryId === 'technical-mcq' && q.category === 'Technical MCQ'}
						<div class="border border-border/50 rounded-xl bg-card-background/20 overflow-hidden">
							<button class="w-full text-left px-6 py-4 flex items-center justify-between hover:bg-secondary-background/30 transition-colors" on:click={() => toggleQuestion(q.id)}>
								<div class="flex gap-4 items-start">
									<span class="text-sm font-mono text-text-secondary mt-0.5">Q{q.id}.</span>
									<div>
										<p class="text-sm font-medium text-text-primary">{q.question}</p>
										<span class="text-xs text-text-secondary inline-block mt-1 bg-secondary-background px-2 py-0.5 rounded">{q.topic}</span>
									</div>
								</div>
								<ChevronDown size={18} class="text-text-secondary transition-transform {openQuestionId === q.id ? 'rotate-180' : ''}" />
							</button>
							
							{#if openQuestionId === q.id}
								<div class="px-6 pb-6 pt-2 border-t border-border/30 bg-secondary-background/10">
									<div class="ml-10 space-y-2 mt-4">
										{#each q.options as opt, i}
											<div class="flex items-center gap-3 p-3 rounded-lg border {q.correctAnswer === i ? 'bg-success/10 border-success/30 text-success' : 'border-border/50 bg-background text-text-secondary'}">
												<div class="w-5 h-5 rounded-full border flex items-center justify-center text-[10px] {q.correctAnswer === i ? 'border-success bg-success text-white' : 'border-border'}">
													{String.fromCharCode(65 + i)}
												</div>
												<span class="text-sm">{opt}</span>
											</div>
										{/each}
									</div>
									<div class="ml-10 mt-6 p-4 rounded-lg bg-primary/5 border border-primary/10">
										<p class="text-xs font-bold text-primary uppercase mb-1">Explanation</p>
										<p class="text-sm text-text-secondary leading-relaxed">{q.explanation}</p>
									</div>
								</div>
							{/if}
						</div>
					{/if}
				{/each}
			</div>
		{/if}
	{:else}
		<div class="py-20 text-center text-text-secondary">
			Category or Company not found.
		</div>
	{/if}
</div>
