import adapter from '@sveltejs/adapter-node';
import autoImport from 'sveltekit-autoimport';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),


		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		},
	},
};

export default config;
