<script>
	import { page } from '$app/stores';

	$: status = $page.status || 500;
	$: error = $page.error;

	const clearLocalStorage = () => {
		localStorage.clear();
		window.location.reload();
	};
</script>

<svelte:head>
	<title>Coffee Coach – {status}</title>
</svelte:head>

<style>
	main {
		max-width: 56rem;
		padding: 1rem 2rem;
		margin: 0 auto;
	}

	button {
		background-color: #ffffff;
		border: 1px solid #333;
		cursor: pointer;
		padding: 0.5rem 1rem;
		font-size: 1rem;
		margin-top: 1rem;
	}

	button:hover {
		background-color: #fcfcfc;
	}
</style>

<main>
	{#if status === 500}
		<h3>Something went wrong</h3>
		<p>Sorry about that. If this persists, try clearing your browser's local storage.</p>
		<button on:click={clearLocalStorage}>Reset app</button>
	{:else}
		<h3>{status}</h3>
		{#if error}
			<p>{error.message}</p>
		{/if}
	{/if}
</main>

