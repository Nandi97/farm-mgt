import axios from 'axios';
import { error } from '@sveltejs/kit';
// import db from '$lib/db';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }: { params: any }) {
	// const genders = await db.gender.findMany();
	// const types = await db.animalType.findMany({
	// 	include: { categories: { include: { breeds: true } } }
	// });
	// const animal = await db.animal.findUnique({
	// 	where: {
	// 		id: parseInt(params.id)
	// 	},
	// 	include: {
	// 		gender: true,
	// 		breed: {
	// 			include: {
	// 				category: {
	// 					include: {
	// 						type: true
	// 					}
	// 				}
	// 			}
	// 		}
	// 	}
	// });
	const res1 = await axios.get('http://localhost:8000/api/genders');
	const genders = await res1?.data;

	const res2 = await axios.get('http://localhost:8000/api/animal_types');
	const types = await res2?.data;

	const res3 = await axios.get(`http://localhost:8000/api/animals/${params.id}`);
	const animal = await res3?.data;

	console.log('Animal:', animal);

	if (animal && genders && types) return { animal, genders, types };

	throw error(404, 'Not Found!');
}
