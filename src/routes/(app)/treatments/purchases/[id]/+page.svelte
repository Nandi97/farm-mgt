<script lang="ts">
	import { pageTitle } from '$lib/stores';
	import Icon from '@iconify/svelte';

	export let data: any;

	const purchase = data.purchase;

	// $: console.log('Purchase', purchase);

	$pageTitle = `Purchase of: ${purchase?.chemical.name} from ${purchase.supplier}`;
</script>

<div class="flex w-full justify-end space-x-2 pb-4 text-sm">
	<div class="flex items-center divide-x">
		<a
			href="/treatments/purchases"
			class="flex  items-center space-x-1 rounded-l-md bg-blue-500 p-2 px-3 text-blue-50 hover:bg-blue-700"
		>
			<Icon icon="mdi-arrow-left" class="text-lg" />
			<span>Back</span>
		</a>
		<a
			href={`/treatments/purchases/${purchase.id}/edit`}
			class="flex  items-center space-x-1 bg-green-500 p-2 px-3 text-green-50 hover:bg-green-700"
		>
			<Icon icon="mdi-pencil" class="text-lg" />
			<span>edit</span>
		</a>
		<a
			href="#"
			class="flex items-center space-x-1 rounded-r-md bg-red-500 p-2 px-3 text-red-50 hover:bg-red-700"
		>
			<Icon icon="mdi-delete-outline" class="text-lg" />
			<span>Delete</span>
		</a>
	</div>
</div>

<div class="rounded-md bg-white p-4 shadow-lg">
	<div class="flex items-start border-b border-gray-300">
		<div class="flex w-28 items-center">
			<Icon icon="mdi-paw" class="mr-2 text-blue-600" /><span>Supplier: </span>
		</div>
		<span class="pl-5">{purchase?.supplier}</span>
	</div>
	<div class="flex items-start border-b border-gray-300">
		<div class="flex w-28 items-center">
			<Icon icon="mdi-source-branch" class="mr-2 text-blue-600" /><span>Batch No: </span>
		</div>
		<span class="pl-5">{purchase.batch_no}</span>
	</div>
	<div class="flex items-start border-b border-gray-300">
		<div class="flex w-28 items-center">
			<Icon icon="mdi-file-tree-outline" class="mr-2 text-blue-600" /><span>Drug Name: </span>
		</div>
		<span class="pl-5">{purchase.chemical.name}</span>
	</div>
	<div class="flex items-start">
		<div class="flex w-28 items-center">
			<Icon icon="mdi-card-text-outline" class="mr-2 text-blue-600" /><span>Unit of Measure: </span>
		</div>
		<span class="pl-5">{purchase.uom.unit}</span>
	</div>
	<div class="flex items-start">
		<div class="flex w-28 items-center">
			<Icon icon="mdi-card-text-outline" class="mr-2 text-blue-600" /><span>Quantity: </span>
		</div>
		<span class="pl-5">{purchase.quantity}</span>
	</div>
	<div class="flex items-start">
		<div class="flex w-28 items-center">
			<Icon icon="mdi-card-text-outline" class="mr-2 text-blue-600" /><span>Price: </span>
		</div>
		<span class="pl-5">KES {purchase.price}</span>
	</div>
	<div class="flex items-start">
		<div class="flex w-28 items-center">
			<Icon icon="mdi-card-text-outline" class="mr-2 text-blue-600" /><span>Purchase Date: </span>
		</div>
		<span class="pl-5">{purchase.purchased_at}</span>
	</div>
	<div class="flex items-start">
		<div class="flex w-28 items-center">
			<Icon icon="mdi-card-text-outline" class="mr-2 text-blue-600" /><span
				>Manufaturing Date:
			</span>
		</div>
		<span class="pl-5">{purchase.manufactured_at}</span>
	</div>
	<div class="flex items-start">
		<div class="flex w-28 items-center">
			<Icon icon="mdi-card-text-outline" class="mr-2 text-blue-600" /><span>Expirity Date: </span>
		</div>
		<span class="pl-5">{purchase.expiring_at}</span>
	</div>
</div>
