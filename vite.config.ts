import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	// lucide-svelte v1 uses extensionless relative imports inside dist,
	// which Node's native ESM resolver rejects during dev SSR.
	// Bundling it avoids the issue in both dev and build.
	ssr: {
		noExternal: ['lucide-svelte']
	}
});
