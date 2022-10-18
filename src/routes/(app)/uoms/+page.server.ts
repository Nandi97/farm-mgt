import axios from 'axios';
// import db from '$lib/db';
import { error, redirect, invalid } from '@sveltejs/kit';

/** @type {import('./$types')./PageServerLoad} */
export async function load() {
	// const uoms = await db.unitOfMeasurement.findMany();

	const res = await axios.get('http://localhost:8000/api/uoms');
	const uoms = await res?.data;

	if (uoms) return { uoms };

	throw error(404, 'Not Found');
}

export const actions = {
	default: async ({ request }: { request: any }) => {
		const values = await request.formData();

		const unit = /** @type {string} */ values.get('unit');
		const initial = /** @type {string} */ values.get('initial');

		// const uom = await db.unitOfMeasurement.create({
		// 	data: {
		// 		unit,
		// 		initial
		// 	}
		// });

		const payload = {
			unit,
			initial
		};

		const uom = await axios.post('http://localhost:8000/api/uoms', payload);

		if (uom) {
			throw redirect(303, '/uoms');
		}

		throw invalid(500, { message: 'Could not create a New Unit' });
	}
};
