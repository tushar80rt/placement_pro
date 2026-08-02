<script lang="ts">
  import { Menu, X, Code2, BrainCircuit, Building2, BookOpen, FolderGit2, Sparkles } from 'lucide-svelte';
  import { page } from '$app/stores';
  import UserMenu from '$lib/components/auth/UserMenu.svelte';
  import AuthModal from '$lib/components/auth/AuthModal.svelte';

  let { children } = $props();
  let open = $state(false);

  const items = [
    { label: 'Aptitude', href: '/aptitude', icon: BrainCircuit },
    { label: 'Reasoning', href: '/reasoning', icon: Sparkles },
    { label: 'DSA Sheets', href: '/dsa', icon: Code2 },
    { label: 'Core Subjects', href: '/mcq', icon: BookOpen },
    { label: 'Projects', href: '/projects', icon: FolderGit2 },
    { label: 'Companies', href: '/companies', icon: Building2 }
  ];
</script>

<div class="min-h-screen bg-[#fcfbfa] text-text-primary">
  <!-- Mobile Top Bar -->
  <header class="sticky top-0 z-50 flex h-16 items-center justify-between border-b border-border/60 bg-[#fcfbfa]/90 px-4 backdrop-blur-xl lg:hidden">
    <button
      onclick={() => open = !open}
      aria-label="Toggle navigation"
      class="grid h-10 w-10 place-items-center rounded-xl hover:bg-secondary-background"
    >
      {#if open}<X size={19}/>{:else}<Menu size={19}/>{/if}
    </button>
    <a href="/aptitude" class="font-extrabold tracking-tight text-lg">
      Placement<span class="text-primary">Pro</span>
    </a>
    <div class="flex items-center gap-2">
      <UserMenu />
    </div>
  </header>

  <!-- Desktop Sidebar -->
  <aside class="fixed inset-y-0 left-0 z-40 hidden w-[240px] border-r border-border/60 bg-[#fcfbfa] p-4 lg:flex lg:flex-col">
    <a href="/aptitude" class="flex h-12 items-center gap-3 px-2 font-extrabold tracking-tight text-lg">
      <span class="grid h-8 w-8 place-items-center rounded-xl bg-slate-900 text-sm font-black text-white shadow-sm">P</span>
      <span>Placement<span class="text-primary">Pro</span></span>
    </a>

    <nav class="mt-7 space-y-1.5">
      {#each items as item}
        {@const Icon = item.icon}
        <a
          href={item.href}
          class="flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-semibold transition {$page.url.pathname === item.href || $page.url.pathname.startsWith(item.href) ? 'bg-secondary-background text-text-primary shadow-2xs font-bold' : 'text-text-secondary hover:bg-secondary-background/60 hover:text-text-primary'}"
        >
          <Icon
            size={18}
            class={$page.url.pathname.startsWith(item.href) ? 'text-primary' : 'text-slate-400'}
          />
          {item.label}
        </a>
      {/each}
    </nav>
  </aside>

  <!-- Mobile Drawer -->
  {#if open}
    <div class="fixed inset-x-0 top-16 z-40 border-b border-border bg-[#fcfbfa] p-4 shadow-xl lg:hidden">
      <nav class="grid grid-cols-2 gap-2">
        {#each items as item}
          {@const Icon = item.icon}
          <a
            onclick={() => open = false}
            href={item.href}
            class="flex items-center gap-2.5 rounded-xl bg-secondary-background/70 p-3 text-sm font-bold text-slate-800 transition hover:bg-primary hover:text-white"
          >
            <Icon size={17}/>
            {item.label}
          </a>
        {/each}
      </nav>
    </div>
  {/if}

  <!-- Main Container -->
  <div class="lg:pl-[240px]">
    <!-- Desktop Top Bar with z-index sticky so dropdowns appear above all main contents -->
    <div class="sticky top-0 z-40 hidden h-16 items-center justify-between border-b border-border/60 px-8 lg:flex bg-[#fcfbfa]/90 backdrop-blur-xl shadow-2xs">
      <div class="text-xs font-bold uppercase tracking-wider text-text-secondary">
        Comprehensive Placement Preparation Portal
      </div>
      <div class="flex items-center gap-4">
        <UserMenu />
      </div>
    </div>
    <main class="min-h-[calc(100vh-4rem)]">
      {@render children()}
    </main>
  </div>
</div>

<!-- Global Auth Modal -->
<AuthModal />
