import axios from 'axios';
import { error, redirect, invalid } from '@sveltejs/kit';
import * as fs from 'fs/promises';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }: { params: any }) {
	const res = await axios.get(`http://localhost:8000/api/users/${params.id}`);
	const user = await res?.data;

	if (user) return { user };

	throw error(404, 'User Not Found');
}

export const actions = {
	default: async ({ request, params }: { request: any; params: any }) => {
		const values = await request.formData();

		const name = /** @type {string} */ values.get('name');
		const email = /** @type {string} */ values.get('email');
		const phone_no = /** @type {string} */ values.get('PhoneNo');
		const joined_at = values.get('joinedAt');
		const userAvatar = values.get('imageUrl') as File;
		let avatar_url;

		if (userAvatar) {
			await fs.writeFile(`static/images/${name}.webp`, userAvatar.stream());

			avatar_url = `/images/${name}.webp`;
		}

		const payload = {
			name,
			email,
			phone_no,
			joined_at,
			avatar_url
		};

		const user = await axios.patch(`http://localhost:8000/api/users/${params.id}`, payload);

		if (user) {
			throw redirect(303, '/users');
		}

		throw invalid(500, { message: 'Could not update User!' });
	}
};
