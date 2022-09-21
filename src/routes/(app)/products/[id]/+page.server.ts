import { error } from '@sveltejs/kit';
import db from '$lib/db';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }: { params: any }) {
	const product = await db.products.findUnique({
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
