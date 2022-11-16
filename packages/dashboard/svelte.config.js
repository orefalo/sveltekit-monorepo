import preprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-node'
import autoprefixer from 'autoprefixer'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess({
			postcss: {
				plugins: [autoprefixer()]
			}
		})
	],

	kit: {
		adapter: adapter()
	}
}

export default config
