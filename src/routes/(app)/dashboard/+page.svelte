<script lang="ts">
	import { pageTitle } from '$lib/stores';

	let div = ['1', '2', '3', '4', '5', '6', '7', '8'];

	$pageTitle = 'Dashboard';
</script>

<div class="grid space-x-4 space-y-4 sm:grid-cols-12">
	{#each div as item}
		<div class="shaddow-md h-12 rounded-md bg-gray-400 sm:col-span-6">{item}</div>
	{/each}
</div>
