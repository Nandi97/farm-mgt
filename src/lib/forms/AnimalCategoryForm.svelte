<script lang="ts">
	export let formValues: any;
</script>

<div class="flex flex-col space-y-1">
	<label for="typeId" class="text-xs">Animal Type</label>
	<select
		name="typeId"
		id="typeId"
		class="rounded-md border-0 bg-slate-100 shadow-inner shadow-slate-300"
		bind:value={formValues.typeId}
		required
	>
		<option disabled selected value>--Select Animal Type--</option>
		{#if formValues.types && formValues.types.length}
			{#each formValues.types as item}
				<option value={item.id}>{item.name}</option>
			{/each}
		{/if}
	</select>
</div>

<div class="flex flex-col space-y-1">
	<label for="name" class="text-xs">Category Name</label>
	<input
		type="text"
		name="name"
		id="name"
		bind:value={formValues.name}
		class="rounded-md border-0 bg-slate-100 shadow-inner shadow-slate-300"
		required
	/>
</div>
