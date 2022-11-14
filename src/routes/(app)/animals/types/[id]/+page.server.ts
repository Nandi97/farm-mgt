import axios from 'axios';
import { error, redirect, invalid } from '@sveltejs/kit';
// import db from '$lib/db';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }: { params: any }) {
	const res = await axios.get(`http://127.0.0.1:8000/api/animal_types/${params.id}`);
	const type = await res?.data;

	// console.log('Type:', type);

	if (type) return { type };

	throw error(404, 'Animal Type Not Found!');
}

export const actions = {
	default: async ({ request, params }: { request: any; params: any }) => {
		const values = await request.formData();

		const name = /** @type {string} */ values.get('name');
		const icon = /** @type {string} */ values.get('icon');

		const payload = {
			name,
			icon
		};
		const res = await axios.put(`http://127.0.0.1:8000/api/animal_types/${params.id}`, payload);
		const type = await res?.data;

		if (type) {
			throw redirect(303, '/animals/types');
		}

		throw invalid(500, { message: 'Could not update Animal Type!' });
	}
};
