<script>
    import Footer from "$lib/components/footer/v_001/index.svelte";
    import { useFooter } from "$lib/components/footer/content/index.js";
    const { dataFooter } = useFooter;
</script>

<Footer {...dataFooter}/>
