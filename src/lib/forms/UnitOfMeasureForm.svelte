<script lang="ts">
	export let formValues: any;
</script>

<div class="flex flex-col space-y-1">
	<label for="unit" class="text-xs">Unit</label>
	<input
		type="text"
		name="unit"
		id="unit"
		class="rounded-md border-0 bg-slate-100 shadow-inner shadow-slate-300"
		bind:value={formValues.unit}
	/>
</div>

<div class="flex flex-col space-y-1">
	<label for="initial" class="text-xs">Initial</label>
	<input
		type="text"
		name="initial"
		id="initial"
		class="rounded-md border-0 bg-slate-100 shadow-inner shadow-slate-300"
		bind:value={formValues.initial}
	/>
</div>
