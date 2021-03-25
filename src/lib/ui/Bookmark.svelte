<script>
	import { bookmark_settings } from '../settings/Settings.svelte';

	const { url, color, image, title } = $bookmark_settings;
</script>

<div
	class="bookmark"
	style="
		{image ? `background-image: ${image}` : `background: ${color}`};
	"
>
	<a href={url} target="_blank">
		<p>{title}</p>
	</a>
</div>

<style>
	.bookmark {
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
	}
	a {
		width: 100%;
		text-decoration: none;
	}
</style>
