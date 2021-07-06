<script>
	import Button from '$ui/Button.svelte'
	import Tags from '$ui/Tags.svelte'

	export let editorSettings = {}
	export let settings, i, bookmark_id
	let descriptionHover = false
	$: placeholder = descriptionHover ? 'description' : '+'
	let debug = false

	let hovering
	let tag = ''
	function handleTags(event) {
		tag = event.detail.tags
	}
	async function updateTags(event, index, id) {
		settings['tags'] = event.detail.tags
	}
</script>

{#if debug}
	<pre>{JSON.stringify(editorSettings, null, 2).split('"').join('')}</pre>
{/if}

<div class="settings-container">
	<img name="image" src={editorSettings['image']} alt={editorSettings['title']} />

	<div class="setting">
		<div id="title" contenteditable bind:innerHTML={editorSettings['title']} />
	</div>

	<div class="setting">
		<!-- <label for='description'>description</label> -->
		<input
			name="description"
			{placeholder}
			type="text"
			bind:value={editorSettings['description']}
			on:mouseover={() => (descriptionHover = true)}
			on:mouseout={() => (descriptionHover = false)}
		/>
	</div>

	<div class="setting">
		<label for="url">url</label>
		<input name="url" type="text" bind:value={editorSettings['url']} />
	</div>

	<div class="setting">
		<label for="tags">tags</label>
		<!-- <input name="tags" type="text" bind:value={editorSettings['tags']} /> -->
		<div name="tags" class="tags">
			<Tags
				on:updateTags={(e) => updateTags(e, i, bookmark_id)}
				on:tags={handleTags}
				placeholder={'+'}
				allowPaste={true}
				onlyUnique={true}
				removeKeys={[46]}
				allowDrop={true}
				allowBlur={true}
				splitWith={'/'}
				addKeys={[9, 13]}
				name={'tags'}
				maxTags={5}
				minChars={2}
				bind:tags={editorSettings['tags']}
			/>
		</div>
	</div>

	<div class="buttons">
		<Button borderHover="1px solid var(--brand-a)">Cancel</Button>
		<Button>Save</Button>
	</div>

	{#if editorSettings['image'] === null}
		<div class="colors">
			<div class="setting">
				<label for="background">background</label>
				<input name="background" type="color" bind:value={editorSettings['background']} />
			</div>

			<div class="setting">
				<label for="foreground">foreground</label>
				<input name="foreground" type="color" bind:value={editorSettings['foreground']} />
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
		background: var(--light-a);
		box-shadow: 0 5px 15px 5px #00000011;
	}

	.setting {
		display: flex;
		justify-content: space-around;

		font-size: 1.3rem;
	}

	.tags {
		font-family: var(--font-primary);
	}

	.buttons {
		display: flex;

		width: max-content;
		margin: 1rem auto;

		gap: 1rem;
	}

	label {
		width: 20%;
		margin: auto 0;

		color: rgba(var(--dark-d), 0.5);

		text-align: right;
	}

	input,
	.tags {
		width: 70%;
		margin: 0.5rem 1rem;
		padding: 0 8px 0 8px;

		font-family: 'Abel';
		font-size: 1rem;

		color: var(--dark-a);
		border: 1px solid rgba(var(--light-b), 0);
		border-radius: 3px;
		outline: none;
		background: var(--light-a);
	}

	input:focus {
		border: 1px solid rgba(var(--light-b), 1);
	}

	input[name='url'] {
		font-family: monospace;
	}

	input[name='description'] {
		margin: 0 auto 1rem auto;

		color: rgba(var(--dark-d), 0.75);

		text-align: center;
	}

	input[name='description']::placeholder {
		color: rgba(var(--dark-d), 0.3);
	}
	input[name='description']:hover::placeholder {
		content: 'description';
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

		color: var(--dark-b);
		border-radius: 5px;
		background: rgba(var(--light-b), 0.5);

		z-index: -1;
	}
</style>
