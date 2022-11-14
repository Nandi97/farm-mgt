import axios from 'axios';
import { invalid, redirect, error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const res = await axios.get('http://127.0.0.1:8000/api/animal_categories');
	const categories = await res?.data;

	// console.log('Categories:', categories);

	if (categories) return { categories };

	throw error(404, 'Not found');
}

/** @type {import('./$types').Action} */
export const actions = {
	default: async ({ request }: { request: any }) => {
		const values = await request.formData();

		const name = /** @type {string} */ values.get('name');
		const animal_type_id = /** @type {number} */ Number(values.get('typeId'));

		const category = await axios.post('http://127.0.0.1:8000/api/animal_categories', {
			name,
			animal_type_id
		});

		if (category) {
			throw redirect(303, '/animals/categories');
		}

		throw invalid(500, { message: 'Could not create a New Category!' });
	}
};
