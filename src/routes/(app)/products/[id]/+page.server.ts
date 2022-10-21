import axios from 'axios';
import { error, redirect, invalid } from '@sveltejs/kit';
import * as fs from 'fs/promises';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }: { params: any }) {
	const res = await axios.get(`http://localhost:8000/api/products/${params.id}`);
	const product = await res?.data;

	if (product) return { product };

	throw error(404, 'Product Not Found!');
}

export const actions = {
	default: async ({ request, params }: { request: any; params: any }) => {
		const values = await request.formData();

		const name = /** @type {string} */ values.get('name');
		const uom_id = /** @type {number} */ Number(values.get('uomId'));
		const productImage = values.get('imageUrl') as File;
		let image_url;

		if (productImage) {
			await fs.writeFile(`static/images/${name}.webp`, productImage.stream());

			image_url = `/images/${name}.webp`;
		}

		// const product = await db.product.update({
		// 	where: {
		// 		id: parseInt(params.id)
		// 	},
		// 	data: {
		// 		name,
		// 		uomId
		// 	}
		// });
		const payload = { name, image_url, uom_id };

		const product = await axios.patch(`http://localhost:8000/api/products/${params.id}`, payload);

		if (product) {
			throw redirect(303, '/products');
		}

		throw invalid(500, { message: 'Could not update Product!' });
	}
};
