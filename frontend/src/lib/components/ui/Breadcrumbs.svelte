<script lang="ts">
	import { ChevronRight, Home } from 'lucide-svelte';

	let { 
		items = [] 
	} = $props<{
		items: { label: string; href?: string }[];
	}>();
</script>

<nav class="flex items-center text-sm text-text-secondary mb-6" aria-label="Breadcrumb">
	<ol class="flex items-center space-x-2">
		<li>
			<a href="/" class="hover:text-primary transition-colors flex items-center">
				<Home size={16} />
				<span class="sr-only">Home</span>
			</a>
		</li>
		{#each items as item, index}
			<li class="flex items-center space-x-2">
				<ChevronRight size={14} class="text-border" />
				{#if item.href && index !== items.length - 1}
					<a href={item.href} class="hover:text-primary transition-colors font-medium">
						{item.label}
					</a>
				{:else}
					<span class="text-text-primary font-medium pointer-events-none" aria-current="page">
						{item.label}
					</span>
				{/if}
			</li>
		{/each}
	</ol>
</nav>
