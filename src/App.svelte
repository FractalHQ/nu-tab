<script lang="ts">
	import { Router } from '@roxi/routify/runtime';
	import { routes } from '../.routify/routes';
</script>

<Router {routes} />

<style global>
	:global(html, body) {
		background: rgb(var(--light-a));
		color: rgb(var(--dark-a));
		margin: 0;
	}
</style>
