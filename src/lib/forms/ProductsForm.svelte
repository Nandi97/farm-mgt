<script lang="ts">
	export let formValues: any;
</script>

<div class="sm:col-span-1">
	<div class="flex flex-col space-y-1">
		<label for="imageUrl" class="text-xs">Product Image</label>
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

<div class="sm:col-span-1">
	<div class="flex flex-col space-y-1">
		<label for="uomId" class="text-xs">Unit of Measurement</label>
		<select
			type="number"
			name="uomId"
			id="uomId"
			bind:value={formValues.uomId}
			class="rounded-md border-0 bg-slate-100 shadow-inner shadow-slate-300"
		>
			<option disabled selected value>--Select Unit of Measurement--</option>
			{#each formValues.uoms as item}
				<option value={item.id}>{item.unit}</option>
			{/each}
		</select>
	</div>

	<div class="flex flex-col space-y-1">
		<label for="name" class="text-xs">Product Name</label>
		<input
			type="text"
			name="naem"
			id="naem"
			placeholder="Product Name"
			bind:value={formValues.name}
			class="rounded-md border-0 bg-slate-100 shadow-inner shadow-slate-300"
		/>
	</div>
</div>
