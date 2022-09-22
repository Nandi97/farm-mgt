import { error, redirect, invalid } from '@sveltejs/kit';
import db from '$lib/db';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }: { params: any }) {
	const uom = await db.unitOfMeasurement.findUnique({
		where: {
			id: parseInt(params.id)
		}
	});

	if (uom) return { uom };

	throw error(404, 'Unit Not Found!');
}

export const actions = {
	default: async ({ request, params }: { request: any; params: any }) => {
		const values = await request.formData();

		const unit = /** @type {string} */ values.get('unit');
		const initial = /** @type {string} */ values.get('initial');

		const uom = await db.unitOfMeasurement.update({
			where: {
				id: parseInt(params.id)
			},
			data: {
				unit,
				initial
			}
		});

		if (uom) {
			throw redirect(303, '/uoms');
		}

		throw invalid(500, { message: 'Could not update Unit!' });
	}
};
