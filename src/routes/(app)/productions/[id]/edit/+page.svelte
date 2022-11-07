<script lang="ts">
	import ProduceForm from '$lib/forms/ProduceForm.svelte';
	import { pageTitle } from '$lib/stores';

	$pageTitle = 'update Produce';

	export let data: any;
	const production = data.production;

	const formValues = {
		productId: production.product_id,
		products: data.products,
		animalId: production.animal_id,
		animals: data.animals,
		collectorId: production.user_id,
		collectors: data.collectors,
		quantity: production.quantity,
		productionDate: production.produced_at
	};

	// $: console.log('Production:', formValues);
</script>

<form
	action={`/productions/${production.id}`}
	method="post"
	class="mx-auto grid max-w-4xl gap-4 rounded bg-white p-4 shadow-lg sm:grid-cols-2"
>
	<h1 class="text-xl sm:col-span-2">Edit Produce</h1>

	<input type="hidden" name="id" bind:value={production.id} />

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
