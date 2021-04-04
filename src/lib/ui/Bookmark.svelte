<script lang="ts">
	import type { Bookmark } from '../data/models/bookmarks/types';
	import { createEventDispatcher } from 'svelte';

	import { scale, fly } from 'svelte/transition';
	import Edit from '../icons/Edit.svelte';
	import { settings } from '../settings/settingsStore';

	export let i;
	export let bookmark;

	const dispatch = createEventDispatcher();

	let timer = null,
		showEditIcon = false;

	function smoothOver(delay) {
		timer && clearTimeout(timer);
		timer = setTimeout(() => {
			showEditIcon = true;
		}, delay);
	}

	function smoothOut(delay) {
		timer && clearTimeout(timer);
		timer = setTimeout(() => {
			showEditIcon = false;
		}, delay);
	}

	const {
		url,
		tags,
		title,
		image,
		background,
		foreground,
		description,
	} = bookmark;
</script>

<div
	class="bookmark-container"
	on:mouseover={() => smoothOver(250)}
	on:mouseout={() => smoothOut(300)}
>
	{#if showEditIcon}
		<div
			class="edit"
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
			style="background: {background}; color: {foreground};"
		>
			{#if image}
				<img
					style="width:{$settings.iconSize}px"
					class="icon"
					src={image}
					alt={title}
				/>
			{/if}
			{#if title}
				<p>{title}</p>
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
	}
	.icon {
		max-width: 100%;
		max-height: 100%;
		bottom: 0;
		top: 0;
		display: flex;
		margin: auto;
	}

	p {
		font-size: 18px;
		width: 100%;
		position: absolute;
		transform: translateY(200%);
		color: rgb(var(--dark-c));
	}

	a {
		width: 100%;
		text-decoration: none;
		color: rgb(var(--dark-a));
		position: relative;
	}

	.edit {
		position: absolute;
		right: 0;
		top: 0;
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
