import { localStorageStore } from '../utils/localStorageStore'
import { writable } from 'svelte/store'

export const ranges = {
    size: { min: 75, max: 250 },
    gap: { min: 0, max: 100 },
}

const default_settings = {
	size: 100,
	gap: 10,
};

export const settings = localStorageStore('settings', default_settings)

export const showControls = writable(false)