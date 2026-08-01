<script lang="ts">
  import { Bookmark } from 'lucide-svelte';
  let { active = false }: { active?: boolean } = $props();
  let saved = active;
</script>
<button onclick={() => saved = !saved} aria-label="Bookmark question" class="grid h-9 w-9 place-items-center rounded-xl border border-border/70 bg-white text-text-secondary transition hover:-translate-y-0.5 hover:shadow-card">
  <Bookmark size={16} fill={saved ? 'currentColor' : 'none'} class={saved ? 'text-primary' : ''} />
</button>
