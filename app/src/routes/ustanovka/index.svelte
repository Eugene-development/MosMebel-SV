<script>
    import { Panel_v_001 } from "$lib/brocker/index.js";
    import { usePanel } from "$lib/components/marketing/panel/content/index.js";

    const { Panel } = usePanel;
    const titlePage = Panel[5].title;
    const textPage = Panel[5].description;
    const data = {
        titlePage,
        textPage
    }

    const title = 'Установка кухонных гарнитуров и шкафов купе'
    const description = 'Вы можете установить мебель самостоятельно или с помощью наших специалистов'
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description" content="{description}">
</svelte:head>

<Panel_v_001 {...data}/>
