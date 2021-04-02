<script>
	export let editorSettings = {};
	let debug = false;
</script>

{#if debug}
	<pre>{JSON.stringify(editorSettings, null, 2).split('"').join('')}</pre>
{/if}

<div class="settings-container">
	<img
		name="image"
		src={editorSettings['image']}
		alt={editorSettings['title']}
	/>

	<div class="setting">
		<div
			id="title"
			contenteditable
			bind:innerHTML={editorSettings['title']}
		/>
	</div>

	<div class="setting">
		<!-- <label for="description">description</label> -->
		<input
			name="description"
			placeholder="description"
			type="text"
			bind:value={editorSettings['description']}
		/>
	</div>

	<div class="setting">
		<label for="url">url</label>
		<input name="url" type="text" bind:value={editorSettings['url']} />
	</div>

	<div class="setting">
		<label for="tags">tags</label>
		<input name="tags" type="text" bind:value={editorSettings['tags']} />
	</div>

	<br />
	<br />

	{#if editorSettings['image'] === null}
		<div class="colors">
			<div class="setting">
				<label for="background">background</label>
				<input
					name="background"
					type="color"
					bind:value={editorSettings['background']}
				/>
			</div>

			<div class="setting">
				<label for="foreground">foreground</label>
				<input
					name="foreground"
					type="color"
					bind:value={editorSettings['foreground']}
				/>
			</div>
		</div>
	{/if}
</div>

<style>
	.settings-container {
		width: 500px;
		height: 350px;
		display: flex;
		flex-direction: column;
		background: rgb(var(--light-a));
		margin: 30vh auto;
		border-radius: 10px;
		box-shadow: 0 5px 15px 5px #0001;
	}
	.setting {
		font-size: 1.3rem;
		display: flex;
		justify-content: space-around;
	}
	label {
		text-align: right;
		width: 20%;
		margin: auto 0;
		color: rgba(var(--dark-d), 0.5);
	}
	input {
		width: 70%;
		margin: 0.5rem 1rem;
		padding: 7px 8px 5px 8px;
		background: rgb(var(--light-a));
		outline: none;
		border: 1px solid rgba(var(--light-b), 0);
		border-radius: 3px;
		font-family: 'Abel';
		font-size: 1rem;
		color: rgb(var(--dark-a));
	}
	input:focus {
		border: 1px solid rgba(var(--light-b), 1);
	}
	input[name='url'] {
		font-family: monospace;
	}
	input[name='description'] {
		margin: 0 auto 1rem auto;
		text-align: center;
		color: rgba(var(--dark-d), 0.75);
	}
	input[type='color'] {
		width: 50px;
	}
	label[for='foreground'],
	label[for='background'] {
		width: max-content;
	}
	.colors {
		display: flex;
		justify-content: space-evenly;
	}
	img {
		margin: 2rem auto 0 auto;
		width: 100px;
		height: 100px;
		display: flex;
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
		left: 0;
		top: 10rem;
		font-size: 1.2rem;
		color: rgb(var(--dark-b));
		background: rgba(var(--light-b), 0.5);
		border-radius: 5px;
		padding: 1rem;
		z-index: -1;
	}
</style>
