<script>
	import { defaultEngines } from './Engines.svelte';
	import { activeEngine } from './searchStore';
	import rotate from '../utils/rotateArray';
	import { onMount, tick } from 'svelte';
	import Icons from './Icons.svelte';

	let input;
	let engines = Array.from(defaultEngines);
	$: engines;
	$: inputValue = '';
	$: query = engines[0].url + inputValue;

	// Rotate array based on users default setting.
	onMount(async () => {
		setTimeout(() => {
			// @ts-expect-error
			engines = engines.rotate(
				engines.find((engine) => engine.position === $activeEngine)
					.position,
			);
			input.focus();
		}, 0);
	});

	// Key commands
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

	// Icon Position
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
		autocomplete="off"
		bind:value={inputValue}
		on:keydown={(e) => hotkey(e.key)}
		bind:this={input}
	/>
</div>

<style>
	#search {
		border: 1px solid rgba(var(--dark-b), 0.2);
		background: rgb(var(--light-a));
		color: rgb(var(--dark-a));
		padding: 0.75rem 25px 0.7rem 3.5rem;
		border-radius: 20px;
		text-align: justify;
		line-height: 100%;
		resize: false;
		width: 400px;
		margin: 2rem auto;
		box-shadow: 0 2px 5px 2px #00000010;
		transform: translateX(-1.4rem);
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
