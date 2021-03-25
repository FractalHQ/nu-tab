<script context="module">
	import { localStorageStore } from '../utils/localStorageStore';

	const randomColor = () =>
		'#' + Math.floor(Math.random() * 16777215).toString(16);
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
