<script lang="ts">
  import type { Difficulty } from '$lib/data/types';
  let { difficulty }: { difficulty: Difficulty } = $props();
  const style = { Easy: 'text-emerald-700 bg-emerald-50 border-emerald-200', Medium: 'text-amber-700 bg-amber-50 border-amber-200', Hard: 'text-rose-700 bg-rose-50 border-rose-200' };
</script>
<span class="inline-flex rounded-full border px-2.5 py-1 text-[11px] font-bold {style[difficulty]}">{difficulty}</span>
