<script lang="ts">
	import { format } from 'date-fns';
	import Icon from '@iconify/svelte';
	import { formatDate, pageTitle } from '$lib/stores';

	export let data: any;

	$pageTitle = 'Animal Treatment';

	$: treatments = data.treatments;

	// $: console.log('Treatments:', treatments);
</script>

<div class="flex w-full justify-end space-x-2 pb-4 text-sm">
	<div class="flex space-x-2">
		<div class="flex items-center divide-x">
			<a
				href="/treatments/chemicals"
				class="rounded-l-md bg-gray-800 px-4 py-1 text-gray-50 hover:bg-opacity-70"
			>
				Drugs
			</a>
			<a
				href="/treatments/purchases"
				class="bg-gray-800 px-4 py-1 text-gray-50 hover:bg-opacity-70"
			>
				Purchase Drugs
			</a>
			<a
				href="/treatments/chemicals/types"
				class=" bg-gray-800 px-4 py-1 text-gray-50 hover:bg-opacity-70 hover:shadow-inner"
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
			href="/treatments/new"
			class="flex items-center space-x-2 rounded bg-gray-800 px-4 py-1 text-gray-50 hover:bg-opacity-70"
		>
			<Icon icon="mdi-plus" />
			<span>Treat Animal</span>
		</a>
	</div>
</div>

<div class="rounded-md bg-white p-2 shadow-md md:max-w-4xl">
	<table class="w-full table-auto">
		<thead>
			<tr class="bg-gray-200 text-sm uppercase leading-normal text-gray-600">
				<th>&nbsp;</th>
				<th class="p-2 text-left">Treatment Date</th>
				<th class="p-2 text-left">Treatment</th>
				<th class="p-2 text-left">Action By</th>
				<th>&nbsp;</th>
			</tr>
		</thead>
		<tbody>
			{#each treatments as item}
				<tr class="bg-gradient-to-b from-transparent to-slate-100">
					<td>{item.id}</td>
					<td class="p-2">{item.treated_at}</td>
					<td class="p-2"
						><a href={`/animals/${item.animal.id}`} class="text-blue-600 underline">
							{item.animal.tag}</a
						>
						received {item.quantity}
						{item.uom.unit}{#if item.quantity !== 1}s{/if}
						of
						{item.chemical.name}
					</td>
					<td class="p-2">{item.user.name}</td>
					<td class="p-2">
						<a
							href={`/treatments/${item.id}/edit`}
							class="rounded-md bg-blue-600 px-2 py-1 text-blue-50 shadow-md hover:shadow-inner"
							>Edit</a
						>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
