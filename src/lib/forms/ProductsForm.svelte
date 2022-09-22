<script lang="ts">
	import Icon from '@iconify/svelte';
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
			accept=".png,.jpg"
			bind:value={formValues.imageUrl}
			class="rounded-md border-0 bg-slate-100 shadow-inner shadow-slate-300"
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
