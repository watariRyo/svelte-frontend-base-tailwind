<script lang="ts">
	import authStore from '$lib/stores/auth.store';

	export let data;

	let isLoggedIn = false;
	$: isLoggedIn = $authStore.isActive ? $authStore.isLoggedIn : data.isLoggedIn;
</script>

<div class="containerr">
	{#if isLoggedIn}
		<h1>isLoggedIn</h1>
	{:else}
		<h1>Unauthorized</h1>
	{/if}
</div>
