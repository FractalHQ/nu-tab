<script>
	import Themer from '../lib/themes/Themer.svelte';
	import { layout, url } from '@roxi/routify';
</script>

<div id="app">
	<Themer size={50} />

	<nav>
		{#each $layout.children as { path, title }}
			<a href={path} use:$url>{title}</a>
		{/each}
	</nav>

	<main>
		<slot />
	</main>
</div>

<style>
	#app {
		transition: background-color 0.3s, color 0.3s;
		background-color: rgb(var(--light-a));
		color: rgb(var(--dark-a));
		min-height: 100vh;
	}
	nav {
		display: flex;
		justify-content: space-around;
		flex-direction: row-reverse;
		padding: 1rem;
	}
	a {
		text-decoration: none;
		color: rgb(var(--dark-a));
	}
</style>
