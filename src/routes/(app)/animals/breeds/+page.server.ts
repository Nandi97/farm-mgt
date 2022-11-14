import axios from 'axios';
// import db from '$lib/db';
import { invalid, redirect, error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	// const breeds = await db.animalBreed.findMany({
	// 	include: {
	// 		category: true
	// 	}
	// });

	const res = await axios.get('http://127.0.0.1:8000/api/animal_breeds');
	const breeds = await res?.data;

	if (breeds) return { breeds };

	throw error(404, 'Not found');
}

/** @type {import('./$types').Action} */
export const actions = {
	default: async ({ request }: { request: any }) => {
		const values = await request.formData();

		const name = /** @type {string} */ values.get('name');
		const description = /** @type {string} */ values.get('description');
		const animal_category_id = /** @type {number} */ Number(values.get('categoryId'));

		const breed = await axios.post('http://127.0.0.1:8000/api/animal_breeds', {
			name,
			description,
			animal_category_id
		});

		if (breed) {
			throw redirect(303, '/animals/breeds');
		}
		throw invalid(500, { message: 'Could not create a New Category!' });
	}
};
