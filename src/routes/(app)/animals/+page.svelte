<script lang="ts">
	import { format } from 'date-fns';
	import Icon from '@iconify/svelte';
	import { formatDate, pageTitle } from '$lib/stores';

	export let data: any;

	$pageTitle = 'Animals';

	$: animals = data.animals;
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
	<table class="w-full table-auto">
		<thead>
			<tr class="text-left">
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
			{#each animals as item}
				<tr>
					<td class="p-2">{item.id}</td>
					<td class="p-2">
						<a href={`/animals/${item.id}`} class="text-blue-600 underline">{item.tag}</a>
					</td>
					<td class="p-2">{item.breed.name}</td>
					<td class="p-2">{item.gender.name}</td>
					<td class="p-2">{formatDate(item.bornAt)}</td>
					<td class="p-2">{formatDate(item.purchasedAt)}</td>
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
		</tbody>
	</table>
</div>
