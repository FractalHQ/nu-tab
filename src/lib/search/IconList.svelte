<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	import { fly } from 'svelte/transition'
	export let engines = []

	let hovering = Array.from(engines).fill(false),
		disableShowAll = false,
		hoverTarget = 0,
		showAll = false,
		timer = null

	const isActiveEngine = (i: number) => i === 0

	const mouseover = (i: number) => {
		if (disableShowAll) return
		timer && clearTimeout(timer)

		hovering.fill(false)
		hovering[i] = true
		hoverTarget = i
		showAll = true
	}

	const mouseout = (i: number) => {
		timer && clearTimeout(timer)
		timer = setTimeout(() => {
			hovering.fill(false)
			hoverTarget = 0
			showAll = false
		}, 400)
	}

	const dispatch = createEventDispatcher()
	const handleClick = (i: number) => {
		dispatch('newSelection', { position: i })

		disableShowAll = true
		showAll = false
		hoverTarget = 0

		setTimeout(() => {
			disableShowAll = false
		}, 250)
	}
</script>

<div class="engines">
	{#each engines as { position, icon }, i}
		{#if isActiveEngine(i) || showAll}
			<div
				class="icon"
				class:hovering={hovering[i]}
				style="transform: translateX(-{i * 50}px);"
				out:fly={{ x: 10 * i, duration: 300 - 50 * i }}
				on:click={() => handleClick(position)}
				on:mouseover={() => mouseover(i)}
				on:mouseout={() => mouseout(i)}
				in:fly={{ x: 10 * i }}
			>
				<svelte:component this={icon} />
			</div>
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
