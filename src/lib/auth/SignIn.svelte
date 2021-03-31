<script context="module">
	import { authenticate } from '../auth/auth';
</script>

<div id="auth_container" width="100%" textAlign="center">
	<div id="auth_card" maxWidth="800px" mx="auto" mt={[6, '100px']}>
		<div
			id="auth_title"
			fontWeight="700"
			fontSize={['36px', '50px']}
			lineHeight={1}
			display="block"
		>
			Todos secured by Stacks
		</div>
		<div id="auth_box" mt={[5, '60px']}>
			<button on:click={authenticate}>Get Started</button>
		</div>
	</div>
</div>

<style>
	#auth_container {
		width: 100%;
		text-align: center;
	}
	#auth_card {
		max-width: 800px;
		margin: auto;
	}
	#auth_title {
		font-size: clamp(36px, 5vw, 50pxrem);
		font-weight: 700px;
		line-height: 1rem;
		display: flex;
	}
	#auth_box {
		margin-top: 60px;
	}
	button {
		border-radius: 10px;
		padding: 1rem 2rem;
		width: max-content;
		margin: auto;
	}
</style>
