<script>
    import {
        BlogSectionV1,
        MainSectionV1,
        MarketingSectionV1,
        MarketingSectionV2,
        MarketingSectionV3,
    } from "$lib/brocker";
	export let seoTitle;
    export let seoDescription;
    export let contentSectionV1;
    export let contentSectionV3;
</script>

<svelte:head>
    <title>{seoTitle}</title>
    <meta content="{seoDescription}" name="description">
</svelte:head>

<MainSectionV1/>
<MarketingSectionV1 {...contentSectionV1}/>
<BlogSectionV1/>
<MarketingSectionV2/>
<MarketingSectionV3 {...contentSectionV3}/>
