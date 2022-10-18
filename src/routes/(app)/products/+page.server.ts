import axios from 'axios';
import { error, redirect, invalid } from '@sveltejs/kit';
import * as fs from 'fs/promises';

/** @type {import ('./$types') .PageServerLoad} */
export async function load() {
	// const products = await db.product.findMany({
	// 	include: {
	// 		uom: true
	// 	}
	// });

	const res = await axios.get('http://localhost:8000/api/products');
	const products = await res.data;

	if (products) return { products };

	throw error(404, 'Not Found');
}

/** @type {import('./$types').Action} */
export const actions = {
	default: async ({ request }: { request: any }) => {
		const values = await request.formData();

		const name = /** @type {string} */ values.get('name');
		const uom_id = /** @type {number} */ Number(values.get('uomId'));
		const productImage = values.get('imageUrl') as File;
		let image_url;

		if (productImage) {
			await fs.writeFile(`static/images/${name}.webp`, productImage.stream());

			image_url = `/images/${name}.webp`;
		}

		// const product = await db.product.create({
		// 	data: {
		// 		name,
		// 		uomId
		// 	}
		// });

		const product = await axios.post('http://localhost:8000/api/products', {
			name,
			image_url,
			uom_id
		});

		if (product) {
			throw redirect(303, '/products');
		}

		throw invalid(500, { message: 'Could not create a New Product!' });
	}
};
