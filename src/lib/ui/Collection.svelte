<script>
	import Bookmark from './Bookmark.svelte';
	import Range from './Range.svelte';

	let settings = {
		size: { value: 100, min: 50, max: 150 },
		gap: { value: 10, min: 0, max: 100 },
	};
</script>

<div class="collection-container">
	{#each Array(20) as _}
		<!-- prettier-ignore -->
		<div
			class="bookmark-container"
			style="
				width: {settings.size.value}px;
				height: {settings.size.value}px;
				margin: {settings.gap.value}px;
				"
		>
			<Bookmark />
		</div>
	{/each}
</div>

<div class="control-panel">
	<div class="controls">
		{#each Object.keys(settings) as setting, i}
			<div class="control">
				<label for={setting}>{setting}</label>
				<Range bind:setting={settings[setting]} />
			</div>
		{/each}
	</div>
</div>

<style>
	.bookmark-container {
		width: max-content;
		display: flex;
	}
	.control-panel {
		box-shadow: 0 10px 6px 15px rgba(var(--always-dark-b), 0.02),
			0 6px 20px 5px rgba(var(--always-dark-b), 0.01);
		background: rgba(var(--light-a), 0.95);
		border-top-right-radius: 15px;
		border-top-left-radius: 15px;
		position: absolute;
		max-width: 100vw;
		height: 400px;
		width: 600px;
		margin: auto;
		bottom: 0;
		right: 0;
		left: 0;
		backdrop-filter: blur(20px);
	}
	.controls {
		/* padding: 20px; */
		height: 200px;
		width: 75%;
		margin: auto;
	}
	.collection-container {
		/* justify-content: space-evenly; */
		max-width: 80vw;
		flex-wrap: wrap;
		margin: 0 auto;
		display: grid;
		contain: none;
		display: flex;
	}
	.control {
		border: 2px solid rgba(var(--dark-c), 0.2);
		height: max-content;
		border-radius: 10px;
		padding: 2px 15px;
		/* margin: 20px; */
		display: flex;
		margin: 40px 0;
		font-size: 20px;
		justify-content: space-between;
	}
	label {
		height: 100%;
		margin: auto 0;
		width: max-content;
	}
</style>
