<script lang="ts">
	import { createEventDispatcher } from 'svelte'

	import { fly, slide } from 'svelte/transition'
	import { showSettings } from '../settings/settingsStore'
	import { clickOutside } from '../utils/clickOutside'

	export let options = [
		{
			text: 'New Bookmark',
			action: () => alert('Good Job')
		},
		{
			text: 'Settings',
			action: () => ($showSettings = true)
		}
	]
	let showMenu = false
	let x, y

	const dispatch = createEventDispatcher()
	function show(e: MouseEvent) {
		const target = e.target as Element
		if (target.className.includes('icon')) {
			// TODO: Show settings pane for e.target
			const classes = target.classList
			let index: number
			classes.forEach((c) => {
				if (c.includes('icon') && c.length > 3) {
					index = parseInt(c.split('icon')[1])
				}
			})
			dispatch('showEditor', { index })
		} else {
			x = e.clientX
			y = e.clientY
			showMenu = true
		}
	}

	function handleAction(i: number) {
		options[i].action()
		showMenu = false
	}
</script>

<svelte:window on:contextmenu|preventDefault={(e) => show(e)} />

{#if showMenu}
	<div
		class="menu"
		style="left:{x}px;top:{y}px"
		use:clickOutside
		on:click_outside={() => (showMenu = false)}
		in:fly={{ y: 5, duration: 250 }}
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
		background: var(--light-a);
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
		background: var(--light-b);
	}
</style>
