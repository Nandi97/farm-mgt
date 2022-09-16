import { error, redirect, invalid } from '@sveltejs/kit';
import db from '$lib/db';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }: { params: any }) {
	const type = await db.animalType.findUnique({
		where: {
			id: parseInt(params.id)
		}
	});

	if (type) return { type };

	throw error(404, 'Animal Not Found!');
}

export const actions = {
	default: async ({ request, params }: { request: any; params: any }) => {
		const values = await request.formData();

		const name = /** @type {string} */ values.get('name');
		const icon = /** @type {string} */ values.get('icon');

		const type = await db.animalType.update({
			where: {
				id: parseInt(params.id)
			},
			data: {
				name,
				icon
			}
		});

		if (type) {
			throw redirect(303, '/animals/types');
		}

		throw invalid(500, { message: 'Could not update Animal Type!' });
	}
};
