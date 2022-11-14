import axios from 'axios';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }: { params: any }) {
	const res1 = await axios.get('http://127.0.0.1:8000/api/roles');
	const roles = await res1?.data;

	const res2 = await axios.get(`http://127.0.0.1:8000/api/users/${params.id}`);
	const user = await res2?.data;

	// console.log('User:', user);

	if (user && roles) return { user, roles };

	throw error(404, 'Not Found!');
}
