<script lang="ts">
	export let formValues: any;
</script>

<div class="flex flex-col space-y-1">
	<label for="product" class="text-xs">Select Product</label>
	<select
		name="product"
		id="product"
		class="rounded-md border-0 bg-slate-100 shadow-inner shadow-slate-300"
		bind:value={formValues.product}
	>
		<option disabled selected value>--Product--</option>
		{#each formValues.products as item}
			<option value={item}>{item.name}</option>
		{/each}
	</select>
</div>

<div class="flex flex-col space-y-1">
	<label for="animal" class="text-xs">Select Animal</label>
	<select
		name="animal"
		id="animal"
		class="rounded-md border-0 bg-slate-100 shadow-inner shadow-slate-300"
		bind:value={formValues.animal}
	>
		<option disabled selected value>--Select Animal--</option>
		{#each formValues.animals as item}
			<option value={item}>{item.name}</option>
		{/each}
	</select>
</div>

<div class="flex flex-col space-y-1">
	<label for="collector" class="text-xs">Who Collected</label>
	<select
		name="collector"
		id="collector"
		class="rounded-md border-0 bg-slate-100 shadow-inner shadow-slate-300"
		bind:value={formValues.collector}
	>
		<option disabled selected value>--Select Collector--</option>
		{#each formValues.collectors as item}
			<option value={item}>{item.name}</option>
		{/each}
	</select>
</div>

<div class="flex flex-col  space-y-1">
	<label for="producionDate" class="text-xs">Producion Date</label>
	<input
		type="date"
		name="producionDate"
		id="producionDate"
		placeholder="producionDate..."
		bind:value={formValues.producionDate}
		class="rounded-md border-0 bg-slate-100 shadow-inner shadow-slate-300"
	/>
</div>

<div class="flex flex-col  space-y-1">
	<label for="quantity" class="text-xs">Quantity Date</label>
	<input
		type="text"
		name="quantity"
		id="quantity"
		placeholder="quantity..."
		bind:value={formValues.quantity}
		class="rounded-md border-0 bg-slate-100 shadow-inner shadow-slate-300"
	/>
</div>
