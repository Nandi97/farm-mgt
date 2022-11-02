import { error } from '@sveltejs/kit';
import axios from 'axios';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }: { params: any }) {
	const res = await axios.get(
		`http://localhost:8000/api/chemical_administration_methods/${params.id}`
	);
	const method = await res?.data;

	if (method) return { method };

	throw error(404, 'Not Found!');
}
