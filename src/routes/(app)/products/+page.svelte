<script lang="ts">
	import { pageTitle } from '$lib/stores';
	import Icon from '@iconify/svelte';

	export let data: any;

	$pageTitle = 'Products';

	// $: console.log('Products', data);

	$: products = data.products;
</script>

<div class="flex w-full justify-between space-x-2 pb-4 text-sm">
	<div class="flex items-center divide-x">
		<button
			type="button"
			class="cursor-not-allowed rounded-l-md bg-green-600 px-4 py-1 text-gray-50">Products</button
		>
		<a
			href="/production"
			class="rounded-r-md bg-gray-800 px-4 py-1 text-gray-50 hover:bg-opacity-70"
		>
			Pruduction Management
		</a>
	</div>
	<div class="flex space-x-2">
		<a href="/uoms" class="rounded-md bg-gray-800 px-4 py-1 text-gray-50 hover:bg-opacity-70">
			Unit of Measurement
		</a>
		<a
			href="/products/new"
			class="flex items-center space-x-2 rounded bg-gray-800 px-4 py-1 text-gray-50 hover:bg-opacity-70"
		>
			<Icon icon="mdi-plus" />
			<span>New Product</span>
		</a>
	</div>
</div>

<div class="rounded-md bg-white p-2 shadow-md">
	<table class="w-full table-auto">
		<thead>
			<tr class="bg-gradient-to-b from-slate-200 to-green-200">
				<th>&nbsp;</th>
				<th class="p-2 text-left">Name</th>
				<th class="p-2 text-left">Unit of Measurement</th>
				<th>&nbsp;</th>
			</tr>
		</thead>
		<tbody>
			{#each products as item}
				<tr class="bg-gradient-to-b from-transparent to-slate-100">
					<td>{item.id}</td>
					<td class="p-2"
						><a href={`/products/${item.id}`} class="text-blue-600 underline">{item.name}</a></td
					>
					<td class="p-2">{item.uom.unit}</td>
					<td
						><a
							href={`/products/${item.id}/edit`}
							class="flex w-12 items-center  rounded-md bg-blue-500 p-1 text-sm text-green-50 hover:bg-blue-700"
							><Icon icon="mdi-pencil" />
							<span>edit</span>
						</a></td
					>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
