import axios from 'axios';
import { error, redirect, invalid } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	// const types = await db.animalType.findMany();
	const res = await axios.get('http://127.0.0.1:8000/api/roles');
	const roles = await res?.data;
	// console.log('Types:', types);

	if (roles) return { roles };

	throw error(404, 'Not found');
}

export const actions = {
	default: async ({ request }: { request: any }) => {
		const values = await request.formData();

		const name = /** @type {string} */ values.get('name');
		const description = /** @type {string} */ values.get('description');

		const role = await axios.post('http://127.0.0.1:8000/api/roles', { name, description });

		if (role) {
			throw redirect(303, '/users/roles');
		}
		throw invalid(500, { message: 'Could not crete a New Role!' });
	}
};
