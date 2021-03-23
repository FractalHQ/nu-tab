<script>
	export let settings;
	const { url, color, image, title, size, spacing } = settings;
</script>

<div
	class="bookmark"
	style="
		{image
		? `background-image: ${image}`
		: `background: ${color}`};
		width: {size}px;
		height: {size}px;
		max-width: {size}px;
		max-height: {size}px;
		margin: {spacing}px;
	"
>
	<a href={url} target="_blank">
		<p>{title}</p>
	</a>
</div>

<style>
	.bookmark {
		border-radius: 10px;
		align-items: center;
		text-align: center;
		display: flex;
		position: relative;
	}
	p {
		font-size: 20px;
		width: 100%;
	}
	a {
		width: 100%;
		text-decoration: none;
	}
</style>
