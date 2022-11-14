import axios from 'axios';
import { error, redirect, invalid } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }: { params: any }) {
	const res = await axios.get(
		`http://127.0.0.1:8000/api/chemical_administration_methods/${params.id}`
	);
	const method = await res?.data;

	// console.log('Method:', method);

	if (method) return { method };

	throw error(404, 'Chemical Administration Method Not Found!');
}

export const actions = {
	default: async ({ request, params }: { request: any; params: any }) => {
		const values = await request.formData();

		const name = /** @type {string} */ values.get('name');

		const payload = {
			name
		};
		const res = await axios.put(
			`http://127.0.0.1:8000/api/chemical_administration_methods/${params.id}`,
			payload
		);
		const type = await res?.data;

		if (type) {
			throw redirect(303, '/treatments/chemicals/methods');
		}

		throw invalid(500, { message: 'Could not update Chemical Type!' });
	}
};
