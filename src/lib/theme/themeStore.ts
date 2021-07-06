import localStorageStore from '$utils/localStorageStore'

const initialTheme = globalThis.localStorage && 'theme' in localStorage
	? localStorage.getItem('theme')
	: 'light'

export const activeTheme = localStorageStore('theme', initialTheme);
export default activeTheme;