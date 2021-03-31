<script>
	import { localStorageStore } from '../utils/localStorageStore';

	const username = localStorageStore(
		'username',
		document.location.pathname.split('/')[2],
	);
</script>
