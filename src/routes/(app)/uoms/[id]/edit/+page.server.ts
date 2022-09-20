import { error } from '@sveltejs/kit';
import db from '$lib/db';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }: { params: any }) {
	const uom = await db.unitsOfMeasurement.findUnique({
		where: {
			id: parseInt(params.id)
		}
	});

	if (uom) return { uom };

	throw error(404, 'Not Found!');
}
