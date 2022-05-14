<script>
    export let title;
    export let description;
    export let text;
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description" content="{description}">
</svelte:head>

{@html text}
