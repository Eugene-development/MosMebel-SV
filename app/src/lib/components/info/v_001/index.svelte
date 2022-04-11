<script>
    export let Info
</script>

<div class="relative bg-slate-900">
    <div class="max-w-7xl mx-auto py-3 lg:px-8">
        <div class="text-center">
            <div class="font-medium text-white text-sm px-8">
                {#each Info as {value}}
                    <span>{ value } </span>
                {/each}
            </div>
        </div>
    </div>
</div>
