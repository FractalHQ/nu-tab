//! 	RGB versions allow you to specify alpha opacity.
//?     For example:
//* 	h1 {
//* 		color: var(--dark-a);
//* 		background: rgba(var(--light-a-rgb), 0.5);  	// 50% opacity
//* 	}

const brand = {
	brandA: '#d81e5b',
	brandARGB: '216, 30, 91',
	brandB: '#11ffaa',
	brandBRGB: '17, 255, 170',
	brandC: '#577590',
	brandCRGB: '87,117,144',
	alwaysDark: '#111111',
	warn: '#d81e5b',
	warnRGB: '216, 30, 91',
	confirm: '#33B3E9',
	confirmRGB: '51, 179, 233'
};

export const light = {
	...brand,
	lightA: '#F5F5F5',
	lightB: '#D7DCE0',
	lightC: '#7D8AA2',
	lightD: '#677182',
	darkA: '#161B21',
	darkB: '#1F262D',
	darkC: '#313944',
	darkD: '#464E5C',
	lightARGB: '245,245,245',
	lightBRGB: '215,220,224',
	lightCRGB: '125,138,162',
	lightDRGB: '103,113,130',
	darkARGB: '22,27,33',
	darkBRGB: '31,38,45',
	darkCRGB: '49,57,68',
	darkDRGB: '70,78,92',
	invert: 'none', // applied with `filter: var(--invert)` to invert colors in dark mode
};

// Dark inverts light
export const dark = {
	...brand,
	lightA: '#161B21',
	lightB: '#1F262D',
	lightC: '#313944',
	lightD: '#464E5C',
	darkA: '#F5F5F5',
	darkB: '#D7DCE0',
	darkC: '#7D8AA2',
	darkD: '#677182',
	lightARGB: '22,27,33',
	lightBRGB: '31,38,45',
	lightCRGB: '49,57,68',
	lightDRGB: '70,78,92',
	darkARGB: '245,245,245',
	darkBRGB: '215,220,224',
	darkCRGB: '125,138,162',
	darkDRGB: '103,113,130',
	invert: 'invert(1)', // applied with `filter: var(--invert)` to invert colors in dark mode
};

export const themes = { dark, light };
export default themes;