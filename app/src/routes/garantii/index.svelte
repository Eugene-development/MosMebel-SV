<script>
    import { Panel_v_001 } from "$lib/brocker/index.js";
    import { usePanel } from "$lib/components/marketing/panel/content/index.js";

    const { Panel } = usePanel;
    const titlePage = Panel[6].title;
    const textPage = Panel[6].description;
    const data = {
        titlePage,
        textPage
    }

    const title = 'Гарантии на кухонные гарнитуры и шкафы купе'
    const description = 'Условия на гарантийные обязательства на шкафы купе и кухонные гарнитуры'
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description" content="{description}">
</svelte:head>

<Panel_v_001 {...data}/>
