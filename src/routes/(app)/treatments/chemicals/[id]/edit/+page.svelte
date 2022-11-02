<script lang="ts">
	import ChemicalForm from '$lib/forms/ChemicalForm.svelte';
	import { pageTitle } from '$lib/stores';

	$pageTitle = 'Animal Breed: Edit';

	export let data: any;

	const chemical = data.chemical;
	const formValues = {
		name: chemical.name,
		description: chemical.description,
		chemicalTypeId: chemical.chemical_type_id,
		administrationMethodId: chemical.chemical_administration_method_id,
		methods: data.methods,
		types: data.types
	};

	// $: console.log('Chemical:', formValues);
</script>

<form
	action={`/treatments/chemicals/${chemical.id}`}
	method="post"
	class="grid max-w-4xl gap-4 rounded bg-white p-4 shadow-lg sm:grid-cols-3"
>
	<h1 class="text-xl sm:col-span-3">Edit {chemical.name}</h1>

	<ChemicalForm {formValues} />

	<div class="flex items-center justify-center space-x-2 sm:col-span-3">
		<button
			type="submit"
			class="rounded-md border border-green-600 bg-green-600 px-2 py-1 text-white"
		>
			Update
		</button>
		<a
			href="/treatments/chemicals"
			class="rounded-md border border-gray-800 px-2 py-1 hover:bg-gray-800 hover:text-gray-50"
		>
			Cancel
		</a>
	</div>
</form>
