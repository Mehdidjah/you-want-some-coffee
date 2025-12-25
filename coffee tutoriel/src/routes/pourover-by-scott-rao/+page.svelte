<script>
	const name = 'Pourover by Scott Rao';

	import { pouroverScottRao } from '../../components/store.js';

	const {
		waterAsMultipleOfCoffee,
		waterAmount,
		coffeeAmount,
		grindSize,
		currentCalculator
	} = pouroverScottRao;

	const toOneDecimalPlace = (number) => {
		return Math.round(number * 10) / 10;
	};

	$: bloom = toOneDecimalPlace($coffeeAmount * 3);

	$: firstPour = toOneDecimalPlace($waterAmount * 0.6176470588235294);

	$: totalPour = toOneDecimalPlace($waterAmount);

	import Recipe from '../../components/Recipe.svelte';
</script>

<Recipe {name} {...pouroverScottRao}>
	<div slot="steps">
		<li>
			<i>0 - 45s</i>: Pour the bloom with
			<strong
				>{#if $coffeeAmount === undefined || Number.isNaN($waterAmount)}
					0g (maximum 0g) of water
				{:else}{bloom}g of water{/if}.</strong
			>
			Give it a spin.
		</li>
		<li>
			<i>45s</i>: Pour again until you've poured
			<strong
				>{#if $coffeeAmount === undefined || Number.isNaN($waterAmount)}
					0g of water
				{:else}{firstPour}g of water{/if}</strong
			>
		</li>
		<li>
			<i>When half of the water has drained</i>: Pour again until you've poured a final
			<strong
				>total of
				{#if $coffeeAmount === undefined || Number.isNaN($waterAmount)}
					0g
				{:else}{totalPour}g{/if}</strong
			>
		</li>
	</div>
	<div slot="notes">
		<p>
			This is a recipe simplified from
			<a href="https://www.youtube.com/watch?v=BjsGf3R9mc0"
				>Scott Rao's video '<i>Updated manual pourover technique!</i></a
			>.
		</p>

		<p>It uses a ratio of 20g coffee to 340g water (1 to 17).</p>
	</div>
</Recipe>
