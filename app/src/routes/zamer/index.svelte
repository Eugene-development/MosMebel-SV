<script>
    import { Panel_v_001 } from "$lib/brocker/index.js";
    import { usePanel } from "$lib/components/marketing/panel/content/index.js";
    import {page} from "$app/stores";

    const { Panel } = usePanel;
    const titlePage = Panel[0].title;
    const textPage = Panel[0].description;
    const data = {
        titlePage,
        textPage
    }
    const title = 'Замер мебели и помещения'
    const description = 'Проводим замеры помещения, что бы мебель подошла по габаритам'




    let bearer;
    switch ($page.url.host){
        case 'localhost:30001':
            bearer = import.meta.env.VITE_MOSMEBEL_TOKEN
            break;
        case 'localhost:3000':
            bearer = import.meta.env.VITE_KAZAN_TOKEN
            break;
    }




</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description" content="{description}">
</svelte:head>


<!--{bearer}-->
<Panel_v_001 {...data}/>
