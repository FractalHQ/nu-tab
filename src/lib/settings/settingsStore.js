import { localStorageStore } from '../utils/localStorageStore'
import { writable } from 'svelte/store'

export const ranges = {
	size: { min: 75, max: 250 },
	gap: { min: 0, max: 100 },
    iconSize: {min: 0, max: 150},
};

const default_settings = {
	size: 75,
    gap: 25,
    iconSize: 50,
};

export const settings = localStorageStore('settings', default_settings)

export const showControls = writable(false)