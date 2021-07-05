<script lang="ts">
	// import type { Bookmark } from '../data/types';
	import { createEventDispatcher } from 'svelte';

	import { settings } from '../settings/settingsStore';
	import { scale, fly, fade } from 'svelte/transition';
	import Edit from '../icons/Edit.svelte';

	export let i;
	export let bookmark;
	export let hovering;

	const dispatch = createEventDispatcher();

	let timer = null,
		showEditIcon = false,
		expandEditIcon = false;

	function smoothOver(delay, bool) {
		timer && clearTimeout(timer);
		timer = setTimeout(() => {
			bool = true;
		}, delay);
	}

	function smoothOut(delay, bool) {
		timer && clearTimeout(timer);
		timer = setTimeout(() => {
			bool = false;
		}, delay);
	}

	const { url, tags, title, image, background, foreground, description } =
		bookmark;
</script>

<div
	class="bookmark-container"
	on:mouseover={() => smoothOver(500, showEditIcon)}
	on:mouseout={() => smoothOut(300, showEditIcon)}
>
	{#if showEditIcon}
		<div
			on:mouseover={() => smoothOver(500, expandEditIcon)}
			on:mouseout={() => smoothOut(300, expandEditIcon)}
			class="edit"
			class:expand={expandEditIcon}
			transition:scale={{ duration: 150 }}
			on:click|preventDefault={() => dispatch('showEditor', { index: i })}
		>
			<Edit />
		</div>
	{/if}
	<a target="_blank" href={url}>
		<div
			transition:scale={{ duration: 200 + 50 * i }}
			class="bookmark"
			style="
				background: {$settings.transparent ? 'transparent' : background};
				color: {$settings.transparent ? 'transparent' : foreground};
				width:{$settings.width}px;
				height:{$settings.icon}px;
				"
		>
			{#if image}
				<img
					style="width:{$settings.icon}px"
					class="icon"
					src={image}
					alt={title}
				/>
			{/if}
			{#if (title && $settings.showTitle) || hovering == i}
				<p transition:fade={{ duration: 100 }}>{title}</p>
			{/if}
		</div>
	</a>
</div>

<style>
	.bookmark-container {
		position: relative;
		width: 100%;
	}
	.bookmark {
		width: 100%;
		height: 100%;
		border-radius: 10px;
		align-items: center;
		justify-content: flex-end;
		text-align: center;
		display: flex;
		flex-direction: column;
		position: relative;
		margin: auto;
	}
	.icon {
		max-width: 100%;
		max-height: 100%;
		bottom: 0;
		top: 0;
		display: flex;
		margin: auto;
		user-select: none;
	}

	p {
		font-size: 18px;
		width: 100%;
		position: absolute;
		transform: translateY(200%);
		color: rgb(var(--dark-d));
		letter-spacing: 2px;
	}

	a {
		width: 100%;
		text-decoration: none;
		color: rgb(var(--dark-a));
		position: relative;
	}

	.edit {
		position: absolute;
		right: 3px;
		top: 3px;
		width: max-content;
		height: max-content;
		z-index: 5;
		transform: scale(1);
		transition: 0.2s;
		border-radius: 5px;
		font-size: 2rem;
		line-height: 0.2rem;
		width: 2rem;
		cursor: pointer;
	}
	.edit:hover {
		transform: scale(1.1);
	}
</style>
