import { activeTheme } from './themeStore';
import { get } from 'svelte/store';
import { themes } from './themes';

let verbose = false; 	// Change to true for debug logs.
const log = verbose   	// Colorful console.log with optional theming, i.e.:  log(`x = ${x})`, 'purple', 20, 'blue')
	? (str, color = 'lightblue', font_size = 15, border = 'gray',) => console.log(`%c${str}`, `size:${font_size}px;color:${color};border:1px solid ${border};padding:5px;`)
	: (s, c, f, b) => { };
if (verbose && import.meta.env.NODE_ENV == 'production') verbose = false;

const client = typeof window !== "undefined";

const mapTheme = (theme = themes['light']) => {
	return {
		'--brand-a': theme.brandA || '',
		'--brand-a-rgb': theme.brandARGB || '',
		'--brand-b': theme.brandB || '',
		'--brand-b-rgb': theme.brandBRGB || '',
		'--brand-c': theme.brandC || '',
		'--brand-c-rgb': theme.brandCRGB || '',
		'--light-a': theme.lightA || '',
		'--light-a-rgb': theme.lightARGB || '',
		'--light-b': theme.lightB || '',
		'--light-b-rgb': theme.lightBRGB || '',
		'--light-c': theme.lightC || '',
		'--light-c-rgb': theme.lightCRGB || '',
		'--light-d': theme.lightD || '',
		'--light-d-rgb': theme.lightDRGB || '',
		'--dark-a': theme.darkA || '',
		'--dark-a-rgb': theme.darkARGB || '',
		'--dark-b': theme.darkB || '',
		'--dark-b-rgb': theme.darkBRGB || '',
		'--dark-c': theme.darkC || '',
		'--dark-c-rgb': theme.darkCRGB || '',
		'--dark-d': theme.darkD || '',
		'--dark-d-rgb': theme.darkDRGB || '',
		'--always-dark': theme.alwaysDark || '',
		'--invert': theme.invert || '',
	};
};

let loopGaurd = 0
const refreshStorage = (theme) => {
	console.log('Unsupported theme.  Refreshing localStorage');
	if (loopGaurd == 0) {
		localStorage.removeItem('theme')
		applyTheme(theme)
		loopGaurd++
	}
}

export const applyTheme = (theme = 'light') => {
	log(`applyTheme(${theme})`, 'purple');
	const currentTheme = mapTheme(themes[theme]);
	if (!currentTheme) refreshStorage(theme);
	if (!currentTheme) return;

	const root = document.body;
	Object.keys(currentTheme).forEach((property) => {
		if (property === 'name') {
			return;
		}
		root.style.setProperty(property, currentTheme[property]);
	});
	try {
		localStorage.setItem('theme', theme);
	} catch (err) {
		console.log('%c Unable to save theme preference in local storage 😕', 'color:coral');
		refreshStorage(theme);
	}
	activeTheme.set(theme);
};

const supports_color_scheme = client && window.matchMedia('(prefers-color-scheme)').media !== 'not all';
const prefers_dark = client && window.matchMedia('(prefers-color-scheme: dark)');

export const applySystemTheme = () => {
	log('applySystemTheme()', 'coral');
	supports_color_scheme && prefers_dark.matches ? applyTheme('dark') : applyTheme('light');
};

function detectSystemPreference(e) {
	log('Detected change', 'cyan', 29);
	if (e.matches) {
		log('system prefers darkMode', 'pink');
		applyTheme('dark');
	} else {
		applyTheme('light');
	}
}

export const initTheme = async () => {
	log('initTheme()', 'orange');

	if (supports_color_scheme) prefers_dark.addEventListener('change', detectSystemPreference);

	if (localStorage)
		if ('theme' in localStorage) {
			try {
			const pref = get(activeTheme)
			if (pref) {
					log('theme found in localStorage: ' + pref, 'green');
					applyTheme(pref);
				}
			} catch (err) {
				console.log('%c Unable to access theme preference in local storage 😕', 'color:coral');
				console.error(err);
				localStorage.removeItem('theme');
			}
		} else {
			applySystemTheme();
		}
};

export const toggleTheme = () => {
	const _activeTheme = get(activeTheme);
	log(`toggleTheme(${activeTheme})`, 'blue');
	if (_activeTheme == 'light') {
		applyTheme('dark');
	} else if (_activeTheme == 'dark') {
		applyTheme('light');
	} else applySystemTheme();
};
