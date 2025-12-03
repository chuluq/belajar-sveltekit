import type { LoadEvent } from '@sveltejs/kit';

export async function load({ parent }: LoadEvent) {
	const data = await parent();

	return {
		description: `Wallet of ${data.user}`,
		balance: 1_000_000
	};
}
