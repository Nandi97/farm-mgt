import axios from 'axios';
import { redirect, invalid } from '@sveltejs/kit';

/** @type {import('./$types').Action} */
export const actions = {
	default: async ({ request, params }: { request: any; params: any }) => {
		const values = await request.formData();

		const animal_id = /** @type {number} */ Number(values.get('animalId'));
		const product_id = /** @type {number} */ Number(values.get('productId'));
		const user_id = /** @type {number} */ Number(values.get('collectorId'));
		const quantity = /** @type {string} */ values.get('quantity');
		const produced_at = values.get('producedAt');

		const payload = {
			animal_id,
			product_id,
			user_id,
			quantity,
			produced_at
		};

		// console.log('payload', payload);

		const production = await axios.post(
			`http://127.0.0.1:8000/api/productions/${params.id}`,
			payload
		);

		if (production) {
			throw redirect(303, '/productions');
		}

		throw invalid(500, { message: 'Could not update a Product!' });
	}
};
