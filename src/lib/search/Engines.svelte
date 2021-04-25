<!-- svelte:options immutable={true} -->
<script context="module" lang="ts">
	import StackOverflow from './icons/StackOverflow.svelte';
	import DuckDuckGo from './icons/DuckDuckGo.svelte';
	import HackerNews from './icons/HackerNews.svelte';
	import Archive from './icons/Archive.svelte';
	import Google from './icons/Google.svelte';
	import MDN from './icons/MDN.svelte';

	interface Engine {
		/**
		 * Standard index of the array item.
		 */
		position: number;

		/**
		 * The display name of the search Engine.
		 */
		name?: string;

		/**
		 * The query url.
		 * @example 'https://www.google.com/search?q='
		 */
		url: string;

		/**
		 * SVG in a Svelte Component
		 */
		icon: any;

		/**
		 * Alias to set search engine.
		 * @example Typing 'g ' will activate google'
		 */
		alias: string;
	}

	export const defaultEngines: Engine[] = [
		{
			position: 0,
			name: 'DuckDuckGo',
			url: `https://duckduckgo.com/?q=`,
			icon: DuckDuckGo,
			alias: 'd ',
		},
		{
			position: 1,
			name: 'Google',
			url: `https://www.google.com/search?q=`,
			icon: Google,
			alias: 'g ',
		},
		{
			position: 2,
			name: 'Internet Archive',
			url: `https://archive.org/search.php?query=`,
			icon: Archive,
			alias: 'ar ',
		},
		{
			position: 3,
			name: 'MDN',
			url: `https://developer.mozilla.org/en-US/search?q=`,
			icon: MDN,
			alias: 'mdn ',
		},
		{
			position: 4,
			name: 'StackOverflow',
			url: `https://stackoverflow.com/search?q=`,
			icon: StackOverflow,
			alias: 'so ',
		},
		{
			position: 5,
			name: 'HackerNews',
			url: `https://hn.algolia.com/?query=`,
			icon: HackerNews,
			alias: 'hn ',
		},
	];
</script>
