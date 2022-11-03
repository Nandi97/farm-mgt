<script lang="ts">
	import { format } from 'date-fns';
	import { pageTitle } from '$lib/stores';
	import Icon from '@iconify/svelte';

	export let data: any;

	const animal = data.animal;

	// $: console.log('Animal:', animal);

	$pageTitle = `Animals Management: ${animal?.tag}`;
</script>

<div class="flex w-full justify-end space-x-2 pb-4 text-sm">
	<div class="flex items-center divide-x text-sm">
		<a
			href="/animals"
			class="flex w-12 flex-col items-center rounded-l-md bg-blue-500 p-1 text-blue-50 hover:bg-blue-700"
			><Icon icon="mdi-arrow-left" />
			<span>back</span></a
		>
		<a
			href={`/animals/${animal.id}/edit`}
			class="flex w-12  flex-col items-center bg-green-500 p-1 text-green-50 hover:bg-green-700"
			><Icon icon="mdi-pencil" />
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
	<div class="grid grid-cols-12">
		<div class="w-full border-b font-thin md:col-span-12">
			<div class="text-3xl">{animal?.tag}</div>
		</div>
		<div class="p-2 md:col-span-4">
			<img src={animal.image_url} alt="animal image" class="mt-2" />
		</div>
		<div class="md:col-span-8">
			<div class="w-full border-b font-thin">Deatils</div>
			<table class="w-full table-auto">
				<tr>
					<td class="flex items-center"><Icon icon="mdi-tag" class="mr-2 text-blue-600" />Tag :</td>
					<td>{animal.tag}</td>
				</tr>
				<tr>
					<td class="flex items-center"><Icon icon="mdi-dna" class="mr-2 text-blue-600" />Type :</td
					>
					<td>{animal.animal_breed.animal_category.animal_type.name}</td>
				</tr>
				<tr>
					<td class="flex items-center"
						><Icon icon="mdi-dna" class="mr-2 text-blue-600" />Breed :</td
					>
					<td>{animal.animal_breed.name}</td>
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
					<td>{animal.born_at}</td>
				</tr>
				<tr>
					<td class="flex items-center"
						><Icon icon="mdi-calendar" class="mr-2 text-blue-600" />Purchase Date :</td
					>
					<td>{animal.purchased_at}</td>
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
	<table class="w-full table-auto">
		<thead>
			<tr class="bg-gray-200 text-sm uppercase leading-normal text-gray-600">
				<th>&nbsp;</th>
				<th class="p-2 text-left">Collection Date</th>
				<th class="p-2 text-left">Production</th>
				<th class="p-2 text-left">Action By</th>
				<th>&nbsp;</th>
			</tr>
		</thead>
		<tbody>
			{#each animal as item}
				<tr class="bg-gradient-to-b from-transparent to-slate-100">
					<td>{item.id}</td>
					<td class="p-2">{item.produced_at}</td>
					<td class="p-2"
						><a href={`/animals/${item.animal.id}`} class="text-blue-600 underline">
							{item.animal.tag}</a
						>
						produced {item.quantity}
						{item.product.uom.unit}{#if item.quantity !== 1}s{/if}
						of
						{item.product.name}
					</td>
					<td class="p-2">{item.user.name}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
