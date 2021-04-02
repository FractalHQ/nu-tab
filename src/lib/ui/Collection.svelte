<script>
	import { addDefaultCollection } from '../data/transactions';
	import { settings } from '../settings/settingsStore';
	import BookmarkEditor from './BookmarkEditor.svelte';
	import SettingsPanel from './SettingsPanel.svelte';
	import { activeCollection } from '../data/dbStore';
	import Bookmark from './Bookmark.svelte';
	import Modal from './Modal.svelte';
	import { onMount } from 'svelte';

	const updateSetting = (setting, value) => {
		$settings.setting = value;
	};

	let showModal = false;

	onMount(() => {
		addDefaultCollection();
	});

	let editorSettings;
	let index;
	function showEditor(i) {
		index = i;
		editorSettings = $activeCollection.bookmarks[index];
		showModal = true;
	}
</script>

<Modal bind:showModal opacity={0}>
	<BookmarkEditor {editorSettings} />
</Modal>

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
			>
				<Bookmark {bookmark} {i} on:showEditor={(e) => showEditor(e.detail.index)}/>
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
		display: grid;
		contain: none;
		display: flex;
		justify-content: center;
	}
</style>
