<script lang="ts">
	import SettingsPanel from '../settings/SettingsPanel.svelte'
	import { addDefaultCollection } from '../data/transactions'
	import { settings } from '../settings/settingsStore'
	import BookmarkEditor from './BookmarkEditor.svelte'
	import { activeCollection } from '../data/dbStore'
	import Bookmark from './Bookmark.svelte'

	import { onMount } from 'svelte'

	const updateSetting = (setting, value) => {
		$settings.setting = value
	}

	let hovering = null

	onMount(() => {
		addDefaultCollection()
	})
</script>

<div class="collection-container">
	{#if $activeCollection.bookmarks}
		{#each $activeCollection.bookmarks as bookmark, i}
			<!-- prettier-ignore -->
			<div
				class="bookmark-container"
				style="
					width: {$settings.size}px;
					height: {$settings.size}px;
					margin: {$settings.gap}px;
				"
                on:mouseover={() => hovering = i}
                on:mouseout={() => hovering = null}
			>
				<Bookmark {bookmark} {hovering} {i} on:showEditor/>
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
		width: max-content;
		max-width: 80vw;
		flex-wrap: wrap;
		margin: 0 auto;
		margin-top: 5%;
		display: grid;
		contain: none;
		display: flex;
		justify-content: center;
	}
</style>
