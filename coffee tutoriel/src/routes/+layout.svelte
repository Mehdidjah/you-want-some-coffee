<script>
	import Titles from '../components/Titles.svelte';
	import { fade } from 'svelte/transition';
</script>

<style>
	:global(body) {
		margin: 0;
		min-height: 100vh;
	}

	:global(#app) {
		min-height: 100vh;
		display: grid;
		grid-template-columns: 100%;
		grid-template-rows: auto 1fr auto;
		grid-template-areas: 'header' 'main' 'footer';
		max-width: 75rem;
		margin: 0 auto;
		background: var(--color-surface);
	}

	:global(#app) > header {
		grid-area: header;
		background: var(--color-primary);
		color: white;
		padding: var(--spacing-lg) var(--spacing-md);
		box-shadow: var(--shadow-md);
	}

	:global(#app) > main {
		grid-area: main;
		padding: var(--spacing-xl) var(--spacing-lg);
		min-height: 0;
		background: var(--color-surface);
	}

	:global(#app) > footer {
		grid-area: footer;
		padding: var(--spacing-lg);
		border-top: 1px solid var(--color-border);
		margin-top: var(--spacing-lg);
		background: var(--color-surface);
		text-align: center;
		color: var(--color-text-light);
		font-size: 0.875rem;
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
		}

		:global(#app) > header,
		:global(#app) > main,
		:global(#app) > footer {
			padding: var(--spacing-md) var(--spacing-sm);
		}

		:global(#app) > main {
			padding: var(--spacing-lg) var(--spacing-md);
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
	<a href="https://github.com/Mehdidjah/you-want-some-coffee" target="_blank" rel="noopener noreferrer"
		>See the source for this website</a
	>
</footer>
