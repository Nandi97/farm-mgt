<script>
	import ChemicalAdministrationMethodForm from '$lib/forms/ChemicalAdministrationMethodForm.svelte';
	import { pageTitle } from '$lib/stores';

	$pageTitle = 'New Chemical Administration Method';

	const formValues = {
		name: ''
	};
</script>

<form
	action="/treatments/chemicals/methods"
	method="post"
	class="grid max-w-3xl gap-4 rounded-md bg-white p-4 shadow-md sm:grid-cols-2"
>
	<ChemicalAdministrationMethodForm {formValues} />

	<div class="flex items-center justify-center space-x-2 sm:col-span-2">
		<button
			type="submit"
			class="rounded-md border border-green-600 bg-green-600 px-2 py-1 text-white"
		>
			Create
		</button>
		<a
			href="/treatments/chemicals/methods"
			class="rounded-md border border-gray-800 px-2 py-1 hover:bg-gray-800 hover:text-gray-50"
		>
			Cancel
		</a>
	</div>
</form>
