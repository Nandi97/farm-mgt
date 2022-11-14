import axios from 'axios';
// import db from '$lib/db';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	// const types = await db.animalType.findMany();
	const res = await axios.get('http://127.0.0.1:8000/api/animal_types');
	const types = await res?.data;

	if (types) {
		return { types };
	}

	throw error(404, 'Not found');
}
