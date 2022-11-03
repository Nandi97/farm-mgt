<script lang="ts">
	import ChemicalPurchaseForm from '$lib/forms/ChemicalPurchaseForm.svelte';
	import { pageTitle } from '$lib/stores';

	$pageTitle = 'Animal Breed: Edit';

	export let data: any;

	const purchase = data.purchase;
	const formValues = {
		supplier: purchase.supplier,
		batchNo: purchase.batch_no,
		chemicalId: purchase.chemical_id,
		uomId: purchase.uom_id,
		quantity: purchase.quantity,
		price: purchase.price,
		purchasedAt: purchase.purchased_at,
		manufacturedAt: purchase.manufactured_at,
		expiringAt: purchase.expiring_at,
		uoms: data.uoms,
		chemicals: data.chemicals
	};

	// $: console.log('Breed:', formValues);
</script>

<form
	action={`/treatments/purchases/${purchase.id}`}
	method="post"
	class="grid max-w-4xl gap-4 rounded bg-white p-4 shadow-lg sm:grid-cols-3"
>
	<h1 class="text-xl sm:col-span-3">Edit Purchase</h1>

	<ChemicalPurchaseForm {formValues} />

	<div class="flex items-center justify-center space-x-2 sm:col-span-3">
		<button
			type="submit"
			class="rounded-md border border-green-600 bg-green-600 px-2 py-1 text-white"
		>
			Update
		</button>
		<a
			href="/treatments/purchases"
			class="rounded-md border border-gray-800 px-2 py-1 hover:bg-gray-800 hover:text-gray-50"
		>
			Cancel
		</a>
	</div>
</form>
