import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			maxDuration: 20,
		  }),
		alias: {
			$components: 'src/lib/components',
		},
	},
	preprocess: vitePreprocess(),
};
export default config;