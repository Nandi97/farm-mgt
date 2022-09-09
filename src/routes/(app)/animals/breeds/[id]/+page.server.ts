import { error } from '@sveltejs/kit';
import db from '$lib/db';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }: { params: any }) {
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

	if (breed) return { breed };

	throw error(404, 'Animal Not Found!');
}
