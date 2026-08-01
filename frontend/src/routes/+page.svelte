<script lang="ts">
	import { ArrowRight, BookOpen, Brain, Building2, CheckCircle2, ChevronRight, Code2, FileText, GraduationCap, Search, Sparkles, Target, UsersRound } from 'lucide-svelte';
	import Footer from '$lib/components/ui/Footer.svelte';
	import { mentors } from '$lib/data/mentors';
	const topics = ['Aptitude', 'Python practice', 'TCS NQT', 'DSA questions', 'Mock tests'];
	const essentials = [
		{ icon: Brain, title: 'Aptitude', text: 'Sharpen quant, reasoning, and verbal skills with topic-wise practice.', tone: 'bg-orange-100 text-orange-600' },
		{ icon: Code2, title: 'Programming', text: 'Solve curated coding questions in the languages companies expect.', tone: 'bg-blue-100 text-blue-600' },
		{ icon: Building2, title: 'Company prep', text: 'Follow focused tracks built around real hiring patterns.', tone: 'bg-violet-100 text-violet-600' },
		{ icon: FileText, title: 'Career toolkit', text: 'Build a resume, prepare interviews, and apply with confidence.', tone: 'bg-emerald-100 text-emerald-600' }
	];
	const tracks = [
		{ title: 'Quantitative aptitude', lessons: '28 topics', color: 'border-orange-200 bg-orange-50' },
		{ title: 'Logical reasoning', lessons: '24 topics', color: 'border-blue-200 bg-blue-50' },
		{ title: 'Technical MCQs', lessons: '1,200+ questions', color: 'border-violet-200 bg-violet-50' },
		{ title: 'DSA practice', lessons: '150 curated problems', color: 'border-emerald-200 bg-emerald-50' }
	];
	const companies = ['TCS', 'Infosys', 'Accenture', 'Cognizant', 'Capgemini', 'Wipro', 'Deloitte', 'Zoho'];
</script>

<svelte:head><title>PlacementPro — Placement preparation, simplified</title></svelte:head>

<div class="border-b border-border/60 bg-[#fff8f4]">
	<div class="mx-auto flex min-h-10 max-w-7xl items-center justify-center gap-2 px-5 py-2 text-center text-xs text-text-secondary sm:text-sm">
		<span class="inline-flex items-center gap-1.5 font-bold text-text-primary"><Sparkles size={14} class="text-primary"/> New</span>
		<span class="hidden h-3 w-px bg-border sm:block"></span>
		<span>Company-specific mock assessments are now available.</span>
		<a href="/companies" class="inline-flex shrink-0 items-center gap-1 font-bold text-primary transition hover:text-text-primary">Explore <ArrowRight size={14}/></a>
	</div>
</div>

<header class="sticky top-0 z-40 border-b border-border/80 bg-background/95 backdrop-blur">
	<nav class="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 lg:px-8">
		<a href="/" class="flex items-center gap-2.5 font-bold text-text-primary"><span class="grid h-9 w-9 place-items-center rounded-xl bg-primary text-lg font-extrabold text-white shadow-glow">P</span><span class="text-lg tracking-tight">PlacementPro</span></a>
		<div class="hidden items-center gap-7 text-sm font-medium text-text-secondary md:flex"><a href="/dsa" class="hover:text-primary">Preparation</a><a href="/aptitude" class="hover:text-primary">Practice</a><a href="/companies" class="hover:text-primary">Companies</a><a href="/resources" class="hover:text-primary">Resources</a></div>
		<div class="flex items-center gap-4 text-sm font-semibold"><a href="/dsa" class="hidden text-text-primary sm:block">Log in</a><a href="#prep" class="rounded-full bg-primary px-5 py-2.5 text-white transition hover:-translate-y-0.5 hover:shadow-glow">Start for free</a></div>
	</nav>
</header>

<main>
	<section class="relative overflow-hidden px-5 pb-24 pt-20 text-center lg:pb-32 lg:pt-28">
		<!-- Animated Gradient Blobs -->
		<div class="absolute left-1/4 top-0 -z-10 h-96 w-96 -translate-x-1/2 translate-y-1/2 rounded-full bg-orange-400/20 blur-[100px] mix-blend-multiply animate-blob"></div>
		<div class="absolute right-1/4 top-0 -z-10 h-96 w-96 translate-x-1/3 translate-y-1/4 rounded-full bg-violet-400/20 blur-[100px] mix-blend-multiply animate-blob animation-delay-2000"></div>

		<div class="relative mx-auto max-w-5xl z-10">
			<!-- Badge -->
			<div class="mb-8 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50/80 backdrop-blur-sm px-5 py-2 text-sm font-bold text-orange-600 shadow-sm hover:shadow-md transition-shadow cursor-pointer hover:scale-105 transform duration-300">
				<Sparkles size={18} class="text-orange-500" /> Built for your next big offer
			</div>
			
			<!-- Headline -->
			<h1 class="mx-auto max-w-4xl text-5xl font-black tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
				Your placement prep, <br class="hidden sm:block" />
				<span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-rose-500 to-violet-500 animate-gradient-x">finally in one place.</span>
			</h1>
			
			<!-- Subheadline -->
			<p class="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
				Practice smarter with company-focused questions, guided learning tracks, mock tests, and the career tools that move you forward.
			</p>
			
			<!-- Premium Search Bar -->
			<div class="relative mx-auto mt-12 max-w-2xl group">
				<div class="absolute -inset-1 rounded-3xl bg-gradient-to-r from-orange-400 via-rose-400 to-violet-400 opacity-25 blur-lg transition duration-1000 group-hover:opacity-50 group-hover:duration-200"></div>
				<div class="relative flex items-center rounded-2xl border border-slate-200/50 bg-white/80 backdrop-blur-xl p-2.5 shadow-xl transition-all focus-within:ring-4 focus-within:ring-orange-500/20">
					<div class="flex items-center justify-center w-12 h-12 rounded-xl bg-orange-50 text-orange-500">
						<Search size={24} />
					</div>
					<input aria-label="Search placement resources" class="min-w-0 flex-1 border-0 bg-transparent px-5 py-4 text-base md:text-lg font-medium text-slate-900 outline-none placeholder:text-slate-400" placeholder="Search aptitude, coding, companies..." />
					<button class="rounded-xl bg-gradient-to-r from-orange-500 to-rose-500 px-8 py-4 text-base font-bold text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
						Search
					</button>
				</div>
			</div>
			
			<!-- Trending Tags -->
			<div class="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm font-medium">
				<span class="mr-2 text-slate-400">Trending Searches:</span>
				{#each topics as topic}
					<a href="#prep" class="rounded-full border border-slate-200 bg-white/50 backdrop-blur-sm px-4 py-2 text-slate-600 shadow-sm transition-all hover:-translate-y-1 hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600 hover:shadow-md">
						{topic}
					</a>
				{/each}
			</div>
			
			<!-- Stats Cards -->
			<div class="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8 mx-auto max-w-4xl">
				<div class="group relative rounded-3xl border border-slate-200/60 bg-white/60 p-8 text-center backdrop-blur-xl shadow-lg transition-all hover:-translate-y-2 hover:shadow-xl hover:border-orange-300/50">
					<div class="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-600 shadow-inner group-hover:scale-110 transition-transform">
						<Code2 size={28} />
					</div>
					<p class="text-4xl font-black text-slate-900">4,000+</p>
					<p class="mt-2 text-sm font-semibold text-slate-500">Practice questions</p>
				</div>
				<div class="group relative rounded-3xl border border-slate-200/60 bg-white/60 p-8 text-center backdrop-blur-xl shadow-lg transition-all hover:-translate-y-2 hover:shadow-xl hover:border-violet-300/50">
					<div class="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-violet-600 shadow-inner group-hover:scale-110 transition-transform">
						<Building2 size={28} />
					</div>
					<p class="text-4xl font-black text-slate-900">50+</p>
					<p class="mt-2 text-sm font-semibold text-slate-500">Company tracks</p>
				</div>
				<div class="group relative rounded-3xl border border-slate-200/60 bg-white/60 p-8 text-center backdrop-blur-xl shadow-lg transition-all hover:-translate-y-2 hover:shadow-xl hover:border-emerald-300/50">
					<div class="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 shadow-inner group-hover:scale-110 transition-transform">
						<UsersRound size={28} />
					</div>
					<p class="text-4xl font-black text-slate-900">100k+</p>
					<p class="mt-2 text-sm font-semibold text-slate-500">Active learners</p>
				</div>
			</div>
		</div>
	</section>

	<section id="prep" class="bg-white px-5 py-20 lg:py-24"><div class="mx-auto max-w-7xl"><div class="mb-11 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p class="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-primary">Placement essentials</p><h2 class="text-3xl font-extrabold sm:text-4xl">Everything you need to get interview-ready.</h2></div><a href="#features" class="group flex items-center gap-1 font-bold text-primary">View all resources <ArrowRight class="transition group-hover:translate-x-1" size={18}/></a></div><div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{#each essentials as item}<article class="group rounded-3xl border border-border bg-background p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-card"><div class="grid h-12 w-12 place-items-center rounded-2xl {item.tone}"><svelte:component this={item.icon} size={23}/></div><h3 class="mt-6 text-xl font-bold">{item.title}</h3><p class="mt-2 text-sm leading-6 text-text-secondary">{item.text}</p><a href="/resources" class="mt-5 flex items-center gap-1 text-sm font-bold text-primary">Explore <ChevronRight size={16}/></a></article>{/each}</div></div></section>

	<section id="features" class="px-5 py-20 lg:py-24"><div class="mx-auto max-w-7xl"><div class="mx-auto mb-11 max-w-2xl text-center"><p class="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-primary">Learn by doing</p><h2 class="text-3xl font-extrabold sm:text-4xl">Small steps. Serious progress.</h2><p class="mt-4 leading-7 text-text-secondary">Pick a skill, follow the roadmap, and see exactly what to practise next.</p></div><div class="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{#each tracks as track}<a href="/dsa" class="group rounded-2xl border p-5 transition hover:-translate-y-1 hover:shadow-card {track.color}"><div class="flex justify-between"><Target size={22}/><ArrowRight size={18} class="opacity-50 transition group-hover:translate-x-1 group-hover:opacity-100"/></div><h3 class="mt-12 text-lg font-bold">{track.title}</h3><p class="mt-1 text-sm text-text-secondary">{track.lessons}</p></a>{/each}</div></div></section>

	<section id="companies" class="px-5 pb-20 lg:pb-24"><div class="mx-auto max-w-7xl rounded-[2rem] bg-[#17202b] px-6 py-12 text-white sm:px-10 lg:flex lg:items-center lg:gap-16 lg:px-16"><div class="max-w-md"><p class="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-orange-300">Company-specific preparation</p><h2 class="text-3xl font-extrabold leading-tight sm:text-4xl">Know what your dream company is looking for.</h2><p class="mt-5 leading-7 text-slate-300">Get familiar with assessments, core topics, interview questions, and preparation plans tailored to the roles you want.</p><a href="/company-hub" class="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold hover:bg-[#df5642]">Explore company hub <ArrowRight size={17}/></a></div><div class="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:mt-0 lg:flex-1">{#each companies as company}<a href="/company-hub" class="rounded-xl border border-white/10 bg-white/5 px-4 py-5 text-center text-sm font-bold text-white transition hover:border-orange-300/60 hover:bg-white/10">{company}</a>{/each}</div></div></section>

	<section id="guidance" class="bg-white px-5 py-20"><div class="mx-auto grid max-w-5xl items-center gap-10 rounded-[2rem] bg-secondary-background px-7 py-10 md:grid-cols-[1fr_auto] md:px-12 md:py-14"><div><div class="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-white text-primary shadow-card"><GraduationCap size={28}/></div><h2 class="text-3xl font-extrabold">Not sure where to begin?</h2><p class="mt-3 max-w-xl leading-7 text-text-secondary">Tell us your target role and graduation year. We’ll help you build a clear, practical preparation path.</p></div><a href="/community" class="inline-flex items-center justify-center gap-2 rounded-full bg-text-primary px-6 py-3.5 text-sm font-bold text-white hover:bg-slate-700">Get free guidance <ArrowRight size={17}/></a></div></section>
</main>

	<section class="mx-auto max-w-7xl px-5 py-10 md:px-8"><a href="/resources/ai-engineer-questions" class="group relative block overflow-hidden rounded-3xl bg-gradient-to-r from-[#17202b] to-[#263e5d] p-6 text-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-card-hover md:p-8"><div class="absolute -right-12 -top-16 h-48 w-48 rounded-full bg-primary/25 blur-3xl"></div><div class="relative flex flex-col justify-between gap-6 md:flex-row md:items-center"><div><p class="flex items-center gap-2 text-xs font-bold uppercase tracking-[.18em] text-orange-200"><Sparkles size={14}/> Trending now · 2026 edition</p><h2 class="mt-3 max-w-2xl text-2xl font-extrabold md:text-3xl">100 Must-Prepare AI Engineer Interview Questions</h2><p class="mt-2 max-w-2xl text-sm text-slate-300">For AI Engineer, LLM Engineer, GenAI Engineer and Applied AI roles.</p></div><span class="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-bold text-[#17202b] transition group-hover:bg-orange-100">Read the pack <ArrowRight size={16}/></span></div></a></section>

	<section id="mentors" class="border-t border-border/60 bg-[#17202b] py-20 text-white">
		<div class="mx-auto max-w-7xl px-5 md:px-8">
			<div class="flex flex-col justify-between gap-4 md:flex-row md:items-end">
				<div><p class="text-xs font-bold uppercase tracking-[.18em] text-orange-200">1:1 mentorship</p><h2 class="mt-3 text-3xl font-extrabold">Meet our mentors.</h2></div>
				<p class="max-w-md text-sm leading-6 text-slate-300">Personal guidance from people who have navigated campus placements and software interviews themselves.</p>
			</div>
			<div class="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
				{#each mentors as mentor}
					<article class="rounded-2xl border border-white/10 bg-white/[.06] p-5 transition duration-300 hover:-translate-y-1 hover:bg-white/[.1]">
						<div class="flex items-center gap-3"><div class="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br {mentor.tone} text-sm font-black">{mentor.initials}</div><div><h3 class="font-extrabold">{mentor.name}</h3><p class="text-xs text-slate-300">Placement Mentor</p></div></div>
						<p class="mt-5 text-sm leading-6 text-slate-300">{mentor.bio}</p><p class="mt-4 text-xs font-bold text-orange-200">{mentor.badge}</p><p class="mt-2 text-xs text-slate-400">{mentor.offers.join(' · ')}</p>
						<div class="mt-5 flex gap-2"><a href="/mentors/{mentor.slug}" class="rounded-lg bg-white px-3 py-2 text-xs font-bold text-[#17202b]">View profile</a><button class="rounded-lg border border-white/20 px-3 py-2 text-xs font-bold transition hover:bg-white/10">Book 1:1</button></div>
					</article>
				{/each}
			</div>
		</div>
	</section>

	<Footer />

<style>
	@keyframes blob {
		0% { transform: translate(0px, 0px) scale(1); }
		33% { transform: translate(30px, -50px) scale(1.1); }
		66% { transform: translate(-20px, 20px) scale(0.9); }
		100% { transform: translate(0px, 0px) scale(1); }
	}
	:global(.animate-blob) {
		animation: blob 7s infinite;
	}
	:global(.animation-delay-2000) {
		animation-delay: 2s;
	}
	@keyframes gradient-x {
		0%, 100% { background-position: 0% 50%; }
		50% { background-position: 100% 50%; }
	}
	:global(.animate-gradient-x) {
		background-size: 200% 200%;
		animation: gradient-x 3s ease infinite;
	}
</style>
