<script lang="ts">
	export let formValues: any;

	let animalType: any;
	let animalCategory: any;
	let animalImage: any;
	let animalPlaceholder: any;

	$: {
		if (formValues.breed) {
			animalType = formValues?.types?.find(
				(item: any) => item.id === formValues?.breed?.animal_category?.animal_type_id
			);

			animalCategory = animalType?.animal_categories?.find(
				(item: any) => formValues?.breed?.animal_category_id
			);

			// console.log('Animal Category:', animalCategory);
		}
	}

	const onAnimalImageSelected = (event: any) => {
		// console.log('Animal Image selected:', event);
		const files = event?.target?.files;
		const filename = files[0]?.name;
		// console.log('filename:', filename);

		if (filename.lastIndexOf('.') <= 0) return alert('Invalid image format');

		const fileReader = new FileReader();

		fileReader.readAsDataURL(files[0]);

		fileReader.onload = (e: any) => {
			formValues.imageUrl = e?.target?.result;
			animalPlaceholder = e?.target?.result;
			// console.log('animalPlaceholder:', animalPlaceholder);
		};
	};
</script>

<div class="sm:col-span-1">
	<div class="flex flex-col space-y-1">
		<label for="imageUrl" class="text-xs">Animal Image</label>
		<input
			type="file"
			name="imageUrl"
			id="imageUrl"
			placeholder="Animal Image"
			class="hidden"
			on:change={(e) => onAnimalImageSelected(e)}
			bind:this={animalImage}
		/>
		<div
			class="h-full w-full cursor-pointer rounded-md border-2 border-slate-200 bg-slate-200"
			on:click={() => animalImage.click()}
		>
			<img
				src={formValues.imageUrl ? animalPlaceholder : '/images/animal_placeholder.jpg'}
				alt="animal placeholder"
				class="h-64 w-full rounded-md object-contain"
			/>
		</div>
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
			{#if animalType && animalType.animal_categories && animalType.animal_categories.length}
				{#each animalType.animal_categories as item}
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
