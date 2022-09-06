<script lang="ts">
	import AnimalCategoryForm from '$lib/forms/AnimalCategoryForm.svelte';
	import { pageTitle } from '$lib/stores';

	export let data: any;

	$pageTitle = 'New Animal Category';

	const formValues = {
		name: '',
		typeId: '',
		types: data.types
	};
</script>

<form
	action="/animals/categories"
	method="post"
	class="grid max-w-4xl gap-4 rounded bg-white p-4 shadow-lg sm:grid-cols-2"
>
	<h1 class="text-xl sm:col-span-2">New Animal</h1>

	<AnimalCategoryForm {formValues} />

	<div class="flex items-center justify-center space-x-2 sm:col-span-2">
		<button
			type="submit"
			class="rounded-md border border-green-600 bg-green-600 px-2 py-1 text-white"
		>
			Create
		</button>
		<a
			href="/animals/categories"
			class="rounded-md border border-gray-800 px-2 py-1 hover:bg-gray-800 hover:text-gray-50"
		>
			Cancel
		</a>
	</div>
</form>
