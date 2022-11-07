import axios from 'axios';
import { invalid, redirect, error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const res = await axios.get('http://localhost:8000/api/chemical_purchases');
	const purchases = await res?.data;

	if (purchases) return { purchases };

	throw error(404, 'Not found');
}