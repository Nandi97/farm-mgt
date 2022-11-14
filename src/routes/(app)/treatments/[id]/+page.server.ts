import axios from 'axios';
import { error } from '@sveltejs/kit';

/**@type {import('./$types') .PageServerLoad} */
export async function load({ params }: { params: any }) {
	const res1 = await axios.get('http://127.0.0.1:8000/api/animals');
	const animals = await res1?.data;
	const res2 = await axios.get('http://127.0.0.1:8000/api/uoms');
	const uoms = await res2?.data;
	const res3 = await axios.get('http://127.0.0.1:8000/api/users');
	const users = await res3?.data;
	const res4 = await axios.get('http://127.0.0.1:8000/api/chemicals');
	const chemicals = await res4?.data;

	const res5 = await axios.get(`http://127.0.0.1:8000/api/animal_treatments/${params.id}`);
	const treatment = await res5?.data;

	if (treatment && animals && uoms && users && chemicals) {
		return { treatment, animals, uoms, users, chemicals };
	}

	throw error(404, 'Not found');
}
