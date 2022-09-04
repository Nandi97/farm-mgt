<script>
	const animal = {
		tag: '',
		imageUrl: '',
		breed: '',
		gender: '',
		bornAt: '',
		purchasedAt: 'Jan 1, 1900'
	};

	const genders = ['Female', 'Male'];

	const types = [
		{
			name: 'Livestock',
			categories: [
				{ name: 'Cattle', breeds: ['Friesian', 'Jersey', 'Ayrshire'] },
				{ name: 'Sheep', breeds: ['Merino', 'Dorper', 'Red Masai'] }
			]
		},
		{
			name: 'Poultry',
			categories: [
				{ name: 'Chicken', breeds: ['Kenbro', 'Broiler', 'Layers'] },
				{ name: 'Duck', breeds: ['Pekin', 'Black Swedish', 'Blue Swedish'] }
			]
		}
	];

	let animalType;
	let animalCategory;

	$: console.log('Animal:', animal);
</script>

<form
	action="/animals"
	method="post"
	class="grid sm:grid-cols-2 gap-4 max-w-4xl p-4 bg-white rounded shadow-lg"
>
	<div class="flex flex-col space-y-1">
		<label for="tag" class="text-xs">Animal Tag</label>
		<input
			type="text"
			name="tag"
			id="tag"
			bind:value={animal.tag}
			class="rounded-md border-0 shadow-inner shadow-slate-300 bg-slate-100"
		/>
	</div>

	<div class="flex flex-col space-y-1">
		<label for="tag" class="text-xs">Gender</label>
		<select
			name="gender"
			id="gender"
			bind:value={animal.gender}
			class="bg-slate-100 border-0 shadow-inner shadow-slate-300 rounded-md"
		>
			<option disabled selected value>--Select Gender--</option>
			{#each genders as item}
				<option value={item}>{item}</option>
			{/each}
		</select>
	</div>

	<div class="flex flex-col space-y-1">
		<label for="animalType" class="text-xs">Animal Type</label>
		<select
			name="animalType"
			id="animalType"
			class="bg-slate-100 border-0 shadow-inner shadow-slate-300 rounded-md"
			bind:value={animalType}
		>
			<option disabled selected value>--Select Animal Type--</option>
			{#each types as item}
				<option value={item}>{item.name}</option>
			{/each}
		</select>
	</div>

	<div class="flex flex-col space-y-1">
		<label for="category" class="text-xs">Category</label>
		<select
			name="category"
			id="category"
			class="bg-slate-100 border-0 shadow-inner shadow-slate-300 rounded-md"
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
		<label for="tag" class="text-xs">Breed</label>
		<select
			name="breed"
			id="breed"
			class="bg-slate-100 border-0 shadow-inner shadow-slate-300 rounded-md"
			bind:value={animal.breed}
		>
			<option disabled selected value>--Select Animal Type--</option>
			{#if animalCategory && animalCategory.breeds && animalCategory.breeds.length}
				{#each animalCategory.breeds as item}
					<option value={item}>{item}</option>
				{/each}
			{/if}
		</select>
	</div>
</form>
