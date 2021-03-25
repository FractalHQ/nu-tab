import { localStorageStore } from '../utils/localStorageStore'

const default_settings = {
	size: { value: 100, min: 50, max: 150 },
	gap: { value: 10, min: 0, max: 100 },
};

export const settings = localStorageStore('settings', default_settings)