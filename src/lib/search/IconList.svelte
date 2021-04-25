<script>
	import { createEventDispatcher } from 'svelte';
	import { fly } from 'svelte/transition';

	const dispatch = createEventDispatcher();
	export let engines = [];

	let hovering = false,
		timer = null;

	const smoothHover = {
		over: (delay = 0) => {
			timer && clearTimeout(timer);
			if (hovering) return;

			timer = setTimeout(() => {
				hovering = true;
			}, delay);
		},

		out: (delay = 400) => {
			timer && clearTimeout(timer);
			if (!hovering) return;

			timer = setTimeout(() => {
				hovering = false;
			}, delay);
		},
	};

	let newSelectionEvent = false,
		readyToReset = false;

	function handleSelection(index) {
		timer && clearTimeout(timer);

		newSelectionEvent = true;

		dispatch('newSelection', { index });

		timer = setTimeout(() => {
			readyToReset = true;
		}, 300);
	}

	function resetSelectionEvent() {
		if (readyToReset) {
			timer && clearTimeout(timer);
			newSelectionEvent = false;
			readyToReset = false;
		}
	}

	let tooltipText = '';
	let activeIndex = 0;
	function handleMouseOver(i) {
		resetSelectionEvent();
		hovering = true;
		tooltipText = engines[i].name;
		activeIndex = i;
	}
</script>

<div
	class="engines"
	on:mouseover={() => smoothHover.over(400)}
	on:mouseout={() => smoothHover.out(400)}
>
	{#each engines as { position, icon, name }, i}
		{#if i === 0 || hovering}
			{#if i === 0 || !newSelectionEvent}
				<div
					class="icon"
					class:hovering
					in:fly={{ x: 10 * i }}
					out:fly={{ x: 10 * i, duration: 300 - 50 * i }}
					on:click={() => handleSelection(position)}
					style="transform: translateX(-{i * 50}px);"
					on:mouseover={() => handleMouseOver(i)}
				>
					<svelte:component this={icon} />
				</div>
			{/if}
		{/if}
	{/each}
	{#key activeIndex}
		<div
			in:fly={{ delay: 50, y: 4 }}
			out:fly={{ duration: 150, y: -4 }}
			class="tooltipText"
			class:hovering
		>
			{tooltipText}
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

		transition: 0.2s ease-out;
		transition-delay: opacity 0.5s, transform 0.2s;
		transform: translate(1em, 50px);
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
