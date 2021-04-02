<script>
	import { createEventDispatcher } from 'svelte';

	import { scale } from 'svelte/transition';
	import Edit from '../icons/Edit.svelte';

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
	<a target="_blank" href={bookmark.url}>
		<div
			class="bookmark"
			style="
			{bookmark.image
				? `background-image: url(${bookmark.image});`
				: `background: ${bookmark.background}; color: ${bookmark.foreground}`};
		"
		>
			{#if bookmark.title}
				<p>{bookmark.title}</p>
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
		background-size: cover;
		width: 100%;
		height: 100%;
		border-radius: 10px;
		align-items: center;
		text-align: center;
		display: flex;
		position: relative;
	}

	p {
		font-size: 20px;
		width: 100%;
		position: relative;
		transform: translateY(240%);
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
