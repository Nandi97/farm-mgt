<script lang="ts">
	import { pageTitle } from '$lib/stores';
	import Icon from '@iconify/svelte';

	export let data: any;

	const type = data.type;

	$pageTitle = `Animal Type: ${type?.name}`;
</script>

<div class="flex w-full justify-end space-x-2 pb-4 text-sm">
	<div class="flex items-center divide-x">
		<a
			href="/animals/types"
			class="flex w-12 flex-col items-center rounded-l-md bg-blue-500 p-1 text-blue-50 hover:bg-blue-700"
		>
			<Icon icon="mdi-arrow-left" />
			<span>back</span>
		</a>
		<a
			href={`/animals/types/${type.id}/edit`}
			class="flex w-12  flex-col items-center bg-green-500 p-1 text-green-50 hover:bg-green-700"
		>
			<Icon icon="mdi-pencil" />
			<span>edit</span>
		</a>
		<a
			href="#"
			class="flex w-12 flex-col items-center rounded-r-md bg-red-500 p-1 text-red-50 hover:bg-red-700"
		>
			<Icon icon="mdi-delete-outline" />
			<span>Delete</span>
		</a>
	</div>
</div>

<div class="rounded-md bg-white p-4 shadow-lg">
	<div class="flex items-center">
		<div class="flex w-24 items-center">
			<Icon icon="mdi-file-tree-outline" class="mr-2 text-blue-600" /><span>Category: </span>
		</div>
		<span class="pl-5">{type.name}</span>
	</div>
</div>
