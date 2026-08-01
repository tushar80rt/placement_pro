<script lang="ts">
  import { page } from '$app/stores';
  import { AlertTriangle, Home, RefreshCw } from 'lucide-svelte';
</script>

<div class="min-h-[80vh] flex items-center justify-center px-4">
  <div class="max-w-md w-full text-center space-y-8">
    <div class="mx-auto w-24 h-24 bg-red-50 rounded-full flex items-center justify-center">
      <AlertTriangle size={48} class="text-red-500" />
    </div>
    
    <div>
      <h1 class="text-4xl font-extrabold text-text-primary mb-2">{$page.status} Error</h1>
      <p class="text-lg text-text-secondary">{$page.error?.message || 'Something went unexpectedly wrong.'}</p>
    </div>

    <div class="bg-secondary-background p-4 rounded-xl border border-border text-left">
      <p class="text-xs font-mono text-text-secondary break-all">
        Path: {$page.url.pathname}<br/>
        Please check if the URL is correct or try reloading.
      </p>
    </div>

    <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
      <button onclick={() => window.location.reload()} class="w-full sm:w-auto px-6 py-3 bg-text-primary text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary transition">
        <RefreshCw size={18} />
        Retry
      </button>
      <a href="/" class="w-full sm:w-auto px-6 py-3 bg-white border border-border text-text-primary rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-secondary-background transition">
        <Home size={18} />
        Go Home
      </a>
    </div>
  </div>
</div>
