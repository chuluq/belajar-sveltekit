import { json, type RequestEvent } from '@sveltejs/kit';

export function GET({ cookies }: RequestEvent) {
	if (cookies.get('user')) {
		return json({ user: cookies.get('user') }, { status: 200 });
	} else {
		return json({ user: null }, { status: 401 });
	}
}

export function DELETE({ cookies }: RequestEvent) {
	cookies.delete('user', { path: '/' });
	return json({ user: null }, { status: 200 });
}
