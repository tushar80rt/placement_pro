<script>
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { page } from '$app/stores';
	import { fly, fade } from 'svelte/transition';
	import AppShell from '$lib/components/ui/AppShell.svelte';
	import { onMount } from 'svelte';

	let { children } = $props();

	onMount(async () => {
		const { default: Lenis } = await import('https://cdn.jsdelivr.net/npm/lenis@1.1.13/+esm');
		const lenis = new Lenis({
			autoRaf: true,
		});
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>PlacementPro</title>
</svelte:head>

<div class="min-h-screen bg-background text-text-primary">
		{#if $page.url.pathname === '/'}
		<main class="min-h-screen overflow-x-hidden relative bg-background">
			{#key $page.url.pathname}
				<div 
					in:fly={{ y: 20, duration: 400, delay: 200 }} 
					out:fade={{ duration: 200 }}
					class="w-full min-h-full"
				>
					{@render children()}
				</div>
			{/key}
		</main>
		{:else}
			<AppShell>{@render children()}</AppShell>
		{/if}
</div>
