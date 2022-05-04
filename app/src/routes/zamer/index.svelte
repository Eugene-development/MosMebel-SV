<script>
    import { Panel_v_001 } from "$lib/brocker/index.js";
    import { usePanel } from "$lib/components/marketing/panel/content/index.js";

    const { Panel } = usePanel;
    const titlePage = Panel[0].title;
    const textPage = Panel[0].description;
    const data = {
        titlePage,
        textPage
    }
    const title = 'Замер мебели и помещения'
    const description = 'Проводим замеры помещения, что бы мебель подошла по габаритам'
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description" content="{description}">
</svelte:head>

<Panel_v_001 {...data}/>
