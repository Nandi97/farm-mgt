import axios from 'axios';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	// const types = await db.animalType.findMany();
	const res = await axios.get('http://localhost:8000/api/roles');
	const roles = await res?.data;
	// console.log('Types:', types);

	if (roles) return { roles };

	throw error(404, 'Not found');
}
