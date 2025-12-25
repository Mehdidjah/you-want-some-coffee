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

const aeropress = {
	waterAsMultipleOfCoffee: readable(14.66666666666667),
	waterAmount: persistentWritable('aeropressWaterAmount', 220),
	coffeeAmount: persistentWritable('aeropressCoffeeAmount', 15),
	grindSize: persistentWritable('aeropressGrindSize', ''),
	currentCalculator: persistentWritable('aeropressCurrentCalculator', 'coffeeFirst')
};

const clever = {
	waterAsMultipleOfCoffee: readable(16.66666666666667),
	waterAmount: persistentWritable('cleverWaterAmount', 250),
	coffeeAmount: persistentWritable('cleverCoffeeAmount', 15),
	grindSize: persistentWritable('cleverGrindSize', ''),
	currentCalculator: persistentWritable('cleverCurrentCalculator', 'coffeeFirst')
};

const frenchPress = {
	waterAsMultipleOfCoffee: readable(16.66666666666667),
	waterAmount: persistentWritable('frenchPressWaterAmount', 500),
	coffeeAmount: persistentWritable('frenchPressCoffeeAmount', 30),
	grindSize: persistentWritable('frenchPressGrindSize', ''),
	currentCalculator: persistentWritable('frenchPressCurrentCalculator', 'coffeeFirst')
};

const pouroverScottRao = {
	waterAsMultipleOfCoffee: readable(17),
	waterAmount: persistentWritable('pouroverScottRaoWaterAmount', 340),
	coffeeAmount: persistentWritable('pouroverScottRaoCoffeeAmount', 20),
	grindSize: persistentWritable('pouroverScottGrindSize', ''),
	currentCalculator: persistentWritable('pouroverScottRaoCurrentCalculator', 'coffeeFirst')
};

const v60 = {
	waterAsMultipleOfCoffee: readable(16.66666666666667),
	waterAmount: persistentWritable('v60WaterAmount', 250),
	coffeeAmount: persistentWritable('v60CoffeeAmount', 15),
	grindSize: persistentWritable('v60GrindSize', ''),
	currentCalculator: persistentWritable('v60CurrentCalculator', 'coffeeFirst')
};

export { aeropress, clever, frenchPress, pouroverScottRao, v60 };
