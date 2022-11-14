import { error } from '@sveltejs/kit';
import axios from 'axios';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }: { params: any }) {
	// const uom = await db.unitOfMeasurement.findUnique({
	// 	where: {
	// 		id: parseInt(params.id)
	// 	}
	// });

	const res = await axios.get(`http://127.0.0.1:8000/api/uoms/${params.id}`);
	const uom = await res?.data;

	if (uom) return { uom };

	throw error(404, 'Not Found!');
}
