import { error } from '@sveltejs/kit';
// import db from '$lib/db';
import axios from 'axios';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }: { params: any }) {
	// const types = await db.animalType.findMany();
	// const category = await db.animalCategory.findUnique({
	// 	where: {
	// 		id: parseInt(params.id)
	// 	},
	// 	include: {
	// 		type: true
	// 	}
	// });

	const res1 = await axios.get('http://127.0.0.1:8000/api/animal_types');
	const types = await res1?.data;
	const res2 = await axios.get(`http://127.0.0.1:8000/api/animal_categories/${params.id}`);
	const category = res2?.data;

	// console.log('Category:', category);

	if (category && types) return { category, types };

	throw error(404, 'Not Found!');
}
