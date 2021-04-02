<script>
	import NuTab from './NuTab.svelte';

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
		<NuTab />
	{/if}
</nav>

<style>
	nav {
		/* justify-content: space-around; */
		/* flex-direction: row-reverse; */
		padding: 1rem;
		display: flex;
		font-size: 30px;
	}
</style>
