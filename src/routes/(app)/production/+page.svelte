<script lang="ts">
	import { pageTitle } from '$lib/stores';
	import Icon from '@iconify/svelte';

	$pageTitle = 'Production';
</script>

<div class="flex w-full justify-end space-x-2 pb-4 text-sm">
	<a
		href="/production/new"
		class="flex items-center space-x-2 rounded bg-gray-800 px-4 py-1 text-gray-50 hover:bg-opacity-70"
	>
		<Icon icon="mdi-plus" />
		<span>Record Production</span>
	</a>
</div>
