import axios from 'axios';
import { error } from '@sveltejs/kit';
// import db from '$lib/db';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }: { params: any }) {
	// const types = await db.animalType.findMany({
	// 	include: {
	// 		categories: true
	// 	}
	// });
	// const breed = await db.animalBreed.findUnique({
	// 	where: {
	// 		id: parseInt(params.id)
	// 	},
	// 	include: {
	// 		category: {
	// 			include: {
	// 				type: true
	// 			}
	// 		}
	// 	}
	// });

	const res1 = await axios.get('http://localhost:8000/api/animal_types');
	const types = await res1?.data;

	const res2 = await axios.get(`http://localhost:8000/api/animal_breeds/${params.id}`);
	const breed = await res2?.data;

	// console.log('Breed:', breed);

	if (breed && types) return { breed, types };

	throw error(404, 'Not Found!');
}
