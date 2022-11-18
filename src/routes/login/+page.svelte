<script>
	import { goto } from '$app/navigation';

	let email = '',
		password = '';

	const submit = async () => {
		await fetch('http://localhost:8000/api/login', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			credentials: 'include',
			body: JSON.stringify({
				email,
				password
			})
		});

		await goto('/users');
	};
</script>

<div class="bg-grey-400 mx-auto">
	<!--Screen-->
	<div class="flex min-h-screen flex-col">
		<!--Header-->
		<header class="flex h-12 w-full bg-green-50 shadow-lg shadow-slate-600 ">
			<div
				class="w-1/2 items-center justify-center border-gray-300 border-opacity-80 bg-green-600 bg-gradient-to-b from-green-600 to-green-500 pl-4 text-2xl  text-green-50 shadow-md md:col-span-2  md:w-1/6  lg:block lg:w-1/6"
			>
				<span class="font-light">Grey's</span>
				<span class="font-bold">Farm</span>
			</div>

			<div class="flex w-full flex-1 items-center justify-between overflow-hidden bg-green-600 p-3">
				<div class="text-2xl font-extralight" />
			</div>
		</header>
		<!--Main-->
		<main class="flex flex-1 items-center justify-center overflow-hidden bg-slate-300 p-3">
			<div class="max-w-7xl rounded-lg bg-white p-4 shadow dark:border sm:max-w-md md:mt-0 xl:p-0">
				<div class="space-y-4 p-6 sm:p-8 md:space-y-6">
					<h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900  md:text-2xl">
						Sign in to your account
					</h1>
					<form on:submit|preventDefault={submit} class="space-y-4 md:space-y-6">
						<div>
							<label for="email" class="mb-2 block text-sm font-medium text-gray-900 "
								>Your email</label
							>
							<input
								type="email"
								name="email"
								id="email"
								class="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900"
								placeholder="name@company.com"
								required
								bind:value={email}
							/>
						</div>
						<div>
							<label
								for="password"
								class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Password</label
							>
							<input
								type="password"
								name="password"
								id="password"
								placeholder="••••••••"
								class="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900"
								required
								bind:value={password}
							/>
						</div>

						<div class="flex w-full items-center">
							<button
								type="submit"
								class="rounded-md border border-green-600 bg-green-600 px-2 py-1 text-white"
							>
								Sign In
							</button>
						</div>
					</form>
				</div>
			</div>
		</main>
	</div>
</div>
