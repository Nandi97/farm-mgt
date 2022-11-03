<script lang="ts">
import {format} from 'date-fns';

	import { formatDate,
pageTitle } from '$lib/stores';
	import Icon from '@iconify/svelte';

	export let data: any;

	$pageTitle = 'Drug Purchases';

	$: purchases = data.purchases;
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
			<button type="button" class="cursor-not-allowed bg-green-600 px-4 py-1 text-gray-50">
				Purchase Drugs
			</button>
			<a
				href="/treatments/chemicals/types"
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
			href="/treatments/purchases/new"
			class="flex items-center space-x-2 rounded bg-gray-800 px-4 py-1 text-gray-50 hover:bg-opacity-70"
		>
			<Icon icon="mdi-plus" />
			<span>New Purchase</span>
		</a>
	</div>
</div>

<div class="rounded-md bg-white p-2 shadow-md">
	<table class="w-full table-auto">
		<thead>
			<tr class="bg-gray-200 text-sm uppercase leading-normal text-gray-600">
				<th>&nbsp;</th>
				<th class="p-2 text-left">Supplier</th>
				<th class="p-2 text-left">Drug Name</th>
				<th class="p-2 text-left">Batch No</th>
				<th class="p-2 text-left">Rate</th>
				<th class="p-2 text-left">Quantity</th>
				<th class="p-2 text-left">Total Price</th>
				<th class="p-2 text-left">Purchase Date</th>
				<th class="p-2 text-left">Manufacture Date</th>
				<th class="p-2 text-left">Expiring Date</th>
				<th>&nbsp;</th>
			</tr>
		</thead>
		<tbody class="overflow-y-scroll">
			{#each purchases as item}
				<tr class="items-start bg-gradient-to-b from-transparent to-slate-100 text-start">
					<td class="p-2 text-start">{item.id}</td>
					<td class="p-2 text-start">{item.supplier}</td>
					<td class="p-2 text-start">{item.chemical.name}</td>
					<td class="p-2 text-start">{item.batch_no}</td>
					<td class="p-2 text-start">{item.price/item.quantity}ksh/{item.uom.initial
}</td>
					<td class="p-2 text-start"
						>{item.quantity}{item.uom.unit}{#if item.quantity !== 1}s{/if}</td
					>
					<td class="p-2 text-start">KES {item.price}</td>
					<td class="p-2 text-start">{formatDate(item.purchased_at)}</td>
					<td class="p-2 text-justify">{formatDate(item.manufactured_at)}</td>
					<td class="p-2 text-justify">{formatDate(item.expiring_at)}</td>
					<td class="p-2">&nbsp;</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
