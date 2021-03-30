<script>
	import { fly } from 'svelte/transition';

	import { settings, ranges, showControls } from '../settings/settingsStore';
	import Range from './Range.svelte';

	const updateSetting = (setting, value) => {
		$settings.setting = value;
	};
</script>

{#if $showControls}
	<div class="control-panel" transition:fly={{ y: 500, opacity: 1 }}>
		<div class="controls">
			{#each Object.keys($settings) as setting}
				<div class="control">
					<label for={setting}>{setting}</label>
					<Range
						range={ranges[setting]}
						bind:setting={$settings[setting]}
						on:change={(e) => ($settings[setting] = e.target.value)}
						name={setting}
					/>
				</div>
			{/each}
		</div>
	</div>
{/if}

<style>
	.control-panel {
		box-shadow: 0 10px 50px 0px rgba(var(--always-dark-b), 0.04),
			0 6px 20px 5px rgba(var(--always-dark-b), 0.01);
		background: rgba(255, 255, 255, 0.4);
		border-top-right-radius: 15px;
		border-top-left-radius: 15px;
		position: absolute;
		max-width: 100vw;
		height: 400px;
		width: 600px;
		margin: auto;
		bottom: 0;
		right: 0;
		left: 0;
		backdrop-filter: blur(50px);
		position: fixed;
	}
	.controls {
		/* padding: 20px; */
		height: 200px;
		width: 75%;
		margin: auto;
	}
	.control {
		border: 1px solid rgba(var(--light-c), 0.33);
		height: max-content;
		border-radius: 10px;
		padding: 2px 15px;
		/* margin: 20px; */
		display: flex;
		margin: 40px 0;
		font-size: 20px;
		justify-content: space-between;
		background: rgba(var(--light-b), 0.33);
	}
	label {
		height: 100%;
		margin: auto 0;
		width: max-content;
	}
</style>
