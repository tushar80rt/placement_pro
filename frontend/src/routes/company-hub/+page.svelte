<script lang="ts">
	import Breadcrumbs from '$lib/components/ui/Breadcrumbs.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import { Search, MapPin, Users, TrendingUp, Building2, ExternalLink, Filter } from 'lucide-svelte';
	import { companies } from '$lib/data/companies';
</script>

<div class="max-w-6xl mx-auto py-8 px-4 md:px-8 space-y-8">
	
	<!-- Header -->
	<header class="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border/50 pb-6">
		<div>
			<Breadcrumbs items={[{ label: 'Company Hub' }]} />
			<h1 class="text-2xl md:text-3xl font-outfit font-semibold text-text-primary mt-2">
				Company Research
			</h1>
		</div>
		<div class="flex items-center gap-3">
			<div class="relative w-64 hidden md:block">
				<Search size={14} class="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" />
				<input type="text" placeholder="Search companies..." class="w-full bg-secondary-background/50 border border-border rounded-md pl-9 pr-3 py-1.5 text-sm text-text-primary focus:outline-none focus:border-primary transition-colors" />
			</div>
			<Button variant="secondary" size="sm" class="text-xs h-8 gap-2"><Filter size={14} /> Filter</Button>
		</div>
	</header>

	<!-- Highlight / Featured Company -->
	<div class="rounded-xl border border-border/50 bg-card-background/30 p-6 flex flex-col lg:flex-row gap-8 items-start hover:border-border transition-colors">
		<div class="w-16 h-16 shrink-0 rounded-lg bg-secondary-background border border-border flex items-center justify-center font-bold text-2xl text-text-primary">
			S
		</div>
		<div class="flex-1">
			<div class="flex items-center gap-2 mb-2">
				<h2 class="text-xl font-medium text-text-primary">Stripe</h2>
				<span class="text-[10px] font-bold tracking-widest uppercase text-success bg-success/10 border border-success/20 px-2 py-0.5 rounded flex items-center gap-1">
					<TrendingUp size={10} /> Active Hiring
				</span>
			</div>
			<p class="text-sm text-text-secondary mb-4 max-w-2xl leading-relaxed">
				Known for their rigorous "Bug Smash" interviews and meticulous documentation culture, Stripe remains the gold standard for developer-first products. Currently expanding their core payments infrastructure team.
			</p>
			<div class="flex flex-wrap items-center gap-6 text-xs text-text-secondary">
				<span class="flex items-center gap-1.5"><MapPin size={14} /> San Francisco, CA</span>
				<span class="flex items-center gap-1.5"><Users size={14} /> 5,000+ Employees</span>
				<span class="flex items-center gap-1.5"><Building2 size={14} /> Fintech</span>
			</div>
		</div>
		<div class="shrink-0 flex flex-col gap-2 w-full lg:w-48">
			<Button variant="primary" size="sm" class="w-full">View Open Roles</Button>
			<Button variant="secondary" size="sm" class="w-full">Interview Prep Guide</Button>
		</div>
	</div>

	<!-- Directory -->
	<div class="border border-border/50 rounded-xl overflow-hidden bg-card-background/20">
		<div class="flex items-center px-6 py-3 bg-secondary-background/30 border-b border-border/50 text-xs font-medium text-text-secondary uppercase tracking-wider">
			<div class="flex-1">Company</div>
			<div class="w-32 hidden md:block">Industry</div>
			<div class="w-40 hidden lg:block">Location</div>
			<div class="w-24 text-right">Status</div>
		</div>

		<div class="divide-y divide-border/30">
			{#each companies as company}
				<a href="/company-hub/{company.id}" data-sveltekit-reload class="group flex items-center px-6 py-4 hover:bg-secondary-background/40 transition-colors cursor-pointer w-full">
					<div class="flex-1 flex items-center gap-4">
						<div class="w-8 h-8 rounded bg-background border border-border flex items-center justify-center text-xs font-bold {company.color} {company.hoverColor} transition-colors">
							{company.logoText}
						</div>
						<span class="text-sm font-medium text-text-primary group-hover:text-primary transition-colors flex items-center gap-2">
							{company.name}
							<ExternalLink size={12} class="opacity-0 group-hover:opacity-100 text-text-secondary transition-opacity" />
						</span>
					</div>
					<div class="w-32 hidden md:block text-sm text-text-secondary">
						{company.industry}
					</div>
					<div class="w-40 hidden lg:block text-sm text-text-secondary">
						{company.location}
					</div>
					<div class="w-24 text-right">
						{#if company.hiring}
							<span class="text-xs font-medium text-success">Hiring</span>
						{:else}
							<span class="text-xs text-text-secondary">Low Vol</span>
						{/if}
					</div>
				</a>
			{/each}
		</div>
	</div>
</div>
