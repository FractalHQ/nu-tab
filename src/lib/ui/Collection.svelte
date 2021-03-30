<script>
	import SettingsPanel from './SettingsPanel.svelte';

	import Bookmark from './Bookmark.svelte';
	import { settings } from '../settings/settingsStore';

	const updateSetting = (setting, value) => {
		$settings.setting = value;
	};
</script>

<div class="collection-container">
	{#each Array(20) as _}
		<!-- prettier-ignore -->
		<div
			class="bookmark-container"
			style="
				width: {$settings.size}px;
				height: {$settings.size}px;
				margin: {$settings.gap}px;
				"
		>
			<Bookmark />
		</div>
	{/each}
</div>

<SettingsPanel />

<style>
	.bookmark-container {
		width: max-content;
		display: flex;
	}
	.collection-container {
		/* justify-content: space-evenly; */
		width: max-content;
		max-width: 80vw;
		flex-wrap: wrap;
		margin: 0 auto;
		display: grid;
		contain: none;
		display: flex;
		justify-content: center;
	}
</style>
