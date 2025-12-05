import type { RequestEvent } from '@sveltejs/kit';

export async function load({ fetch }: RequestEvent) {
	const response = await fetch('/api/users/current');
	if (!response.ok) {
		throw new Error(response.statusText);
	}

	const body = await response.json();

	return { user: body.user };
}
