import type { LoadEvent } from '@sveltejs/kit';

export function load({ params }: LoadEvent) {
	return {
		id: params.id
	};
}
