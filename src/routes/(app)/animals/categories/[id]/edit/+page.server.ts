import { error } from '@sveltejs/kit';
import db from '$lib/db';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }: { params: any }) {
	const types = await db.animalType.findMany();
	const category = await db.animalCategory.findUnique({
		where: {
			id: parseInt(params.id)
		},
		include: {
			type: true
		}
	});

	if (category && types) return { category, types };

	throw error(404, 'Not Found!');
}
