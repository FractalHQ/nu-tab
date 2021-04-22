import { writable } from 'svelte/store';

const client = typeof window !== 'undefined';

const asyncLocalStorage = {
	setItem: function (key, value: any) {
		return Promise.resolve().then(function () {
			typeof value != 'string'
				? localStorage.setItem(key, JSON.stringify(value))
				: localStorage.setItem(key, value);
		});
	},
	getItem: function (key) {
		return Promise.resolve().then(function () {
			let value: string = localStorage.getItem(key);
			return JSON.parse(value);
		});
	},
};

// Adapted from https://svelte.dev/repl/7b4d6b448f8c4ed2b3d5a3c31260be2a?version=3.34.0
export const asyncLocalStorageStore = (key, value) => {
	const { set: setStore, ...readableStore } = writable(value, () => {
		if (!client) return;

		getAndSetFromLocalStorage();

		const updateFromStorageEvents = (event) => {
			if (event.key === key) getAndSetFromLocalStorage();
		};
		window.addEventListener('storage', updateFromStorageEvents);
		return () =>
			window.removeEventListener('storage', updateFromStorageEvents);
	});

	// Set both localStorage and this Svelte store
	const set = async (value) => {
		setStore(value);
		try {
			await asyncLocalStorage.setItem(key, value);
		} catch (error) {
			console.error(
				`the \`${key}\` store's new value \`${value}\` could not be persisted to localStorage because of ${error}`,
			);
		}
	};

	// Synchronize the Svelte store with localStorage
	const getAndSetFromLocalStorage = async () => {
		let localValue = null;
		try {
			localValue = await asyncLocalStorage.getItem(key);
		} catch (error) {
			console.error(
				`the \`${key}\` store's value could not be restored from localStorage because of ${error}`,
			);
		}

		if (localValue === null) set(value);
		else {
			try {
				setStore(localValue);
			} catch {
				set(value);
			}
		}
	};

	return { ...readableStore, set };
};
