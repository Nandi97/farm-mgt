import axios from 'axios';
import { invalid, redirect, error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const res = await axios.get('http://127.0.0.1:8000/api/chemical_administration_methods');
	const methods = await res?.data;
	// console.log('Methods:', methods);

	if (methods) return { methods };

	throw error(404, 'Not found');
}

export const actions = {
	default: async ({ request }: { request: any }) => {
		const values = await request.formData();

		const name = /** @type {string} */ values.get('name');

		const method = await axios.post('http://127.0.0.1:8000/api/chemical_administration_methods', {
			name
		});

		if (method) {
			throw redirect(303, '/treatments/chemicals/methods');
		}

		throw invalid(500, { message: 'Could not create a New Administration Method Type!' });
	}
};
