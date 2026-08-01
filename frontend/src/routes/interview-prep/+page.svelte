<script lang="ts">
	import Breadcrumbs from '$lib/components/ui/Breadcrumbs.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import { Calendar, Video, Clock, Star, Users, Filter, Plus } from 'lucide-svelte';
</script>

<div class="max-w-6xl mx-auto py-8 px-4 md:px-8 space-y-8">
	
	<!-- Header -->
	<header class="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border/50 pb-6">
		<div>
			<Breadcrumbs items={[{ label: 'Interview Prep' }]} />
			<h1 class="text-2xl md:text-3xl font-outfit font-semibold text-text-primary mt-2">
				Mock Interviews
			</h1>
		</div>
		<div class="flex items-center gap-3">
			<Button variant="primary" size="sm" class="text-xs h-8 gap-2"><Plus size={14} /> Schedule Mock</Button>
		</div>
	</header>

	<!-- Upcoming Session (Professional Widget) -->
	<div class="border border-border/50 bg-card-background/30 rounded-xl p-5 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-border transition-colors">
		<div class="flex-1">
			<div class="flex items-center gap-2 mb-2">
				<span class="text-[10px] font-bold tracking-widest uppercase text-accent bg-accent/10 border border-accent/20 px-2 py-0.5 rounded flex items-center gap-1">
					<Video size={10} /> Starting Soon
				</span>
				<span class="text-xs text-text-secondary">Today, 4:00 PM</span>
			</div>
			<h2 class="text-lg font-medium text-text-primary mb-1">System Design Interview</h2>
			<div class="flex items-center gap-4 text-xs text-text-secondary">
				<span class="flex items-center gap-1"><Users size={14} /> with Senior Engineer at Meta</span>
				<span class="flex items-center gap-1"><Clock size={14} /> 60 mins</span>
			</div>
		</div>
		
		<div class="w-full md:w-48 flex flex-col gap-2">
			<Button variant="primary" size="sm" class="w-full h-8 gap-2">Join Call</Button>
			<Button variant="secondary" size="sm" class="w-full h-8">Reschedule</Button>
		</div>
	</div>

	<div class="flex flex-col lg:flex-row gap-8 pt-4">
		
		<!-- Feedback Table -->
		<div class="flex-1 border border-border/50 rounded-xl overflow-hidden bg-card-background/20 flex flex-col h-fit">
			
			<div class="flex items-center px-6 py-3 bg-secondary-background/30 border-b border-border/50 text-xs font-medium text-text-secondary uppercase tracking-wider">
				<div class="flex-1">Past Sessions & Feedback</div>
				<div class="w-32 text-right">Rating</div>
			</div>

			<div class="divide-y divide-border/30">
				{#each [
					{ type: 'DSA Interview', date: 'Oct 12', rating: 4, notes: 'Strong problem solving skills. Needs improvement on time complexity analysis.' },
					{ type: 'Behavioral', date: 'Oct 05', rating: 5, notes: 'Excellent communication. Great STAR method examples used for conflict resolution.' },
					{ type: 'System Design', date: 'Sep 28', rating: 3, notes: 'Good high-level overview. Needs to dive deeper into database partitioning tradeoffs.' }
				] as feedback}
					<div class="group px-6 py-4 hover:bg-secondary-background/40 transition-colors">
						
						<div class="flex items-center justify-between mb-3">
							<div class="flex items-center gap-3">
								<div class="w-8 h-8 rounded bg-background border border-border flex items-center justify-center text-text-secondary group-hover:border-primary/50 transition-colors">
									<Users size={14} />
								</div>
								<div>
									<h4 class="text-sm font-medium text-text-primary">{feedback.type}</h4>
									<p class="text-xs text-text-secondary">{feedback.date}</p>
								</div>
							</div>
							
							<div class="flex items-center gap-1">
								{#each Array(5) as _, i}
									<Star size={12} class={i < feedback.rating ? 'fill-warning text-warning' : 'text-border fill-transparent'} />
								{/each}
							</div>
						</div>

						<div class="bg-background/50 border border-border/50 rounded-lg p-3 text-sm text-text-secondary leading-relaxed">
							{feedback.notes}
						</div>
					</div>
				{/each}
			</div>
		</div>

		<!-- Stats Sidebar -->
		<aside class="w-full lg:w-64 shrink-0 space-y-6">
			<div class="border border-border/50 bg-secondary-background/20 rounded-xl p-5">
				<h3 class="text-xs font-semibold text-text-secondary uppercase tracking-widest mb-4">Performance</h3>
				
				<div class="space-y-4">
					<div>
						<div class="flex justify-between text-xs text-text-secondary mb-1.5">
							<span>Avg Rating</span>
							<span class="text-text-primary font-medium">4.2 / 5.0</span>
						</div>
						<div class="w-full bg-background h-1.5 rounded-full overflow-hidden border border-border/50">
							<div class="bg-warning h-full rounded-full w-[84%]"></div>
						</div>
					</div>
					<div>
						<div class="flex justify-between text-xs text-text-secondary mb-1.5">
							<span>Mocks Completed</span>
							<span class="text-text-primary font-medium">12</span>
						</div>
						<div class="w-full bg-background h-1.5 rounded-full overflow-hidden border border-border/50">
							<div class="bg-primary h-full rounded-full w-[60%]"></div>
						</div>
					</div>
				</div>
			</div>
		</aside>

	</div>
</div>
