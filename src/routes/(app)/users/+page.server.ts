import axios from 'axios';
import { error, redirect, invalid } from '@sveltejs/kit';
import * as fs from 'fs/promises';

/**@type {import('./$types').PageServerLoad} */
export async function load() {
	const res = await axios.get('http://127.0.0.1:8000/api/users');
	const users = await res.data;

	// console.log('Users:', users);

	if (users) return { users };

	throw error(404, 'Not found');
}

export const actions = {
	default: async ({ request }: { request: any }) => {
		const values = await request.formData();

		const name = /** @type {string} */ values.get('name');
		const email = /** @type {string} */ values.get('email');
		const role_id = /** @type {number} */ Number(values.get('roleId'));
		const phone_no = /** @type {number} */ Number(values.get('phoneNo'));
		const joined_at = values.get('joinedAt');
		const userAvatar = values.get('avatarUrl') as File;
		let avatar_url;

		if (userAvatar) {
			await fs.writeFile(`static/images/${name}.webp`, userAvatar.stream());

			avatar_url = `/images/${name}.webp`;
		}

		const user = await axios.post('http://127.0.0.1:8000/api/users', {
			name,
			email,
			role_id,
			phone_no,
			joined_at,
			avatar_url
		});

		if (user) {
			throw redirect(303, '/users');
		}
		throw invalid(500, { message: 'Could not create a New User!' });
	}
};
