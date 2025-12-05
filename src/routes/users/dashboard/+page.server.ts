// import { redirect, type RequestEvent } from '@sveltejs/kit';

// export function load({ cookies, url }: RequestEvent) {
// 	if (url.searchParams.get('logout')) {
// 		cookies.delete('user', { path: '/' });
// 		redirect(303, '/users/login');
// 	}

// 	if (!cookies.get('user')) {
// 		redirect(303, '/users/login');
// 	}

// 	return {
// 		user: cookies.get('user')
// 	};
// }
