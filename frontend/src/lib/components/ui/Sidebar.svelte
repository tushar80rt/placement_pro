<script lang="ts">
	import { LayoutDashboard, Code2, BookOpen, Building2, FileText, Briefcase, MessageSquare, Calendar, Settings, LogOut, PanelLeftClose, BrainCircuit } from 'lucide-svelte';
	import { page } from '$app/stores';

	const navItems = [
		{ name: 'Dashboard', icon: LayoutDashboard, href: '/' },
		{ name: 'DSA Practice', icon: Code2, href: '/dsa' },
		{ name: 'Aptitude', icon: BrainCircuit, href: '/aptitude' },
		{ name: 'Reasoning', icon: MessageSquare, href: '/reasoning' },
		{ name: 'Technical MCQ', icon: BookOpen, href: '/mcq' },
		{ name: 'Courses', icon: BookOpen, href: '/resources' },
		{ name: 'Company Hub', icon: Building2, href: '/companies' },
		{ name: 'Resume', icon: FileText, href: '/resume' },
		{ name: 'Jobs', icon: Briefcase, href: '/jobs' },
		{ name: 'Community', icon: MessageSquare, href: '/community' },
		{ name: 'Interview Prep', icon: Calendar, href: '/interview-prep' },
	];
</script>

<aside class="w-64 bg-background border-r border-border/50 h-screen sticky top-0 flex flex-col pt-6 pb-6 select-none shrink-0">
	<!-- Logo -->
	<div class="px-6 flex items-center justify-between mb-8">
		<a href="/" class="flex items-center gap-3">
			<div class="w-6 h-6 rounded-md bg-primary text-white flex items-center justify-center font-bold text-xs shadow-glow">
				P
			</div>
			<span class="font-bold text-text-primary text-sm tracking-wide">PlacementPro</span>
		</a>
		<button class="text-text-secondary hover:text-text-primary transition-colors">
			<PanelLeftClose size={16} />
		</button>
	</div>

	<!-- Navigation -->
	<nav class="flex-1 px-3 space-y-0.5 overflow-y-auto">
		{#each navItems as item}
			{@const isActive = $page.url.pathname === item.href}
			<a 
				href={item.href}
				class="flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-all duration-200 group relative {isActive ? 'text-text-primary bg-white/10' : 'text-text-secondary hover:text-text-primary hover:bg-white/5'}"
			>
				<item.icon size={16} class="transition-colors {isActive ? 'text-primary' : 'group-hover:text-text-primary'}" />
				<span class="font-medium">{item.name}</span>
			</a>
		{/each}
	</nav>

	<!-- Bottom Actions -->
	<div class="px-3 mt-6 pt-6 border-t border-border/50 space-y-0.5">
		<button class="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm text-text-secondary hover:text-text-primary hover:bg-white/5 transition-all">
			<Settings size={16} />
			<span class="font-medium">Settings</span>
		</button>
		<button class="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm text-text-secondary hover:text-danger hover:bg-white/5 transition-all">
			<LogOut size={16} />
			<span class="font-medium">Logout</span>
		</button>
	</div>
</aside>
