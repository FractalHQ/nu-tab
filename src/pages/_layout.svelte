<script>
	import Themer from '../lib/themes/Themer.svelte';
	import { layout, url } from '@roxi/routify';
	import SettingsButton from '../lib/settings/SettingsButton.svelte';

	const r = (max = 255) => Math.floor(Math.random() * Math.floor(max));

	const rgba = (opacity = 0.1) => [r(), r(), r(), opacity];
</script>

<div
	id="app"
	style="background-image: linear-gradient(to top, rgba({rgba()}), rgba({rgba()}))"
>
	<Themer size={50} />
	<nav>
		{#each $layout.children as { path, title }}
			<a href={path} use:$url>{title}</a>
		{/each}
	</nav>

	<main>
		<slot />
	</main>

	<SettingsButton />
</div>

<style>
	#app {
		transition: background-color 0.3s, color 0.3s;
		background-color: rgb(var(--light-a));
		color: rgb(var(--dark-a));
		min-height: 100vh;
	}
	nav {
		justify-content: space-around;
		flex-direction: row-reverse;
		padding: 1rem;
		display: flex;
	}
	a {
		color: rgb(var(--dark-a));
		text-decoration: none;
	}
</style>
