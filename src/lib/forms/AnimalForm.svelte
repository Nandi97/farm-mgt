<script lang="ts">
	export let formValues: any;

	let animalType: any;
	let animalCategory: any;

	$: {
		if (formValues.breed) {
			animalType = formValues?.types?.find(
				(item: any) => item.id === formValues?.breed?.category?.type?.id
			);

			console.log('Animal Type:', animalType);

			animalCategory = animalType?.categories?.find((item: any) => formValues?.breed?.category?.id);
		}
	}
</script>

<div class="sm:col-span-1">
	<div class="flex flex-col space-y-1">
		<label for="imageUrl" class="text-xs">Animal Image</label>
		<input
			type="file"
			name="imageUrl"
			id="imageUrl"
			placeholder="Animal Image"
			bind:value={formValues.imageUrl}
			class="rounded-md border-0 bg-slate-100 shadow-inner shadow-slate-300"
		/>
	</div>
</div>

<div class="grid gap-4 sm:col-span-2 sm:grid-cols-2">
	<div class="flex flex-col space-y-1">
		<label for="tag" class="text-xs">Animal Tag</label>
		<input
			type="text"
			name="tag"
			id="tag"
			placeholder="Animal Tag"
			bind:value={formValues.tag}
			class="rounded-md border-0 bg-slate-100 shadow-inner shadow-slate-300"
		/>
	</div>

	<div class="flex flex-col space-y-1">
		<label for="genderId" class="text-xs">Gender</label>
		<select
			type="number"
			name="genderId"
			id="genderId"
			bind:value={formValues.genderId}
			class="rounded-md border-0 bg-slate-100 shadow-inner shadow-slate-300"
		>
			<option disabled selected value>--Select Gender--</option>
			{#each formValues.genders as item}
				<option value={item.id}>{item.name}</option>
			{/each}
		</select>
	</div>

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
		<label for="category" class="text-xs">Category</label>
		<select
			name="category"
			id="category"
			class="rounded-md border-0 bg-slate-100 shadow-inner shadow-slate-300"
			bind:value={animalCategory}
		>
			<option disabled selected value>--Select Category--</option>
			{#if animalType && animalType.categories && animalType.categories.length}
				{#each animalType.categories as item}
					<option value={item}>{item.name}</option>
				{/each}
			{/if}
		</select>
	</div>

	<div class="flex flex-col space-y-1">
		<label for="breedId" class="text-xs">Breed</label>
		<select
			type="number"
			name="breedId"
			id="breedId"
			class="rounded-md border-0 bg-slate-100 shadow-inner shadow-slate-300"
			bind:value={formValues.breedId}
		>
			<option disabled selected value>--Select Animal Type--</option>
			{#if animalCategory && animalCategory.breeds && animalCategory.breeds.length}
				{#each animalCategory.breeds as item}
					<option value={item.id}>{item.name}</option>
				{/each}
			{/if}
		</select>
	</div>

	<div class="flex flex-col space-y-1">
		<label for="bornAt" class="text-xs">Birth Date</label>
		<input
			type="date"
			name="bornAt"
			id="bornAt"
			placeholder="Animal Birth Date"
			bind:value={formValues.bornAt}
			class="rounded-md border-0 bg-slate-100 shadow-inner shadow-slate-300"
		/>
	</div>

	<div class="flex flex-col space-y-1">
		<label for="purchasedAt" class="text-xs">Purchase Date</label>
		<input
			type="date"
			name="purchasedAt"
			id="purchasedAt"
			placeholder="Purchase Date"
			bind:value={formValues.purchasedAt}
			class="rounded-md border-0 bg-slate-100 shadow-inner shadow-slate-300"
		/>
	</div>
</div>
