import axios from 'axios';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }: { params: any }) {
	const res1 = await axios.get('http://localhost:8000/api/chemicals');
	const chemicals = await res1?.data;

	const res2 = await axios.get('http://localhost:8000/api/uoms');
	const uoms = await res2?.data;

	const res3 = await axios.get(`http://localhost:8000/api/chemical_purchases/${params.id}`);
	const purchase = await res3?.data;

	// console.log('Purchase:', purchase);

	if (purchase && chemicals && uoms) return { purchase, chemicals, uoms };

	throw error(404, 'Not Found!');
}
