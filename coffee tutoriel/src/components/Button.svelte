<script>
	export let id;
	export let clickAction;
	export let type = undefined;
	export let variant = 'default';
</script>

<style>
	button {
		background: var(--color-surface);
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
		background: var(--color-primary);
		color: white;
		border-color: var(--color-primary);
	}

	button.secondary {
		background: var(--color-surface);
		color: var(--color-primary);
		border-color: var(--color-primary);
	}

	button:hover {
		transform: translateY(-1px);
		box-shadow: var(--shadow-md);
	}

	button.primary:hover {
		background: var(--color-primary-dark);
		border-color: var(--color-primary-dark);
	}

	button.secondary:hover {
		background: var(--color-primary);
		color: white;
	}

	button:focus {
		outline: 2px solid var(--color-primary);
		outline-offset: 2px;
		border-radius: var(--radius);
	}

	button:active {
		transform: translateY(0);
		box-shadow: var(--shadow-sm);
	}

	button:disabled {
		opacity: 0.5;
		cursor: not-allowed;
		transform: none;
		box-shadow: none;
	}
</style>

<button {id} on:click={clickAction} {type} class={variant}><slot /></button>
