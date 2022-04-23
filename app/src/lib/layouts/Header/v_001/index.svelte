<script>

    import {Info_v_001} from "../../../../brocker/index.js";
    // import Information from '$lib/components/info/v_001/index.svelte'
    import { useInfo } from "$lib/components/info/content/index.js";
    const { Info } = useInfo
    const dataInfo = {
        Info
    }

</script>

<Info_v_001 { ...dataInfo }/>
