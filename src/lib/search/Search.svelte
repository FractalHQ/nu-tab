<script lang="ts">
	import { defaultEngines } from './Engines.svelte'
	import { activeEngine } from './searchStore'
	import '$utils/rotateArray'
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
	const select = (position: number) => {
		if (position < 0) {
			position = engines.length - 1
		} else if (position > engines.length - 1) {
			position = 0
		}
		const distance = Math.abs(engines.length - $activeEngine + position)
		$activeEngine = position
		engines = engines.rotate(distance)
		console.log('activeEngine = ', $activeEngine)
		console.log('engines = ', engines)
		input.focus()
	}

	let targetPosition = engines.find((engine) => engine.position == startPosition).position
	// Rotate array based on users default setting.
	const rotateEngines = (target = $activeEngine) => {
		targetPosition = engines.find((engine) => engine.position == target).position
		engines = engines.rotate(targetPosition)
		input.focus()
	}

	const debug = false
</script>

<div class="search-wrapper">
	<Icons bind:engines on:newSelection={(e) => select(e.detail.position)} />

	<input
		type="text"
		id="search"
		autocomplete="off"
		bind:value={inputValue}
		on:keydown={(e) => hotkey(e.key)}
		bind:this={input}
	/>
</div>

{#if debug}
	<div class="debug" style="margin: auto; width: max-content; font-size: 1.5rem;">
		$activeEngine: {$activeEngine}
		<br />
		targetPosition: {targetPosition}
		<br />
		startPosition: {startPosition}
		<br />
	</div>
	<pre>{JSON.stringify(engines, null, 4).split('"').join('')}</pre>
{/if}

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
