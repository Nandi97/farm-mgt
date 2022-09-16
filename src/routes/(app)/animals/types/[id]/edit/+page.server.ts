import { error } from '@sveltejs/kit';
import db from '$lib/db';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }: { params: any }) {
	const type = await db.animalType.findUnique({
		where: {
			id: parseInt(params.id)
		}
	});

	if (type) return { type };

	throw error(404, 'Not Found!');
}
