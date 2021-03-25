<script context="module">
	import { writable } from 'svelte/store';

	const randomColor = () =>
		'#' + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0');
	export const bookmark_settings = writable({
		url: 'https://www.google.com',
		color: randomColor(),
		image: null,
		title: '🔗',
		description: '',
	});
</script>

<script>
	import SettingsButton from './SettingsButton.svelte';
</script>

<SettingsButton />
