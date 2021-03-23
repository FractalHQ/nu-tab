<script>
	import { activeTheme } from './themeStore';
	import { applyTheme, getTheme } from './themer';
	import { onMount } from 'svelte';
	import SunAndMoon from './SunAndMoon.svelte';

	onMount(() => {
		getTheme();
	});
</script>

<SunAndMoon />

<div class="theme-toggle">
	{#if $activeTheme == 'light'}
		<div class="light" on:click={() => applyTheme('dark')}>☀️</div>
	{:else if $activeTheme == 'dark'}
		<div class="dark" on:click={() => applyTheme('light')}>🌙</div>
	{/if}
</div>

<style>
	.theme-toggle {
		position: absolute;
		cursor: pointer;
		left: 17px;
		top: 12px;
	}
</style>
