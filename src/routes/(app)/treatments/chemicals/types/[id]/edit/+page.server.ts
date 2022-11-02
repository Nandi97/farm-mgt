import { error } from '@sveltejs/kit';
import axios from 'axios';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }: { params: any }) {
	const res = await axios.get(`http://localhost:8000/api/chemical_types/${params.id}`);
	const type = await res?.data;

	if (type) return { type };

	throw error(404, 'Not Found!');
}
