import axios from 'axios';
import { invalid, redirect, error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const res = await axios.get('http://127.0.0.1:8000/api/chemical_types');
	const types = await res?.data;
	// console.log('Types:', types);

	if (types) return { types };

	throw error(404, 'Not found');
}

export const actions = {
	default: async ({ request }: { request: any }) => {
		const values = await request.formData();

		const name = /** @type {string} */ values.get('name');
		const description = /** @type {string} */ values.get('description');

		const type = await axios.post('http://127.0.0.1:8000/api/chemical_types', {
			name,
			description
		});

		if (type) {
			throw redirect(303, '/treatments/chemicals/types');
		}

		throw invalid(500, { message: 'Could not create a New Chemical Type!' });
	}
};
