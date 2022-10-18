import axios from 'axios';
import { error, redirect, invalid } from '@sveltejs/kit';
// import db from '$lib/db';

// /** @type {import('./$types').PageServerLoad} */
// export async function load({ params }: { params: any }) {
// 	// const uom = await db.unitOfMeasurement.findUnique({
// 	// 	where: {
// 	// 		id: parseInt(params.id)
// 	// 	}
// 	// });

// 	const res = await axios.get(`http://localhost:8000/api/uoms/${params.id}`);
// 	const uom = await res?.data;

// 	console.log('UOM:', uom);

// 	if (uom) return { uom };

// 	throw error(404, 'Unit Not Found!');
// }

export const actions = {
	default: async ({ request, params }: { request: any; params: any }) => {
		const values = await request.formData();

		const unit = /** @type {string} */ values.get('unit');
		const initial = /** @type {string} */ values.get('initial');

		// const uom = await db.unitOfMeasurement.update({
		// 	where: {
		// 		id: parseInt(params.id)
		// 	},
		// 	data: {
		// 		unit,
		// 		initial
		// 	}
		// });

		const payload = {
			unit,
			initial
		};

		const res = await axios.put(`http://localhost:8000/api/uoms/${params.id}`, payload);
		const uom = await res?.data;

		if (uom) {
			throw redirect(303, '/uoms');
		}

		throw invalid(500, { message: 'Could not update Unit!' });
	}
};
