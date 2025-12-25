<script>
	export let grindSize;

	let setGrindSizeShown = false;
	let grindSizeSaved = false;

	if (grindSize != '') {
		grindSizeSaved = true;
	}

	function showSetGrindSize() {
		setGrindSizeShown = true;
		grindSizeSaved = false;
	}

	function saveGrindSize() {
		setGrindSizeShown = false;
		grindSizeSaved = true;
	}

	function handleSubmit(event) {
		event.preventDefault();
		saveGrindSize();
	}

	import Button from './Button.svelte';
</script>

<style>
	.grind-display {
		display: flex;
		align-items: center;
		gap: var(--spacing-sm);
		flex-wrap: wrap;
		margin-top: var(--spacing-sm);
	}

	.grind-value {
		font-size: 1.2rem;
		font-weight: 600;
		color: var(--color-text);
		padding: var(--spacing-xs) var(--spacing-md);
		background: rgba(0, 0, 0, 0.05);
		border-radius: var(--radius);
		border: 2px solid var(--color-border-dark);
	}

	input {
		display: block;
		width: 100%;
		max-width: 400px;
		margin-top: var(--spacing-md);
		margin-bottom: var(--spacing-sm);
		padding: 0.875rem 1rem;
		border: 2px solid var(--color-border);
		border-radius: var(--radius);
		font-size: 1rem;
		background: var(--color-surface);
		color: var(--color-text);
		transition: all 0.2s ease;
	}

	input:focus {
		outline: none;
		border-color: var(--color-text);
		box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1);
	}

	input::placeholder {
		color: var(--color-text-light);
		font-size: 0.9rem;
	}

	form {
		margin-top: var(--spacing-md);
		display: flex;
		gap: var(--spacing-sm);
		flex-wrap: wrap;
		align-items: flex-start;
	}

	.button-group {
		display: flex;
		gap: var(--spacing-sm);
		flex-wrap: wrap;
		margin-top: var(--spacing-sm);
	}
</style>

<div>
	<p>
		<i>Grind size</i>:
		{#if $grindSize && !setGrindSizeShown}
			<span class="grind-value">{$grindSize}</span>
		{:else if !setGrindSizeShown}
			<Button clickAction={showSetGrindSize} variant="primary">Set grind size</Button>
		{/if}
	</p>

	{#if $grindSize && grindSizeSaved}
		<div class="button-group">
			<Button clickAction={showSetGrindSize} variant="secondary">Change grind</Button>
		</div>
	{/if}

	{#if setGrindSizeShown}
		<form on:submit={handleSubmit}>
			<input
				type="text"
				id="grind-size-input"
				placeholder="e.g., Medium-fine, 18 clicks on Comandante"
				bind:value={$grindSize}
				autofocus
			/>
			<Button id="grid-size-save" clickAction={saveGrindSize} type="submit" variant="primary"
				>Save</Button
			>
		</form>
	{/if}
</div>
