<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { logout } from '$lib/firebase/auth.client';
	import messagesStore from '$lib/stores/messages.store';

	export let isLoggedIn: boolean;

	const onLogout = async () => {
		try {
			await logout();
			console.log('goto');
			goto('/');
		} catch (e) {
			// console.log(e);
			messagesStore.showError();
		}
	};
</script>

<nav class="bg-gray-800">
	<div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
		<div class="relative flex h-16 items-center justify-between">
			<div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
				<!-- Mobile menu button-->
				<button
					type="button"
					class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
					aria-controls="mobile-menu"
					aria-expanded="false"
				>
					<span class="absolute -inset-0.5"></span>
					<span class="sr-only">Open main menu</span>
					<!--
			  Icon when menu is closed.
  
			  Menu open: "hidden", Menu closed: "block"
			-->
					<svg
						class="block h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
						data-slot="icon"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>
					<svg
						class="hidden h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
						data-slot="icon"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
			<div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
				<div class="flex flex-shrink-0 items-center">
					<a class="rounded-md px-3 py-2 text-sm font-medium text-white" href="/">TaskTree</a>
				</div>
				<div class="hidden sm:ml-6 sm:block">
					<div class="flex space-x-4">
						{#if isLoggedIn}
							<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
							<a
								class:active={$page.url.pathname === '/'}
								href="/"
								class={`${$page.url.pathname === '/' ? 'bg-gray-900 rounded-md px-3 py-2 text-sm font-medium text-white' : 'rounded-md px-3 py-2 text-sm font-medium text-white'}`}
								aria-current="page">Home</a
							>
							<a
								href="/about"
								class:active={$page.url.pathname === '/about'}
								class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
								>About</a
							>
							<a
								class:active={$page.url.pathname === '/account'}
								href="/account"
								class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
								>Account</a
							>
							<button
								on:click={onLogout}
								class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
								>Logout</button
							>
						{:else}
							<a
								class:active={$page.url.pathname === '/'}
								href="/"
								class={`${$page.url.pathname === '/' ? 'bg-gray-900 rounded-md px-3 py-2 text-sm font-medium text-white' : 'rounded-md px-3 py-2 text-sm font-medium text-white'}`}
								aria-current="page">Home</a
							>
							<a
								href="/about"
								class:active={$page.url.pathname === '/about'}
								class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
								>About</a
							>
							<a
								class:active={$page.url.pathname === '/login'}
								class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
								href="/login">Login</a
							>
							<a
								class:active={$page.url.pathname === '/signup'}
								class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
								href="/signup">Sign Up</a
							>
						{/if}
					</div>
				</div>
			</div>
			<div
				class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
			></div>
		</div>
	</div>

	<!-- Mobile menu, show/hide based on menu state. -->
	<div class="sm:hidden" id="mobile-menu">
		<div class="space-y-1 px-2 pb-3 pt-2">
			{#if isLoggedIn}
				<a
					class:active={$page.url.pathname === '/'}
					href="/"
					class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
					aria-current="page">Home</a
				>
				<a
					href="/about"
					class:active={$page.url.pathname === '/about'}
					class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
					>About</a
				>
				<a
					class:active={$page.url.pathname === '/account'}
					href="/account"
					class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
					>Account</a
				>
				<button
					on:click={onLogout}
					class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
					>Logout</button
				>
			{:else}
				<a
					class:active={$page.url.pathname === '/'}
					href="/"
					class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
					aria-current="page">Home</a
				>
				<a
					href="/about"
					class:active={$page.url.pathname === '/about'}
					class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
					>About</a
				>
				<a
					class:active={$page.url.pathname === '/login'}
					class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
					href="/login">Login</a
				>
				<a
					class:active={$page.url.pathname === '/signup'}
					class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
					href="/signup">Sign Up</a
				>
			{/if}
		</div>
	</div>
</nav>
