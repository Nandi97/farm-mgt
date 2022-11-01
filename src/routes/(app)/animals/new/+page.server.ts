import axios from 'axios';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const res1 = await axios.get('http://localhost:8000/api/animal_types');
	const types = await res1?.data;

	console.log('Types:', types);

	const res2 = await axios.get('http://localhost:8000/api/genders');
	const genders = await res2?.data;

	if (types && genders) {
		return { types, genders };
	}

	throw error(404, 'Not found');
}
