import type { PageLoad } from '../../../../.svelte-kit/types/src/routes/files/[...file]/$types.d.ts';

export const load: PageLoad = ({ params }) => {
	return {
		file: params.file
	};
};
