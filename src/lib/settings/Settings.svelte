<script context="module">
	import { localStorageStore } from '../utils/localStorageStore';

	const randomColor = () =>
		'#' + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0');
	localStorage.clear();

	export const bookmark_settings = localStorageStore('settings', {
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
