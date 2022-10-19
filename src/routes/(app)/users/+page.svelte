<script lang="ts">
	import { pageTitle } from '$lib/stores';
	import Icon from '@iconify/svelte';

	export let data: any;

	$pageTitle = 'Staff';

	$: users = data.users;

	$: console.log('Users:', users);
</script>

<div class="flex w-full justify-end space-x-2 pb-4 text-sm">
	<div class="flex items-center divide-x">
		<button
			type="button"
			class="cursor-not-allowed rounded-l-md bg-green-600 px-4 py-1 text-gray-50 hover:bg-opacity-70 hover:shadow-inner"
		>
			Users
		</button>
		<a
			href="/users/roles"
			class="rounded-r-md bg-gray-800 px-4 py-1 text-gray-50 hover:bg-opacity-70"
		>
			Roles
		</a>
	</div>

	<a
		href="/users/new"
		class="flex items-center space-x-2 rounded bg-gray-800 px-4 py-1 text-gray-50 hover:bg-opacity-70"
	>
		<Icon icon="mdi-plus" />
		<span>New User</span>
	</a>
</div>
<div class="grid grid-cols-12 rounded-md bg-white p-4 shadow-lg">
	{#each users as item}
		<div class="col-span-12 m-4 rounded-lg border border-gray-200 bg-white shadow-md md:col-span-3">
			<a href={`/users/${item.id}`}>
				<img class="rounded-t-lg" src={item.avatar_url} alt="" />
			</a>
			<div class="flex flex-col p-5">
				<a href={`/users/${item.id}`}>
					<h5 class="mb-2 text-2xl font-bold tracking-tight text-green-700 hover:text-green-900">
						{item.name}
					</h5>
				</a>
				<a href={`mailto:${item.email}`} class="flex items-center">
					<Icon icon="mdi-email-outline" class="text-lg text-slate-900" /> :
					<span class="text-blue-600 underline">{item.email}</span></a
				>
				<a href={`tel:${item.phone_no}`} class="flex items-center"
					><Icon icon="mdi-phone-outline" class="text-lg text-slate-900" /> :<span>
						{item.phone_no}</span
					></a
				>
			</div>
		</div>
	{/each}
</div>
