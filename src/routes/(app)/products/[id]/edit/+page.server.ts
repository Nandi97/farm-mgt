import { error } from '@sveltejs/kit';
import db from '$lib/db';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }: { params: any }) {
	const uoms = await db.unitsOfMeasurement.findMany();
	const product = await db.products.findUnique({
		where: {
			id: parseInt(params.id)
		},
		include: {
			uom: true
		}
	});

	if (product && uoms) return { product, uoms };

	throw error(404, 'Product not Found');
}
