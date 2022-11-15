<script lang="ts">
	import { pageTitle } from '$lib/stores';
	import Icon from '@iconify/svelte';

	export let data: any;

	const breed = data.breed;

	// $: console.log('Breed', breed);

	$pageTitle = `Animal Breed: ${breed?.name}`;
</script>

<div class="flex w-full justify-end space-x-2 pb-4 text-sm">
	<div class="flex items-center divide-x">
		<a
			href="/animals/breeds"
			class="flex  items-center space-x-1 rounded-l-md bg-blue-500 p-2 px-3 text-blue-50 hover:bg-blue-700"
		>
			<Icon icon="mdi-arrow-left" class="text-lg" />
			<span>Back</span>
		</a>
		<a
			href={`/animals/breeds/${breed.id}/edit`}
			class="flex  items-center space-x-1 bg-green-500 p-2 px-3 text-green-50 hover:bg-green-700"
		>
			<Icon icon="mdi-pencil" class="text-lg" />
			<span>edit</span>
		</a>
		<a
			href="#"
			class="flex items-center space-x-1 rounded-r-md bg-red-500 p-2 px-3 text-red-50 hover:bg-red-700"
		>
			<Icon icon="mdi-delete-outline" class="text-lg" />
			<span>Delete</span>
		</a>
	</div>
</div>

<div class="rounded-md bg-white p-4 shadow-lg">
	<div class="flex items-start border-b border-gray-300">
		<div class="flex w-28 items-center">
			<Icon icon="mdi-paw" class="mr-2 text-blue-600" /><span>Breed: </span>
		</div>
		<span class="pl-5">{breed?.name}</span>
	</div>
	<div class="flex items-start border-b border-gray-300">
		<div class="flex w-28 items-center">
			<Icon icon="mdi-source-branch" class="mr-2 text-blue-600" /><span>Category: </span>
		</div>
		<span class="pl-5">{breed.animal_category.name}</span>
	</div>
	<div class="flex items-start border-b border-gray-300">
		<div class="flex w-28 items-center">
			<Icon icon="mdi-file-tree-outline" class="mr-2 text-blue-600" /><span>Type: </span>
		</div>
		<span class="pl-5">{breed.animal_category.animal_type.name}</span>
	</div>
	<div class="flex items-start">
		<div class="flex w-28 items-center">
			<Icon icon="mdi-card-text-outline" class="mr-2 text-blue-600" /><span>Description: </span>
		</div>
		<span class="pl-5">{breed.description}</span>
	</div>
</div>
