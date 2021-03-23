<script>
	import Bookmark from './Bookmark.svelte';

	const randomColor = () =>
		'#' + Math.floor(Math.random() * 16777215).toString(16);

	export let settings = () => ({
		url: 'https://www.google.com',
		color: randomColor(),
		image: null,
		title: '🔗',
		size: 75,
		spacing: 10,
	});

	let bookmarks = Array(20).fill(settings());
</script>

<div class="bookmark-container">
	{#each bookmarks as bookmark}
		<Bookmark settings={bookmark} />
	{/each}
</div>

<style>
	.bookmark-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		margin: 25px;
	}
</style>
