<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	import { activeEngine } from './searchStore'
	import { fly } from 'svelte/transition'

	const dispatch = createEventDispatcher()
	export let engines = []

	let hoverTarget = 0
	let hovering = Array.from(engines).fill(false)
	let newSelectionEvent = false
	let activeIndex = 0
	let showAll = false
	let timer = null
	$: tooltipText = ''
	const mouseover = (i: number) => {
		timer && clearTimeout(timer)
		showAll = true
		tooltipText = engines[i].name
		hoverTarget = i
	}
	const mouseout = (i: number) => {
		timer && clearTimeout(timer)
		tooltipText = ''
		timer = setTimeout(() => {
			showAll = false
		}, 400)
	}

	const isActiveEngine = (i: number) => i === 0
</script>

<div class="engines">
	{#each engines as { position, icon }, i}
		{#if isActiveEngine(i) || showAll}
			{#if i === 0 || !newSelectionEvent}
				<div
					on:mouseover={() => (hovering[i] = true)}
					on:mouseout={() => (hovering[i] = false)}
					class="icon"
					class:hovering={hovering[i]}
					in:fly={{ x: 10 * i }}
					out:fly={{ x: 10 * i, duration: 300 - 50 * i }}
					style="transform: translateX(-{i * 50}px);"
					on:click={() => dispatch('newSelection', { position: position })}
					on:mouseover={() => mouseover(i)}
					on:mouseout={() => mouseout(i)}
				>
					<svelte:component this={icon} />
				</div>
			{/if}
		{/if}
	{/each}
	{#key hoverTarget}
		<div
			in:fly={{ delay: 50, y: 4 }}
			out:fly={{ duration: 150, y: -4 }}
			class="tooltipText"
			class:hovering={hovering[hoverTarget]}
		>
			{engines[hoverTarget].name}
		</div>
	{/key}
</div>

<style>
	.tooltipText.hovering {
		transition-delay: opacity 1.5s, transform 0.2s;

		opacity: 1;
	}
	.tooltipText {
		font-family: var(--font);

		position: absolute;

		transform: translate(7px, 50px);
		transition: 0.2s ease-out;
		transition-delay: opacity 0.5s, transform 0.2s;
		text-align: center;
		white-space: nowrap;
		letter-spacing: 0.3em;

		opacity: 0;
		color: rgb(var(--dark-d));
	}
	.icon,
	.engines {
		position: relative;

		width: 3rem;
		height: 2rem;

		cursor: pointer;
	}

	.icon {
		position: absolute;

		display: flex;

		transition: 0.25s;

		opacity: 0.5;
	}

	.icon.hovering {
		opacity: 1;

		filter: none;
	}

	.engines {
		position: relative;
		z-index: 2;

		display: flex;
		flex-grow: 1;

		min-width: max-content;
		margin: auto;

		transform: translate(1.2rem);
	}
</style>
