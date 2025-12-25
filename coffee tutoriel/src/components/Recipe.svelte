<script>
	export let name;
	export let waterAmount;
	export let coffeeAmount;
	export let waterAsMultipleOfCoffee;
	export let currentCalculator;
	export let grindSize;

	import { fade } from 'svelte/transition';

	import Ingredients from './Ingredients.svelte';
	import GrindSize from './GrindSize.svelte';
</script>

<svelte:head>
	<title>Coffee Coach – {name}</title>
</svelte:head>

<style>
	ol {
		padding-left: 0;
		list-style: none;
		counter-reset: step-counter;
	}

	ol :global(li) {
		counter-increment: step-counter;
		position: relative;
		padding-left: 2.5rem;
		margin-top: var(--spacing-md);
		line-height: 1.7;
	}

	ol :global(li::before) {
		content: counter(step-counter);
		position: absolute;
		left: 0;
		top: 0;
		background: #000000;
		color: white;
		width: 2rem;
		height: 2rem;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 600;
		font-size: 0.9rem;
		box-shadow: var(--shadow-sm);
	}

	h2 {
		display: inline-block;
		max-width: 30ch;
		padding: var(--spacing-md) var(--spacing-md) var(--spacing-md) 0;
		border-top: 3px solid var(--color-border-dark);
		border-bottom: 3px solid var(--color-border-dark);
		margin-bottom: var(--spacing-lg);
		font-size: 2rem;
	}

	section {
		margin-top: var(--spacing-xl);
		max-width: 65ch;
		background: var(--color-bg);
		padding: var(--spacing-lg);
		border-radius: var(--radius);
		box-shadow: var(--shadow-sm);
		border: 2px solid var(--color-border);
	}

	section h3 {
		margin-top: 0;
		margin-bottom: var(--spacing-md);
		padding-bottom: var(--spacing-xs);
		border-bottom: 2px solid var(--color-border-dark);
	}

	section p {
		color: var(--color-text-light);
		line-height: 1.7;
	}

	section strong {
		color: var(--color-text);
		font-weight: 600;
	}

	section i {
		color: var(--color-text);
		font-style: normal;
		font-weight: 500;
	}

	@media (max-width: 768px) {
		h2 {
			font-size: 1.5rem;
		}

		section {
			padding: var(--spacing-md);
		}
	}
</style>

<h2>{name}</h2>

<section in:fade={{ delay: 100, duration: 400 }}>
	<h3>Ingredients</h3>
	<Ingredients {waterAmount} {coffeeAmount} {waterAsMultipleOfCoffee} {currentCalculator} />
</section>

<section in:fade={{ delay: 200, duration: 400 }}>
	<h3>Grind</h3>
	<p>Save your preferred grind size for this recipe</p>
	<GrindSize {grindSize} />
</section>

<section in:fade={{ delay: 300, duration: 400 }}>
	<h3>Steps</h3>
	<ol>
		<slot name="steps" />
	</ol>
</section>

<section in:fade={{ delay: 400, duration: 400 }}>
	<h3>Notes</h3>
	<slot name="notes" />
</section>
