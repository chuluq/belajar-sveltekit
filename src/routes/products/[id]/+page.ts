import type { LoadEvent } from '@sveltejs/kit';

export async function load({ params, fetch }: LoadEvent) {
	const response = await fetch(`/api/products/${params.id}.json`);
	return await response.json();
}
