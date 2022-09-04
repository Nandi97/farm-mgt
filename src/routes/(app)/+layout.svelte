<script>
	import Icon from '@iconify/svelte';
	const links = [
		{ name: 'Dashboard', path: '/dashboard', icon: 'mdi-home' },
		{ name: 'Animals Management', path: '/animals', icon: 'mdi-cow' }
	];
</script>

<main class="h-screen w-full">
	<nav class="grid h-10  w-full grid-cols-12">
		<div class="hidden bg-red-600 md:col-span-2 md:block">Brand</div>
		<div class="col-span-12 shadow-md md:col-span-10">Nav</div>
	</nav>
	<div class="grid h-full w-full grid-cols-12">
		<div class="h-full bg-green-600 md:col-span-2">
			<ul>
				{#each links as item}
					<li>
						<a href={item.path} class="flex items-center space-x-2">
							<Icon icon={item.icon} />
							{item.name}
						</a>
					</li>
				{/each}
			</ul>
		</div>
		<div class="col-span-12 w-full bg-slate-300 p-4 md:col-span-10">
			<slot />
		</div>
	</div>
</main>
