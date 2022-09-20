import db from '$lib/db';
import { error, redirect, invalid } from '@sveltejs/kit';

/** @type {import('./$types')./PageServerLoad} */
export async function load() {
	const uoms = await db.unitsOfMeasurement.findMany();

	if (uoms) return { uoms };

	throw error(404, 'Not Found');
}

export const actions = {
	default: async ({ request }: { request: any }) => {
		const values = await request.formData();

		const unit = /** @type {string} */ values.get('unit');
		const initial = /** @type {string} */ values.get('initial');

		const uom = await db.unitsOfMeasurement.create({
			data: {
				unit,
				initial
			}
		});
		if (uom) {
			throw redirect(303, '/uoms');
		}

		throw invalid(500, { message: 'Could not create a New Unit' });
	}
};
