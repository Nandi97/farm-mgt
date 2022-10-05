import { error, redirect, invalid } from '@sveltejs/kit';
import db from '$lib/db';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }: { params: any }) {
	const product = await db.product.findUnique({
		where: {
			id: parseInt(params.id)
		},
		include: {
			uom: true
		}
	});

	if (product) return { product };

	throw error(404, 'Product Not Found!');
}

export const actions = {
	default: async ({ request, params }: { request: any; params: any }) => {
		const values = await request.formData();

		const name = /** @type {string} */ values.get('name');
		const uomId = /** @type {number} */ Number(values.get('uomId'));

		const product = await db.product.update({
			where: {
				id: parseInt(params.id)
			},
			data: {
				name,
				uomId
			}
		});

		if (product) {
			throw redirect(303, '/products');
		}

		throw invalid(500, { message: 'Could not update Product!' });
	}
};