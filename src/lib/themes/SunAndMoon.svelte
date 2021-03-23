<script lang="ts">
	import { activeTheme } from './themeStore';
	import { tweened } from 'svelte/motion';
	export let size = 35;
	let style = 'top:0;left:0;';
	// export let stroke = 'rgb(var(--dark-a), 0.1)';
	let radius = 2.5;
</script>

<div style="width: {size}px; {style}">
	<svg
		width="100%"
		height="100%"
		viewBox="-5 -5 10 10"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<circle x="5" y="5" r={radius} fill="url(#SunGradient)" />
		<circle x="5" y="5" r={radius * 2} fill="url(#SunGlow)" />
		<defs>
			<radialGradient id="SunGradient">
				<stop offset="0.6" stop-color="#F31">
					<animate
						attributeName="stop-color"
						values="#F63;#F31;#F63"
						dur="10s"
						repeatCount="indefinite"
						autoReverse="true"
					/>
				</stop>
				<stop offset="0.8" stop-color="#F83">
					<animate
						attributeName="stop-color"
						values="#F83;#F63;#F83"
						dur="7s"
						repeatCount="indefinite"
						autoReverse="true"
					/>
				</stop>
				<stop offset="1" stop-color="#ff1">
					<animate
						attributeName="stop-color"
						values="#ff1;#f92;#ff1"
						dur="6s"
						repeatCount="indefinite"
						autoReverse="true"
					/>
				</stop>
			</radialGradient>
			<radialGradient id="SunGlow">
				<stop offset="0" stop-color="#ff1" transform="scale(2)">
					<animate
						attributeName="stop-color"
						values="#ff13;#f922;#ff13"
						dur="6s"
						repeatCount="indefinite"
						autoReverse="true"
					/>
				</stop>
				<stop offset="1" stop-color="#ff1" transform="scale(2)">
					<animate
						attributeName="stop-color"
						values="#ff10;#f920;#ff10"
						dur="5s"
						repeatCount="indefinite"
						autoReverse="true"
					/>
				</stop>
			</radialGradient>
			<!-- <linearGradient id="MoonGradient" x1="0" x2="0" y1="0" y2="1">
				<stop offset="5%" stop-color="red" />
				<stop offset="95%" stop-color="orange" />
			</linearGradient> -->
		</defs>
	</svg>
</div>

<style>
	div {
		position: absolute;
		max-width: max-content;
	}
	/* circle {
		fill: url(#SunGradient);
	} */
</style>
