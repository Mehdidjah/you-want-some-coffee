import { writable, readable } from 'svelte/store';

function persistentWritable(key, initialValue) {
	const stored = typeof window !== 'undefined' ? localStorage.getItem(key) : null;
	let initial = initialValue;
	
	if (stored !== null) {
		try {
			initial = JSON.parse(stored);
		} catch (e) {
			initial = initialValue;
		}
	}

	const store = writable(initial);

	if (typeof window !== 'undefined') {
		store.subscribe((value) => {
			try {
				localStorage.setItem(key, JSON.stringify(value));
			} catch (e) {
				console.warn('Failed to save to localStorage:', e);
			}
		});
	}

	return store;
}

export { persistentWritable as writable, readable };
