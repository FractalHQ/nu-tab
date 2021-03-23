<script>
	import Themer from '../lib/themes/Themer.svelte';
	import { url } from '@roxi/routify';
</script>

<div id="app">
	<nav>
		<Themer />
		<a href="/index" use:$url>Home</a>
		<a href="/dev" use:$url>Dev</a>
	</nav>
	<main>
		<slot />
	</main>
</div>

<style>
	#app {
		background-color: rgb(var(--light-a));
		min-height: 100vh;
	}
	nav {
		display: flex;
		justify-content: space-around;
		padding: 1rem;
		border-bottom: 1px solid rgb(var(--primary-a));
	}
</style>
