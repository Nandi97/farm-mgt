import axios from 'axios';
import { error } from '@sveltejs/kit';

/**@type {import('./$types') .PageServerLoad} */
export async function load({ params }: { params: any }) {
	const res1 = await axios.get('http://localhost:8000/api/animals');
	const animals = await res1?.data;
	const res2 = await axios.get('http://localhost:8000/api/products');
	const products = await res2?.data;
	const res3 = await axios.get('http://localhost:8000/api/users');
	const collectors = await res3?.data;
	const res4 = await axios.get(`http://localhost:8000/api/productions/${params.id}`);
	const production = await res4?.data;

	if (production && animals && products && collectors) {
		return { production, animals, products, collectors };
	}

	throw error(404, 'Not found');
}
