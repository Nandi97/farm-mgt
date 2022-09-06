import db from '$lib/db';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const breeds = await db.animalBreed.findMany({
		include: {
			category: true
		}
	});

	if (breeds) return { breeds };

	throw error(404, 'Not found');
}

/** @type {import('./$types').Action} */
export async function POST({ request }) {
	const values = await request.formData();

	const name = /** @type {string} */ values.get('name');
	const description = /** @type {string} */ values.get('description');
	const categoryId = /** @type {number} */ Number(values.get('categoryId'));

	const breed = await db.animalBreed.create({
		data: {
			name,
			description,
			categoryId
		}
	});

	if (breed) {
		return {
			location: '/animals/breeds'
		};
	}

	throw error(500, 'Could not create a New Breed!');
}
