<script>
	import { localStorageStore } from '../utils/localStorageStore';
	import DuckDuckGo from './icons/DuckDuckGo.svelte';
	import smoothHover from '../utils/hovering';
	import Google from './icons/Google.svelte';
	import { fly } from 'svelte/transition';

	export let query = '';
	export const engines = [
		{
			name: 'DuckDuckGo',
			url: `https://duckduckgo.com/?q=${query}&ia=web`,
			icon: DuckDuckGo,
		},
		{
			name: 'Google',
			url: `https://www.google.com/search?q=${query}`,
			icon: Google,
		},
	];
	const active = localStorageStore('active', 0);
	let hovering = false;
</script>

<div
	class="engines"
	use:smoothHover
	on:smoothOver={() => (hovering = true)}
	on:smoothOut={() => (hovering = false)}
>
	{#each engines as { name, url, icon }, i}
		{#if i === $active || hovering}
			<div
				class="icon"
				on:click={() => ($active = i)}
				transition:fly={{ y: -10 }}
				class:hovering
			>
				<svelte:component this={icon} />
			</div>
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
