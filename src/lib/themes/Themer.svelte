<script>
	import { getTheme, toggleTheme } from './themer';
	import { onMount } from 'svelte';
	import SunAndMoon from './SunAndMoon.svelte';

	onMount(() => {
		getTheme();
	});
</script>

<div class="theme-toggle" on:click={toggleTheme}>
	<SunAndMoon />
</div>

<!-- {#if $activeTheme == 'light'} -->
<!-- <div class="light" on:click={() => applyTheme('dark')}>☀️</div> -->
<!-- {:else if $activeTheme == 'dark'} -->
<!-- <div class="dark" on:click={() => applyTheme('light')}>🌙</div> -->

<!-- {/if} -->
<style>
	.theme-toggle {
		position: absolute;
		cursor: pointer;
		left: 17px;
		top: 12px;
	}
</style>
