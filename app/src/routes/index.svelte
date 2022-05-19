<script>
	import {gsap} from 'gsap'
	import {onMount} from 'svelte';
	import {
		BlogSectionV1,
		MainSectionV1,
		MarketingSectionV1,
		MarketingSectionV2,
		MarketingSectionV3,
	} from "$lib/brocker/index.js";

	onMount(async () => {
		gsap.to("#test", {duration: 5, x: 500, opacity: 0.3});
		// gsap.to("#b2", {duration: 5, x: 500, opacity: 0.1});

		// gsap.to("#b2", {opacity: 0, duration: 1, delay: 2});
		const tl = gsap.timeline();
		const duration = 1;
		// tl.from('#b2', {
		// 	opacity: 0,
		// 	scale: 0,
		// 	ease: "back"
		// })


		tl.from('#b2', {
			opacity: 0
		})

		tl.from('.box2', {
			duration,
			opacity: 0
		}).from('.box2', {
					duration,
					xPercent: 100,
					rotation: -90,
					yPercent: 100,
					ease: 'bounce.out',
				}, `-=${duration * 0.75}`)
	});

	export let title;
	export let description;
	export let contentSectionV1;
	export let contentSectionV3;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content="{description}">
</svelte:head>

<div id="">
	<MainSectionV1/>
	<MarketingSectionV1 {...contentSectionV1}/>
	<BlogSectionV1/>
	<MarketingSectionV2/>
	<MarketingSectionV3 {...contentSectionV3}/>
</div>

<style>
	.box {
		width: 100px;
		height: 100px;
		background: black;
	}
</style>
