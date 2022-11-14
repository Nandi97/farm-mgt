import axios from 'axios';
import { error, redirect, invalid } from '@sveltejs/kit';
import * as fs from 'fs/promises';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }: { params: any }) {
	const res1 = await axios.get(`http://127.0.0.1:8000/api/animals/${params.id}`);
	const animal = await res1?.data;

	if (animal) return { animal };

	throw error(404, 'Animal Not Found!');
}

export const actions = {
	default: async ({ request, params }: { request: any; params: any }) => {
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

		const payload = {
			tag,
			image_url,
			animal_breed_id,
			gender_id,
			born_at,
			purchased_at
		};

		const animal = await axios.patch(`http://127.0.0.1:8000/api/animals/${params.id}`, payload);

		if (animal) {
			throw redirect(303, '/animals');
		}

		throw invalid(500, { message: 'Could not update Animal!' });
	}
};
