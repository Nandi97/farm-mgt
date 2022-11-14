import axios from 'axios';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const res = await axios.get('http://127.0.0.1:8000/api/roles');
	const roles = await res?.data;

	if (roles) {
		return { roles };
	}

	throw error(404, 'Not found');
}
