import db from '$lib/db';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const uoms = await db.unitOfMeasurement.findMany();

	if (uoms) {
		return { uoms };
	}
	throw error(404, 'Not found');
}
