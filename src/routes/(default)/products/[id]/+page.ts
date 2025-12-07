import { error, type LoadEvent } from '@sveltejs/kit';

export async function load({ params, fetch }: LoadEvent) {
	const response = await fetch(`/api/products/${params.id}.json`);

	if (response.status !== 200) {
		error(404, { message: 'Product not found' });
	}

	return await response.json();
}
