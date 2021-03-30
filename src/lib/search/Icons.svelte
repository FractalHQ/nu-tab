<script>
	import { createEventDispatcher } from 'svelte';
	import smoothHover from '../utils/smoothHover';
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
	{#each engines as { position, icon }, i}
		{#if i === 0 || hovering}
			{#if i === 0 || !newSelectionEvent}
				<!-- {#key $activeEngine} -->
				<div
					class="icon"
					on:click={() => handleSelection(position)}
					in:fly={{ x: 10 * i }}
					out:fly={{ x: 10 * i, duration: 300 - 50 * i }}
					class:hovering
					on:mouseover={resetSelectionEvent}
					style="transform: translateX(-{i * 50}px);"
				>
					<svelte:component this={icon} />
				</div>
				<!-- {/key} -->
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
		display: flex;
		/* margin-bottom: 1rem; */
		position: absolute;

		/* filter: saturate(0.2) contrast(0.9); */
		opacity: 0.5;
		transition: 0.25s;
	}

	.icon.hovering {
		opacity: 1;
		filter: none;
	}

	.engines {
		transform: translate(44px);
		position: relative;
		display: flex;
		/* flex-direction: column; */
		margin: auto;
		flex-grow: 1;
		min-width: max-content;
		/* background: pink; */
	}
</style>
