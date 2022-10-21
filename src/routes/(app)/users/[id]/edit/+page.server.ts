import axios from 'axios';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }: { params: any }) {
	const res = await axios.get(`http://localhost:8000/api/users/${params.id}`);
	const user = await res?.data;

	// console.log('User:', user);

	if (user) return { user };

	throw error(404, 'Not Found!');
}
