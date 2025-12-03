import type { LoadEvent } from '@sveltejs/kit';

export function load({ data }: LoadEvent) {
	const dataTodos = data ? data.todos : [];
	return {
		todos: ['From Client', ...dataTodos]
	};
}
