<script>
	export let title = 'Coffee Coach';
	export let subtitle = 'Recipes to make coffee easier';
</script>

<style>
	h1 {
		margin: 0;
		font-size: 2.5rem;
		font-weight: 700;
		letter-spacing: normal;
	}

	h1 a {
		color: white;
		text-decoration: none;
		transition: opacity 0.2s ease;
		display: inline-block;
	}

	h1 a:hover {
		opacity: 0.9;
		text-decoration: none;
	}

	h1 a:focus {
		outline: 2px solid white;
		outline-offset: 4px;
		border-radius: var(--radius-sm);
	}

	p {
		font-size: 1.1rem;
		font-weight: 400;
		margin-top: var(--spacing-xs);
		opacity: 0.95;
		letter-spacing: normal;
	}

	@media (max-width: 768px) {
		h1 {
			font-size: 2rem;
		}

		p {
			font-size: 1rem;
		}
	}
</style>

<h1><a href="/">{title}</a></h1>
<p>{subtitle}</p>
