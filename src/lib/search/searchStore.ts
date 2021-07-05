import { asyncLocalStorageStore } from '../utils/asyncLocalStorageStore';

export const activeEngine = asyncLocalStorageStore('active', 0);