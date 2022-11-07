<script lang="ts">
	import { pageTitle } from '$lib/stores';
	import Icon from '@iconify/svelte';

	export let data: any;

	$pageTitle = 'Units Of Measurement';

	$: uoms = data.uoms;
</script>

<div class="flex w-full justify-between space-x-2 pb-4 text-sm">
	<div class="flex items-center divide-x">
		<a href="/products" class="rounded-l-md bg-gray-800 px-4 py-1 text-gray-50 hover:bg-opacity-70"
			>Products</a
		>
		<a
			href="/productions"
			class="rounded-r-md bg-gray-800 px-4 py-1 text-gray-50 hover:bg-opacity-70"
		>
			Pruduction Management
		</a>
	</div>
	<div class="flex space-x-2">
		<button type="button" class="cursor-not-allowed rounded-md bg-green-600 px-4 py-1 text-gray-50">
			Units Of Measurement
		</button>
		<a
			href="/uoms/new"
			class="flex items-center space-x-2 rounded bg-gray-800 px-4 py-1 text-gray-50 hover:bg-opacity-70"
		>
			<Icon icon="mdi-plus" />
			<span>New Unit</span>
		</a>
	</div>
</div>

<div class="max-w-md rounded-md bg-white p-2 shadow-md">
	<table class="w-full table-auto">
		<thead>
			<tr class="bg-gray-200 text-sm uppercase leading-normal text-gray-600">
				<th>&nbsp;</th>
				<th class="p-2 text-left">Unit</th>
				<th class="p-2 text-left">Initials</th>
				<th>&nbsp;</th>
			</tr>
		</thead>
		<tbody style="height: 50vh;" class="overflow-y-scroll">
			{#each uoms as item}
				<tr class="bg-gradient-to-b from-transparent to-slate-100">
					<td class="p-2">{item.id}</td>
					<td class="p-2">{item.unit}</td>
					<td class="p-2">{item.initial}</td>
					<td class="p-2">
						<a
							class="rounded-md bg-blue-700 px-2 py-1 text-blue-50 shadow-md hover:bg-blue-500 hover:shadow-inner"
							href={`/uoms/${item.id}/edit`}>edit</a
						>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
