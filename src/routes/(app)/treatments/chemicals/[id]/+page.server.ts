import axios from 'axios';
import { error, redirect, invalid } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }: { params: any }) {
	const res = await axios.get(`http://localhost:8000/api/chemicals/${params.id}`);
	const chemical = await res?.data;

	if (chemical) return { chemical };

	throw error(404, 'Drug Not Found!');
}

export const actions = {
	default: async ({ request, params }: { request: any; params: any }) => {
		const values = await request.formData();

		const name = /** @type {string} */ values.get('name');
		const description = /** @type {string} */ values.get('description');
		const chemical_type_id = /** @type {number} */ Number(values.get('chemicalTypeId'));
		const chemical_administration_method_id = /** @type {number} */ Number(
			values.get('administrationMethodId')
		);

		const payload = {
			name,
			description,
			chemical_type_id,
			chemical_administration_method_id
		};
		const chemical = await axios.patch(`http://localhost:8000/api/chemicals/${params.id}`, payload);

		if (chemical) {
			throw redirect(303, '/treatments/chemicals');
		}

		throw invalid(500, { message: 'Could not update Chemical!' });
	}
};
