import { activeTheme } from './themeStore';
import { themes } from './themes';

const verbose = true; // toggle to enable verbose debugging
const log = verbose
	? (str, color = 'lightblue', font_size = 15) => console.log(`%c${str}`, `size:${font_size}px;color:${color}`)
	: (s, c, f) => {};

const mapTheme = (theme = themes['light']) => {
	return {
		'--primary-a': theme.primaryA || '',
		'--primary-b': theme.primaryB || '',
		'--secondary-a': theme.secondaryA || '',
		'--secondary-b': theme.secondaryB || '',
		'--light-a': theme.lightA || '',
		'--light-b': theme.lightB || '',
		'--light-c': theme.lightC || '',
		'--light-d': theme.lightD || '',
		'--dark-a': theme.darkA || '',
		'--dark-b': theme.darkB || '',
		'--dark-c': theme.darkC || '',
		'--dark-d': theme.darkD || '',
		'--always-light': theme.alwaysLight || '',
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
	}
	activeTheme.set(theme);
};

const supports_color_scheme = window.matchMedia('(prefers-color-scheme)').media !== 'not all';
const prefers_dark = window.matchMedia('(prefers-color-scheme: dark)');
export const applySystemTheme = () => {
	log('applySystemTheme()', 'coral');
	supports_color_scheme && prefers_dark.matches ? applyTheme('dark') : applyTheme('light');
};

function detectSystemPreference(e) {
	log('Detected change', 'cyan', 29);
	if (e.matches) {
		/* system prefers darkMode */
		log('system prefers darkMode', 'pink');
		applyTheme('dark');
	} else {
		applyTheme('light');
	}
}

export const getTheme = async () => {
	log('getTheme()', 'orange');

	if (supports_color_scheme) prefers_dark.addEventListener('change', detectSystemPreference);

	if (localStorage)
		if ('theme' in localStorage) {
			log('theme found in localStorage: ' + localStorage.getItem('theme'), 'lightgreen');
			try {
				const pref = localStorage.getItem('theme');
				if (pref) applyTheme(pref);
			} catch (err) {
				console.log('%c Unable to access theme preference in local storage 😕', 'color:coral');
				console.error(err);
				localStorage.removeItem('theme');
			}
		} else {
			applySystemTheme();
		}
};
// applyTheme();
// getTheme();
