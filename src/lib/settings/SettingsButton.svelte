<script>
	import { showSettings } from './settingsStore';
</script>

<div class="settings-button">
	<div class="burger">
		<div class="bar" />
		<div class="bar" />
		<div class="bar" />
	</div>
	<div class="gear" on:click={() => ($showSettings = !$showSettings)}>⚙</div>
</div>

<style>
	/* TODO: Burger Bars */
	.settings-button {
		position: absolute;
		top: 0;
		right: 3px;

		padding: 9px;

		font-size: 25px;
		cursor: pointer;
	}
	.burger {
		display: flex;
		flex-direction: row;
	}
</style>
