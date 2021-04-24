<!-- svelte:options immutable={true} -->
<script context="module">
	import StackOverflow from './icons/StackOverflow.svelte';
	import DuckDuckGo from './icons/DuckDuckGo.svelte';
	import Archive from './icons/Archive.svelte';
	import Google from './icons/Google.svelte';
	import MDN from './icons/MDN.svelte';
	import HackerNews from './icons/HackerNews.svelte';

	export const defaultEngines = [
		{
			position: 0,
			name: 'DuckDuckGo',
			url: `https://duckduckgo.com/?q=`,
			icon: DuckDuckGo,
		},
		{
			position: 1,
			name: 'Google',
			url: `https://www.google.com/search?q=`,
			icon: Google,
		},
		{
			position: 2,
			name: 'Internet Archive',
			url: `https://archive.org/search.php?query=`,
			icon: Archive,
		},
		{
			position: 3,
			name: 'MDN',
			url: `https://developer.mozilla.org/en-US/search?q=`,
			icon: MDN,
		},
		{
			position: 4,
			name: 'StackOverflow',
			url: `https://stackoverflow.com/search?q=`,
			icon: StackOverflow,
		},
		{
			position: 5,
			name: 'HackerNews',
			url: `https://hn.algolia.com/?query=`,
			icon: HackerNews,
		},
	];
</script>
