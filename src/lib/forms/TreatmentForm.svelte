<script lang="ts">
	export let formValues: any;
</script>

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
	<label for="chemicalId" class="text-xs">Select Drug</label>
	<select
		name="chemicalId"
		id="chemicalId"
		class="rounded-md border-0 bg-slate-100 shadow-inner shadow-slate-300"
		bind:value={formValues.chemicalId}
	>
		<option disabled selected value>--Drug--</option>
		{#each formValues.chemicals as item}
			<option value={item.id}>{item.name}</option>
		{/each}
	</select>
</div>

<div class="flex flex-col space-y-1">
	<label for="userId" class="text-xs">Who Collected</label>
	<select
		name="userId"
		id="userId"
		class="rounded-md border-0 bg-slate-100 shadow-inner shadow-slate-300"
		bind:value={formValues.userId}
	>
		<option disabled selected value>--Select Collector--</option>
		{#each formValues.users as item}
			<option value={item.id}>{item.name}</option>
		{/each}
	</select>
</div>

<div class="flex flex-col space-y-1">
	<label for="uomId" class="text-xs">Unit Of Measurement</label>
	<select
		name="uomId"
		id="uomId"
		class="rounded-md border-0 bg-slate-100 shadow-inner shadow-slate-300"
		bind:value={formValues.uomId}
	>
		<option disabled selected value>--Select Unit--</option>
		{#each formValues.uoms as item}
			<option value={item.id}>{item.unit}</option>
		{/each}
	</select>
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

<div class="flex flex-col  space-y-1">
	<label for="treatedAt" class="text-xs">Treatment Date</label>
	<input
		type="date"
		name="treatedAt"
		id="treatedAt"
		placeholder="treatmentDate..."
		bind:value={formValues.treatedAt}
		class="rounded-md border-0 bg-slate-100 shadow-inner shadow-slate-300"
	/>
</div>
