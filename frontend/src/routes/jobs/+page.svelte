<script lang="ts">
	import Breadcrumbs from '$lib/components/ui/Breadcrumbs.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import { Search, MapPin, Building2, Briefcase, DollarSign, Filter, Bookmark, ExternalLink } from 'lucide-svelte';
</script>

<div class="max-w-7xl mx-auto py-8 px-4 md:px-8 h-full flex flex-col">
	
	<!-- Header -->
	<header class="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border/50 pb-6 mb-6">
		<div>
			<Breadcrumbs items={[{ label: 'Job Board' }]} />
			<h1 class="text-2xl md:text-3xl font-outfit font-semibold text-text-primary mt-2">
				Open Roles
			</h1>
		</div>
		<div class="flex items-center gap-3">
			<div class="relative w-64 md:w-80">
				<Search size={14} class="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" />
				<input type="text" placeholder="Search roles, skills, or companies..." class="w-full bg-secondary-background/50 border border-border rounded-md pl-9 pr-3 py-1.5 text-sm text-text-primary focus:outline-none focus:border-primary transition-colors" />
			</div>
			<Button variant="primary" size="sm" class="text-xs h-8 gap-2">Search</Button>
		</div>
	</header>

	<div class="flex flex-col lg:flex-row gap-8 flex-1 min-h-0">
		
		<!-- Sidebar Filters -->
		<aside class="w-full lg:w-56 shrink-0 space-y-6">
			<div>
				<h3 class="text-xs font-semibold text-text-secondary uppercase tracking-widest mb-3">Job Type</h3>
				<div class="space-y-2">
					<label class="flex items-center gap-2 text-sm text-text-primary cursor-pointer hover:text-primary transition-colors">
						<input type="checkbox" class="rounded bg-secondary-background border-border text-primary focus:ring-primary/50" checked> Full-time
					</label>
					<label class="flex items-center gap-2 text-sm text-text-primary cursor-pointer hover:text-primary transition-colors">
						<input type="checkbox" class="rounded bg-secondary-background border-border text-primary focus:ring-primary/50"> Part-time
					</label>
					<label class="flex items-center gap-2 text-sm text-text-primary cursor-pointer hover:text-primary transition-colors">
						<input type="checkbox" class="rounded bg-secondary-background border-border text-primary focus:ring-primary/50" checked> Internship
					</label>
				</div>
			</div>
			
			<div>
				<h3 class="text-xs font-semibold text-text-secondary uppercase tracking-widest mb-3">Work Mode</h3>
				<div class="space-y-2">
					<label class="flex items-center gap-2 text-sm text-text-primary cursor-pointer hover:text-primary transition-colors">
						<input type="checkbox" class="rounded bg-secondary-background border-border text-primary focus:ring-primary/50" checked> Remote
					</label>
					<label class="flex items-center gap-2 text-sm text-text-primary cursor-pointer hover:text-primary transition-colors">
						<input type="checkbox" class="rounded bg-secondary-background border-border text-primary focus:ring-primary/50"> Hybrid
					</label>
					<label class="flex items-center gap-2 text-sm text-text-primary cursor-pointer hover:text-primary transition-colors">
						<input type="checkbox" class="rounded bg-secondary-background border-border text-primary focus:ring-primary/50"> On-site
					</label>
				</div>
			</div>
		</aside>

		<!-- Data Table -->
		<main class="flex-1 border border-border/50 rounded-xl bg-card-background/20 flex flex-col overflow-hidden">
			
			<!-- Table Header -->
			<div class="flex items-center px-6 py-3 bg-secondary-background/30 border-b border-border/50 text-xs font-medium text-text-secondary uppercase tracking-wider">
				<div class="flex-1">Role & Company</div>
				<div class="w-32 hidden lg:block">Location</div>
				<div class="w-32 hidden md:block">Type</div>
				<div class="w-32 text-right">Compensation</div>
			</div>

			<!-- Table Body -->
			<div class="divide-y divide-border/30 overflow-y-auto">
				{#each [
					{ title: 'Frontend Engineer', company: 'Linear', location: 'Remote', type: 'Full-time', salary: '$120k - $160k', match: true },
					{ title: 'Software Engineering Intern', company: 'Stripe', location: 'San Francisco, CA', type: 'Internship', salary: '$8k/mo', match: false },
					{ title: 'Full Stack Developer', company: 'Vercel', location: 'Remote', type: 'Full-time', salary: '$130k - $170k', match: true },
					{ title: 'Backend Engineer, Core', company: 'Supabase', location: 'Remote', type: 'Full-time', salary: '$140k - $180k', match: false },
					{ title: 'Product Designer', company: 'Figma', location: 'New York, NY', type: 'Full-time', salary: '$150k - $190k', match: false }
				] as job}
					<div class="group relative flex items-center px-6 py-4 hover:bg-secondary-background/40 transition-colors cursor-pointer">
						
						{#if job.match}
							<div class="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary rounded-r-full shadow-glow"></div>
						{/if}

						<div class="flex-1 flex flex-col justify-center">
							<div class="flex items-center gap-2 mb-1">
								<h3 class="text-sm font-medium text-text-primary group-hover:text-primary transition-colors">{job.title}</h3>
								{#if job.match}
									<span class="text-[9px] font-bold tracking-widest uppercase bg-primary/10 text-primary px-1.5 py-0.5 rounded border border-primary/20">Match</span>
								{/if}
							</div>
							<div class="flex items-center gap-2 text-xs text-text-secondary">
								<Building2 size={12} /> {job.company}
							</div>
						</div>

						<div class="w-32 hidden lg:flex items-center gap-1.5 text-sm text-text-secondary">
							<MapPin size={14} /> {job.location}
						</div>

						<div class="w-32 hidden md:flex items-center gap-1.5 text-sm text-text-secondary">
							<Briefcase size={14} /> {job.type}
						</div>

						<div class="w-32 flex items-center justify-end gap-4 text-sm text-text-primary font-medium">
							{job.salary}
							<ExternalLink size={14} class="text-text-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
						</div>
					</div>
				{/each}
			</div>
		</main>
	</div>
</div>
