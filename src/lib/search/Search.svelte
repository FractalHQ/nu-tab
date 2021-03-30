<script>
	import Engine from './Engine.svelte';
</script>

<div class="search-wrapper">
	<Engine />
	<input type="text" id="search" />
</div>

<style>
	#search {
		border: 1px solid rgba(var(--dark-b), 0.2);
		background: rgb(var(--light-a));
		color: rgb(var(--dark-a));
		padding: 0.75rem 20px 0.7rem 3rem;
		border-radius: 20px;
		text-align: justify;
		line-height: 100%;
		resize: false;
		width: 400px;
		margin: 2rem auto;
	}
	#search:focus {
		outline: none;
		border: 1px solid rgba(var(--primary-a), 0.75);
	}
	.search-wrapper {
		width: 500px;
		display: flex;
		margin: auto;
	}
</style>
