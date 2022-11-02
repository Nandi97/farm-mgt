import axios from 'axios';
import { invalid, redirect, error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const res = await axios.get('http://localhost:8000/api/chemicals');
	const chemicals = await res?.data;

	if (chemicals) return { chemicals };

	throw error(404, 'Not found');
}

/** @type {import('./$types').Action} */
export const actions = {
	default: async ({ request }: { request: any }) => {
		const values = await request.formData();

		const name = /** @type {string} */ values.get('name');
		const description = /** @type {string} */ values.get('description');
		const chemical_type_id = /** @type {number} */ Number(values.get('chemicalTypeId'));
		const chemical_administration_method_id = /** @type {number} */ Number(
			values.get('administrationMethodId')
		);

		const chemical = await axios.post('http://localhost:8000/api/chemicals', {
			name,
			description,
			chemical_type_id,
			chemical_administration_method_id
		});

		if (chemical) {
			throw redirect(303, '/treatments/chemicals');
		}
		throw invalid(500, { message: 'Could not create a New Category!' });
	}
};
