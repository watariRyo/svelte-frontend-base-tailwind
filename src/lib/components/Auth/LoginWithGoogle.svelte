<script lang="ts">
	import { page } from '$app/stores';
	import { loginWithGoogle } from '$lib/firebase/auth.client';
	import { afterLogin, afterRegist } from '$lib/helpers/route.helper';
	import messagesStore from '$lib/stores/messages.store';
	import Button from '../atoms/Button.svelte';

	export let isSignup: boolean;

	const loginGoogle = async () => {
		try {
			const user = await loginWithGoogle();
			if (isSignup) {
				await afterRegist($page.url);
			} else {
				await afterLogin($page.url);
			}
			messagesStore.hide();
		} catch (e: any) {
			if (e.code === 'auth/popup-closed-by-user') {
				return;
			}
			messagesStore.showError();
		}
	};
</script>

<div class="row">
	<div class="col">
		<Button btnName="Login With Google" variant="secondary" callback={loginGoogle} />
	</div>
</div>
