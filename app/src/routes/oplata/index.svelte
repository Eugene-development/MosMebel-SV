<script>
    import { Panel_v_001 } from "$lib/broker/index.js";
    import { usePanel } from "$lib/components/marketing/panel/content/index.js";

    const { Panel } = usePanel;
    const titlePage = Panel[2].title;
    const textPage = Panel[2].description;
    const data = {
        titlePage,
        textPage
    }
    const title = 'Способы оплаты за кухонные гарнитуры и шкафы купе'
    const description = 'Мы предлагаем различные варианты оплаты наличным, безналичным способом, а также в рассрочку'
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description" content="{description}">
</svelte:head>

<Panel_v_001 {...data}/>
