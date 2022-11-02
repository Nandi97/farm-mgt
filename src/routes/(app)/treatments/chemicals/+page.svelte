<script lang="ts">
	import { pageTitle } from '$lib/stores';
	import Icon from '@iconify/svelte';

	export let data: any;

	$pageTitle = 'Drugs';

	$: chemicals = data.chemicals;
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
			<button
				type="button"
				class="cursor-not-allowed rounded-l-md bg-green-600 px-4 py-1 text-gray-50 "
			>
				Drugs
			</button>
			<a
				href="/treatments/chemicals/purchases"
				class="bg-gray-800 px-4 py-1 text-gray-50 hover:bg-opacity-70"
			>
				Purchase Drugs
			</a>
			<a
				href="/treatments/chemicals"
				class="bg-gray-800 px-4 py-1 text-gray-50 hover:bg-opacity-70"
			>
				Drug Types
			</a>
			<a
				href="/treatments/chemicals/methods"
				class="rounded-r-md bg-gray-800 px-4 py-1 text-gray-50 hover:bg-opacity-70"
			>
				Administration Methods
			</a>
		</div>

		<a
			href="/treatments/chemicals/new"
			class="flex items-center space-x-2 rounded bg-gray-800 px-4 py-1 text-gray-50 hover:bg-opacity-70"
		>
			<Icon icon="mdi-plus" />
			<span>New Drug</span>
		</a>
	</div>
</div>

<div class="rounded-md bg-white p-2 shadow-md">
	<table class="w-full table-auto">
		<thead>
			<tr class="bg-gradient-to-b from-slate-200 to-green-200">
				<th>&nbsp;</th>
				<th class="p-2 text-left">Name</th>
				<th class="p-2 text-left">Name</th>
				<th class="p-2 text-left">Chemical Type</th>
				<th class="p-2 text-left">Administration Method</th>
				<th class="p-2 text-left">Description</th>
				<th>&nbsp;</th>
			</tr>
		</thead>
		<tbody class="overflow-y-scroll">
			{#each chemicals as item}
				<tr class="bg-gradient-to-b from-transparent to-slate-100">
					<td class="p-2 text-start">{item.id}</td>
					<td class="p-2 text-start">{item.chemical_type.name}</td>
					<td class="p-2 text-start">{item.chemical_administration_method.name}</td>
					<td class="p-2 text-start"
						><a href={`/treatments/chemicals/${item.id}`} class="text-blue-600 underline"
							>{item.name}</a
						></td
					>
					<td class="p-2 text-justify">{item.description}</td>
					<td class="p-2">&nbsp;</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
