<script lang="ts">
	import { Router } from '@roxi/routify/runtime';
	import { routes } from '../.routify/routes';
</script>

<Router {routes} />

<style global>
	:global(html),
	:global(body) {
		margin: 0;
	}
</style>
