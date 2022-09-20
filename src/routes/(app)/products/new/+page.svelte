<script lang="ts">
	import ProductsForm from '$lib/forms/ProductsForm.svelte';
	import { pageTitle } from '$lib/stores';
	
	export let data: any;

	$pageTitle = 'New Product';


	const formValues = {
		imageUrl:'',
		name:'',
		uomId: data.uoms
	};
	
	$: console.log('Product:', formValues);
</script>

<form
	action="/products"
	method="post"
	class="mx-auto grid max-w-4xl gap-4 rounded bg-white p-4 shadow-lg sm:grid-cols-2"
>
	<h1 class="text-xl sm:col-span-3">New Product</h1>

	<ProductsForm {formValues} /> 

	<div class="flex items-center justify-center space-x-2 sm:col-span-3">
		<button
			type="submit"
			class="rounded-md border border-green-600 bg-green-600 px-2 py-1 text-white"
		>
			Create
		</button>
		<a
			href="/products"
			class="rounded-md border border-gray-800 px-2 py-1 hover:bg-gray-800 hover:text-gray-50"
		>
			Cancel
		</a>
	</div>
</form>
