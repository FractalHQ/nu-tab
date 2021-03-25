<script>
	import { writable } from 'svelte/store';
	import { getTheme, toggleTheme } from './themer';
	import { activeTheme } from './themeStore';
	import Clouds from './graphics/Clouds.svelte';
	import { onMount } from 'svelte';
	import Moon from './graphics/Moon.svelte';
	import Sun from './graphics/Sun.svelte';
	import Stars from './graphics/Stars.svelte';
	import { quartOut } from 'svelte/easing';
	import { fade, fly } from 'svelte/transition';
	const count = writable(0);
	let mounted = false;
	onMount(() => {
		getTheme();
		mounted = true;
	});

	export let size;
	function handleToggle() {
		$count++;
		toggleTheme();
	}
</script>

{#key $activeTheme}
	<div class="theme-toggle" on:click={handleToggle}>
		{#if $activeTheme == 'light'}
			<div
				out:fade
				in:fly={{
					y: $count === 0 ? -40 : 1,
					duration: $count === 0 ? 2000 : 750,
					opacity: $count === 0 ? 1 : 0,
					easing: quartOut,
				}}
			>
				<Sun {size} />
			</div>
			<Clouds {size} />
		{/if}
		{#if $activeTheme == 'dark'}
			<Stars {size} />
			<div
				out:fade
				in:fly={{
					y: $count === 0 ? -40 : 1,
					duration: $count === 0 ? 2000 : 750,
					opacity: $count === 0 ? 1 : 0,
					easing: quartOut,
				}}
			>
				<Moon {size} />
			</div>
		{/if}
	</div>
{/key}

<style>
	.theme-toggle {
		position: absolute;
		cursor: pointer;
		/* left: 7px; */
		top: 0px;
	}
</style>
