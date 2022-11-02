<script lang="ts">
	export let formValues: any;
</script>

<div class="flex flex-col space-y-1">
	<label for="chemicalTypeId" class="text-xs">Chemical Type</label>
	<select
		name="chemicalTypeId"
		id="chemicalTypeId"
		class="rounded-md border-0 bg-slate-100 shadow-inner shadow-slate-300"
		bind:value={formValues.chemicalTypeId}
	>
		<option disabled selected value>--Select Chemical Type--</option>
		{#if formValues.types && formValues.types.length}
			{#each formValues.types as item}
				<option value={item.id}>{item.name}</option>
			{/each}
		{/if}
	</select>
</div>

<div class="flex flex-col space-y-1">
	<label for="administrationMethodId" class="text-xs">Administration Method</label>
	<select
		name="administrationMethodId"
		id="administrationMethodId"
		class="rounded-md border-0 bg-slate-100 shadow-inner shadow-slate-300"
		bind:value={formValues.administrationMethodId}
	>
		<option disabled selected value>--Select Administration Method--</option>
		{#if formValues.methods && formValues.methods.length}
			{#each formValues.methods as item}
				<option value={item.id}>{item.name}</option>
			{/each}
		{/if}
	</select>
</div>

<div class="flex flex-col space-y-1">
	<label for="name" class="text-xs">Drug Name</label>
	<input
		type="text"
		name="name"
		id="name"
		placeholder="Drug Name"
		bind:value={formValues.name}
		class="rounded-md border-0 bg-slate-100 shadow-inner shadow-slate-300"
	/>
</div>

<div class="flex flex-col  space-y-1 sm:col-span-3">
	<label for="description" class="text-xs">Drug Description</label>
	<textarea
		type="text"
		name="description"
		id="description"
		placeholder="Description..."
		bind:value={formValues.description}
		class="h-40 rounded-md border-0 bg-slate-100 shadow-inner shadow-slate-300"
	/>
</div>
