<script>
	import Icon from '@iconify/svelte';

	const animals = [
		{
			tag: 'Cow001',
			imageUrl: '',
			breed: 'Jersey',
			gender: 'Female',
			bornAt: 'Jan 7, 2010',
			purchasedAt: 'Jan 1, 1900',
			status: true
		},
		{
			tag: 'Cow002',
			imageUrl: '',
			breed: 'Jersey',
			gender: 'Female',
			bornAt: 'Sep 13, 2016',
			purchasedAt: 'Jan 1, 1900',
			status: true
		}
	];
</script>

<div class="flex justify-end w-full">
	<a
		href="/animals/new"
		class="flex items-center space-x-2 bg-green-600 text-green-50 px-3 py-1 rounded"
	>
		<Icon icon="mdi-plus" />
		<span>New Animal</span>
	</a>
</div>

<table class="table-auto w-full">
	<thead>
		<tr>
			<th class="p-2">&nbsp;</th>
			<th class="p-2">Tag</th>
			<th class="p-2">Breed</th>
			<th class="p-2">Gender</th>
			<th class="p-2">Born On</th>
			<th class="p-2">Purchased On</th>
			<th class="p-2">Status</th>
			<th class="p-2">&nbsp;</th>
		</tr>
	</thead>
	<tbody>
		{#each animals as item}
			<tr>
				<td class="p-2">&nbsp;</td>
				<td class="p-2">{item.tag}</td>
				<td class="p-2">{item.breed}</td>
				<td class="p-2">{item.gender}</td>
				<td class="p-2">{item.bornAt}</td>
				<td class="p-2">{item.purchasedAt}</td>
				<td class="p-2">{item.status ? 'Active' : 'Inactive'}</td>
				<td class="p-2">&nbsp;</td>
			</tr>
		{/each}
	</tbody>
</table>
