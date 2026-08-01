<script>
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { page } from '$app/stores';
	import AppShell from '$lib/components/ui/AppShell.svelte';

	let { children } = $props();

	let isHome = $derived($page.url.pathname === '/');
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>PlacementPro</title>
</svelte:head>

{#if isHome}
	<!-- Home page manages its own full-page layout (animated bg, header, etc.) -->
	{@render children()}
{:else}
	<div class="min-h-screen bg-background text-text-primary">
		<AppShell>{@render children()}</AppShell>
	</div>
{/if}
