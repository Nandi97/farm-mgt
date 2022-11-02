<script lang="ts">
	import ChemicalTypeForm from '$lib/forms/ChemicalTypeForm.svelte';
	import { pageTitle } from '$lib/stores';

	export let data: any;

	const type = data.type;

	// $: console.log('Chemical type:', type);

	const formValues = {
		name: type.name,
		description: type.description
	};

	$pageTitle = `Drug Type: Edit ${type.name} `;
</script>

<form
	action={`/treatments/chemicals/types/${type.id}`}
	method="post"
	class="grid max-w-3xl gap-4 rounded-md bg-white p-4 shadow-md sm:grid-cols-2"
>
	<h1 class="text-xl sm:col-span-3">{`Edit ${type.name}`}</h1>
	<ChemicalTypeForm {formValues} />

	<div class="flex items-center justify-center space-x-2 sm:col-span-2">
		<button
			type="submit"
			class="rounded-md border border-green-600 bg-green-600 px-2 py-1 text-white"
		>
			Update
		</button>
		<a
			href="/treatments/chemicals/types"
			class="rounded-md border border-gray-800 px-2 py-1 hover:bg-gray-800 hover:text-gray-50"
		>
			Cancel
		</a>
	</div>
</form>
