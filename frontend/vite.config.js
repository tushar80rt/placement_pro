import adapter from '@sveltejs/adapter-auto';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],

	build: {
		// Increase chunk size warning threshold — large data files are expected
		chunkSizeWarningLimit: 800,

		rollupOptions: {
			output: {
				// Manual chunk splitting — separates large data from UI code
				manualChunks: (id) => {
					// Split heavy data files into separate chunks
					if (id.includes('/data/companies/')) return 'data-companies';
					if (id.includes('/data/aptitude/')) return 'data-aptitude';
					if (id.includes('/data/technical/')) return 'data-technical';
					if (id.includes('/data/reasoning/')) return 'data-reasoning';
					if (id.includes('/data/dsa/')) return 'data-dsa';
					if (id.includes('/data/hr/')) return 'data-hr';
					if (id.includes('/data/resources/')) return 'data-resources';
					// Svelte internals in their own chunk
					if (id.includes('node_modules/svelte/')) return 'svelte';
					// Lucide icons — large package, separate chunk
					if (id.includes('node_modules/lucide-svelte/')) return 'icons';
				}
			}
		}
	},

	// Optimize deps pre-bundling
	optimizeDeps: {
		include: ['lucide-svelte'],
	}
});
