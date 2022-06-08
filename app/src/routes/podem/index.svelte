<script>
    import { Panel_v_001 } from "$lib/broker";

    export let data;
    export let title;
    export let description;
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description" content="{description}">
</svelte:head>

<Panel_v_001 {...data}/>
