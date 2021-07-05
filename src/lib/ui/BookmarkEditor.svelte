<script>
	import Button from "./Button.svelte";

	export let editorSettings = {};
	let debug = false;
</script>

{#if debug}
	<pre>{JSON.stringify(editorSettings, null, 2).split('"').join('')}</pre>
{/if}

<div class="settings-container">
	<img
		name="image"
		src={editorSettings["image"]}
		alt={editorSettings["title"]}
	/>

	<div class="setting">
		<div
			id="title"
			contenteditable
			bind:innerHTML={editorSettings["title"]}
		/>
	</div>

	<div class="setting">
		<!-- <label for='description'>description</label> -->
		<input
			name="description"
			placeholder="description"
			type="text"
			bind:value={editorSettings["description"]}
		/>
	</div>

	<div class="setting">
		<label for="url">url</label>
		<input name="url" type="text" bind:value={editorSettings["url"]} />
	</div>

	<div class="setting">
		<label for="tags">tags</label>
		<input name="tags" type="text" bind:value={editorSettings["tags"]} />
	</div>

	<div class="buttons">
		<Button>Save</Button>
	</div>

	{#if editorSettings["image"] === null}
		<div class="colors">
			<div class="setting">
				<label for="background">background</label>
				<input
					name="background"
					type="color"
					bind:value={editorSettings["background"]}
				/>
			</div>

			<div class="setting">
				<label for="foreground">foreground</label>
				<input
					name="foreground"
					type="color"
					bind:value={editorSettings["foreground"]}
				/>
			</div>
		</div>
	{/if}
</div>

<style>
	.settings-container {
		display: flex;
		flex-direction: column;

		width: 500px;
		height: max-content;
		margin: 30vh auto;

		border-radius: 10px;
		background: rgb(var(--light-a));
		box-shadow: 0 5px 15px 5px #00000011;
	}
	.setting {
		display: flex;
		justify-content: space-around;

		font-size: 1.3rem;
	}
	label {
		width: 20%;
		margin: auto 0;

		color: rgba(var(--dark-d), 0.5);

		text-align: right;
	}
	input {
		width: 70%;
		margin: 0.5rem 1rem;
		padding: 7px 8px 5px 8px;

		font-family: "Abel";
		font-size: 1rem;

		color: rgb(var(--dark-a));
		border: 1px solid rgba(var(--light-b), 0);
		border-radius: 3px;
		outline: none;
		background: rgb(var(--light-a));
	}
	input:focus {
		border: 1px solid rgba(var(--light-b), 1);
	}
	input[name="url"] {
		font-family: monospace;
	}
	input[name="description"] {
		margin: 0 auto 1rem auto;

		color: rgba(var(--dark-d), 0.75);

		text-align: center;
	}
	input[type="color"] {
		width: 50px;
	}
	label[for="foreground"],
	label[for="background"] {
		width: max-content;
	}
	.colors {
		display: flex;
		justify-content: space-evenly;
	}
	img {
		display: flex;

		width: 100px;
		height: 100px;
		margin: 2rem auto 0 auto;
	}
	#title {
		margin: 0 auto 0 auto;
		padding: 0.2rem 0.7rem;

		/* border: 1px solid rgba(var(--dark-d), 0); */
		outline-color: rgba(var(--dark-d), 0.2);
		outline-width: 0.5;
	}
	#title:focus {
		/* border: 1px solid rgba(var(--dark-d), 0.75); */
	}
	pre {
		position: absolute;
		top: 10rem;
		left: 0;

		padding: 1rem;

		font-size: 1.2rem;

		color: rgb(var(--dark-b));
		border-radius: 5px;
		background: rgba(var(--light-b), 0.5);

		z-index: -1;
	}
</style>
