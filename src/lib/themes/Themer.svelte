<script>
	import { getTheme, toggleTheme } from './themer';
	import { activeTheme } from './themeStore';
	import Clouds from './graphics/Clouds.svelte';
	import { onMount } from 'svelte';
	import Moon from './graphics/Moon.svelte';
	import Sun from './graphics/Sun.svelte';
	import Stars from './graphics/Stars.svelte';

	onMount(() => {
		getTheme();
	});

	export let size;
</script>

<div class="theme-toggle" on:click={toggleTheme}>
	{#if $activeTheme == 'light'}
		<Sun {size} />
		<Clouds {size} />
	{:else}
		<Stars {size} />
		<Moon {size} />
	{/if}
</div>

<style>
	.theme-toggle {
		position: absolute;
		cursor: pointer;
		left: 7px;
		top: 0px;
	}
</style>
