import axios from 'axios';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const res1 = await axios.get('http://localhost:8000/api/chemicals');
	const chemicals = await res1?.data;

	const res2 = await axios.get('http://localhost:8000/api/uoms');
	const uoms = await res2?.data;

	if (chemicals && uoms) {
		return { chemicals, uoms };
	}

	throw error(404, 'Not found');
}
