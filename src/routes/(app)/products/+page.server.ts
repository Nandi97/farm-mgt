import { error, redirect, invalid } from '@sveltejs/kit';
import db from '$lib/db';

/** @type {import ('./$types') .PageServerLoad} */
export async function load() {
	const products = await db.products.findMany({
		include: {
			uom: true
		}
	});

	if (products) return { products };

	throw error(404, 'Not Found');
}

/** @type {import('./$types').Action} */
export const actions = {
	default: async ({ request }: { request: any }) => {
		const values = await request.formData();

		const name = /** @type {string} */ values.get('name');
		const uomId = /** @type {number} */ Number(values.get('uomId'));

		const product = await db.products.create({
			data: {
				name,
				uomId
			}
		});

		if (product) {
			throw redirect(303, '/products');
		}

		throw invalid(500, { message: 'Could not create a New Product!' });
	}
};
