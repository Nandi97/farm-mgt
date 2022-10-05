import db from '$lib/db';
import { error } from '@sveltejs/kit';

/**@type {import('./$types').PageServerLoad} */
export async function load() {
	const users = await db.user.findMany({
		include: {
			role: true
		}
	});

	if (users) return { users };

	throw error(404, 'Not found');
}
