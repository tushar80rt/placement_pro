<script>
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import AppShell from '$lib/components/ui/AppShell.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>PlacementPro — Placement Preparation Platform</title>
</svelte:head>

<div class="min-h-screen bg-background text-text-primary">
	<AppShell>
		{@render children()}
	</AppShell>
</div>
