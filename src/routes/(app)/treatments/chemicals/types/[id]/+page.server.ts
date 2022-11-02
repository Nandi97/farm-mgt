import axios from 'axios';
import { error, redirect, invalid } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }: { params: any }) {
	const res = await axios.get(`http://localhost:8000/api/chemical_types/${params.id}`);
	const type = await res?.data;

	// console.log('Type:', type);

	if (type) return { type };

	throw error(404, 'Chemical Type Not Found!');
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
		const res = await axios.put(`http://localhost:8000/api/chemical_types/${params.id}`, payload);
		const type = await res?.data;

		if (type) {
			throw redirect(303, '/treatments/chemicals/types');
		}

		throw invalid(500, { message: 'Could not update Chemical Type!' });
	}
};
