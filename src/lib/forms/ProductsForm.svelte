<script lang="ts">
	import Icon from '@iconify/svelte';
	export let formValues: any;

	let productImage: any;

	const onProductImageSelected = (event: any) => {
		// console.log('Product Image selected:', event);
		const files = event?.target?.files;
		const filename = files[0]?.name;
		// console.log('filename:', filename);

		if (filename.lastIndexOf('.') <= 0) return alert('Invalid image format');

		const fileReader = new FileReader();

		fileReader.readAsDataURL(files[0]);

		fileReader.onload = (e: any) => {
			formValues.imageUrl = e?.target?.result;
			// productPlaceholder = e?.target?.result;
			// console.log('productPlaceholder:', productPlaceholder);
		};
	};
</script>

<div class="sm:col-span-1">
	<div class="flex flex-col space-y-1" />
	<label for="imageUrl" class="text-xs">Product Image</label>
	<input
		type="file"
		name="imageUrl"
		id="imageUrl"
		placeholder="Product Image"
		class="hidden"
		on:change={(e) => onProductImageSelected(e)}
		bind:this={productImage}
	/>
	<div
		class="h-full w-full cursor-pointer rounded-md border-2 border-slate-200 bg-slate-200"
		on:click={() => productImage.click()}
	>
		<img
			src={formValues.imageUrl ? formValues.imageUrl : '/images/add_image_placeholder.webp'}
			alt="product placeholder"
			class="h-64 w-full rounded-md object-contain"
		/>
	</div>
</div>

<div class="sm:col-span-1">
	<div class="flex flex-col space-y-1">
		<label for="name" class="text-xs">Product Name</label>
		<input
			type="text"
			name="name"
			id="name"
			placeholder="Product Name"
			bind:value={formValues.name}
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
</div>
