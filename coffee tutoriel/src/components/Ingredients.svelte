<script>
	export let waterAmount;
	export let coffeeAmount;
	export let waterAsMultipleOfCoffee;
	export let currentCalculator;

	import { blur } from 'svelte/transition';

	const toggleCalculator = () => {
		if ($currentCalculator === 'waterFirst') {
			currentCalculator.set('coffeeFirst');
		} else if ($currentCalculator === 'coffeeFirst') {
			currentCalculator.set('waterFirst');
		}
	};

	let firstIngredientAmount;
	let secondIngredientAmount;

	$: {
		if ($currentCalculator === 'coffeeFirst') {
			firstIngredientAmount = $coffeeAmount;
			secondIngredientAmount =
				Math.round(firstIngredientAmount * $waterAsMultipleOfCoffee * 10) / 10;

			coffeeAmount.set(firstIngredientAmount);
			waterAmount.set(secondIngredientAmount);
		} else if ($currentCalculator === 'waterFirst') {
			firstIngredientAmount = $waterAmount;
			secondIngredientAmount =
				(Math.round(firstIngredientAmount / $waterAsMultipleOfCoffee) * 10) / 10;

			waterAmount.set(firstIngredientAmount);
			coffeeAmount.set(secondIngredientAmount);
		}
	}

	import Button from './Button.svelte';
</script>

<style>
	.calculator-section {
		background: var(--color-surface);
		padding: var(--spacing-lg);
		border-radius: var(--radius);
		border: 2px solid var(--color-border);
		margin-top: var(--spacing-md);
		box-shadow: var(--shadow-sm);
	}

	label {
		display: block;
		margin-bottom: var(--spacing-sm);
		font-weight: 500;
		color: var(--color-text);
		font-size: 1.05rem;
	}

	input {
		display: block;
		width: 100%;
		max-width: 200px;
		margin-top: var(--spacing-xs);
		margin-bottom: var(--spacing-md);
		padding: 0.875rem 1rem;
		border: 2px solid var(--color-border);
		border-radius: var(--radius);
		font-size: 1.1rem;
		background: var(--color-surface);
		color: var(--color-text);
		transition: all 0.2s ease;
	}

	input:focus {
		outline: none;
		border-color: var(--color-primary);
		box-shadow: 0 0 0 3px rgba(196, 18, 48, 0.1);
	}

	input:hover {
		border-color: var(--color-border-dark);
	}

	.result {
		font-size: 1.2rem;
		margin: var(--spacing-md) 0;
		padding: var(--spacing-md);
		background: rgba(196, 18, 48, 0.05);
		border-radius: var(--radius);
		border-left: 4px solid var(--color-primary);
	}

	.result strong {
		color: var(--color-primary);
		font-size: 1.4rem;
		font-weight: 700;
	}

	.toggle-button {
		margin-top: var(--spacing-md);
	}
</style>

{#if $currentCalculator === 'coffeeFirst'}
	<section class="calculator-section" id="{$currentCalculator}Calculator" in:blur={{ duration: 300 }}>
		<label for="coffeeAmount">
			How many <strong>grams of coffee grounds</strong> do you want to use?
		</label>
		<input
			type="number"
			inputmode="decimal"
			name="coffeeAmount"
			id="coffeeAmount"
			min="0"
			step="0.1"
			placeholder="15"
			bind:value={$coffeeAmount}
		/>
		<div class="result">
			Use <strong>{#if Number.isNaN($waterAmount)}0g{:else}{secondIngredientAmount}g{/if}</strong> of
			water.
		</div>
		<Button id="startWithWater" clickAction={toggleCalculator} class="toggle-button"
			>Start with water ⟳</Button
		>
	</section>
{:else if $currentCalculator === 'waterFirst'}
	<section class="calculator-section" id="{$currentCalculator}Calculator" in:blur={{ duration: 300 }}>
		<label for="waterAmount">
			How many <strong>grams of water</strong> do you want to use?
		</label>
		<input
			type="number"
			inputmode="decimal"
			name="waterAmount"
			id="waterAmount"
			min="0"
			step="0.1"
			placeholder="250"
			bind:value={$waterAmount}
		/>
		<div class="result">
			Use <strong>{#if Number.isNaN($waterAmount)}0g{:else}{secondIngredientAmount}g{/if}</strong> of
			coffee grounds.
		</div>
		<Button id="startWithCoffee" clickAction={toggleCalculator} class="toggle-button"
			>Start with coffee ⟳</Button
		>
	</section>
{/if}
