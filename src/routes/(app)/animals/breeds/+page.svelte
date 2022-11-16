<script lang="ts">
	import { pageTitle } from '$lib/stores';
	import Icon from '@iconify/svelte';

	export let data: any;
	$pageTitle = 'Animal Breeds';
	
	$: breeds = data.breeds;
	// $: console.log("Breeds:" breeds);


	let searchTerm = "";

	$: searchedBreeds = breeds.filter((breed:any)=>{
		return breed.animal_category.name.includes(searchTerm) || breed.name.includes(searchTerm);
	})

	

</script>

<div class="flex w-full justify-between space-x-2 pb-4 text-sm">
	<div class="">
		<a href="/animals" class="rounded-md bg-gray-800 px-4 py-1 text-gray-50 hover:bg-opacity-70">
			Animals
		</a>
	</div>
	<div class="flex space-x-2">
		<div class="flex items-center divide-x">
			<a
				href="/animals/types"
				class="rounded-l-md bg-gray-800 px-4 py-1 text-gray-50 hover:bg-opacity-70"
			>
				Types
			</a>
			<a href="/animals/categories" class="bg-gray-800 px-4 py-1  text-gray-50 hover:bg-opacity-70">
				Categories
			</a>
			<button
				type="button"
				class="cursor-not-allowed rounded-r-md bg-green-600 px-4 py-1 text-gray-50"
			>
				Breeds
			</button>
		</div>

		<a
			href="/animals/breeds/new"
			class="flex items-center space-x-2 rounded bg-gray-800 px-4 py-1 text-gray-50 hover:bg-opacity-70"
		>
			<Icon icon="mdi-plus" />
			<span>New Breeds</span>
		</a>
	</div>
</div>

<div class="rounded-md bg-white p-2 shadow-md">
	
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
				<th>&nbsp;</th>
				<th class="p-2 text-left">Category</th>
				<th class="p-2 text-left">Breed</th>
				<th class="p-2 text-left">Description</th>
				<th>&nbsp;</th>
			</tr>
		</thead>
		<tbody class="overflow-y-scroll">
			{#if searchedBreeds.length}
			{#each searchedBreeds as item}
				<tr class="bg-gradient-to-b from-transparent to-slate-100">
					<td class="p-2 text-start">{item.id}</td>
					<td class="p-2 text-start">{item.animal_category.name}</td>
					<td class="p-2 text-start"
						><a href={`/animals/breeds/${item.id}`} class="text-blue-600 underline">{item.name}</a
						></td
					>
					<td class="p-2 text-justify">{item.description}</td>
					<td class="p-2">&nbsp;</td>
				</tr>
			{/each}
			{:else}
			<tr>
				<td colspan="4">No breed found with "{searchTerm}"</td>
			</tr>
			{/if}
		</tbody>
	</table>
</div>
