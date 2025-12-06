import { fail, type RequestEvent } from '@sveltejs/kit';

let lastId = 0;
let todos: { id: number; name: string }[] = [];

export function load() {
	return {
		todos: todos
	};
}

export const actions = {
	add: async ({ request }: RequestEvent) => {
		const form = await request.formData();
		const todo = form.get('todo');

		if (typeof todo === 'string' && todo.trim() === '') {
			return fail(400, { error: true, message: 'Todo cannot be empty' });
		}
		if (typeof todo === 'string' && todo.trim()) {
			todos.push({ id: lastId++, name: todo });
		}
	},

	delete: async ({ request }: RequestEvent) => {
		const data = await request.formData();
		const id = Number(data.get('id'));
		todos = todos.filter((t) => t.id !== id);
	}
};
