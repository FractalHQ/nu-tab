<script>
	export let bookmark;
</script>

<a href={bookmark.url} target="_blank">
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

<style>
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
	}
</style>
