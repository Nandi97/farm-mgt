import db from '$lib/db';
import { error } from '@sveltejs/kit';

/**@type {import('./$types') .PageServerLoad} */
export async function load() {
	const animals = await db.animal.findMany();
	const products = await db.product.findMany();
	const collectors = await db.user.findMany();

	if (animals && products && collectors) {
		return { animals, products, collectors };
	}

	throw error(404, 'Not found');
}
