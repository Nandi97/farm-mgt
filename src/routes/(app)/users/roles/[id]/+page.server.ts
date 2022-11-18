import axios from 'axios';
import { error, redirect, invalid } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }: { params: any }) {
	const res = await axios.get(`http://127.0.0.1:8000/api/roles/${params.id}`);
	const role = await res?.data;

	console.log('Role:', role);

	if (role) return { role };

	throw error(404, 'User Role Not Found!');
}

export const actions = {
	default: async ({ request, params }: { request: any; params: any }) => {
		const values = await request.formData();

		const name = /** @type {string} */ values.get('name');
		const description = /** @type {string} */ values.get('description');

		const payload = {
			name,
			description
		};

		const res = await axios.put(`http://127.0.0.1:8000/api/roles/${params.id}`, payload);
		const role = await res?.data;

		if (role) {
			throw redirect(303, '/users/roles');
		}

		throw invalid(500, { message: 'Could not update User Role!' });
	}
};
