<script>
	export let id;
	export let clickAction;
	export let type = undefined;
	export let variant = 'default';
</script>

<style>
	button {
		background-color: var(--color-surface);
		border: 2px solid var(--color-border-dark);
		cursor: pointer;
		padding: 0.75rem 1.5rem;
		font-size: 1rem;
		font-weight: 500;
		line-height: 1;
		border-radius: var(--radius);
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		transition: all 0.2s ease;
		color: var(--color-text);
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
	}

	button.primary {
		background-color: #000000;
		color: white;
		border-color: #000000;
	}

	button.secondary {
		background-color: #333333;
		color: white;
		border-color: #333333;
	}

	button:hover {
		background-color: #000000;
		color: white;
		border-color: #000000;
		transform: translateY(-1px);
		box-shadow: var(--shadow-md);
	}

	button.primary:hover {
		background-color: #333333;
		border-color: #333333;
	}

	button.secondary:hover {
		background-color: #000000;
		border-color: #000000;
	}

	button:focus {
		outline: 2px solid var(--color-text);
		outline-offset: 2px;
	}

	button:active {
		transform: translateY(0);
		box-shadow: var(--shadow-sm);
	}

	button:disabled {
		opacity: 0.5;
		cursor: not-allowed;
		transform: none;
	}
</style>

<button {id} on:click={clickAction} {type} class={variant}><slot /></button>
