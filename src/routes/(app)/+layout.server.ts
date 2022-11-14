// import db from '$lib/db';
import { error } from '@sveltejs/kit';
import axios from 'axios';

/** @type {import('./$types').ServerLoad} */
export async function load() {
	// const menus = await db.menu.findMany();
	const res = await axios.get('http://127.0.0.1:8000/api/menus');
	const menus = res.data;
	// console.log('Menus:', menus);

	if (menus) {
		return { menus };
	}

	throw error(404, 'Not found');
}
