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

<!--Container -->
<div class="bg-grey-400 mx-auto">
	<!--Screen-->
	<div class="flex min-h-screen flex-col">
		<!--Header-->
		<header class="flex h-12 w-full bg-green-50 shadow-lg shadow-slate-600 ">
			<div
				class="hidden w-1/2 items-center justify-center border-b border-r border-gray-300 border-opacity-80 bg-green-600 bg-gradient-to-b from-green-600 to-green-500 pl-4 text-2xl  text-green-50 shadow-md md:col-span-2 md:block md:w-1/6  lg:block lg:w-1/6"
			>
				<span class="font-light">Grey's</span>
				<span class="-ml-2 font-bold">Farm</span>
			</div>

			<div class="flex w-full flex-1 items-center justify-between overflow-hidden bg-gray-50 p-3">
				<div class="text-2xl font-extralight">
					{$pageTitle}
				</div>
				<div class="flex items-center text-2xl font-light">
					<Icon icon="mdi-account-circle-outline" class="mr-2" />USER
				</div>
			</div>
		</header>
		<!--/Header-->
		<div class="flex flex-1">
			<!--Sidebar-->
			<aside
				class="border-side-nav hidden w-1/2 border-r bg-green-600 bg-gradient-to-b from-green-500 to-orange-900 text-green-50 md:block md:w-1/6 lg:block lg:w-1/6"
			>
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
			</aside>
			<!--/Sidebar-->
			<!--Main-->
			<main class="flex-1 overflow-hidden bg-slate-300 p-3">
				<div class="flex flex-col">
					<slot />
				</div>
			</main>
		</div>
	</div>
</div>
