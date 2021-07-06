<script>
	import { initTheme, toggleTheme } from './themer'
	import { activeTheme } from './themeStore'

	import { fade, fly } from 'svelte/transition'
	import { quartOut } from 'svelte/easing'
	import { writable } from 'svelte/store'
	import { onMount } from 'svelte'

	import Clouds from './graphics/Clouds.svelte'
	import Stars from './graphics/Stars.svelte'
	import Moon from './graphics/Moon.svelte'
	import Sun from './graphics/Sun.svelte'

	const count = writable(0)

	let mounted = false

	onMount(() => {
		initTheme()
		mounted = true
	})

	export let size
	function handleToggle() {
		$count++
		toggleTheme()
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
					easing: quartOut
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
					easing: quartOut
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

		/* left: 7px; */
		top: 0px;

		cursor: pointer;
	}
</style>
