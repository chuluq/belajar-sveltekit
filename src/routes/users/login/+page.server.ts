import { redirect, type RequestEvent } from '@sveltejs/kit';

export function load({ cookies, url }: RequestEvent) {
	const user = url.searchParams.get('user');
	if (user) {
		cookies.set('user', user, { path: '/' });
		redirect(303, '/users/dashboard');
	}

	if (cookies.get('user')) {
		redirect(303, '/users/dashboard');
	}

	return {};
}
