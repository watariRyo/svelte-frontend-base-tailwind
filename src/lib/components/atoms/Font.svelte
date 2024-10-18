<script lang="ts">
	export let variant: 'xlb' | 'xl' | 'lb' | 'l' | 'mb' | 'm' | 'sb' | 's';
	export let component: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
	export let type: 'jp' | 'en';
	export let noWrap: boolean;

	const VARIANT_TAG_MAP = {
		xlb: 'h1',
		xl: 'h1',
		lb: 'h2',
		l: 'p',
		mb: 'p',
		m: 'p',
		sb: 'p',
		s: 'p'
	} as const;

	const variants = {};
</script>
