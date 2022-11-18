<script lang="ts">
	import { format } from 'date-fns';
	import { formatDate,pageTitle } from '$lib/stores';
	import Icon from '@iconify/svelte';

	export let data: any;

	const user = data.user;

	// $: console.log('User:', user);

	$pageTitle = `User: ${user?.name}`;
</script>

<div class="flex w-full justify-end space-x-2 pb-4 text-sm">
	<div class="flex items-center divide-x text-sm">
		<a
			href="/users"
			class="flex items-center rounded-l-md bg-blue-500 p-1 px-2 text-blue-50 hover:bg-blue-700"
			><Icon icon="mdi-arrow-left" />
			<span>Back</span></a
		>
		<a
			href={`/users/${user.id}/edit`}
			class="flex items-center bg-green-500 p-1 px-2 text-green-50 hover:bg-green-700"
			><Icon icon="mdi-pencil" />
			<span>Edit</span>
		</a>
		<a
			href="#"
			class="flex items-center rounded-r-md bg-red-500 p-1 px-2 text-red-50 hover:bg-red-700"
		>
			<Icon icon="mdi-delete-outline" />
			<span>Delete</span>
		</a>
	</div>
</div>

<div class="rounded-md bg-white p-4 shadow-lg">
	<div class="grid grid-cols-6 md:grid-cols-12">
		<div class="w-full border-b font-thin md:col-span-12 col-span-6">
			<div class="text-3xl">{user?.name}</div>
		</div>
		<div class="p-2 md:col-span-4 col-span-6">
			<img src={user.avatar_url} alt="animal image" class="mt-2" />
		</div>
		<div class="md:col-span-8 col-span-6">
			<div class="w-full border-b font-thin">Deatils</div>
			<table class="w-full table-auto">
				<tr>
					<td class="flex items-center"
						><Icon icon="mdi-card-account-details-outline" class="mr-2 text-blue-600" />User Name :</td
					>
					<td>{user.name}</td>
				</tr>
				<tr>
					<td class="flex items-center"
						><Icon icon="mdi-card-account-details-outline" class="mr-2 text-blue-600" />Role :</td
					>
					<td>{user.role.name}</td>
				</tr>
				<tr>
					<td class="flex items-center"><Icon icon="mdi-at" class="mr-2 text-blue-600" />Email :</td>
					<td
						><a
							href={`mailto:${user.email}`}
							class="text-green-600 hover:text-green-800 hover:underline">{user.email}</a
						></td
					>
				</tr>
				<tr>
					<td class="flex items-center"
						><Icon icon="mdi-phone-outline" class="mr-2 text-blue-600" />Phone No :</td
					>
					<td>{user.phone_no}</td>
				</tr>
				<tr>
					<td class="flex items-center"
						><Icon icon="mdi-calendar-range" class="mr-2 text-blue-600" />Join Date :</td
					>
					<td>{formatDate(user.joined_at)}</td>
				</tr>
			</table>
		</div>
	</div>
</div>
