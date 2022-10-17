<script lang="ts">
	import AnimalForm from '$lib/forms/AnimalForm.svelte';
	import { pageTitle } from '$lib/stores';

	$pageTitle = 'Animals Management: Edit';

	export let data: any;

	const animal = data.animal;
	const formValues = {
		tag: animal.tag,
		imageUrl: animal.image_url,
		breedId: animal.animal_breed_id,
		genderId: animal.gender_id,
		bornAt: new Date(animal.born_at).toISOString().substring(0, 10),
		purchasedAt: new Date(animal.purchased_at).toISOString().substring(0, 10),
		genders: data.genders,
		types: data.types,
		breed: animal.animal_breed
	};

	$: console.log('Animal:', formValues);
</script>

<form
	action={`/animals/${animal.id}`}
	method="post"
	class="grid max-w-4xl gap-4 rounded bg-white p-4 shadow-lg sm:grid-cols-3"
>
	<h1 class="text-xl sm:col-span-3">Edit Animal</h1>

	<input type="hidden" name="id" bind:value={animal.id} />

	<AnimalForm {formValues} />

	<div class="flex items-center justify-center space-x-2 sm:col-span-2">
		<button
			type="submit"
			class="rounded-md border border-green-600 bg-green-600 px-2 py-1 text-white"
		>
			Update
		</button>
		<a
			href="/animals"
			class="rounded-md border border-gray-800 px-2 py-1 hover:bg-gray-800 hover:text-gray-50"
		>
			Cancel
		</a>
	</div>
</form>
