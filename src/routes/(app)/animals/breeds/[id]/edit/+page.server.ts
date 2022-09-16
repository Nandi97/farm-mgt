import { error } from '@sveltejs/kit';
import db from '$lib/db';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }: { params: any }) {
	const types = await db.animalType.findMany({
		include: {
			categories: true
		}
	});
	const breed = await db.animalBreed.findUnique({
		where: {
			id: parseInt(params.id)
		},
		include: {
			category: {
				include: {
					type: true
				}
			}
		}
	});

	if (breed && types) return { breed, types };

	throw error(404, 'Not Found!');
}
