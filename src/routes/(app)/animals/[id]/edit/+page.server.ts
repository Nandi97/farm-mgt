import { error } from '@sveltejs/kit';
import db from '$lib/db';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }: { params: any }) {
	const genders = await db.gender.findMany();
	const types = await db.animalType.findMany();
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

	if (animal && genders && types) return { animal, genders, types };

	throw error(404, 'Not Found!');
}
