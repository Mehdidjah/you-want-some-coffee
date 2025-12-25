<script>
	import allRecipes from './_allRecipes.js';
	import { fade } from 'svelte/transition';
</script>

<svelte:head>
	<title>Coffee Coach – Home</title>
</svelte:head>

<style>
	.hero {
		text-align: center;
		padding: var(--spacing-2xl) 0 var(--spacing-xl);
		margin-bottom: var(--spacing-2xl);
	}

	.hero h1 {
		font-size: 3rem;
		margin-bottom: var(--spacing-md);
		color: var(--color-text);
		font-weight: 700;
		letter-spacing: normal;
	}

	.hero p {
		font-size: 1.25rem;
		color: var(--color-text-light);
		max-width: 650px;
		margin: 0 auto;
		font-weight: 400;
		line-height: 1.6;
	}

	.recipes-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: var(--spacing-lg);
		margin-top: var(--spacing-xl);
	}

	.recipe-card {
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: var(--radius);
		padding: var(--spacing-lg);
		transition: all 0.2s ease;
		cursor: pointer;
		text-decoration: none;
		color: inherit;
		display: block;
		box-shadow: var(--shadow-sm);
	}

	.recipe-card:hover {
		transform: translateY(-4px);
		box-shadow: var(--shadow-md);
		border-color: var(--color-primary);
		text-decoration: none;
		background: var(--color-surface-hover);
	}

	.recipe-card:focus {
		outline: 2px solid var(--color-primary);
		outline-offset: 4px;
		border-radius: var(--radius);
	}

	.recipe-icon {
		font-size: 3rem;
		margin-bottom: var(--spacing-md);
		display: block;
		transition: transform 0.2s ease;
	}

	.recipe-card:hover .recipe-icon {
		transform: scale(1.05);
	}

	.recipe-title {
		font-size: 1.5rem;
		font-weight: 600;
		color: var(--color-text);
		margin: 0;
		transition: color 0.2s ease;
	}

	.recipe-card:hover .recipe-title {
		color: var(--color-primary);
	}

	@media (max-width: 768px) {
		.hero {
			padding: var(--spacing-xl) 0;
		}

		.hero h1 {
			font-size: 2rem;
		}

		.hero p {
			font-size: 1.125rem;
		}

		.recipes-grid {
			grid-template-columns: 1fr;
			gap: var(--spacing-md);
		}

		.recipe-card {
			padding: var(--spacing-md);
		}
	}
</style>

<div class="hero">
	<h1>Welcome to Coffee Coach</h1>
	<p>Choose a brewing method below to get started with precise, delicious coffee recipes</p>
</div>

<div class="recipes-grid" in:fade={{ delay: 100, duration: 400 }}>
	{#each allRecipes as page}
		<a href={page.slug} class="recipe-card">
			<span class="recipe-icon">☕</span>
			<h2 class="recipe-title">{page.title}</h2>
		</a>
	{/each}
</div>
