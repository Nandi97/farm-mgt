<script>
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { authenticated } from '$lib/stores';

	import { onMount } from 'svelte';

	onMount(() => {
		if (browser) {
			goto('/login');
		}
	});

	onMount(async () => {
		try {
			const response = await fetch('http://localhost:8000/api/user', {
				headers: { 'Content-Type': 'application/json' },
				credentials: 'include'
			});

			const content = await response.json();

			authenticated.set(true);

			goto('/dashboard');
		} catch (e) {
			authenticated.set(false);
		}
	});
</script>
