<script>
	import { authStore } from '../../lib/auth/authStore';
	import { isActive } from '@roxi/routify';

	const { githubSignIn } = authStore;

	$: if ($isActive('/auth/login')) githubSignIn();
</script>

<slot />
