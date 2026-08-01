<script lang="ts">
	import { Search, Filter, ArrowUpDown } from 'lucide-svelte';
	import Button from '$lib/components/ui/Button.svelte';

	let {
		placeholder = 'Search...',
		searchQuery = $bindable(''),
	} = $props<{
		placeholder?: string;
		searchQuery?: string;
	}>();
</script>

<div class="flex flex-col sm:flex-row items-center justify-between gap-4 w-full bg-card-background border border-border rounded-xl p-3 shadow-sm mb-6">
	<!-- Search -->
	<div class="relative w-full sm:max-w-md group">
		<div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-text-secondary group-focus-within:text-primary transition-colors">
			<Search size={18} />
		</div>
		<input 
			type="text" 
			{placeholder}
			bind:value={searchQuery}
			class="block w-full pl-10 pr-3 py-2 border border-transparent rounded-lg leading-5 bg-secondary-background/50 text-text-primary placeholder-text-secondary focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm transition-all duration-200"
		/>
	</div>

	<!-- Actions -->
	<div class="flex items-center gap-2 w-full sm:w-auto">
		<Button variant="secondary" size="sm" class="flex-1 sm:flex-none flex items-center gap-2">
			<Filter size={16} />
			<span>Filters</span>
		</Button>
		<Button variant="secondary" size="sm" class="flex-1 sm:flex-none flex items-center gap-2">
			<ArrowUpDown size={16} />
			<span>Sort</span>
		</Button>
	</div>
</div>
