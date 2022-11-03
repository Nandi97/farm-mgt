import axios from 'axios';
import { error, redirect, invalid } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }: { params: any }) {
	const res = await axios.get(`http://localhost:8000/api/chemical_purchases/${params.id}`);
	const purchase = await res?.data;

	if (purchase) return { purchase };

	throw error(404, 'Purchase Not Found!');
}

export const actions = {
	default: async ({ request, params }: { request: any; params: any }) => {
		const values = await request.formData();

		const supplier = /** @type {string} */ values.get('supplier');
		const batch_no = /** @type {string} */ values.get('batchNo');
		const chemical_id = /** @type {number} */ Number(values.get('chemicalId'));
		const uom_id = /** @type {number} */ Number(values.get('uomId'));
		const quantity = /** @type {string} */ values.get('quantity');
		const price = /** @type {string} */ values.get('price');
		const purchased_at = values.get('purchasedAt');
		const manufactured_at = values.get('manufacturedAt');
		const expiring_at = values.get('expiringAt');

		const payload = {
			supplier,
			batch_no,
			chemical_id,
			uom_id,
			quantity,
			price,
			purchased_at,
			manufactured_at,
			expiring_at
		};
		const purchase = await axios.patch(
			`http://localhost:8000/api/chemical_purchases/${params.id}`,
			payload
		);
		if (purchase) {
			throw redirect(303, '/treatments/purchases');
		}

		throw invalid(500, { message: 'Could not update Animal!' });
	}
};
