<script lang="ts">
	import { pageTitle } from '$lib/stores';

	export let data: any;

	const product = data.product;
	$: console.log('Product:', product);

	$pageTitle = `Product: ${product?.name}`;
</script>
