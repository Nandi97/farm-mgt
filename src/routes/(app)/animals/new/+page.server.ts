import axios from 'axios';
// import db from '$lib/db';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	// const types = await db.animalType.findMany({
	// 	include: {
	// 		categories: {
	// 			include: {
	// 				breeds: true
	// 			}
	// 		}
	// 	}
	// });
	// const genders = await db.gender.findMany();

	const res1 = await axios.get('http://localhost:8000/api/animal_types');
	const types = await res1?.data;

	const res2 = await axios.get('http://localhost:8000/api/genders');
	const genders = await res2?.data;

	if (types && genders) {
		return { types, genders };
	}

	throw error(404, 'Not found');
}
