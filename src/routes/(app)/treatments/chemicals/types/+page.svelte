<script lang="ts">
	import { pageTitle } from '$lib/stores';
	import Icon from '@iconify/svelte';

	export let data: any;

	$pageTitle = 'Drug Types';

	$: types = data?.types;
</script>

<div class="flex w-full justify-between space-x-2 pb-4 text-sm">
	<a
		href="/treatments"
		class="rounded-md bg-gray-800   px-4 py-1 text-gray-50 hover:bg-opacity-70 hover:shadow-inner"
	>
		Treatment
	</a>
	<div class="flex space-x-2">
		<div class="flex items-center divide-x">
			<a
				href="/treatments/chemicals"
				class="rounded-l-md bg-gray-800 px-4 py-1 text-gray-50 hover:bg-opacity-70"
			>
				Drugs
			</a>
			<a
				href="/treatments/chemicals/purchases"
				class="bg-gray-800 px-4 py-1 text-gray-50 hover:bg-opacity-70"
			>
				Purchase Drugs
			</a>
			<button type="button" class="cursor-not-allowed bg-green-600 px-4 py-1 text-gray-50 ">
				Drug Types
			</button>
			<a
				href="/treatments/chemicals/methods"
				class="rounded-r-md bg-gray-800 px-4 py-1 text-gray-50 hover:bg-opacity-70"
			>
				Administration Methods
			</a>
		</div>

		<a
			href="/treatments/chemicals/types/new"
			class="flex items-center space-x-2 rounded bg-gray-800 px-4 py-1 text-gray-50 hover:bg-opacity-70"
		>
			<Icon icon="mdi-plus" />
			<span>New Drug Type</span>
		</a>
	</div>
</div>

{#if types}
	<div class="mx-auto max-w-3xl rounded-md bg-white p-4 shadow-md">
		<table class="w-full table-auto">
			<thead>
				<tr class="bg-gradient-to-b from-slate-200 to-green-200">
					<th>&nbsp;</th>
					<th class="p-2 text-left">Drug Type</th>
					<th class="p-2 text-left">Drug Description</th>
					<th>&nbsp;</th>
				</tr>
			</thead>
			<tbody>
				{#each types as item}
					<tr class="bg-gradient-to-b from-transparent to-slate-100">
						<td class="p-2">&nbsp;</td>
						<td class="p-2">
							<span
								><a href={`/treatments/chemicals/types/${item.id}`} class="text-blue-600 underline"
									>{item.name}</a
								></span
							>
						</td>
						<td class="p-2">{item.description}</td>
						<td class="p-2"
							><a
								class="rounded-md bg-blue-700 px-2 py-1 text-blue-50 shadow-md hover:bg-blue-500 hover:shadow-inner"
								href={`/treatments/chemicals/types/${item.id}/edit`}>edit</a
							></td
						>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
{/if}
