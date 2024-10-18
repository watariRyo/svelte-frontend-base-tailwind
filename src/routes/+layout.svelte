<script lang="ts">
	import Nav from '$lib/components/layouts/Nav.svelte';
	import '$lib/firebase/firebase.client';
	import authStore from '$lib/stores/auth.store';
	import '../app.css';

	export let data;

	let isLoggedIn = false;
	$: isLoggedIn = $authStore.isActive ? $authStore.isLoggedIn : data.isLoggedIn;
</script>

<Nav {isLoggedIn} />
<main class="container">
	<slot />
</main>
