import { error } from '@sveltejs/kit';
import db from '$lib/db';

/** @type {import ('./$types') .PageServerLoad} */
export async function load() {
	const products = await db.product.findMany({
		include: {
			uom: true
		}
	});
	if (products) return { products };

	throw error(404, 'Not Found');
}
