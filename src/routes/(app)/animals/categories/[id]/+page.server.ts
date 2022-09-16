import { error, redirect, invalid } from '@sveltejs/kit';
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

	throw error(404, 'Animal Category Not Found!');
}

export const actions = {
	default: async ({ request, params }: { request: any; params: any }) => {
		const values = await request.formData();

		const name = /** @type {string} */ values.get('name');
		const typeId = /** @type {number} */ Number(values.get('typeId'));

		const category = await db.animalCategory.update({
			where: {
				id: parseInt(params.id)
			},
			data: {
				name,
				typeId
			}
		});

		if (category) {
			throw redirect(303, '/animals/categories');
		}

		throw invalid(500, { message: 'Could not update Animal!' });
	}
};
