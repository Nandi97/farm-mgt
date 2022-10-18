<script lang="ts">
	import UnitOfMeasureForm from '$lib/forms/UnitOfMeasureForm.svelte';
	import { pageTitle } from '$lib/stores';

	export let data: any;

	const uom = data.uom;

	// $: console.log('Unit of Measure:', uom);

	const formValues = {
		unit: uom.unit,
		initial: uom.initial
	};

	$pageTitle = `Unit Of Measure: Edit ${uom.unit}`;
</script>

<form
	action={`/uoms/${uom.id}`}
	method="post"
	class="mx-auto grid max-w-4xl gap-4 rounded bg-white p-4 shadow-lg sm:grid-cols-2"
>
	<h1 class="text-xl sm:col-span-3">{`Edit ${uom.unit}`}</h1>

	<UnitOfMeasureForm {formValues} />

	<div class="flex items-center justify-center space-x-2 sm:col-span-2">
		<button
			type="submit"
			class="rounded-md border border-green-600 bg-green-600 px-2 py-1 text-white"
		>
			Update
		</button>
		<a
			href="/uoms"
			class="rounded-md border border-gray-800 px-2 py-1 hover:bg-gray-800 hover:text-gray-50"
		>
			Cancel
		</a>
	</div>
</form>
