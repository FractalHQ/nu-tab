<script>
	import { createEventDispatcher } from 'svelte';
	// import smoothHover from '../utils/smoothHover';
	import { slide, fly } from 'svelte/transition';
	import Tooltip from '../ui/Tooltip.svelte';

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

	let mouseX = 0,
		mouseY = 0;
	function handleMouse(e) {
		mouseX = e.clientX;
		mouseY = e.clientY;
	}
</script>

<svelte:window on:mousemove={(e) => handleMouse(e)} />

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
					<!-- <Tooltip content={name} placement="bottom"> -->
					<!-- </Tooltip> -->
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
		opacity: 1;
		transition-delay: opacity 1.5s, transform 0.2s;
		transform: translate(1em, 50px);
	}
	.tooltipText {
		white-space: nowrap;
		opacity: 0;
		color: rgb(var(--dark-d));
		transition-delay: opacity 0.5s, transform 0.2s;
		position: absolute;
		text-align: center;
		font-family: var(--font);
		letter-spacing: 0.3em;
		transition: 0.2s ease-out;
		/* width: max-content; */
		/* right: 0; */
		/* top: 3em; */
		/* left: 5em; */
	}
	.icon,
	.engines {
		width: 3rem;
		height: 2rem;
		cursor: pointer;
		position: relative;
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
		transform: translate(1.2rem);
		position: relative;
		display: flex;
		margin: auto;
		flex-grow: 1;
		min-width: max-content;
		z-index: 2;
	}
</style>
