<script lang="ts">
	export let formValues: any;
</script>

<div class="flex flex-col space-y-1">
	<label for="name" class="text-xs">Name</label>
	<input
		type="text"
		name="name"
		id="name"
		class="rounded-md border-0 bg-slate-100 shadow-inner shadow-slate-300"
		bind:value={formValues.name}
	/>
</div>

<div class="flex flex-col space-y-1">
	<label for="icon" class="text-xs">Icon</label>
	<input
		type="text"
		name="icon"
		id="icon"
		class="rounded-md border-0 bg-slate-100 shadow-inner shadow-slate-300"
		bind:value={formValues.icon}
	/>
</div>
