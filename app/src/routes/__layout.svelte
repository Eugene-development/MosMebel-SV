<script context="module">
	// export const get = async ({ params, url }) => {
	// 	let token;
	// 	for (let k of Object.entries(import.meta.env)) {
	// 		if (k[0] === 'VITE_' + url.hostname) token = (k[1])
	// 	}
	// 	console.log(url.hostname)
	// };

	import Header from '$lib/Header/index.svelte';
	import Footer from '$lib/Footer/index.svelte'
	import '../app.css';


	console.log(import.meta.env.VITE_localhost)
</script>

<Header />

<main>
	<slot />
</main>

<Footer />

