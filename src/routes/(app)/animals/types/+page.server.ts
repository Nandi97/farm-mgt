import axios from 'axios';
// import db from '$lib/db';
import { invalid, redirect, error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	// const types = await db.animalType.findMany();
	const res = await axios.get('http://localhost:8000/api/animal_types');
	const types = await res?.data;
	// console.log('Types:', types);

	if (types) return { types };

	throw error(404, 'Not found');
}

export const actions = {
	default: async ({ request }: { request: any }) => {
		const values = await request.formData();

		const name = /** @type {string} */ values.get('name');
		const icon = /** @type {string} */ values.get('icon');

		const type = await axios.post('http://localhost:8000/api/animal_types', { name, icon });

		if (type) {
			throw redirect(303, '/animals/types');
		}

		throw invalid(500, { message: 'Could not create a New Type!' });
	}
};
