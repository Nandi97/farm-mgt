import { error } from '@sveltejs/kit';
import db from '$lib/db';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }: { params: any }) {
	const category = await db.animalCategory.findUnique({
		where: {
			id: parseInt(params.id)
		},
		include: {
			type: true
		}
	});

	if (category) return { category };

	throw error(404, 'Animal Not Found!');
}
