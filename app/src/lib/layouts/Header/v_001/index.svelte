<script>
    import MobileMenu from "../mobile/v_001/index.svelte";
    import { InfoSectionV1, HeaderSectionV1 } from "$lib/broker";
    import {useHeader}from "$lib/layouts/Header/content/index.js";
    const {contentHeader} = useHeader;
</script>

<InfoSectionV1 />
<HeaderSectionV1 {...contentHeader}/>
<MobileMenu {...contentHeader}/>
