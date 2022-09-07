<script lang="ts">
	import { pageTitle } from '$lib/stores';
	import Icon from '@iconify/svelte';

	export let data: any;

	const animal = data.animal;
	$: console.log('Animal:', animal);

	$pageTitle = `Animals Management: ${animal?.tag}`;
</script>

<div class="flex w-full justify-end space-x-2 pb-4 text-sm">
	<div class="flex items-center divide-x">
		<a href="/animals" class="rounded-l-sm bg-blue-500 p-1 text-white hover:bg-blue-700"
			><Icon icon="mdi-arrow-left" /></a
		>
		<a href="/animals/[id]/edit" class="bg-green-500 p-1 text-white hover:bg-green-700"
			><Icon icon="mdi-pencil" /></a
		>
		<a href="#" class="bg-red-500 p-1 text-white hover:bg-red-700"
			><Icon icon="mdi-delete-outline" /></a
		>
	</div>
</div>

<div class="rounded-md bg-white p-4 shadow-lg">
	<div class="grid grid-cols-12">
		<div class="w-full">{animal?.tag}</div>
		<div class="md:col-span-4"><img src="" alt="animal image" /></div>
		<div class="md:col-span-8">
			<table class="w-full table-auto">
				<tr>
					<td class="flex items-center"><Icon icon="mdi-tag" class="mr-2 text-blue-600" />Tag :</td>
					<td>{animal.tag}</td>
				</tr>
				<tr>
					<td class="flex items-center"
						><Icon icon="mdi-dna" class="mr-2 text-blue-600" />Breed :</td
					>
					<td>{animal.breed.name}</td>
				</tr>
				<tr>
					<td class="flex items-center"
						><Icon icon="mdi-gender-female" class="mr-2 text-blue-600" />Gender :</td
					>
					<td>{animal.gender.name}</td>
				</tr>
				<tr>
					<td class="flex items-center"
						><Icon icon="mdi-calendar" class="mr-2 text-blue-600" />Birth Date :</td
					>
					<td>{animal.bornAt}</td>
				</tr>
				<tr>
					<td class="flex items-center"
						><Icon icon="mdi-calendar" class="mr-2 text-blue-600" />Purchase Date :</td
					>
					<td>{animal.purchasedAt}</td>
				</tr>
				<tr>
					<td class="flex items-center"
						><Icon icon="mdi-gender-female" class="mr-2 text-blue-600" />Status :</td
					>
					<td>{animal.status}</td>
				</tr>
			</table>
		</div>
	</div>
</div>
