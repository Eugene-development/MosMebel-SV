<script>
    export let typesCabinets;
    export let imgCabinets;
</script>
<div class="bg-gradient-to-b from-white via-white to-gray-50">
    <div class="max-w-3xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
        <div>
                        <h2 class="max-w-3xl mx-auto text-4xl tracking-tight font-extrabold text-gray-800 sm:text-3xl">Распашные шкафы и шкафы купе недорого и качественно</h2>
<!--            <h2 class="max-w-3xl mx-auto text-3xl tracking-tight font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-red-700 to-blue-700 sm:text-3xl">Распашные шкафы и шкафы купе недорого и качественно</h2>-->
            <p class="mt-4 text-gray-500">Рассмотрите недорогие шкафы купе по низким ценам, а также распашные и встроенные шкафы. Выполним заказ под ваш размер в комнату или прихожую. Предложим варианты сочетания материалов и цветов в зависимости от ваших пожеланий и ценовой политики.</p>

            <dl class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                {#each typesCabinets as {title, description}}
                    <div class="border-t border-gray-200 pt-4">
                        <dt class="font-medium text-gray-900">{title}</dt>
                        <dd class="mt-2 text-sm text-gray-500">{description}</dd>
                    </div>
                {/each}
            </dl>
        </div>
        <div class="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-4 lg:gap-6">
            {#each imgCabinets as {img, alt}}
                <img class="bg-gray-100 rounded-lg" src="{img}" alt="{alt}">
            {/each}
        </div>
    </div>
</div>
