import axios from 'axios';
import { invalid, redirect, error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const res = await axios.get('http://127.0.0.1:8000/api/chemical_purchases');
	const purchases = await res?.data;

	if (purchases) return { purchases };

	throw error(404, 'Not found');
}

/** @type {import('./$types').Action} */
export const actions = {
	default: async ({ request }: { request: any }) => {
		const values = await request.formData();

		const supplier = /** @type {string} */ values.get('supplier');
		const batch_no = /** @type {string} */ values.get('batchNo');
		const chemical_id = /** @type {number} */ Number(values.get('chemicalId'));
		const uom_id = /** @type {number} */ Number(values.get('uomId'));
		const price = /** @type {string} */ values.get('price');
		const quantity = /** @type {string} */ values.get('quantity');
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

		const purchase = await axios.post('http://127.0.0.1:8000/api/chemical_purchases', payload);

		if (purchase) {
			throw redirect(303, '/treatments/purchases');
		}
		throw invalid(500, { message: 'Could not create a New Category!' });
	}
};
