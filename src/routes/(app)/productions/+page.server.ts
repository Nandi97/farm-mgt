import axios from 'axios';
import { error, redirect, invalid } from '@sveltejs/kit';

/** @type {import ('./$types') .PageServerLoad} */
export async function load() {
	const res = await axios.get('http://localhost:8000/api/productions');
	const productions = await res.data;

	if (productions) return { productions };

	throw error(404, 'Not Found');
}

/** @type {import('./$types').Action} */
export const actions = {
	default: async ({ request }: { request: any }) => {
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

		const production = await axios.post('http://localhost:8000/api/productions', payload);

		if (production) {
			throw redirect(303, '/productions');
		}

		throw invalid(500, { message: 'Could not create a New Product!' });
	}
};
