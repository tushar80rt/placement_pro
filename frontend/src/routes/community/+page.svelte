<script lang="ts">
	import Breadcrumbs from '$lib/components/ui/Breadcrumbs.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import { MessageSquare, MessageCircle, ChevronUp, Search, Plus } from 'lucide-svelte';
</script>

<div class="max-w-6xl mx-auto py-8 px-4 md:px-8 space-y-8 h-full flex flex-col">
	
	<!-- Header -->
	<header class="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border/50 pb-6 mb-6">
		<div>
			<Breadcrumbs items={[{ label: 'Community' }]} />
			<h1 class="text-2xl md:text-3xl font-outfit font-semibold text-text-primary mt-2">
				Discussions
			</h1>
		</div>
		<div class="flex items-center gap-3">
			<div class="relative w-64 hidden md:block">
				<Search size={14} class="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" />
				<input type="text" placeholder="Search discussions..." class="w-full bg-secondary-background/50 border border-border rounded-md pl-9 pr-3 py-1.5 text-sm text-text-primary focus:outline-none focus:border-primary transition-colors" />
			</div>
			<Button variant="primary" size="sm" class="text-xs h-8 gap-2"><Plus size={14} /> New Post</Button>
		</div>
	</header>

	<div class="flex flex-col lg:flex-row gap-8 flex-1 min-h-0">
		
		<!-- Sidebar Topics -->
		<aside class="w-full lg:w-56 shrink-0 space-y-6">
			<div>
				<h3 class="text-xs font-semibold text-text-secondary uppercase tracking-widest mb-3">Topics</h3>
				<ul class="space-y-0.5">
					{#each ['All Discussions', 'Interview Experiences', 'Referrals', 'Resume Review', 'Compensation'] as topic, i}
						<li>
							<button class="w-full flex items-center justify-between text-sm px-3 py-2 rounded-md transition-colors {i === 0 ? 'bg-secondary-background text-text-primary font-medium border border-border/50' : 'text-text-secondary hover:text-text-primary hover:bg-secondary-background/50 border border-transparent'}">
								{topic}
							</button>
						</li>
					{/each}
				</ul>
			</div>

			<div>
				<h3 class="text-xs font-semibold text-text-secondary uppercase tracking-widest mb-3">Top Tags</h3>
				<div class="flex flex-wrap gap-2">
					{#each ['Google', 'New Grad', 'System Design', 'Offer', 'Amazon'] as tag}
						<button class="px-2 py-1 rounded bg-secondary-background border border-border text-[10px] uppercase tracking-wider text-text-secondary hover:text-text-primary hover:border-primary/50 transition-colors">
							{tag}
						</button>
					{/each}
				</div>
			</div>
		</aside>

		<!-- Data Table -->
		<main class="flex-1 border border-border/50 rounded-xl bg-card-background/20 flex flex-col overflow-hidden">
			
			<div class="flex items-center px-6 py-3 bg-secondary-background/30 border-b border-border/50 text-xs font-medium text-text-secondary uppercase tracking-wider">
				<div class="flex-1">Discussion</div>
				<div class="w-32 hidden md:block">Author</div>
				<div class="w-24 text-right">Replies</div>
			</div>

			<div class="divide-y divide-border/30 overflow-y-auto">
				{#each [
					{ title: 'Google L5 System Design interview experience', author: 'Alex S.', time: '4h ago', upvotes: 245, comments: 42, tags: ['Google', 'System Design'] },
					{ title: 'Review my resume for Frontend roles?', author: 'Sarah L.', time: '12h ago', upvotes: 34, comments: 15, tags: ['Resume'] },
					{ title: 'Stripe standard compensation for New Grad in SF?', author: 'John D.', time: '1d ago', upvotes: 89, comments: 22, tags: ['Stripe', 'Offer'] },
					{ title: 'Seeking Referral for Atlassian P3 position', author: 'Emily C.', time: '2d ago', upvotes: 12, comments: 2, tags: ['Referrals'] }
				] as thread}
					<div class="group flex items-center px-4 py-4 hover:bg-secondary-background/40 transition-colors cursor-pointer">
						
						<!-- Upvotes -->
						<div class="w-12 flex flex-col items-center justify-center gap-0.5 text-text-secondary group-hover:text-primary transition-colors mr-2">
							<ChevronUp size={16} />
							<span class="text-xs font-medium">{thread.upvotes}</span>
						</div>
						
						<!-- Thread Info -->
						<div class="flex-1 flex flex-col justify-center">
							<h3 class="text-sm font-medium text-text-primary mb-1.5 group-hover:text-primary transition-colors">{thread.title}</h3>
							<div class="flex items-center gap-2">
								{#each thread.tags as tag}
									<span class="text-[9px] font-semibold tracking-widest uppercase bg-secondary-background border border-border text-text-secondary px-1.5 py-0.5 rounded">
										{tag}
									</span>
								{/each}
								<span class="text-xs text-text-secondary opacity-60 ml-2">{thread.time}</span>
							</div>
						</div>

						<!-- Author -->
						<div class="w-32 hidden md:flex items-center gap-2 text-sm text-text-secondary">
							<div class="w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center text-[10px] font-bold">
								{thread.author[0]}
							</div>
							{thread.author}
						</div>

						<!-- Replies -->
						<div class="w-24 flex items-center justify-end gap-1.5 text-sm text-text-secondary">
							<MessageCircle size={14} /> {thread.comments}
						</div>
					</div>
				{/each}
			</div>
		</main>
	</div>
</div>
