<script>
	import { createEventDispatcher } from 'svelte';
	import smoothHover from '../utils/smoothHover';
	import { activeEngine } from './searchStore';
	import { fly } from 'svelte/transition';

	const dispatch = createEventDispatcher();

	export let engines;

	let hovering = false;

	let newSelectionEvent = false;

	function handleSelection(index) {
		newSelectionEvent = true;

		dispatch('newSelection', { index });

		setTimeout(() => {
			newSelectionEvent = false;
		}, 500);
	}
</script>

<div
	class="engines"
	use:smoothHover
	on:smoothOver={() => (hovering = true)}
	on:smoothOut={() => (hovering = false)}
>
	{#each engines as { name, url, icon }, i}
		{#if i === 0 || hovering}
			{#if i === 0 || !newSelectionEvent}
				<div
					class="icon"
					on:click={() => handleSelection(i)}
					transition:fly={{ y: -10 }}
					class:hovering
				>
					<svelte:component this={icon} />
				</div>
			{/if}
		{/if}
	{/each}
</div>

<style>
	.icon {
		display: flex;
		margin-bottom: 1rem;

		cursor: pointer;

		/* filter: saturate(0.2) contrast(0.9); */
		opacity: 0.5;
		transform: translate(37px);
		transition: 0.25s;
	}
	.icon.hovering {
		opacity: 1;
		filter: none;
	}
	.engines {
		display: flex;
		flex-direction: column;
		width: 2rem;
		height: 2rem;
		margin: auto;
	}
</style>
