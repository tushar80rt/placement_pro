<script lang="ts">
	import { Search, Bell, ChevronDown } from 'lucide-svelte';
</script>

<header class="h-14 bg-background border-b border-border/50 flex items-center justify-between px-6 sticky top-0 z-50">
	
	<!-- Command K Search -->
	<div class="flex-1 max-w-xl">
		<button class="w-full flex items-center justify-between px-3 py-1.5 rounded-md bg-secondary-background border border-border/50 text-text-secondary hover:text-text-primary hover:border-text-primary/30 transition-all text-sm group">
			<div class="flex items-center gap-2">
				<Search size={14} class="group-hover:text-text-primary transition-colors" />
				<span class="font-normal">Search...</span>
			</div>
			<div class="flex items-center gap-1">
				<kbd class="px-1.5 py-0.5 text-[10px] font-mono bg-background border border-border rounded text-text-secondary">Ctrl</kbd>
				<kbd class="px-1.5 py-0.5 text-[10px] font-mono bg-background border border-border rounded text-text-secondary">K</kbd>
			</div>
		</button>
	</div>

	<!-- Right Actions -->
	<div class="flex items-center gap-6 ml-6">
		<button class="relative text-text-secondary hover:text-text-primary transition-colors">
			<Bell size={18} />
			<span class="absolute 1 top-0 right-0 w-2 h-2 rounded-full bg-danger border-2 border-background"></span>
		</button>
		
		<div class="h-5 w-px bg-border/50"></div>

		<button class="flex items-center gap-2 hover:opacity-80 transition-opacity">
			<div class="w-7 h-7 rounded-full bg-gradient-to-br from-primary to-accent border border-border flex items-center justify-center text-white text-xs font-bold">
				AS
			</div>
			<div class="hidden md:flex flex-col items-start">
				<span class="text-xs font-medium text-text-primary leading-none mb-0.5">Alex Singh</span>
				<span class="text-[10px] text-text-secondary leading-none">Pro Plan</span>
			</div>
			<ChevronDown size={14} class="text-text-secondary ml-1" />
		</button>
	</div>

</header>
