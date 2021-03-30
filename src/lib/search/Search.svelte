<script>
	import rotateArray from '../utils/rotateArray';
	import { activeEngine } from './searchStore';
	import { onMount, tick } from 'svelte';
	import Icons from './Icons.svelte';

	import DuckDuckGo from './icons/DuckDuckGo.svelte';
	import Archive from './icons/Archive.svelte';
	import Google from './icons/Google.svelte';
	import Ecosia from './icons/Ecosia.svelte';

	$: engines = [
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
			name: 'Ecosia',
			url: `https://www.ecosia.org/search?q=`,
			icon: Ecosia,
		},
	];

	let input;

	$: inputValue = '';
	$: query = engines[0].url + inputValue;

	onMount(async () => {
		setTimeout(() => {
			engines = engines.rotate(
				engines.find((engine) => engine.position === $activeEngine)
					.position,
			);
		}, 0);
	});

	function hotkey(e) {
		switch (e) {
			case 'Enter':
				window.location.href = query;
				break;
			case 'ArrowUp':
				select($activeEngine + 1);
				break;
			case 'ArrowDown':
				select($activeEngine - 1);
				break;
			default:
				break;
		}
	}

	function select(position) {
		if (position < 0) {
			position = engines.length - 1;
		} else if (position > engines.length - 1) {
			position = 0;
		}
		const distance = Math.abs(engines.length - $activeEngine + position);
		$activeEngine = position;
		engines = engines.rotate(distance);
		input.focus();
	}
</script>

<div class="search-wrapper">
	<Icons bind:engines on:newSelection={(e) => select(e.detail.index)} />
	<input
		type="text"
		id="search"
		bind:value={inputValue}
		on:keydown={(e) => hotkey(e.key)}
		bind:this={input}
	/>
</div>

<style>
	.debug {
		position: absolute;
	}
	#search {
		border: 1px solid rgba(var(--dark-b), 0.2);
		background: rgb(var(--light-a));
		color: rgb(var(--dark-a));
		padding: 0.75rem 25px 0.7rem 4rem;
		border-radius: 20px;
		text-align: justify;
		line-height: 100%;
		resize: false;
		width: 400px;
		margin: 2rem auto;
		box-shadow: 0 2px 5px 2px #00000010;
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
	input {
		font-size: 15px;
	}
</style>
