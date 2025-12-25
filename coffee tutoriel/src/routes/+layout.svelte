<script>
	import Titles from '../components/Titles.svelte';
	import { fade } from 'svelte/transition';
</script>

<style>
	:global(body) {
		margin: 0;
		min-height: 100vh;
		background: #ffffff;
	}

	:global(#app) {
		min-height: 100vh;
		display: grid;
		grid-template-columns: 100%;
		grid-template-rows: auto 1fr auto;
		grid-template-areas: 'header' 'main' 'footer';
		max-width: 64rem;
		margin: 0 auto;
		background: var(--color-surface);
		box-shadow: var(--shadow-lg);
		border-left: 1px solid var(--color-border);
		border-right: 1px solid var(--color-border);
	}

	:global(#app) > header {
		grid-area: header;
		background: #000000;
		color: white;
		padding: var(--spacing-lg) var(--spacing-md);
		box-shadow: var(--shadow-md);
	}

	:global(#app) > main {
		grid-area: main;
		padding: var(--spacing-lg) var(--spacing-md);
		min-height: 0;
		background: var(--color-bg);
	}

	:global(#app) > footer {
		grid-area: footer;
		padding: var(--spacing-md);
		border-top: 2px solid var(--color-border-dark);
		margin-top: var(--spacing-lg);
		background: var(--color-bg);
		text-align: center;
		color: var(--color-text-light);
		font-size: 0.9rem;
	}

	:global(main > * + *) {
		margin-top: var(--spacing-md);
	}

	:global(section > * + *) {
		margin-top: var(--spacing-sm);
	}

	@media (max-width: 768px) {
		:global(#app) {
			margin: 0;
			box-shadow: none;
			border-left: none;
			border-right: none;
		}

		:global(#app) > header,
		:global(#app) > main,
		:global(#app) > footer {
			padding: var(--spacing-md) var(--spacing-sm);
		}
	}
</style>

<header>
	<Titles />
</header>

<main transition:fade={{ duration: 300 }}>
	<slot />
</main>

<footer transition:fade={{ delay: 200, duration: 300 }}>
	<a href="https://github.com/edjw/Coffee-Coach/" target="_blank" rel="noopener noreferrer"
		>See the source for this website</a
	>
</footer>
