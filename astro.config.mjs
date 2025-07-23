// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import fs from 'fs';

// https://astro.build/config
export default defineConfig({
	site: 'https://kuroganetoyama.github.io',
	integrations: [mdx(), sitemap()],
	vite: {
		build: {
			rollupOptions: {
				plugins: [
					{
						name: 'add-nojekyll',
						writeBundle() {
							fs.writeFileSync('./dist/.nojekyll', '');
						}
					}
				]
			}
		}
	}
});
