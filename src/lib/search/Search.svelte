<script>
	import { defaultEngines } from './Engines.svelte'
	import { activeEngine } from './searchStore'
	import rotate from '$utils/rotateArray'
	import Icons from './IconList.svelte'
	import { onMount } from 'svelte'

	let input
	let engines = Array.from(defaultEngines)
	let startPosition = $activeEngine

	$: engines
	$: aliases = []
	$: inputValue = ''
	$: query = engines[0].url + inputValue

	onMount(() => {
		setTimeout(() => {
			rotateEngines()
			startPosition = $activeEngine
			getAliases()
		}, 0)
	})

	function getAliases() {
		engines.forEach((engine, i) => {
			aliases = [...aliases, engine.alias]
		})
	}

	function selectAlias() {
		select(engines.find((engine) => engine.alias == inputValue).position)
	}
	function deselectAlias() {
		console.log('Rotating to OG position: ', startPosition)
		select(startPosition)
	}

	$: if (!aliases.includes(inputValue)) {
		if (input && inputValue == '') deselectAlias()
	} else {
		console.log(`input found:  ${inputValue}`)
		selectAlias()
	}

	// Key commands
	function hotkey(e) {
		switch (e) {
			case 'Enter':
				window.location.href = query
				break
			case 'ArrowUp':
				select($activeEngine + 1)
				break
			case 'ArrowDown':
				select($activeEngine - 1)
				break
			default:
				break
		}
	}

	// Icon Position
	function select(position) {
		if (position < 0) {
			position = engines.length - 1
		} else if (position > engines.length - 1) {
			position = 0
		}
		const distance = Math.abs(engines.length - $activeEngine + position)
		$activeEngine = position
		engines = engines.rotate(distance)
		input.focus()
	}

	// Rotate array based on users default setting.
	function rotateEngines(target = $activeEngine) {
		const targetPosition = engines.find((engine) => engine.position == target).position
		engines = engines.rotate(targetPosition)
		input.focus()
	}

	const debug = false
</script>

{#if debug}
	$activeEngine: {$activeEngine}
	<br />
	targetPosition: {startPosition}
	<br />
{/if}

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
		width: 400px;
		margin: 2rem auto;
		padding: 0.75rem 25px 0.7rem 3.5rem;

		line-height: 100%;

		color: var(--dark-a);
		border: 1px solid rgba(var(--dark-b-rgb), 0.2);
		border-radius: 20px;
		background: var(--light-a);
		box-shadow: 0 2px 5px 2px #00010;

		resize: false;
		transform: translateX(-1.4rem);
		text-align: justify;
	}

	#search:focus {
		border: 1px solid var(--brand-a);
		outline: none;
	}

	:global(#search:focus .icon) {
		opacity: 1;
	}

	.search-wrapper {
		display: flex;

		width: 500px;
		margin: auto;
	}

	input {
		font-size: 15px;
	}
</style>
