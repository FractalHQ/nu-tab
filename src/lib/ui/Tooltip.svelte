<script>
	import tippy, { sticky } from 'tippy.js';
	import { onMount } from 'svelte';

	export let content = 'Tooltip';
	export let placement = 'right';
	export let delay = [750, 100];
	export let interactive = false;
	export let arrow = true;
	export let offset = [0, 0];
	export let display = '';
	let instance;

	onMount(() => {
		tippy.setDefaultProps({
			moveTransition: 'transform 0.2s ease-out',
			animation: 'shift-away-subtle',
			duration: [250, 100],
			plugins: [sticky],
			delay,
		});
		tippy(`#${content}`, {
			content: content.split('_').join(' '),
			interactive,
			placement,
			arrow,
			offset,
			delay,
		});
		const container = document.querySelector(`#${content}`);
		instance = container?._tippy;
	});

	$: if (tippy && instance) instance.setContent(content.split('_').join(' '));
</script>

<span id={content} style="display:{display}" class="tippy-container">
	<slot />
</span>

<style>
	#slot {
		width: 100%;
		height: 100%;
	}

	:global(.tippy-box[data-animation='fade'][data-state='hidden']) {
		opacity: 0;
	}

	:global(.tippy-box) {
		font-family: var(--font-secondary);
		font-size: 14px;
		line-height: 1.4;

		position: relative;
		z-index: 1;

		transition-property: transform, visibility, opacity;
		letter-spacing: 2px;

		color: rgb(var(--dark-d));
		border-radius: 4px;
		outline: 0;
		background-color: rgb(var(--light-a));
		box-shadow: 0 2px 5px #54354311;
	}

	:global(.tippy-box[data-placement^='top'] > .tippy-arrow) {
		bottom: 0;
	}

	:global(.tippy-box[data-placement^='top'] > .tippy-arrow:before) {
		bottom: -7px;
		left: 0;

		transform-origin: center top;

		border-width: 8px 8px 0;
		border-top-color: initial;
	}

	:global(.tippy-box[data-placement^='bottom'] > .tippy-arrow) {
		top: 0;
	}

	:global(.tippy-box[data-placement^='bottom'] > .tippy-arrow:before) {
		top: -7px;
		left: 0;

		transform-origin: center bottom;

		border-width: 0 8px 8px;
		border-bottom-color: initial;
	}

	:global(.tippy-box[data-placement^='left'] > .tippy-arrow) {
		right: 0;
	}

	:global(.tippy-box[data-placement^='left'] > .tippy-arrow:before) {
		right: -7px;

		transform-origin: center left;

		border-width: 8px 0 8px 8px;
		border-left-color: initial;
	}

	:global(.tippy-box[data-placement^='right'] > .tippy-arrow) {
		left: 0;
	}

	:global(.tippy-box[data-placement^='right'] > .tippy-arrow:before) {
		left: -7px;

		transform-origin: center right;

		border-width: 8px 8px 8px 0;
		border-right-color: initial;
	}

	:global(.tippy-box[data-inertia][data-state='visible']) {
		transition-timing-function: cubic-bezier(0.54, 1.5, 0.38, 1.11);
	}

	:global(.tippy-arrow) {
		position: relative;
		z-index: 0;

		width: 16px;
		height: 16px;

		color: rgb(var(--light-a));
	}

	:global(.tippy-arrow:before) {
		position: absolute;

		content: '';

		border-style: solid;
		border-color: transparent;
	}

	:global(.tippy-content) {
		position: relative;
		z-index: 1;

		padding: 5px 9px;
	}

	/* Animation */
	:global(.tippy-box[data-animation='shift-away-subtle'][data-state='hidden']) {
		opacity: 0;
	}
	:global(.tippy-box[data-animation='shift-away-subtle'][data-state='hidden'][data-placement^='top']) {
		transform: translateY(5px);
	}
	:global(.tippy-box[data-animation='shift-away-subtle'][data-state='hidden'][data-placement^='bottom']) {
		transform: translateY(-5px);
	}
	:global(.tippy-box[data-animation='shift-away-subtle'][data-state='hidden'][data-placement^='left']) {
		transform: translateX(5px);
	}
	:global(.tippy-box[data-animation='shift-away-subtle'][data-state='hidden'][data-placement^='right']) {
		transform: translateX(-5px);
	}
</style>
