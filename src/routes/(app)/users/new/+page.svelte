<script lang="ts">
	import UserForm from '$lib/forms/UserForm.svelte';
	import { pageTitle } from '$lib/stores';

	$pageTitle = 'New User';

	const formValues = {
		name: '',
		avatarUrl: '',
		email: '',
		phoneNo: '',
		joinedAt: ''
	};
</script>

<form
	action="/users"
	method="post"
	enctype="multipart/form-data"
	class="mx-auto grid max-w-4xl gap-4 rounded bg-white p-4 shadow-lg sm:grid-cols-3"
>
	<h1 class="text-xl sm:col-span-3">New User</h1>

	<UserForm {formValues} />

	<div class="flex items-center justify-center space-x-2 sm:col-span-3">
		<button
			type="submit"
			class="rounded-md border border-green-600 bg-green-600 px-2 py-1 text-white"
		>
			Create
		</button>
		<a
			href="/users"
			class="rounded-md border border-gray-800 px-2 py-1 hover:bg-gray-800 hover:text-gray-50"
		>
			Cancel
		</a>
	</div>
</form>
