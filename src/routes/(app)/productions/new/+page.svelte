<script lang="ts">
	import ProduceForm from '$lib/forms/ProduceForm.svelte';
	import { pageTitle } from '$lib/stores';

	$pageTitle = 'Record Produce';

	export let data: any;

	const formValues = {
		productId: '',
		products: data.products,
		animalId: '',
		animals: data.animals,
		collectorId: '',
		collectors: data.collectors,
		quantity: '',
		productionDate: ''
	};

	// $: console.log('Production:', formValues);
</script>

<form
	action="/productions"
	method="post"
	class="mx-auto grid max-w-4xl gap-4 rounded bg-white p-4 shadow-lg sm:grid-cols-2"
>
	<h1 class="text-xl sm:col-span-2">New Produce</h1>

	<ProduceForm {formValues} />

	<div class="flex items-center justify-center space-x-2 sm:col-span-2">
		<button
			type="submit"
			class="rounded-md border border-green-600 bg-green-600 px-2 py-1 text-white"
		>
			Create
		</button>
		<a
			href="/productions"
			class="rounded-md border border-gray-800 px-2 py-1 hover:bg-gray-800 hover:text-gray-50"
		>
			Cancel
		</a>
	</div>
</form>
