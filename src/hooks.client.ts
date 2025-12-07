import type { HandleClientError } from '@sveltejs/kit';

export function init() {
	console.log('client init');
}

export const handleError: HandleClientError = (params) => {
	console.log('client error', params);
};
