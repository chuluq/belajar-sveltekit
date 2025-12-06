import type { RequestEvent } from '@sveltejs/kit';

let lastId = 0;
const todos: { id: number; name: string }[] = [];

export function load() {
	return {
		todos: todos
	};
}

export const actions = {
	default: async ({ request }: RequestEvent) => {
		const form = await request.formData();
		const todo = form.get('todo');

		if (typeof todo === 'string' && todo.trim()) {
			todos.push({ id: lastId++, name: todo });
		}
	}
};
