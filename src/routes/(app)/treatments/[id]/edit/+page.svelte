<script lang="ts">
	import TreatmentForm from '$lib/forms/TreatmentForm.svelte';
	import { pageTitle } from '$lib/stores';

	$pageTitle = 'Update Treatment';

	export let data: any;
	const treatment = data.treatment;

	const formValues = {
		animalId: treatment.animal_id,
		animals: data.animals,
		chemicalId: treatment.chemical_id,
		chemicals: data.chemicals,
		uomId: treatment.uom_id,
		uoms: data.uoms,
		userId: treatment.user_id,
		users: data.users,
		quantity: treatment.quantity,
		treatedAt: treatment.treated_at
	};

	// $: console.log('Treatment:', formValues);
</script>

<form
	action={`/treatments/${treatment.id}`}
	method="post"
	class="mx-auto grid max-w-4xl gap-4 rounded bg-white p-4 shadow-lg sm:grid-cols-2"
>
	<h1 class="text-xl sm:col-span-2">Edit Treatment</h1>

	<TreatmentForm {formValues} />

	<div class="flex items-center justify-center space-x-2 sm:col-span-2">
		<button
			type="submit"
			class="rounded-md border border-green-600 bg-green-600 px-2 py-1 text-white"
		>
			Create
		</button>
		<a
			href="/treatments"
			class="rounded-md border border-gray-800 px-2 py-1 hover:bg-gray-800 hover:text-gray-50"
		>
			Cancel
		</a>
	</div>
</form>
