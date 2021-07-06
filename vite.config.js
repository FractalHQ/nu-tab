import { svelte } from '@sveltejs/vite-plugin-svelte'
import autoPreprocess from 'svelte-preprocess'
import replace from '@rollup/plugin-replace'
import { resolve, dirname } from 'path'
import autoprefixer from 'autoprefixer'
import viteMainJs from 'vite-main-js'
import { mdsvex } from 'mdsvex'
import cssnano from 'cssnano'


const dev = process.env.NODE_ENV === 'dev'

import { fileURLToPath } from 'url';
// @ts-ignore
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const production = process.env.NODE_ENV === 'production'

export default {
	server: {
		port: 5000
	},
	build: {
		cssCodeSplit: false
	},
	optimizeDeps: {
		exclude: ['@roxi/routify']
	},
	resolve: {
		dedupe: ['@roxi/routify'],
		alias: {
			$actions: resolve(__dirname, './src/lib/actions'),
			$utils: resolve(__dirname, './src/lib/utils'),
			$data: resolve(__dirname, './src/lib/data'),
			$auth: resolve(__dirname, './src/lib/auth'),
			$ui: resolve(__dirname, './src/lib/ui'),
			$lib: resolve(__dirname, './src/lib'),
			$: resolve(__dirname, './src')
		}
	},
	plugins: [
		viteMainJs(),
		svelte({
			preprocess: [
				// @ts-ignore
				autoPreprocess({
					postcss: {
						plugins: [
							autoprefixer,
							// @ts-ignore
								cssnano({
									preset: 'default'
								})
						]
					}
				}),
				mdsvex(),
				
			],
			emitCss: true,
			hot: !production,
			extensions: ['.md', '.svelte']
		})
	]
}