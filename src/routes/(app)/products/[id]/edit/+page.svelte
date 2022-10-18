<script lang="ts">
	import ProductsForm from '$lib/forms/ProductsForm.svelte';
	import { pageTitle } from '$lib/stores';

	export let data: any;

	const product = data.product;

	$pageTitle = `Edit : ${product.name} product`;

	const formValues = {
		name: product.name,
		imageUrl: product.image_url,
		uomId: product.uom_id,
		uoms: data.uoms
	};

	$: console.log('Product:', formValues);
</script>

<form
	action={`/products/${product.id}`}
	method="post"
	enctype="multipart/form-data"
	class="mx-auto grid max-w-4xl gap-4 rounded bg-white p-4 shadow-lg sm:grid-cols-2"
>
	<h1 class="text-xl sm:col-span-3">Edit Product</h1>

	<input type="hidden" name="id" bind:value={product.id} />

	<ProductsForm {formValues} />

	<div class="flex items-center justify-center space-x-2 sm:col-span-3">
		<button
			type="submit"
			class="rounded-md border border-green-600 bg-green-600 px-2 py-1 text-white"
		>
			Update
		</button>
		<a
			href="/products"
			class="rounded-md border border-gray-800 px-2 py-1 hover:bg-gray-800 hover:text-gray-50"
		>
			Cancel
		</a>
	</div>
</form>
