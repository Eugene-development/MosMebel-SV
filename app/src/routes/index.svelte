<script>
	import {
		BlogSectionV1,
		MainSectionV1,
		MarketingSectionV1,
		MarketingSectionV2,
		MarketingSectionV3,
	} from "$lib/brocker/index.js";

	export let seoTitle;
	export let seoDescription;
	export let contentSectionV1;
	export let contentSectionV3;
</script>

<svelte:head>
	<title>{seoTitle}</title>
	<meta name="description" content="{seoDescription}">
</svelte:head>

	<MainSectionV1/>
	<MarketingSectionV1 {...contentSectionV1}/>
	<BlogSectionV1/>
	<MarketingSectionV2/>
	<MarketingSectionV3 {...contentSectionV3}/>
