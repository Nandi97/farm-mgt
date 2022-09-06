<script lang="ts">
	export let formValues: any;

	let animalType: any;
</script>

<div class="flex flex-col space-y-1">
	<label for="animalType" class="text-xs">Animal Type</label>
	<select
		name="animalType"
		id="animalType"
		class="rounded-md border-0 bg-slate-100 shadow-inner shadow-slate-300"
		bind:value={animalType}
	>
		<option disabled selected value>--Select Animal Type--</option>
		{#each formValues.types as item}
			<option value={item}>{item.name}</option>
		{/each}
	</select>
</div>

<div class="flex flex-col space-y-1">
	<label for="categoryId" class="text-xs">Animal Category</label>
	<select
		name="categoryId"
		id="categoryId"
		class="rounded-md border-0 bg-slate-100 shadow-inner shadow-slate-300"
		bind:value={formValues.categoryId}
	>
		<option disabled selected value>--Select Animal Category--</option>
		{#if animalType && animalType.categories && animalType.categories.length}
			{#each animalType.categories as item}
				<option value={item.id}>{item.name}</option>
			{/each}
		{/if}
	</select>
</div>

<div class="flex flex-col space-y-1">
	<label for="name" class="text-xs">Breed Name</label>
	<input
		type="text"
		name="name"
		id="name"
		placeholder="Breed Name"
		class="rounded-md border-0 bg-slate-100 shadow-inner shadow-slate-300"
	/>
</div>

<div class="flex flex-col  space-y-1 sm:col-span-3">
	<label for="description" class="text-xs">Breed Description</label>
	<textarea
		type="text"
		name="description"
		id="description"
		placeholder="Description..."
		class="h-40 rounded-md border-0 bg-slate-100 shadow-inner shadow-slate-300"
	/>
</div>
