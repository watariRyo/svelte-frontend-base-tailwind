<script lang="ts">
	import { sampleApi } from '$lib/api';

	const onClickSample = async () => {
		const res = await sampleApi.fetchSample();
		console.log(res.id);
		console.log(res.title);
	};
</script>

<div>
	<h1>About</h1>
</div>

<button on:click={onClickSample}>button</button>
