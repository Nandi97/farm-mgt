import { error } from '@sveltejs/kit';
// import db from '$lib/db';
import axios from 'axios';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }: { params: any }) {
	// const type = await db.animalType.findUnique({
	// 	where: {
	// 		id: parseInt(params.id)
	// 	}
	// });

	const res = await axios.get(`http://localhost:8000/api/animal_types/${params.id}`);
	const type = await res?.data;

	if (type) return { type };

	throw error(404, 'Not Found!');
}
