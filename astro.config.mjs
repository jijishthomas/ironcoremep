// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

const site = process.env.SITE_URL || 'https://ironcoremep.example';
const base = process.env.BASE_PATH || '/';

export default defineConfig({
	site,
	base,
	output: 'static',
	integrations: [
		tailwind({
			applyBaseStyles: false
		}),
		sitemap()
	]
});
