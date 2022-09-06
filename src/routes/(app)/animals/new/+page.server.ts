import db from '$lib/db';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const types = await db.animalType.findMany({
		include: {
			categories: {
				include: {
					breeds: true
				}
			}
		}
	});
	const genders = await db.gender.findMany();

	if (types && genders) {
		return { types, genders };
	}

	throw error(404, 'Not found');
}
