import { redirect, type RequestEvent } from '@sveltejs/kit';

export function load({ cookies }: RequestEvent) {
	const user = cookies.get('user');
	if (!user) {
		redirect(303, '/users/login');
	}

	return { user: user };
}
