<script lang="ts">
	import { pageTitle } from '$lib/stores';
	import Icon from '@iconify/svelte';

	export let data: any;

	$pageTitle = 'Roles';

	$: roles = data?.roles;
</script>

<div class="flex w-full justify-end space-x-2 pb-4 text-sm">
	<div class="flex items-center divide-x">
		<a
			href="/users"
			class="rounded-l-md bg-gray-800 px-4 py-1 text-gray-50 hover:bg-opacity-70 hover:shadow-inner"
		>
			Users
		</a>
		<button
			type="button"
			class="cursor-not-allowed rounded-r-md bg-green-600 px-4 py-1 text-gray-50 hover:bg-opacity-70"
		>
			Roles
		</button>
	</div>

	<a
		href="/users/roles/new"
		class="flex items-center space-x-2 rounded bg-gray-800 px-4 py-1 text-gray-50 hover:bg-opacity-70"
	>
		<Icon icon="mdi-plus" />
		<span>New Role</span>
	</a>
</div>
{#if roles}
	<div class="mx-auto max-w-3xl rounded-md bg-white p-4 shadow-md">
		<table class="w-full table-auto">
			<thead>
				<tr class="bg-gray-200 text-sm uppercase leading-normal text-gray-600">
					<th>&nbsp;</th>
					<th class="p-2 text-left">Name</th>
					<th class="p-2 text-left">Description</th>
					<th>&nbsp;</th>
				</tr>
			</thead>
			<tbody>
				{#each roles as item}
					<tr class="bg-gradient-to-b from-transparent to-slate-100">
						<td class="p-2">{item.id}</td>
						<td class="p-2">
							<span class="flex items-center space-x-5">
								<span
									><a href={`/users/roles/${item.id}`} class="text-blue-600 underline"
										>{item.name}</a
									></span
								>
							</span>
						</td>
						<td class="p-2"><span>{item.description} </span></td>
						<td class="p-2"
							><a
								class="rounded-md bg-blue-700 px-2 py-1 text-blue-50 shadow-md hover:bg-blue-500 hover:shadow-inner"
								href={`/users/roles/${item.id}/edit`}>edit</a
							></td
						>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
{/if}
