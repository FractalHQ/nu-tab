const { svelte } = require('@sveltejs/vite-plugin-svelte');
const { defineConfig } = require('vite');

const replace = require('@rollup/plugin-replace');
require('dotenv').config()

module.exports = defineConfig(({ command, mode }) => {
	const isProduction = mode === 'production';
	return {
		optimizeDeps: {
			exclude: ['@roxi/routify'],
		},
		plugins: [
			svelte(),
			// @ts-expect-error
			replace({
				preventAssignment: true,
				'process.browser': true,
				'process.env.NODE_ENV': JSON.stringify(mode),
				'process.env.PUBLIC_SUPABASE_KEY': JSON.stringify(
					process.env.PUBLIC_SUPABASE_KEY,
				),
				'process.env.PUBLIC_SUPABASE_URL': JSON.stringify(
					process.env.PUBLIC_SUPABASE_URL,
				),
				'process.env.BASE_URL': JSON.stringify(process.env.BASE_URL),
			}),
		],
		build: {
			minify: isProduction,
		},
	};
});
