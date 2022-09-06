<script lang="ts">
	import { pageTitle } from '$lib/stores';
	import Icon from '@iconify/svelte';

	export let data: any;

	$pageTitle = 'Animal Breeds';

	$: breeds = data.breeds;
</script>

<div class="flex w-full justify-end space-x-2 pb-4 text-sm">
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

<div class="rounded-md bg-white p-2 shadow-md">
	<table class="w-full table-auto">
		<thead>
			<tr class="bg-gradient-to-b from-slate-200 to-green-200">
				<th>&nbsp;</th>
				<th class="p-2 text-left">Category</th>
				<th class="p-2 text-left">Breed</th>
				<th class="p-2 text-left">Description</th>
				<th>&nbsp;</th>
			</tr>
		</thead>
		<tbody>
			{#each breeds as item}
				<tr class="bg-gradient-to-b from-transparent to-slate-100">
					<td class="p-2">{item.id}</td>
					<td class="p-2">{item.category.name}</td>
					<td class="p-2">{item.name}</td>
					<td class="p-2">{item.description}</td>
					<td class="p-2">&nbsp;</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
