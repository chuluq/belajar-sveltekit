export const load = ({ params }: { params: { lang: string } }) => {
	const hello = {
		en: 'Hello',
		id: 'Halo',
		fn: 'Hola'
	};

	const lang = params.lang;

	return {
		hello: hello[lang as keyof typeof hello]
	};
};
