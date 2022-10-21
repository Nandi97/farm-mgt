<script lang="ts">
	import UserForm from '$lib/forms/UserForm.svelte';
	import { pageTitle } from '$lib/stores';

	export let data: any;

	const user = data.user;

	$pageTitle = `Edit User: ${user.name}`;

	const formValues = {
		name: user.name,
		avatarUrl: user.avatar_url,
		email: user.email,
		phoneNo: user.phone_no,
		joinedAt: new Date(user.joined_at).toISOString().substring(0, 10)
	};

	$: console.log('User:', formValues);
</script>

<form
	action={`/users/${user.id}`}
	method="post"
	enctype="multipart/form-data"
	class="mx-auto grid max-w-4xl gap-4 rounded bg-white p-4 shadow-lg sm:grid-cols-3"
>
	<h1 class="text-xl sm:col-span-3">Edit {user.name}</h1>

	<input type="hidden" name="id" bind:value={user.id} />

	<UserForm {formValues} />

	<div class="flex items-center justify-center space-x-2 sm:col-span-3">
		<button
			type="submit"
			class="rounded-md border border-green-600 bg-green-600 px-2 py-1 text-white"
		>
			Update
		</button>
		<a
			href="/users"
			class="rounded-md border border-gray-800 px-2 py-1 hover:bg-gray-800 hover:text-gray-50"
		>
			Cancel
		</a>
	</div>
</form>
