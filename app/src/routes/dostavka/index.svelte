<script>
    import { Panel_v_001 } from "$lib/broker/index.js";
    import { usePanel } from "$lib/components/marketing/panel/content/index.js";

    const { Panel } = usePanel;
    const titlePage = Panel[3].title;
    const textPage = Panel[3].description;
    const data = {
        titlePage,
        textPage
    }

    const title = 'Доставка мебели'
    const description = 'Условия доставки шкафов купе и кухонных гарнитуров'
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description" content="{description}">
</svelte:head>

<Panel_v_001 {...data}/>
