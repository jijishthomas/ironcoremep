// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

const site = process.env.SITE_URL || 'https://jijishthomas.github.io/ironcoremep/';
const base = process.env.BASE_PATH || '/ironcoremep/';

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
