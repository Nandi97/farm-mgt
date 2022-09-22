<script lang="ts">
	import { pageTitle } from '$lib/stores';
	import Icon from '@iconify/svelte';

	export let data: any;

	const product = data.product;
	$: console.log('Product:', product);

	$pageTitle = `Product: ${product?.name}`;
</script>

<div class="rounded-md bg-white p-4 shadow-lg">
	<div class="grid grid-cols-12">
		<div
			class="mb-2 flex w-full items-center justify-between border-b py-2 font-thin md:col-span-12"
		>
			<div class="text-3xl">{product?.name}</div>
			<div class="flex items-center divide-x">
				<a
					href="/products"
					class="flex w-12 flex-col items-center rounded-l-md bg-blue-500 p-1 text-sm text-blue-50 hover:bg-blue-700"
					><Icon icon="mdi-arrow-left" />
					<span>back</span></a
				>
				<a
					href={`/products/${product.id}/edit`}
					class="flex w-12 flex-col  items-center bg-green-500 p-1 text-sm text-green-50 hover:bg-green-700"
					><Icon icon="mdi-pencil" />
					<span>edit</span>
				</a>
				<a
					href="#"
					class="flex w-12 flex-col items-center rounded-r-md bg-red-500 p-1 text-sm text-red-50 hover:bg-red-700"
				>
					<Icon icon="mdi-delete-outline" />
					<span>Delete</span>
				</a>
			</div>
		</div>
		<div class="md:col-span-4">
			<img src={product.imageUrl} alt="product image" />
		</div>
		<div class="md:col-span-8">
			<div class="w-full font-thin">Deatils:</div>
			<table class="w-full table-auto">
				<tr>
					<td class="flex items-center"
						><Icon icon="mdi-card-text-outline" class="mr-2 text-blue-600" />Name :</td
					>
					<td>{product.name}</td>
				</tr>
				<tr>
					<td class="flex items-center"
						><Icon icon="mdi-tape-measure" class="mr-2 text-blue-600" />Unit of measure :</td
					>
					<td>{product.uom.unit}</td>
				</tr>
			</table>
		</div>
	</div>
</div>
