<script>
	export let setting;
	const { min, max } = setting;
</script>

<input
	name={setting}
	bind:value={setting.value}
	type="range"
	{min}
	{max}
	on:change
/>

<style>
	input[type='range'] {
		background: none;
		max-width: 80%;
	}
	input[type='range']::-webkit-slider-thumb {
		background: rgb(var(--light-c));
		background-image: radial-gradient(
			ellipse at var(--progress) var(--progress),
			blue,
			red
		);
		-webkit-appearance: none;
	}
	input[type='range'] {
		-webkit-appearance: none;
		margin: 18px 0;
		width: 100%;
	}
	input[type='range']:focus {
		outline: none;
	}
	input[type='range']::-webkit-slider-runnable-track {
		box-shadow: 1px 1px 1px #000000aa, 0px 0px 1px #0d0d0daa;
		border: 0.2px solid rgb(var(--light-a));
		cursor: pointer;
		height: 15px;
		width: 100%;
	}
	input[type='range']::-webkit-slider-thumb {
		box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
		border: 1px solid #000000;
		transition: background 0.3s;
		-webkit-appearance: none;
		border-radius: 20px;
		margin-top: -3px;
		cursor: pointer;
		height: 20px;
		width: 20px;
	}
	input[type='range']:focus::-webkit-slider-thumb {
		background: rgb(var(--primary-a));
	}
	input[type='range']::-moz-range-track {
		width: 100%;
		height: 8.4px;
		cursor: pointer;
		box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
		background: #3071a9;
		border-radius: 1.3px;
		border: 0.2px solid rgb(var(--light-a));
	}
	input[type='range']::-moz-range-thumb {
		box-shadow: 1px 1px 1px #000000aa, 0px 0px 1px #0d0d0daa;
		border: 1px solid #000000;
		height: 36px;
		width: 16px;
		border-radius: 3px;
		cursor: pointer;
	}
	input[type='range']::-ms-track {
		width: 100%;
		height: 8.4px;
		cursor: pointer;
		background: transparent;
		border-color: transparent;
		border-width: 16px 0;
		color: transparent;
	}
	input[type='range']::-ms-fill-lower {
		background: #2a6495;
		border: 0.2px solid rgb(var(--light-a));
		border-radius: 2.6px;
		box-shadow: 1px 1px 1px #000000aa, 0px 0px 1px #0d0d0daa;
	}
	input[type='range']::-ms-fill-upper {
		background: #3071a9;
		border: 0.2px solid rgb(var(--light-a));
		border-radius: 2.6px;
		box-shadow: 1px 1px 1px #000000aa, 0px 0px 1px #0d0d0daa;
	}
	input[type='range']::-ms-thumb {
		box-shadow: 1px 1px 1px #000000aa, 0px 0px 1px #0d0d0daa;
		border: 1px solid #000000;
		height: 36px;
		width: 16px;
		border-radius: 3px;
		cursor: pointer;
	}
	input[type='range']:focus::-ms-fill-lower {
		background: #3071a9;
	}
	input[type='range']:focus::-ms-fill-upper {
		background: #367ebd;
	}

	input[type='range']::-webkit-slider-runnable-track {
		background: rgb(var(--light-b));
		border-radius: 50px;
	}
</style>
