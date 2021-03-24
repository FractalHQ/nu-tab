<script>
	import { fade } from 'svelte/transition';

	export let size;

	const r = (max) => Math.floor(Math.random() * Math.floor(max));

	const s = r(2);
</script>

<div
	class="star-container"
	style="width:{size * 1.5}px; height: {size}px"
	transition:fade
>
	{#each Array(30).fill() as star}
		<!-- prettier-ignore -->
		<figure style="top:{r(100)}%;left:{r(100)}%;animation-delay:{r(3)}s;width:{s}px;height:{s}px" class="star">
            <figure class="star-top" />
            <figure class="star-bottom" />
        </figure>
	{/each}
</div>

<style>
	.star-container {
		position: absolute;
		overflow: hidden;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		z-index: 0;
		border-radius: 100%;
	}
	figure {
		margin: 0;
		padding: 0;
		border: 0;
		outline: none;
		box-sizing: border-box;
	}
	.star {
		display: block;
		position: absolute;
		top: 25%;
		left: 25%;
		background: white;
		overflow: hidden;
		z-index: 2;
		border-radius: 99px;
		animation: glitter 8s linear 0s infinite;
		animation-play-state: playing;
	}
	@-webkit-keyframes glitter {
		0% {
			-webkit-transform: scale(1);
			opacity: 0.5;
		}
		25% {
			-webkit-transform: scale(0.5);
			opacity: 0;
		}
		50% {
			-webkit-transform: scale(1);
			opacity: 0.8;
		}
		75% {
			-webkit-transform: scale(0.5);
			opacity: 0;
		}
		100% {
			-webkit-transform: scale(1);
			opacity: 0.3;
		}
	}
</style>
