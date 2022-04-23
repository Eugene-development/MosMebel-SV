<script>

    import Footer from "$lib/components/footer/v_001/index.svelte";
    import { useFooter } from "$lib/components/footer/content/index.js";
    const {token,  menu, text, dataStart, option } = useFooter;
    const dataFooter = {
        token,
        option,
        menu,
        text,
        dataStart
    }

</script>

<Footer {...dataFooter}/>
