import axios from 'axios';
import { error, redirect, invalid } from '@sveltejs/kit';
import * as fs from 'fs/promises';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const res = await axios.get('http://127.0.0.1:8000/api/animals');
	const animals = await res.data;

	if (animals) return { animals };

	throw error(404, 'Not found');
}

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

		// try {
		const animal = await axios.post('http://127.0.0.1:8000/api/animals', {
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
