import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	console.log('receive request', event.url.href);
	return await resolve(event);
};

export function init() {
	console.log('server init');
}
