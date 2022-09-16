import { error, redirect, invalid } from '@sveltejs/kit';
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

export const actions = {
	default: async ({ request, params }: { request: any; params: any }) => {
		const values = await request.formData();

		const tag = /** @type {string} */ values.get('tag');
		const breedId = /** @type {number} */ Number(values.get('breedId'));
		const genderId = /** @type {number} */ Number(values.get('genderId'));
		const bornAt = new Date(values.get('bornAt'));
		const purchasedAt = new Date(values.get('purchasedAt') || '1900-01-01');

		const animal = await db.animal.update({
			where: {
				id: parseInt(params.id)
			},
			data: {
				tag,
				breedId,
				genderId,
				bornAt,
				purchasedAt,
				updatedAt: new Date()
			}
		});

		if (animal) {
			throw redirect(303, '/animals');
		}

		throw invalid(500, { message: 'Could not update Animal!' });
	}
};
