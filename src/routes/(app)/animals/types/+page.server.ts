import db from '$lib/db';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const types = await db.animalType.findMany();

	if (types) {
		return { types };
	}

	throw error(404, 'Not found');
}
