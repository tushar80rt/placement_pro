<script lang="ts">
	import { clsx, type ClassValue } from 'clsx';
	import { twMerge } from 'tailwind-merge';

	function cn(...inputs: ClassValue[]) {
		return twMerge(clsx(inputs));
	}

	let {
		class: className = '',
		variant = 'default',
		children,
		...rest
	} = $props<{
		class?: string;
		variant?: keyof typeof variants;
		children?: import('svelte').Snippet;
		[key: string]: any;
	}>();

	const variants = {
		default: 'bg-card-background border border-border shadow-card hover:shadow-card-hover transition-shadow duration-300',
		'gradient-border': 'gradient-border bg-card-background shadow-card hover:shadow-card-hover transition-shadow duration-300',
		glass: 'glass shadow-card hover:shadow-card-hover transition-shadow duration-300'
	};
</script>

<div class={cn('rounded-xl overflow-hidden', variants[variant as keyof typeof variants], className)} {...rest}>
	{#if children}
		{@render children()}
	{/if}
</div>
