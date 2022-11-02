<script lang="ts">
	export let formValues: any;
</script>

<div class="col-span-2 flex flex-col space-y-1">
	<label for="name" class="text-xs">Name</label>
	<input
		type="text"
		name="name"
		id="name"
		class="rounded-md border-0 bg-slate-100 shadow-inner shadow-slate-300"
		bind:value={formValues.name}
	/>
</div>
