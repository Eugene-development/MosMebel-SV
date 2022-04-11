<script>
    import Footer from "$lib/components/footer/v_001/index.svelte";
    import { useFooter } from "$lib/components/footer/content";
    const { menu, text, dataStart, option } = useFooter;
    const dataFooter = {
        option,
        menu,
        text,
        dataStart
    }

</script>

<Footer {...dataFooter}/>
