<script>
	import {
		Main_v_001,
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

<Main_v_001/>
<MarketingSectionV1 {...contentSectionV1}/>
<BlogSectionV1/>
<MarketingSectionV2/>
<MarketingSectionV3 {...contentSectionV3}/>

