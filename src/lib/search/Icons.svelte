<script>
	import { createEventDispatcher } from 'svelte';
	import smoothHover from '../utils/smoothHover';
	import Tooltip from '../ui/Tooltip.svelte';
	import { fly } from 'svelte/transition';

	const dispatch = createEventDispatcher();

	export let engines;

	let hovering = false,
		newSelectionEvent = false,
		readyToReset = false,
		timer = null;

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
</script>

<div
	class="engines"
	use:smoothHover
	on:smoothOver={() => (hovering = true)}
	on:smoothOut={() => (hovering = false)}
>
	{#each engines as { position, icon, name }, i}
		{#if i === 0 || hovering}
			{#if i === 0 || !newSelectionEvent}
				<div
					class="icon"
					on:click={() => handleSelection(position)}
					in:fly={{ x: 10 * i }}
					out:fly={{ x: 10 * i, duration: 300 - 50 * i }}
					class:hovering
					on:mouseover={resetSelectionEvent}
					style="transform: translateX(-{i * 50}px);"
				>
					<Tooltip content={name} placement="bottom">
						<svelte:component this={icon} />
					</Tooltip>
				</div>
			{/if}
		{/if}
	{/each}
</div>

<style>
	.icon,
	.engines {
		width: 3rem;
		height: 2rem;
		cursor: pointer;
	}

	.icon {
		/* margin-bottom: 1rem; */
		position: absolute;
		display: flex;

		/* filter: saturate(0.2) contrast(0.9); */
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
		/* flex-direction: column; */
		margin: auto;
		flex-grow: 1;
		min-width: max-content;
		z-index: 2;
		/* background: pink; */
	}
</style>
