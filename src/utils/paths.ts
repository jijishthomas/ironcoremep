const ABSOLUTE_OR_SCHEME = /^(?:[a-z]+:)?\/\//i;

export const withBase = (path: string): string => {
	if (!path || path.startsWith('#') || path.startsWith('mailto:') || path.startsWith('tel:') || ABSOLUTE_OR_SCHEME.test(path)) {
		return path;
	}

	const base = import.meta.env.BASE_URL || '/';
	if (base === '/') {
		return path;
	}

	if (path === '/') {
		return base;
	}

	return `${base}${path.replace(/^\/+/, '')}`;
};

export const stripBase = (pathname: string): string => {
	const base = import.meta.env.BASE_URL || '/';
	if (base === '/') {
		return pathname;
	}

	if (pathname.startsWith(base)) {
		const stripped = pathname.slice(base.length).replace(/^\/+/, '');
		const normalized = stripped ? `/${stripped}` : '/';
		return normalized !== '/' && normalized.endsWith('/') ? normalized.slice(0, -1) : normalized;
	}

	return pathname !== '/' && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
};
