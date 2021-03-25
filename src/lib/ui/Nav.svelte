<script>
	import { layout, url } from '@roxi/routify';
</script>

<nav>
	{#each $layout.children as { path, title }}
		<a href={path} use:$url>
			<span style="color:rgb(var(--primary-a));">NU</span>
			TAB
		</a>
	{/each}
</nav>

<style>
	nav {
		justify-content: space-around;
		flex-direction: row-reverse;
		padding: 1rem;
		display: flex;
		font-size: 30px;
	}
	a {
		color: rgb(var(--dark-a));
		text-decoration: none;
	}
</style>
