<script>
	import DuckDuckGo from './icons/DuckDuckGo.svelte';
	import rotateArray from '../utils/rotateArray';
	import { activeEngine } from './searchStore';
	import Google from './icons/Google.svelte';
	import Icons from './Icons.svelte';
	import { onMount } from 'svelte';

	let query = '';
	$: engines = [
		{
			name: 'DuckDuckGo',
			url: `https://duckduckgo.com/?q=${query}&ia=web`,
			icon: DuckDuckGo,
		},
		{
			name: 'Google',
			url: `https://www.google.com/search?q=${query}`,
			icon: Google,
		},
	];

	onMount(() => {
		engines.rotate($activeEngine);
	});

	function search(e) {
		console.log(e);
		if (e === 'Enter') window.location.href = engines[0].url;
	}
	function select(index) {
		$activeEngine = index;
		engines.rotate(index);
		engines = engines;
	}
</script>

<div class="search-wrapper">
	<Icons bind:engines on:newSelection={(e) => select(e.detail.index)} />
	<input
		type="text"
		id="search"
		bind:value={query}
		on:keydown={(e) => search(e.key)}
	/>
</div>

<pre>{JSON.stringify(engines, null, 2)}</pre>

<style>
	#search {
		border: 1px solid rgba(var(--dark-b), 0.2);
		background: rgb(var(--light-a));
		color: rgb(var(--dark-a));
		padding: 0.75rem 20px 0.7rem 3rem;
		border-radius: 20px;
		text-align: justify;
		line-height: 100%;
		resize: false;
		width: 400px;
		margin: 2rem auto;
	}
	#search:focus {
		outline: none;
		border: 1px solid rgba(var(--primary-a), 0.75);
	}
	.search-wrapper {
		width: 500px;
		display: flex;
		margin: auto;
	}
</style>
