<script lang="ts">
	import { pageTitle } from '$lib/stores';
	import Icon from '@iconify/svelte';

	export let data: any;

	const breed = data.breed;

	$: console.log('Breed', breed);

	$pageTitle = `Animal Breed: ${breed?.name}`;
</script>

<div class="flex w-full justify-end space-x-2 pb-4 text-sm">
	<div class="flex items-center divide-x">
		<a href="/animals" class="rounded-l-md bg-blue-500 p-2 text-white hover:bg-blue-700"
			><Icon icon="mdi-arrow-left" /></a
		>
		<a
			href={`/animals/breeds/${breed.id}/edit`}
			class="bg-green-500 p-2 text-white hover:bg-green-700"><Icon icon="mdi-pencil" /></a
		>
		<a href="#" class="rounded-r-md bg-red-500 p-2 text-white hover:bg-red-700"
			><Icon icon="mdi-delete-outline" /></a
		>
	</div>
</div>

<div class="mx-auto rounded-md bg-white p-4 shadow-lg">
	<div class="flex items-center">
		<Icon icon="mdi-file-tree-outline" class="mr-2 text-blue-600" /><span>Category: </span>
		<span class="pl-5">{breed?.name}</span>
	</div>
	<div class="flex items-center">
		<Icon icon="mdi-source-branch" class="mr-2 text-blue-600" /><span>Type: </span>
		<span class="pl-5">{breed.type.name}</span>
	</div>
	<div class="flex items-center">
		<Icon icon="mdi-file-tree-outline" class="mr-2 text-blue-600" /><span>Category: </span>
		<span class="pl-5">{breed.type.category.name}</span>
	</div>
	<div class="flex items-center">
		<Icon icon="mdi-file-tree-outline" class="mr-2 text-blue-600" /><span>Category: </span>
		<span class="pl-5">{breed.description}</span>
	</div>
</div>
