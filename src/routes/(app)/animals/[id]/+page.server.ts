import { error } from '@sveltejs/kit';
import db from '$lib/db';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }: { params: any }) {
	const animal = await db.animal.findUnique({
		where: {
			id: parseInt(params.id)
		},
		include: {
			gender: true,
			breed: {
				include: {
					category: {
						include: {
							type: true
						}
					}
				}
			}
		}
	});

	if (animal) return { animal };

	throw error(404, 'Animal Not Found!');
}
