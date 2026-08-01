<script>
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { page } from '$app/stores';
	import { fly, fade } from 'svelte/transition';
	import AppShell from '$lib/components/ui/AppShell.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>PlacementPro</title>
</svelte:head>

<div class="min-h-screen bg-background text-text-primary">
		{#if $page.url.pathname === '/'}
		<main class="min-h-screen relative bg-background">
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
