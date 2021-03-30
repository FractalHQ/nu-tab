<script>
	import { layout, url } from '@roxi/routify';
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	let mounted = false;
	onMount(() => {
		mounted = true;
	});
</script>

<nav>
	{#if mounted}
		{#each $layout.children as { path, title }}
			<a href={path} use:$url>
				<div
					id="app-title"
					style="color:rgb(var(--primary-a));"
					in:fly={{ y: 10, duration: 1000, delay: 420 }}
				>
					NU
				</div>
				<div in:fly={{ y: -10, duration: 1000, delay: 420 }}>TAB</div>
			</a>
		{/each}
	{/if}
</nav>

<style>
	nav {
		justify-content: space-around;
		flex-direction: row-reverse;
		padding: 1rem;
		display: flex;
		font-size: 30px;
	}
	div {
		display: inline-flex;
	}
	a {
		color: rgb(var(--dark-a));
		text-decoration: none;
	}
	#app-title {
		user-select: none;
	}
</style>
