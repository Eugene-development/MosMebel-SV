<script>
    import { Panel_v_001 } from "$lib/brocker/index.js";
    import { usePanel } from "$lib/components/marketing/panel/content/index.js";

    const { Panel } = usePanel;
    const titlePage = Panel[1].title;
    const textPage = Panel[1].description;
    const data = {
        titlePage,
        textPage
    }

    const title = 'Проекты кухонных гарнитуров и шкафов купе'
    const description = 'Составляем проекты мебели под размеры вашего помещения и с учётом ваших пожеланий'
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description" content="{description}">
</svelte:head>

<Panel_v_001 {...data}/>
