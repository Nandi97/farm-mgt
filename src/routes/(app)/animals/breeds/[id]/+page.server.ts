import axios from 'axios';
import { error, redirect, invalid } from '@sveltejs/kit';
// import db from '$lib/db';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }: { params: any }) {
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

	const res = await axios.get(`http://localhost:8000/api/animal_breeds/${params.id}`);
	const breed = await res?.data;

	if (breed) return { breed };

	throw error(404, 'Animal Not Found!');
}

export const actions = {
	default: async ({ request, params }: { request: any; params: any }) => {
		const values = await request.formData();

		const name = /** @type {string} */ values.get('name');
		const description = /** @type {string} */ values.get('description');
		const animal_category_id = /** @type {number} */ Number(values.get('categoryId'));

		// const breed = await db.animalBreed.update({
		// 	where: {
		// 		id: parseInt(params.id)
		// 	},
		// 	data: {
		// 		name,
		// 		description,
		// 		categoryId
		// 	}
		// });
		const payload = {
			name,
			description,
			animal_category_id
		};
		const breed = await axios.patch(
			`http://localhost:8000/api/animal_breeds/${params.id}`,
			payload
		);
		if (breed) {
			throw redirect(303, '/animals/breeds');
		}

		throw invalid(500, { message: 'Could not update Animal!' });
	}
};
