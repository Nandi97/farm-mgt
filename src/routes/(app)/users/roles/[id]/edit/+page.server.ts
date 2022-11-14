import { error } from '@sveltejs/kit';
import axios from 'axios';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }: { params: any }) {
	const res = await axios.get(`http://127.0.0.1:8000/api/roles/${params.id}`);
	const role = await res?.data;

	if (role) return { role };

	throw error(404, 'Not Found!');
}
