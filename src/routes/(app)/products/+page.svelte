<script lang="ts">
	import { pageTitle } from '$lib/stores';
	import Icon from '@iconify/svelte';

	$pageTitle = 'Products';
</script>

<div class="flex w-full justify-end space-x-2 pb-4 text-sm">
	<div class="flex items-center divide-x">
		<button
			type="button"
			class="cursor-not-allowed rounded-l-md bg-green-600 px-4 py-1 text-gray-50">Products</button
		>
		<a href="/uoms" class="rounded-r-md bg-gray-800 px-4 py-1 text-gray-50 hover:bg-opacity-70">
			Units Of Measurement
		</a>
	</div>
	<a
		href="/products/new"
		class="flex items-center space-x-2 rounded bg-gray-800 px-4 py-1 text-gray-50 hover:bg-opacity-70"
	>
		<Icon icon="mdi-plus" />
		<span>New Product</span>
	</a>
</div>
