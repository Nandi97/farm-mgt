<script lang="ts">
	import { pageTitle } from '$lib/stores';
	import Icon from '@iconify/svelte';

	export let data: any;

	$pageTitle = 'Animal Categories';

	$: console.log('Categories', data);

	$: categories = data.categories;
</script>

<div class="flex w-full justify-end space-x-2 pb-4 text-sm">
	<div class="flex items-center divide-x">
		<a
			href="/animals/types"
			class="rounded-l-md bg-gray-800 px-4 py-1 text-gray-50 hover:bg-opacity-70"
		>
			Types
		</a>
		<button type="button" class="cursor-not-allowed bg-green-600 px-4 py-1 text-gray-50">
			Categories
		</button>
		<a
			href="/animals/breeds"
			class="rounded-r-md bg-gray-800 px-4 py-1 text-gray-50 hover:bg-opacity-70"
		>
			Breeds
		</a>
	</div>

	<a
		href="/animals/categories/new"
		class="flex items-center space-x-2 rounded bg-gray-800 px-4 py-1 text-gray-50 hover:bg-opacity-70"
	>
		<Icon icon="mdi-plus" />
		<span>New Category</span>
	</a>
</div>

<div class="rounded-md bg-white p-2 shadow-md">
	<table class="w-full table-auto">
		<thead>
			<tr class="bg-gradient-to-b from-slate-200 to-green-200">
				<th>&nbsp;</th>
				<th class="p-2 text-left">Name</th>
				<th class="p-2 text-left">Type</th>
				<th>&nbsp;</th>
			</tr>
		</thead>
		<tbody>
			{#each categories as item}
				<tr class="bg-gradient-to-b from-transparent to-slate-100">
					<td>{item.id}</td>
					<td class="p-2"
						><a href={`/animals/categories/${item.id}`} class="text-blue-600 underline"
							>{item.name}</a
						></td
					>
					<td class="p-2">{item.type.name}</td>
					<td>&nbsp;</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
