<script>
	import SettingsButton from '../lib/settings/SettingsButton.svelte';
	import Settings from '../lib/settings/Settings.svelte';
	import Themer from '../lib/themes/Themer.svelte';
	import { layout, url } from '@roxi/routify';
	import Nav from '../lib/ui/Nav.svelte';

	const r = (max = 255) => Math.floor(Math.random() * Math.floor(max));

	const rgba = (opacity = 0.1) => [r(), r(), r(), opacity];
</script>

<div
	id="app"
	style="background-image: linear-gradient(to top, rgba({rgba()}), rgba({rgba()}))"
>
	<Themer size={50} />

	<Nav />

	<main>
		<slot />
	</main>

	<Settings />
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Abel&display=swap');
	#app {
		font-family: Abel;
		transition: background-color 0.3s, color 0.3s;
		background-color: rgb(var(--light-a));
		color: rgb(var(--dark-a));
		min-height: 100vh;
	}
</style>
