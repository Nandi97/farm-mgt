<script lang="ts">
	import { pageTitle } from '$lib/stores';
	import Icon from '@iconify/svelte';

	export let data: any;

	$pageTitle = 'Production';

	// $: console.log('Production', data);

	$: productions = data.productions;
</script>

<div class="flex w-full justify-between space-x-2 pb-4 text-sm">
	<div class="flex items-center divide-x">
		<a
			href="/products"
			type="button"
			class="rounded-l-md bg-gray-800 px-4 py-1 text-gray-50 hover:bg-opacity-70">Products</a
		>
		<button class="cursor-not-allowed rounded-r-md  bg-green-600 px-4 py-1 text-gray-50">
			Pruduction Management
		</button>
	</div>
	<div class="flex space-x-2">
		<a
			href="/productions/new"
			class="flex items-center space-x-2 rounded bg-gray-800 px-4 py-1 text-gray-50 hover:bg-opacity-70"
		>
			<Icon icon="mdi-plus" />
			<span>Record Produce</span>
		</a>
	</div>
</div>

<div class="rounded-md bg-white p-2 shadow-md md:max-w-4xl">
	<table class="w-full table-auto">
		<thead>
			<tr class="bg-gray-200 text-sm uppercase leading-normal text-gray-600">
				<th>&nbsp;</th>
				<th class="p-2 text-left">Collection Date</th>
				<th class="p-2 text-left">Production</th>
				<th class="p-2 text-left">Action By</th>
				<th>&nbsp;</th>
			</tr>
		</thead>
		<tbody>
			{#each productions as item}
				<tr class="bg-gradient-to-b from-transparent to-slate-100">
					<td>{item.id}</td>
					<td class="p-2">{item.produced_at}</td>
					<td class="p-2"
						><a href={`/animals/${item.animal.id}`} class="text-blue-600 underline">
							{item.animal.tag}</a
						>
						produced {item.quantity}
						{item.product.uom.unit}{#if item.quantity !== 1}s{/if}
						of
						{item.product.name}
					</td>
					<td class="p-2">{item.user.name}</td>
					<td class="p-2">
						<a
							href={`/productions/${item.id}/edit`}
							class="rounded-md bg-blue-600 px-2 py-1 text-blue-50 shadow-md hover:shadow-inner"
							>Edit</a
						>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
