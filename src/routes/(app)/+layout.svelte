<script lang="ts">
	import Icon from '@iconify/svelte';
	import { pageTitle } from '$lib/stores';

	export let data: any;

	// $: console.log('Data:', data);

	$: links = data.menus;
</script>

<svelte:head>
	<meta name="description" content="A modern farm management web solution" />

	<title>{$pageTitle ? `${$pageTitle} - ` : ''}Farm Management</title>
</svelte:head>

<main class="h-screen w-full">
	<nav class="grid h-10  w-full grid-cols-12">
		<div
			class="hidden w-full items-center justify-center border-b border-slate-500 border-opacity-60 bg-green-600 text-2xl  text-gray-50 shadow-md md:col-span-2 md:block"
		>
			<span>Grey's</span>
			<span class="-ml-2 font-extralight">Farm</span>
		</div>
		<div class="col-span-12  pl-4 text-2xl font-light md:col-span-10">
			{$pageTitle}
		</div>
	</nav>
	<div class="grid h-full w-full grid-cols-12">
		<div class="h-full w-full bg-green-600 text-green-50 md:col-span-2">
			<ul class="space-y-2 p-2">
				{#each links as item}
					<li>
						<a
							href={item.path}
							class="flex items-center space-x-2 rounded-md p-2 hover:bg-green-900 hover:shadow-md"
						>
							<Icon icon={item.icon} class="text-xl" />
							<span>{item.name}</span>
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
