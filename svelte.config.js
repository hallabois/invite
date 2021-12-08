import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
 // Consult https://github.com/sveltejs/svelte-preprocess
 // for more information about preprocessors
 preprocess: preprocess(),
 // Comment the paths if wants to run in dev mode.

 kit: {
 // hydrate the <div id="svelte"> element in src/app.html
 paths: {
	base: '/invite'
  },
  target: '#svelte',
  adapter: adapter({
    pages: 'build',
    assets: 'build',
    fallback: null
  })
 }
};

export default config;