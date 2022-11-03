<script lang="ts">
	import { pageTitle } from '$lib/stores';
	import Icon from '@iconify/svelte';
	// import {} from 'os';

	export let data: any;

	$pageTitle = 'Animal Types';

	// $: console.log('Data:', data);

	$: types = data?.types;
</script>

<div class="flex w-full justify-end space-x-2 pb-4 text-sm">
	<div class="flex items-center divide-x">
		<button
			type="button"
			class="cursor-not-allowed rounded-l-md bg-green-600 px-4 py-1 text-gray-50"
		>
			Types
		</button>
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
		href="/animals/types/new"
		class="flex items-center space-x-2 rounded bg-gray-800 px-4 py-1 text-gray-50 hover:bg-opacity-70"
	>
		<Icon icon="mdi-plus" />
		<span>New Animal Type</span>
	</a>
</div>

{#if types}
	<div class="mx-auto max-w-3xl rounded-md bg-white p-4 shadow-md">
		<table class="w-full table-auto">
			<thead>
				<tr class="bg-gray-200 text-sm uppercase leading-normal text-gray-600">
					<th>&nbsp;</th>
					<th class="p-2 text-left">Type</th>
					<th>&nbsp;</th>
				</tr>
			</thead>
			<tbody>
				{#each types as item}
					<tr class="bg-gradient-to-b from-transparent to-slate-100">
						<td class="p-2">&nbsp;</td>
						<td class="p-2">
							<span class="flex items-center space-x-5">
								<Icon icon={item.icon} />
								<span
									><a href={`/animals/types/${item.id}`} class="text-blue-600 underline"
										>{item.name}</a
									></span
								>
							</span>
						</td>
						<td class="p-2"
							><a
								class="rounded-md bg-blue-700 px-2 py-1 text-blue-50 shadow-md hover:bg-blue-500 hover:shadow-inner"
								href={`/animals/types/${item.id}/edit`}>edit</a
							></td
						>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
{/if}
