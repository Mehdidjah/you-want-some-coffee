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
		padding: var(--spacing-xl) 0;
		margin-bottom: var(--spacing-xl);
	}

	.hero h1 {
		font-size: 3rem;
		margin-bottom: var(--spacing-md);
		color: var(--color-text);
	}

	.hero p {
		font-size: 1.25rem;
		color: var(--color-text-light);
		max-width: 600px;
		margin: 0 auto;
	}

	.recipes-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: var(--spacing-lg);
		margin-top: var(--spacing-xl);
	}

	.recipe-card {
		background: var(--color-surface);
		border: 2px solid var(--color-border-dark);
		border-radius: var(--radius);
		padding: var(--spacing-lg);
		transition: all 0.3s ease;
		cursor: pointer;
		text-decoration: none;
		color: inherit;
		display: block;
		box-shadow: var(--shadow-sm);
	}

	.recipe-card:hover {
		transform: translateY(-4px);
		box-shadow: var(--shadow-lg);
		border-color: var(--color-text);
		text-decoration: none;
		background: rgba(0, 0, 0, 0.02);
	}

	.recipe-card:focus {
		outline: 2px solid var(--color-text);
		outline-offset: 4px;
	}

	.recipe-icon {
		font-size: 3rem;
		margin-bottom: var(--spacing-md);
		display: block;
	}

	.recipe-title {
		font-size: 1.5rem;
		font-weight: 600;
		color: var(--color-text);
		margin: 0;
		transition: color 0.2s ease;
	}

	.recipe-card:hover .recipe-title {
		color: var(--color-text);
	}

	@media (max-width: 768px) {
		.hero h1 {
			font-size: 2rem;
		}

		.recipes-grid {
			grid-template-columns: 1fr;
			gap: var(--spacing-md);
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
