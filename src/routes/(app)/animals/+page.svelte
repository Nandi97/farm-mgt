<script lang="ts">
	import { format } from 'date-fns';
	import Icon from '@iconify/svelte';
	import { formatDate, pageTitle } from '$lib/stores';

	export let data: any;

	$pageTitle = 'Animals';

	$: animals = data.animals;

	// $: console.log('Animals:', animals);
	let searchTerm = '';

	$: searchedAnimals = animals.filter((animal: any) => {
		return animal.animal_breed.name.includes(searchTerm) || animal.tag.includes(searchTerm) || animal.gender.name.includes(searchTerm);

	});
</script>

<div class="flex w-full justify-end space-x-2 pb-4 text-sm">
	<div class="flex items-center divide-x">
		<a
			href="/animals/types"
			class="rounded-l-md bg-gray-800 px-4 py-1 text-gray-50 hover:bg-opacity-70 hover:shadow-inner"
		>
			Types
		</a>
		<a href="/animals/categories" class="bg-gray-800 px-4 py-1 text-gray-50 hover:bg-opacity-70">
			Categories
		</a>
		<a
			href="/animals/breeds"
			class="rounded-r-md bg-gray-800 px-4 py-1 text-gray-50 hover:bg-opacity-70"
		>
			Breeds
		</a>
	</div>

	<a
		href="/animals/new"
		class="flex items-center space-x-2 rounded bg-gray-800 px-4 py-1 text-gray-50 hover:bg-opacity-70"
	>
		<Icon icon="mdi-plus" />
		<span>New Animal</span>
	</a>
</div>

<div class="rounded-md bg-white p-4 shadow-lg">
	<div class="relative my-3 max-w-sm">
		<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
			<Icon icon="mdi-search" class="h-5 w-5 text-gray-500" />
		</div>
		<input
			type="search"
			id="default-search"
			class="block w-full rounded-lg border border-gray-300 bg-gray-50 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
			placeholder="Search..."
			bind:value={searchTerm}
		/>
	</div>

	<table class="w-full table-auto">
		<thead>
			<tr class="bg-gray-200 text-sm uppercase leading-normal text-gray-600">
				<th class="p-2">&nbsp;</th>
				<th class="p-2">Tag</th>
				<th class="p-2">Breed</th>
				<th class="p-2">Gender</th>
				<th class="p-2">Born On</th>
				<th class="p-2">Purchased On</th>
				<th class="p-2">Status</th>
				<th class="p-2">&nbsp;</th>
			</tr>
		</thead>
		<tbody>
			{#if searchedAnimals.length}
			{#each searchedAnimals as item}
				<tr>
					<td class="p-2">{item.id}</td>
					<td class="p-2">
						<a href={`/animals/${item.id}`} class="text-blue-600 underline">{item.tag}</a>
					</td>
					<td class="p-2">{item.animal_breed.name}</td>
					<td class="p-2">{item.gender.name}</td>
					<td class="p-2">{formatDate(item.born_at)}</td>
					<td class="p-2">{formatDate(item.purchased_at)}</td>
					<td class="p-2">{item.status ? 'Active' : 'Inactive'}</td>
					<td class="p-2">
						<a
							href={`/animals/${item.id}/edit`}
							class="rounded-md bg-blue-600 px-2 py-1 text-blue-50 shadow-md hover:shadow-inner"
							>Edit</a
						>
					</td>
				</tr>
			{/each}
			{:else}
			<tr>
				<td colspan="4">No animal found with "{searchTerm}"</td>
			</tr>
			{/if}
		</tbody>
	</table>
</div>
