<script>
	// import { showLoginPopup, authStore } from '$lib/auth/authStore'
	// import LoginPopup from '$lib/auth/LoginPopup.svelte'
	import Modal from '$lib/ui/Modal.svelte'
	import { onMount } from 'svelte'

	import Settings from '$lib/settings/Settings.svelte'
	import Themer from '$lib/theme/Themer.svelte'
	import Nav from '$lib/ui/Nav.svelte'

	// const { initAuth } = authStore

	onMount(() => {
		// initAuth()
	})

	const r = (max = 255) => Math.floor(Math.random() * Math.floor(max))
	const rgba = (opacity = 0.1) => [r(), r(), r(), opacity]
</script>

<div id="app" style="background-image: linear-gradient(to top, rgba({rgba()}), rgba({rgba()}));">
	<Themer size={50} />

	<Nav />

	<main>
		<slot />
	</main>

	<Settings />
</div>

<!-- <Modal bind:showModal={$showLoginPopup}>
	<LoginPopup />
</Modal> -->
<style>
	@import url('https://fonts.googleapis.com/css2?family=Abel&display=swap');
	#app {
		min-height: 100vh;

		font-family: 'Abel';

		color: var(--dark-a);
		background-color: var(--light-a);

		transition: background-color 0.3s, color 0.3s;
	}
</style>
