<script>
	import { gsap } from 'gsap'

	import { onMount } from 'svelte';

	onMount(async () => {

		console.log("loaded gsap onMount")

		const tl = gsap.timeline();
		const duration = 1;

		tl.from('.box', {
			duration,
			opacity: 0
		})
				.from('.box', {
					duration,
					xPercent: 100,
					rotation: -90,
					yPercent: 100,
					ease: 'bounce.out',
				}, `-=${duration * 0.75}`)
	});
	import {
		MainSectionV1,
		MarketingSectionV1,
		MarketingSectionV2,
		MarketingSectionV3,
		BlogSectionV1,
	} from "$lib/brocker/index.js";
	export let title;
	export let description;
	export let contentSectionV1;
	export let contentSectionV3;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content="{description}">
</svelte:head>

<div class="box"></div>

<MainSectionV1/>
<MarketingSectionV1 {...contentSectionV1}/>
<BlogSectionV1/>
<MarketingSectionV2/>
<MarketingSectionV3 {...contentSectionV3}/>

<style>
	.box {
		width: 100px;
		height: 100px;
		background: black;
	}
</style>
