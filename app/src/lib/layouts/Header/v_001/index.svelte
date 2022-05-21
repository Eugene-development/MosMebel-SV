<script>
    import MobileMenu from "../mobile/v_001/index.svelte";
    import { InfoSectionV1, HeaderSectionV1 } from "$lib/brocker";
    import {useHeader} from "$lib/components/header/content/index.js";
    const {contentHeader} = useHeader;
</script>

<InfoSectionV1 />
<HeaderSectionV1 {...contentHeader}/>
<MobileMenu/>
