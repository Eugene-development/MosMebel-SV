<script>
	import { Main_v_001, SectionV1, SectionV2, SectionV3, BlogSectionV1 } from "$lib/brocker/index.js";
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
<SectionV1 {...contentSectionV1}/>
<BlogSectionV1/>
<SectionV2/>
<SectionV3 {...contentSectionV3}/>

