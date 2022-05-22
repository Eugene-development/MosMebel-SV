<script>
    export let typesCabinets;
</script>
<div class="bg-gradient-to-b from-white via-white to-gray-50">
    <div class="max-w-3xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
        <div>
            <!--            <h2 class="max-w-3xl mx-auto text-4xl tracking-tight font-extrabold text-gray-800 sm:text-4xl">Распашные шкафы и шкафы купе недорого и качественно</h2>-->
            <h2 class="max-w-3xl mx-auto text-4xl tracking-tight font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-red-700 to-blue-700 sm:text-4xl">Распашные шкафы и шкафы купе недорого и качественно</h2>
            <p class="mt-4 text-gray-500">Предлагаем недорогие шкафы купе по низким ценам, а также распашные и встроенные. Под ваш размер в комнату или прихожую.</p>

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
            <img alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                 class="bg-gray-100 rounded-lg"
                 src="https://i.siteapi.org/vXeK2C7o83-hUmIDMilznLkQqKA=/fit-in/330x/top/filters:format(webp)/d03f5c6ef4e0d96.s.siteapi.org/img/d60c0cf34ce63fcd8b9e01d55efda97cbbeb2c17.JPG">
            <img alt="Top down view of walnut card tray with embedded magnets and card groove."
                 class="bg-gray-100 rounded-lg"
                 src="https://i.siteapi.org/vXeK2C7o83-hUmIDMilznLkQqKA=/fit-in/330x/top/filters:format(webp)/d03f5c6ef4e0d96.s.siteapi.org/img/d60c0cf34ce63fcd8b9e01d55efda97cbbeb2c17.JPG">
            <img alt="Side of walnut card tray with card groove and recessed card area."
                 class="bg-gray-100 rounded-lg"
                 src="https://i.siteapi.org/vXeK2C7o83-hUmIDMilznLkQqKA=/fit-in/330x/top/filters:format(webp)/d03f5c6ef4e0d96.s.siteapi.org/img/d60c0cf34ce63fcd8b9e01d55efda97cbbeb2c17.JPG">
            <img alt="Walnut card tray filled with cards and card angled in dedicated groove."
                 class="bg-gray-100 rounded-lg"
                 src="https://i.siteapi.org/vXeK2C7o83-hUmIDMilznLkQqKA=/fit-in/330x/top/filters:format(webp)/d03f5c6ef4e0d96.s.siteapi.org/img/d60c0cf34ce63fcd8b9e01d55efda97cbbeb2c17.JPG">
            <!--            <img alt="Side of walnut card tray with card groove and recessed card area."-->
            <!--                 class="bg-gray-100 rounded-lg"-->
            <!--                 src="https://i.siteapi.org/vXeK2C7o83-hUmIDMilznLkQqKA=/fit-in/330x/top/filters:format(webp)/d03f5c6ef4e0d96.s.siteapi.org/img/d60c0cf34ce63fcd8b9e01d55efda97cbbeb2c17.JPG">-->
            <!--            <img alt="Walnut card tray filled with cards and card angled in dedicated groove."-->
            <!--                 class="bg-gray-100 rounded-lg"-->
            <!--                 src="https://i.siteapi.org/vXeK2C7o83-hUmIDMilznLkQqKA=/fit-in/330x/top/filters:format(webp)/d03f5c6ef4e0d96.s.siteapi.org/img/d60c0cf34ce63fcd8b9e01d55efda97cbbeb2c17.JPG">-->
        </div>
    </div>
</div>
