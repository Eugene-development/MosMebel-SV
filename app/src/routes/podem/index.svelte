<script>
    import { Panel_v_001 } from "$lib/brocker/index.js";
    import { usePanel } from "$lib/components/marketing/panel/content/index.js";

    const { Panel } = usePanel;
    const titlePage = Panel[4].title;
    const textPage = Panel[4].description;
    const data = {
        titlePage,
        textPage
    }

    const title = 'Подъём на этаж мебели'
    const description = 'Условия подъёма приобретённой вами мебели на этаж на лифте или по лестничным проёмам'
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description" content="{description}">
</svelte:head>

<Panel_v_001 {...data}/>
