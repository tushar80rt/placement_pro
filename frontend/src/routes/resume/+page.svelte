<script lang="ts">
	import Breadcrumbs from '$lib/components/ui/Breadcrumbs.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import { UploadCloud, CheckCircle2, AlertCircle, FileText, Download, Edit3, Trash2 } from 'lucide-svelte';
</script>

<div class="max-w-6xl mx-auto py-8 px-4 md:px-8 space-y-8">
	
	<!-- Header -->
	<header class="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border/50 pb-6">
		<div>
			<Breadcrumbs items={[{ label: 'Resume Manager' }]} />
			<h1 class="text-2xl md:text-3xl font-outfit font-semibold text-text-primary mt-2">
				Resume Optimizer
			</h1>
		</div>
		<div class="flex items-center gap-3">
			<Button variant="primary" size="sm" class="text-xs h-8 gap-2"><UploadCloud size={14} /> Upload New Resume</Button>
		</div>
	</header>

	<div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
		
		<!-- Left Column: ATS Overview Widget -->
		<div class="space-y-6">
			
			<div class="rounded-xl border border-border/50 bg-card-background/30 p-6 flex flex-col">
				<h3 class="text-sm font-medium text-text-primary mb-4">ATS Compatibility</h3>
				
				<div class="flex items-center justify-between mb-6 pb-6 border-b border-border/50">
					<div class="text-4xl font-outfit font-semibold text-text-primary">88<span class="text-lg text-text-secondary">/100</span></div>
					<div class="w-12 h-12 rounded-full border-4 border-success/20 border-t-success flex items-center justify-center transform -rotate-45">
						<!-- simple css circle -->
					</div>
				</div>

				<h4 class="text-xs font-semibold text-text-secondary uppercase tracking-widest mb-4">Action Items</h4>
				<ul class="space-y-3">
					<li class="flex items-start gap-3">
						<CheckCircle2 size={16} class="text-success shrink-0 mt-0.5" />
						<div>
							<p class="text-sm font-medium text-text-primary">Strong Action Verbs</p>
							<p class="text-xs text-text-secondary mt-0.5">Experience section is well optimized.</p>
						</div>
					</li>
					<li class="flex items-start gap-3">
						<AlertCircle size={16} class="text-warning shrink-0 mt-0.5" />
						<div>
							<p class="text-sm font-medium text-text-primary">Missing Metrics</p>
							<p class="text-xs text-text-secondary mt-0.5">Add quantifiable results to Project #2.</p>
						</div>
					</li>
					<li class="flex items-start gap-3">
						<AlertCircle size={16} class="text-warning shrink-0 mt-0.5" />
						<div>
							<p class="text-sm font-medium text-text-primary">Keyword Gap</p>
							<p class="text-xs text-text-secondary mt-0.5">Consider adding "Docker" to skills.</p>
						</div>
					</li>
				</ul>
			</div>
		</div>

		<!-- Right Column: Document List -->
		<div class="lg:col-span-2">
			<div class="border border-border/50 rounded-xl overflow-hidden bg-card-background/20 flex flex-col h-full">
				
				<div class="flex items-center px-6 py-4 bg-secondary-background/30 border-b border-border/50">
					<h3 class="text-sm font-medium text-text-primary">Your Documents</h3>
				</div>

				<div class="divide-y divide-border/30 flex-1">
					{#each [
						{ name: 'Master_Resume_2026.pdf', role: 'Software Engineer', date: 'Oct 12, 2026', score: 92 },
						{ name: 'Frontend_Specific.pdf', role: 'Frontend Engineer', date: 'Sep 28, 2026', score: 85 },
						{ name: 'Backend_Systems.pdf', role: 'Backend Engineer', date: 'Aug 15, 2026', score: 78 }
					] as doc}
						<div class="group flex items-center justify-between px-6 py-4 hover:bg-secondary-background/40 transition-colors">
							
							<div class="flex items-center gap-4">
								<div class="w-10 h-10 rounded bg-background border border-border flex items-center justify-center text-text-secondary group-hover:border-primary/50 group-hover:text-primary transition-colors">
									<FileText size={18} />
								</div>
								<div>
									<h4 class="text-sm font-medium text-text-primary mb-0.5">{doc.name}</h4>
									<div class="flex items-center gap-2 text-xs text-text-secondary">
										<span>{doc.role}</span>
										<span class="text-border">•</span>
										<span>Updated {doc.date}</span>
									</div>
								</div>
							</div>

							<div class="flex items-center gap-6">
								<div class="hidden sm:flex flex-col items-end">
									<span class="text-sm font-medium text-text-primary">{doc.score}/100</span>
									<span class="text-[10px] uppercase tracking-wider text-text-secondary">ATS Score</span>
								</div>
								
								<div class="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
									<Button variant="ghost" size="icon" class="h-8 w-8 text-text-secondary hover:text-text-primary"><Download size={14}/></Button>
									<Button variant="ghost" size="icon" class="h-8 w-8 text-text-secondary hover:text-text-primary"><Edit3 size={14}/></Button>
									<Button variant="ghost" size="icon" class="h-8 w-8 text-text-secondary hover:text-danger"><Trash2 size={14}/></Button>
								</div>
							</div>
						</div>
					{/each}
				</div>
				
				<div class="px-6 py-4 border-t border-border/50 bg-secondary-background/10 text-center">
					<p class="text-xs text-text-secondary">Using 3 of 5 allowed templates on the Free plan.</p>
				</div>
			</div>
		</div>

	</div>
</div>
