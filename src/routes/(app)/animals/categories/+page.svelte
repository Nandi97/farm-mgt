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

<div class="max-w-3xl rounded-md bg-white shadow-md">
	<table class="w-full table-auto">
		<thead>
			<tr>
				<th>&nbsp;</th>
				<th class="text-left">Name</th>
				<th class="text-left">Type</th>
				<th>&nbsp;</th>
			</tr>
		</thead>
		<tbody>
			{#each categories as item}
				<tr>
					<td>{item.id}</td>
					<td>{item.name}</td>
					<td>{item.type.name}</td>
					<td>&nbsp;</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
