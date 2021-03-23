<script>
	import { activeTheme } from '../lib/themes/themeStore';
	import Clouds from '../lib/themes/graphics/Clouds.svelte';
	import Sun from '../lib/themes/graphics/Sun.svelte';
	import Moon from '../lib/themes/graphics/Moon.svelte';
	import Stars from '../lib/themes/graphics/Stars.svelte';
	const size = 500;
</script>

<!-- routify:options title="Sun" -->

<div class="container">
	{#if $activeTheme == 'light'}
		<Clouds {size} />
		<Sun {size} />
	{:else}
		<Stars {size} />
		<Moon {size} />
	{/if}
</div>

<style>
	.container {
		position: relative;
		width: max-content;
		display: flex;
		margin: auto;
		/* background: linear-gradient(
			to bottom,
			#0cfd 0%,
			#09f8 50%,
			#fa55 90%,
			#f5f9 120%
		); */
	}
</style>
