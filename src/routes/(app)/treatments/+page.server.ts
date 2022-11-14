import axios from 'axios';
import { error, redirect, invalid } from '@sveltejs/kit';

/** @type {import ('./$types') .PageServerLoad} */
export async function load() {
	const res = await axios.get('http://127.0.0.1:8000/api/animal_treatments');
	const treatments = await res?.data;

	if (treatments) return { treatments };

	throw error(404, 'Not Found');
}

/** @type {import('./$types').Action} */
export const actions = {
	default: async ({ request }: { request: any }) => {
		const values = await request.formData();

		const animal_id = /** @type {number} */ Number(values.get('animalId'));
		const chemical_id = /** @type {number} */ Number(values.get('chemicalId'));
		const user_id = /** @type {number} */ Number(values.get('userId'));
		const uom_id = /** @type {number} */ Number(values.get('uomId'));
		const quantity = /** @type {string} */ values.get('quantity');
		const treated_at = values.get('treatedAt');

		const payload = {
			animal_id,
			chemical_id,
			user_id,
			uom_id,
			quantity,
			treated_at
		};

		// console.log('payload', payload);

		const treatment = await axios.post('http://127.0.0.1:8000/api/animal_treatments', payload);

		if (treatment) {
			throw redirect(303, '/treatments');
		}

		throw invalid(500, { message: 'Could not create a New Product!' });
	}
};
