<script>
	import { authStore } from '../../lib/auth/authStore';
	const { supabase, user } = authStore;
	$: supabase.auth.onAuthStateChange((event, session) => {
		window.opener.handleRes(session.user);
		window.close();
	});
	$: if ($user) window.close();
</script>

<div class="success">Success!</div>

<style>
	.success {
		font-size: 20px;
		margin: 5rem auto;
		width: max-content;
		display: flex;
	}
</style>
