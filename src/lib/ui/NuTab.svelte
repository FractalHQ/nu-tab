<script>
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	let mounted = false;
	onMount(() => {
		mounted = true;
	});
</script>

<div id="logo">
	<span
		id="NU"
		class="logo-text"
		style="color:rgb(var(--primary-a));"
		tabindex="-1"
		in:fly={{ y: 10, duration: 1000, delay: 420 }}
	>
		NU
	</span>

	<span
		id="TAB"
		class="logo-text"
		in:fly={{ y: -10, duration: 1000, delay: 420 }}
	>
		TAB
	</span>
</div>

<style>
	#logo {
		display: flex;
		justify-content: space-around;
		pointer-events: none;
		opacity: 0.75;
		user-select: none;
		margin: auto;
	}

	.logo-text {
		font-size: clamp(30px, 1vw, 100px);
		padding: 0 5px 0 8px;
		z-index: 10;
	}

	#NU {
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}
</style>
