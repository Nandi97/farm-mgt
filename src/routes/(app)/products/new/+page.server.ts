import axios from 'axios';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	// const uoms = await db.unitOfMeasurement.findMany();

	const res = await axios.get('http://localhost:8000/api/uoms');
	const uoms = await res?.data;

	if (uoms) {
		return { uoms };
	}
	throw error(404, 'Not found');
}
