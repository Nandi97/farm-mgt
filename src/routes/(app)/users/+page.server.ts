import axios from 'axios';
import { error } from '@sveltejs/kit';

/**@type {import('./$types').PageServerLoad} */
export async function load() {
	const res = await axios.get('http://localhost:8000/api/users');
	const users = await res.data;

	// console.log('Users:', users);

	if (users) return { users };

	throw error(404, 'Not found');
}
