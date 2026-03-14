import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
	const base = site ?? new URL('https://ironcoremep.example');
	const isPlaceholderSite = base.hostname === 'localhost';
	const body = isPlaceholderSite
		? `User-agent: *
Disallow: /

# Set SITE_URL before enabling crawl in non-local environments
`
		: `User-agent: *
Allow: /

Sitemap: ${new URL('sitemap-index.xml', base).toString()}
`;

	return new Response(body, {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8'
		}
	});
};
