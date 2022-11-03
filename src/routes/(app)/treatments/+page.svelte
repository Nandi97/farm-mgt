<script lang="ts">
	import { format } from 'date-fns';
	import Icon from '@iconify/svelte';
	import { formatDate, pageTitle } from '$lib/stores';

	export let data: any;

	$pageTitle = 'Animal Treatment';

	$: animals = data.animals;

	// $: console.log('Animals:', animals);
</script>

<div class="flex w-full justify-end space-x-2 pb-4 text-sm">
	<div class="flex space-x-2">
		<div class="flex items-center divide-x">
			<a
				href="/treatments/chemicals"
				class="rounded-l-md bg-gray-800 px-4 py-1 text-gray-50 hover:bg-opacity-70"
			>
				Drugs
			</a>
			<a
				href="/treatments/purchases"
				class="bg-gray-800 px-4 py-1 text-gray-50 hover:bg-opacity-70"
			>
				Purchase Drugs
			</a>
			<a
				href="/treatments/chemicals/types"
				class=" bg-gray-800 px-4 py-1 text-gray-50 hover:bg-opacity-70 hover:shadow-inner"
			>
				Drug Types
			</a>
			<a
				href="/treatments/chemicals/methods"
				class="rounded-r-md bg-gray-800 px-4 py-1 text-gray-50 hover:bg-opacity-70"
			>
				Administration Methods
			</a>
		</div>

		<a
			href="/treatments/new"
			class="flex items-center space-x-2 rounded bg-gray-800 px-4 py-1 text-gray-50 hover:bg-opacity-70"
		>
			<Icon icon="mdi-plus" />
			<span>Treat Animal</span>
		</a>
	</div>
</div>
