<script>
	import { fly } from 'svelte/transition'

	import { settings, ranges, showSettings } from './settingsStore'
	import Range from '../ui/Range.svelte'
	import { clickOutside } from '../utils/clickOutside'

	const updateSetting = (setting, value) => {
		$settings.setting = value
	}
</script>

<div class="mousetrap" on:mouseover={() => ($showSettings = true)} />

{#if $showSettings}
	<div
		class="control-panel"
		transition:fly={{ y: 500, opacity: 1 }}
		on:click_outside={() => ($showSettings = false)}
		use:clickOutside
	>
		<div class="controls">
			{#each Object.keys(ranges) as setting}
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
			<label for="showTitle">
				Show Title
				<input type="checkbox" bind:checked={$settings.showTitle} />
			</label>
		</div>
	</div>
{/if}

<style>
	.control-panel {
		position: absolute;
		position: fixed;
		right: 0;
		bottom: 0;
		left: 0;

		width: 600px;
		max-width: 100vw;
		height: 400px;
		margin: auto;

		border-top-left-radius: 15px;
		border-top-right-radius: 15px;
		background: rgba(var(--light-a-rgb), 0.4);
		color: var(--dark-a);
		box-shadow: 0 10px 50px 0px rgba(29, 29, 29, 0.04), 0 6px 20px 5px rgba(29, 29, 29, 0.01);
		backdrop-filter: blur(50px);
	}

	.controls {
		height: 200px;
		width: 75%;
		margin: auto;
		margin-top: 50px;
	}

	.control {
		display: flex;
		justify-content: space-between;

		height: max-content;
		margin: 20px 0;
		padding: 2px 15px;

		font-size: 20px;

		border: 1px solid rgba(var(--light-c-rgb), 0.33);
		border-radius: 10px;
		background: rgba(var(--light-b-rgb), 0.33);
	}

	label {
		position: relative;

		width: max-content;
		height: 100%;
		margin: auto 0;
	}

	input[type='checkbox'] {
		position: absolute;
		top: 0;
		right: -50%;
		bottom: 0;

		width: 15px;
		height: 15px;
		margin: auto;
	}
	.mousetrap {
		position: absolute;
		right: 0;
		bottom: 0;
		left: 0;

		width: 600px;
		height: 50px;
		margin: auto;
	}
</style>
