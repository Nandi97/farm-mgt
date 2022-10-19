<script lang="ts">
	import UserRoleForm from "$lib/forms/UserRoleForm.svelte";
import { pageTitle } from "$lib/stores";

  export let data:any;

  const role = data.role

$: console.log('User role:', role);

  const formValues = {
		name: role.name,
		description: role.description
	};

  $pageTitle = `User Role : Edit ${role.name}`
</script>

<form
	action={`/users/roles/${role.id}`}
	method="post"
	class="grid max-w-3xl gap-4 rounded-md bg-white p-4 shadow-md sm:grid-cols-2"
>
	<h1 class="text-xl sm:col-span-3">{`Edit ${role.name}`}</h1>

<UserRoleForm {formValues}/>

<div class="flex items-center justify-center space-x-2 sm:col-span-2">
  <button
    type="submit"
    class="rounded-md border border-green-600 bg-green-600 px-2 py-1 text-white"
  >
    Update
  </button>
  <a
    href="/users/roles"
    class="rounded-md border border-gray-800 px-2 py-1 hover:bg-gray-800 hover:text-gray-50"
  >
    Cancel
  </a>
</div>
  </form>