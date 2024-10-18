<script lang="ts">
	type Props<T, U> = {
		callback?: (...args: T[]) => U;
	};

	export let btnName: string;
	export let isSubmit: boolean = false;
	export let callback: Props<any, any>['callback'] = undefined;
	export let variant: 'primary' | 'secondary' = 'primary';
	export let size: 'small' | 'medium' = 'medium';

	const bgColor = variant === 'primary' ? '#515186' : '#329664';
	const btnSize = size === 'medium' ? 'auto' : '44px';

	const onClick = () => {
		if (callback) {
			callback();
		}
	};
</script>

{#if isSubmit}
	<button type="submit" class="font-bold">{btnName}</button>
{:else}
	<button on:click={onClick}>{btnName}</button>
{/if}
