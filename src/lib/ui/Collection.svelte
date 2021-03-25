<script>
	import Bookmark from './Bookmark.svelte';
	import Range from './Range.svelte';

	let settings = {
		rows: 3,
		size: 50,
		margin: 10,
		hGap: 100,
		vGap: 100,
	};
</script>

{settings.size}

<div
	class="collection-container"
	style="grid: repeat(${settings.rows}, [line1 line2 line3] ${settings.hGap}px) / auto-flow ${settings.vGap}px;"
>
	{#each Array(20) as _}
		<div
			class="bookmark-container"
			style="width: {settings.size}px; height: {settings.size}px; margin: {settings.margin}px;"
		>
			<Bookmark />
		</div>
	{/each}
</div>

<div class="control-panel">
	<div class="controls">
		{#each Object.keys(settings) as setting}
			<Range bind:setting={settings[setting]} />
		{/each}
	</div>
</div>

<style>
	.control-panel {
		box-shadow: 0 10px 10px 15px rgba(var(--always-dark-b), 0.02) inset,
			0 6px 10px 15px rgba(var(--always-dark-b), 0.02) inset;
		background: rgba(var(--always-dark-a), 0.05);
		border-top-right-radius: 15px;
		border-top-left-radius: 15px;
		position: absolute;
		height: 400px;
		width: 600px;
		margin: auto;
		bottom: 0;
		right: 0;
		left: 0;
	}
	.controls {
		border: 1px solid #1234;
		padding: 50px;
		height: 200px;
		width: 300px;
		margin: auto;
	}
	.collection-container {
		justify-content: space-around;
		max-width: 80vw;
		flex-wrap: wrap;
		margin: 0 auto;
		display: grid;
		contain: none;
		display: flex;
	}
</style>
