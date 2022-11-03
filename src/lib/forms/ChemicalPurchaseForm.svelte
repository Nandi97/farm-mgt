<script lang="ts">
	export let formValues: any;
</script>

<div class="flex flex-col space-y-1">
	<label for="supplier" class="text-xs">Supplier</label>
	<input
		type="text"
		name="supplier"
		id="supplier"
		placeholder="Supplier's Name"
		bind:value={formValues.supplier}
		class="rounded-md border-0 bg-slate-100 shadow-inner shadow-slate-300"
	/>
</div>

<div class="flex flex-col space-y-1">
	<label for="chemicalId" class="text-xs">Drug Name</label>
	<select
		name="chemicalId"
		id="chemicalId"
		class="rounded-md border-0 bg-slate-100 shadow-inner shadow-slate-300"
		bind:value={formValues.chemicalId}
	>
		<option disabled selected value>--Select Chemical Type--</option>
		{#if formValues.chemicals && formValues.chemicals.length}
			{#each formValues.chemicals as item}
				<option value={item.id}>{item.name}</option>
			{/each}
		{/if}
	</select>
</div>

<div class="flex flex-col space-y-1">
	<label for="batchNo" class="text-xs">Batch No</label>
	<input
		type="text"
		name="batchNo"
		id="batchNo"
		placeholder="Drug Batch No"
		bind:value={formValues.batchNo}
		class="rounded-md border-0 bg-slate-100 shadow-inner shadow-slate-300"
	/>
</div>

<div class="flex flex-col space-y-1">
	<label for="uomId" class="text-xs">Unit Of Measure</label>
	<select
		name="uomId"
		id="uomId"
		class="rounded-md border-0 bg-slate-100 shadow-inner shadow-slate-300"
		bind:value={formValues.uomId}
	>
		<option disabled selected value>--Select Unit--</option>
		{#if formValues.uoms && formValues.uoms.length}
			{#each formValues.uoms as item}
				<option value={item.id}>{item.unit}</option>
			{/each}
		{/if}
	</select>
</div>

<div class="flex flex-col  space-y-1">
	<label for="quantity" class="text-xs">Quantity</label>
	<input
		type="number"
		name="quantity"
		id="quantity"
		placeholder="Quantity..."
		bind:value={formValues.quantity}
		class="rounded-md border-0 bg-slate-100 shadow-inner shadow-slate-300"
	/>
</div>

<div class="flex flex-col  space-y-1">
	<label for="price" class="text-xs">Price</label>
	<input
		type="text"
		name="price"
		id="price"
		placeholder="Price..."
		bind:value={formValues.price}
		class="rounded-md border-0 bg-slate-100 shadow-inner shadow-slate-300"
	/>
</div>

<div class="flex flex-col  space-y-1">
	<label for="purchasedAt" class="text-xs">Purchase Date</label>
	<input
		type="date"
		name="purchasedAt"
		id="purchasedAt"
		placeholder="productionDate..."
		bind:value={formValues.purchasedAt}
		class="rounded-md border-0 bg-slate-100 shadow-inner shadow-slate-300"
	/>
</div>

<div class="flex flex-col  space-y-1">
	<label for="manufacturedAt" class="text-xs">Manufacture Date</label>
	<input
		type="date"
		name="manufacturedAt"
		id="manufacturedAt"
		placeholder="productionDate..."
		bind:value={formValues.manufacturedAt}
		class="rounded-md border-0 bg-slate-100 shadow-inner shadow-slate-300"
	/>
</div>

<div class="flex flex-col  space-y-1">
	<label for="expiringAt" class="text-xs">Expirity Date</label>
	<input
		type="date"
		name="expiringAt"
		id="expiringAt"
		placeholder="productionDate..."
		bind:value={formValues.expiringAt}
		class="rounded-md border-0 bg-slate-100 shadow-inner shadow-slate-300"
	/>
</div>
