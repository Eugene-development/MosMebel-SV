<script>
    import Information from '$lib/components/info/v_001/index.svelte'
    import { useInfo } from "$lib/components/info/content/index.js";
    const { Info } = useInfo
    const dataInfo = {
        Info
    }

</script>

<Information { ...dataInfo }/>
