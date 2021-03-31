<script>
	import { addDefaultCollection } from '../data/transactions';
	import { settings } from '../settings/settingsStore';
	import SettingsPanel from './SettingsPanel.svelte';
	import { activeCollection } from '../data/dbStore';
	import Bookmark from './Bookmark.svelte';
	import { onMount } from 'svelte';

	const updateSetting = (setting, value) => {
		$settings.setting = value;
	};

	onMount(() => {
		addDefaultCollection();
	});
</script>

<div class="collection-container">
	{#if $activeCollection.bookmarks}
		{#each $activeCollection.bookmarks as bookmark}
			<!-- prettier-ignore -->
			<div
				class="bookmark-container"
				style="
					width: {$settings.size}px;
					height: {$settings.size}px;
					margin: {$settings.gap}px;
					"
			>
				<Bookmark {bookmark}/>
			</div>
		{/each}
	{/if}
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
