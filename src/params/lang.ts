export function match(lang: string) {
	const value = lang || 'id';
	return ['en', 'id', 'fn'].includes(value);
}
