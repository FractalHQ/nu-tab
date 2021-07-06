<script>
	export let text = 'var(--dark-a)'
	export let texthover = 'var(--brand-a)'
	export let display = ''
	export let bg = 'var(--light-a)'
	export let bgHover = 'var(--light-a)'
	export let border = '1px solid var(--light-a)'
	export let borderHover = '1px solid var(--light-a)'
	export let style = ''
</script>

<button
	on:click
	style="
		--bg:{bg};
		--bgHover:{bgHover};
		--text:{text};
		--texthover:{texthover};
		--border:{border};
		--borderHover:{borderHover};
		display:{display};
		{style}
	"
>
	<slot>Click Me</slot>
</button>

<style>
	button {
		background: var(--bg);
		color: var(--text);
		width: max-content;
		padding: 0.5em 1em;
		margin: 1em 0.5em;

		border: var(--border);
		border-radius: 5px;
		box-shadow: 0 2px 4px #0002;

		font-family: var(--font-primary);

		cursor: pointer;

		transform: scale(1);
		transition: 0.2s;
	}
	button:hover {
		background: var(--bgHover);
		border: var(--borderHover);
		color: var(--texthover);
		box-shadow: 0 4px 8px #0002;
		transform: scale(1.05);
	}
	button:focus,
	button:active {
		box-shadow: 0 0 1.5px 1px var(--brand-a);
		transform: scale(0.95);
		transition: 0.1s;
	}
</style>
