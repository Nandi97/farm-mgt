import axios from 'axios';
import { error } from '@sveltejs/kit';
// import db from '$lib/db';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }: { params: any }) {
	// const uoms = await db.unitsOfMeasurement.findMany();
	// const product = await db.products.findUnique({
	// 	where: {
	// 		id: parseInt(params.id)
	// 	},
	// 	include: {
	// 		uom: true
	// 	}
	// });

	const res1 = await axios.get('http://127.0.0.1:8000/api/uoms');
	const uoms = await res1?.data;

	const res2 = await axios.get(`http://127.0.0.1:8000/api/products/${params.id}`);
	const product = await res2?.data;

	if (product && uoms) return { product, uoms };

	throw error(404, 'Product not Found');
}
