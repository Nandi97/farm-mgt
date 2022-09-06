import db from '$lib/db';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const animals = await db.animal.findMany({
		include: {
			breed: true,
			gender: true
		}
	});

	if (animals) return { animals };

	throw error(404, 'Not found');
}

/** @type {import('./$types').Action} */
export async function POST({ request }) {
	const values = await request.formData();

	const tag = /** @type {string} */ values.get('tag');
	const breedId = /** @type {number} */ Number(values.get('breedId'));
	const genderId = /** @type {number} */ Number(values.get('genderId'));
	const bornAt = new Date(values.get('bornAt'));
	const purchasedAt = new Date(values.get('purchasedAt') || '1900-01-01');

	const animal = await db.animal.create({
		data: {
			tag,
			breedId,
			genderId,
			bornAt,
			purchasedAt
		}
	});

	if (animal) {
		return {
			location: '/animals'
		};
	}

	throw error(500, 'Could not create a New Animal!');
}
