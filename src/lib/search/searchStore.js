import { localStorageStore } from '../utils/asyncLocalStorageStore';

export const activeEngine = localStorageStore('active', 0);