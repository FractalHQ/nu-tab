<script>
	import { fly, slide } from 'svelte/transition';
	import { showSettings } from '../settings/settingsStore';
	import { clickOutside } from '../utils/clickOutside';

	export let options = [
		{
			text: 'New Bookmark',
			action: () => alert('Good Job'),
		},
		{
			text: 'Settings',
			action: () => ($showSettings = true),
		},
	];
	let showMenu = false;
	let x, y;

	function show(e) {
		x = e.clientX;
		y = e.clientY;
		showMenu = true;
	}

	function handleAction(i) {
		options[i].action();
		showMenu = false;
	}
</script>

<svelte:window on:contextmenu|preventDefault={(e) => show(e)} />

{#if showMenu}
	<div
		class="menu"
		style="left:{x}px;top:{y}px"
		on:click_outside={() => (showMenu = false)}
		in:fly={{ y: 5, duration: 250 }}
		use:clickOutside
		out:fly={{ y: 5, duration: 150 }}
	>
		{#each options as { text, action }, i}
			<div class="option" on:click={() => handleAction(i)}>
				{text}
			</div>
		{/each}
	</div>
{/if}

<style>
	.menu {
		background: #fff;
		box-shadow: 1px 2px 5px #0002;
		border-radius: 0.5em;
		overflow: hidden;

		position: absolute;

		margin: auto;
		width: max-content;
		height: max-content;
	}
	.option {
		padding: 0.5em 1.5em;
		cursor: pointer;

		border-bottom: 1px solid #0001;

		transition: background 0.2s;
	}
	.option:hover {
		background: #eee;
	}
</style>
