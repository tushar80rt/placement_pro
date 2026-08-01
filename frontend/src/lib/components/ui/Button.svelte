<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { Snippet } from 'svelte';

	type Variant = 'primary' | 'secondary' | 'ghost';
	type Size = 'sm' | 'md' | 'lg' | 'icon';

	interface Props {
		variant?: Variant;
		size?: Size;
		class?: string | undefined | null;
		children?: Snippet;
		[key: string]: any;
	}

	let { 
		variant = 'primary', 
		size = 'md', 
		class: className = '', 
		children,
		...rest 
	}: Props = $props();

	const variants: Record<Variant, string> = {
		primary: 'bg-primary text-white hover:bg-primary/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] border border-primary/50',
		secondary: 'bg-white/5 text-text-primary border border-white/10 hover:bg-white/10 shadow-sm',
		ghost: 'bg-transparent text-text-secondary hover:text-text-primary hover:bg-white/5 border border-transparent'
	};

	const sizes: Record<Size, string> = {
		sm: 'h-8 px-3 text-xs',
		md: 'h-10 px-4 text-sm',
		lg: 'h-12 px-6 text-base',
		icon: 'h-10 w-10 flex items-center justify-center'
	};
</script>

<button 
	class={twMerge(
		'inline-flex items-center justify-center rounded-md font-medium transition-all focus:outline-none focus:ring-2 focus:ring-primary/50 active:scale-[0.98]',
		variants[variant],
		sizes[size],
		className
	)}
	{...rest}
>
	{@render children?.()}
</button>
