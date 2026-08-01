<script lang="ts">
	import Breadcrumbs from '$lib/components/ui/Breadcrumbs.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import { Search, PlayCircle, Clock, Star, ExternalLink, Filter } from 'lucide-svelte';
</script>

<div class="max-w-6xl mx-auto py-8 px-4 md:px-8 space-y-8">
	
	<!-- Header -->
	<header class="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border/50 pb-6">
		<div>
			<Breadcrumbs items={[{ label: 'Resources & Courses' }]} />
			<h1 class="text-2xl md:text-3xl font-outfit font-semibold text-text-primary mt-2">
				Learning Path
			</h1>
		</div>
		<div class="flex items-center gap-3">
			<div class="relative w-64 hidden md:block">
				<Search size={14} class="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" />
				<input type="text" placeholder="Search courses..." class="w-full bg-secondary-background/50 border border-border rounded-md pl-9 pr-3 py-1.5 text-sm text-text-primary focus:outline-none focus:border-primary transition-colors" />
			</div>
			<Button variant="secondary" size="sm" class="text-xs h-8 gap-2"><Filter size={14} /> Filter</Button>
		</div>
	</header>

	<!-- Continue Learning (Professional Widget) -->
	<div class="border border-border/50 bg-card-background/30 rounded-xl p-5 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-border transition-colors">
		<div class="flex-1">
			<div class="flex items-center gap-2 mb-2">
				<span class="text-[10px] font-bold tracking-widest uppercase text-primary bg-primary/10 px-2 py-0.5 rounded">In Progress</span>
				<span class="text-xs text-text-secondary">System Design Masterclass</span>
			</div>
			<h2 class="text-lg font-medium text-text-primary mb-1">Module 4: Load Balancing and Consistent Hashing</h2>
			<div class="flex items-center gap-4 text-xs text-text-secondary">
				<span class="flex items-center gap-1"><Clock size={14} /> 45m left</span>
				<span class="flex items-center gap-1"><Star size={14} class="text-warning fill-warning" /> 4.9/5</span>
			</div>
		</div>
		
		<div class="w-full md:w-64 flex flex-col gap-3">
			<div class="flex justify-between text-xs text-text-secondary">
				<span>Progress</span>
				<span class="text-text-primary font-medium">45%</span>
			</div>
			<div class="w-full bg-secondary-background h-1.5 rounded-full overflow-hidden border border-border/50">
				<div class="bg-primary h-full rounded-full w-[45%]"></div>
			</div>
			<Button variant="primary" size="sm" class="w-full h-8 mt-1 gap-2">Resume Course <PlayCircle size={14}/></Button>
		</div>
	</div>

	<!-- Course Grid -->
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
		{#each [
			{ title: 'React Performance Tuning', author: 'Alex Singh', level: 'Advanced', time: '4h 30m', tags: ['Frontend'] },
			{ title: 'Dynamic Programming Patterns', author: 'Sarah Lee', level: 'Intermediate', time: '6h 15m', tags: ['DSA'] },
			{ title: 'Full Stack Next.js 15', author: 'John Doe', level: 'Beginner', time: '12h 0m', tags: ['Web Dev'] },
			{ title: 'Advanced CSS Layouts', author: 'Emily Chen', level: 'Intermediate', time: '3h 45m', tags: ['Design'] },
			{ title: 'Database Indexing Deep Dive', author: 'Alex Singh', level: 'Advanced', time: '5h 20m', tags: ['Backend'] },
			{ title: 'Behavioral Interview Prep', author: 'HR Experts', level: 'All Levels', time: '2h 10m', tags: ['Soft Skills'] }
		] as course}
			<div class="group border border-border/50 bg-secondary-background/10 rounded-xl p-5 hover:bg-secondary-background/30 hover:border-text-primary/20 transition-all cursor-pointer flex flex-col justify-between">
				<div>
					<div class="flex items-center justify-between mb-3">
						<div class="flex gap-2">
							{#each course.tags as tag}
								<span class="text-[10px] font-semibold px-2 py-0.5 rounded bg-secondary-background border border-border text-text-secondary uppercase tracking-wider">
									{tag}
								</span>
							{/each}
						</div>
						<ExternalLink size={14} class="text-text-secondary opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all" />
					</div>
					
					<h3 class="font-medium text-base text-text-primary mb-1 group-hover:text-primary transition-colors leading-tight">
						{course.title}
					</h3>
					<p class="text-xs text-text-secondary mb-4">{course.author}</p>
				</div>
				
				<div class="flex items-center justify-between pt-4 border-t border-border/50 text-xs text-text-secondary">
					<span class="flex items-center gap-1.5"><Clock size={12} /> {course.time}</span>
					<span class="font-medium">{course.level}</span>
				</div>
			</div>
		{/each}
	</div>
</div>
