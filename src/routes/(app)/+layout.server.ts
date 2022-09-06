import db from '$lib/db';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const menus = await db.menu.findMany();

	if (menus) {
		return { menus };
	}

	throw error(404, 'Not found');
}
