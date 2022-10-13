import axios from 'axios';
import db from '$lib/db';
import { invalid, redirect, error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	// const categories = await db.animalCategory.findMany({
	// 	include: {
	// 		type: true
	// 	}
	// });

	const res = await axios.get('http://localhost:8000/api/animal_categories');
	const categories = await res?.data;

	// console.log('Categories:', categories);

	if (categories) return { categories };

	throw error(404, 'Not found');
}

/** @type {import('./$types').Action} */
// export async function POST({ request }) {
// 	const values = await request.formData();

// 	const name = /** @type {string} */ values.get('name');
// 	const typeId = /** @type {number} */ Number(values.get('typeId'));

// 	const category = await db.animalCategory.create({
// 		data: {
// 			name,
// 			typeId
// 		}
// 	});

// 	if (category) {
// 		return {
// 			location: '/animals/categories'
// 		};
// 	}

// 	throw error(500, 'Could not create a New Category!');
// }

export const actions = {
	default: async ({ request }: { request: any }) => {
		const values = await request.formData();

		const name = /** @type {string} */ values.get('name');
		const animal_type_id = /** @type {number} */ Number(values.get('typeId'));

		// const category = await db.animalCategory.create({
		// 	data: {
		// 		name,
		// 		typeId
		// 	}
		// });

		const category = await axios.post('http://localhost:8000/api/animal_categories', {
			name,
			animal_type_id
		});

		if (category) {
			throw redirect(303, '/animals/categories');
		}

		throw invalid(500, { message: 'Could not create a New Category!' });
	}
};
