import axios from 'axios';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }: { params: any }) {
	const res1 = await axios.get('http://127.0.0.1:8000/api/chemical_types');
	const types = await res1?.data;

	const res2 = await axios.get('http://127.0.0.1:8000/api/chemical_administration_methods');
	const methods = await res2?.data;

	const res3 = await axios.get(`http://127.0.0.1:8000/api/chemicals/${params.id}`);
	const chemical = await res3?.data;

	// console.log('chemical:', chemical);

	if (chemical && types && methods) return { chemical, types, methods };

	throw error(404, 'Not Found!');
}
