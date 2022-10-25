import axios from 'axios';
import { error } from '@sveltejs/kit';

/**@type {import('./$types') .PageServerLoad} */
export async function load() {
	const res1 = await axios.get('http://localhost:8000/api/animals');
	const animals = await res1?.data;
	const res2 = await axios.get('http://localhost:8000/api/products');
	const products = await res2?.data;
	const res3 = await axios.get('http://localhost:8000/api/users');
	const collectors = await res3?.data;

	if (animals && products && collectors) {
		return { animals, products, collectors };
	}

	throw error(404, 'Not found');
}
