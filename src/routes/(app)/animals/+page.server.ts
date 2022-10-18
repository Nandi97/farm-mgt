import axios from 'axios';
// import db from '$lib/db';
import { error, redirect, invalid } from '@sveltejs/kit';
import * as fs from 'fs/promises';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	// const animals = await db.animal.findMany({
	// 	include: {
	// 		breed: true,
	// 		gender: true
	// 	}
	// });

	const res = await axios.get('http://localhost:8000/api/animals');
	const animals = await res.data;

	// console.log('Animals:', animals);

	if (animals) return { animals };

	throw error(404, 'Not found');
}

// /** @type {import('./$types').Action} */
// export async function POST({ request }) {
// 	const values = await request.formData();

// 	const tag = /** @type {string} */ values.get('tag');
// 	const breedId = /** @type {number} */ Number(values.get('breedId'));
// 	const genderId = /** @type {number} */ Number(values.get('genderId'));
// 	const bornAt = new Date(values.get('bornAt'));
// 	const purchasedAt = new Date(values.get('purchasedAt') || '1900-01-01');

// 	const animal = await db.animal.create({
// 		data: {
// 			tag,
// 			breedId,
// 			genderId,
// 			bornAt,
// 			purchasedAt
// 		}
// 	});

// 	if (animal) {
// 		return {
// 			location: '/animals'
// 		};
// 	}

// 	throw error(500, 'Could not create a New Animal!');
// }

export const actions = {
	default: async ({ request }: { request: any }) => {
		const values = await request.formData();

		const tag = /** @type {string} */ values.get('tag');
		const animal_breed_id = /** @type {number} */ Number(values.get('breedId'));
		const gender_id = /** @type {number} */ Number(values.get('genderId'));
		const born_at = values.get('bornAt');
		const purchased_at = values.get('purchasedAt') || '1900-01-01';
		const animalImage = values.get('imageUrl') as File;
		let image_url;

		if (animalImage) {
			await fs.writeFile(`static/images/${tag}.webp`, animalImage.stream());

			image_url = `/images/${tag}.webp`;
		}
		// const image_url = values.get('imageUrl');

		// const animal = await db.animal.create({
		// 	data: {
		// 		tag,
		// 		imageUrl,
		// 		breedId,
		// 		genderId,
		// 		bornAt,
		// 		purchasedAt
		// 	}
		// });

		// try {
		const animal = await axios.post('http://localhost:8000/api/animals', {
			tag,
			image_url,
			animal_breed_id,
			gender_id,
			born_at,
			purchased_at
		});

		if (animal) {
			throw redirect(303, '/animals');
		}
		// } catch (error) {
		// 	console.log('--------------------------------------');
		// 	console.log(new Date());
		// 	console.log('--------------------------------------');
		// 	console.error('Animal Post:', error);
		throw invalid(500, { message: 'Could not create a New Category!' });
		// }
	}
};
