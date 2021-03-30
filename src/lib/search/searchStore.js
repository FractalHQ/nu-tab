import { localStorageStore } from '../utils/localStorageStore';

export const activeEngine = localStorageStore('active', 0);