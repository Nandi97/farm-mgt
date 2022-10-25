<script lang="ts">
	export let formValues: any;
</script>

<div class="flex flex-col space-y-1">
	<label for="productId" class="text-xs">Select Product</label>
	<select
		name="productId"
		id="productId"
		class="rounded-md border-0 bg-slate-100 shadow-inner shadow-slate-300"
		bind:value={formValues.productId}
	>
		<option disabled selected value>--Product--</option>
		{#each formValues.products as item}
			<option value={item.id}>{item.name}</option>
		{/each}
	</select>
</div>

<div class="flex flex-col space-y-1">
	<label for="animalId" class="text-xs">Select Animal</label>
	<select
		name="animalId"
		id="animalId"
		class="rounded-md border-0 bg-slate-100 shadow-inner shadow-slate-300"
		bind:value={formValues.animalId}
	>
		<option disabled selected value>--Select Animal--</option>
		{#each formValues.animals as item}
			<option value={item.id}>{item.tag}</option>
		{/each}
	</select>
</div>

<div class="flex flex-col space-y-1">
	<label for="collectorId" class="text-xs">Who Collected</label>
	<select
		name="collectorId"
		id="collectorId"
		class="rounded-md border-0 bg-slate-100 shadow-inner shadow-slate-300"
		bind:value={formValues.collectorId}
	>
		<option disabled selected value>--Select Collector--</option>
		{#each formValues.collectors as item}
			<option value={item.id}>{item.name}</option>
		{/each}
	</select>
</div>

<div class="flex flex-col  space-y-1">
	<label for="producedAt" class="text-xs">Producion Date</label>
	<input
		type="date"
		name="producedAt"
		id="producedAt"
		placeholder="productionDate..."
		bind:value={formValues.producedAt}
		class="rounded-md border-0 bg-slate-100 shadow-inner shadow-slate-300"
	/>
</div>

<div class="flex flex-col  space-y-1">
	<label for="quantity" class="text-xs">Quantity</label>
	<input
		type="text"
		name="quantity"
		id="quantity"
		placeholder="Quantity..."
		bind:value={formValues.quantity}
		class="rounded-md border-0 bg-slate-100 shadow-inner shadow-slate-300"
	/>
</div>
