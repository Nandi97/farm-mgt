<script lang="ts">
	import { pageTitle } from "$lib/stores";
  import Icon from '@iconify/svelte';

  export let data: any;

  const role = data.role;

  $pageTitle = `User Role: ${role?.name}`
</script>

<div class="flex w-full justify-end space-x-2 pb-4 text-sm">
	<div class="flex items-center divide-x">
		<a
			href="/users/roles"
			class="flex items-center px-2 rounded-l-md bg-blue-500 p-1 text-blue-50 hover:bg-blue-700"
		>
			<Icon icon="mdi-arrow-left" class="text-xl"/>
			<span>back</span>
		</a>
		<a
			href={`/users/roles/${role.id}/edit`}
			class="flex items-center px-2 bg-green-500 p-1 text-green-50 hover:bg-green-700"
		>
			<Icon icon="mdi-pencil" class="text-xl" />
			<span>edit</span>
		</a>
		<a
			href="#"
			class="flex  items-center px-2 rounded-r-md bg-red-500 p-1 text-red-50 hover:bg-red-700"
		>
			<Icon icon="mdi-delete-outline" class="text-xl" />
			<span>Delete</span>
		</a>
	</div>
</div>

<div class="rounded-md bg-white p-4 shadow-lg">
	<table class="w-full table-auto">
    <thead>
			<tr class="bg-gradient-to-b from-slate-200 to-green-200">
				<th>&nbsp;</th>
				<th class="p-2 text-left">Name</th>
				<th class="p-2 text-left">Description</th>
			</tr>
		</thead>
    <tbody class="overflow-y-scroll">
      <tr class="bg-gradient-to-b from-transparent to-slate-100">
        <td>&nbsp;</td>
        <td class="p-2 text-start">{role.name}</td>
        <td class="p-2 text-justify">{role.description}</td>
      </tr>
    </tbody>
  </table>
</div>