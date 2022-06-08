<script>
    import { MarketingSectionV4, MarketingSectionV5 } from "$lib/broker";

    export let seoTitle;
    export let seoDescription;
    export let dataMarketingSectionV4;
    export let contentMarketingSectionV5;
</script>

<svelte:head>
    <title>{seoTitle}</title>
    <meta name="description" content="{seoDescription}">
</svelte:head>

<MarketingSectionV4 {...dataMarketingSectionV4}/>
<MarketingSectionV5 {...contentMarketingSectionV5}/>

<div class="relative py-16 bg-gradient-to-b from-white via-white to-gray-50 overflow-hidden">
    <div class="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <div aria-hidden="true" class="relative h-full text-lg max-w-prose mx-auto">
            <svg class="absolute top-12 left-full transform translate-x-32" fill="none" height="384"
                 viewBox="0 0 404 384"
                 width="404">
                <defs>
                    <pattern height="20" id="74b3fd99-0a6f-4271-bef2-e80eeafdf357" patternUnits="userSpaceOnUse"
                             width="20" x="0" y="0">
                        <rect class="text-gray-200" fill="currentColor" height="4" width="4" x="0" y="0"/>
                    </pattern>
                </defs>
                <rect fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" height="384" width="404"/>
            </svg>
            <svg class="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32" fill="none" height="384"
                 viewBox="0 0 404 384" width="404">
                <defs>
                    <pattern height="20" id="f210dbf6-a58d-4871-961e-36d5016a0f49" patternUnits="userSpaceOnUse"
                             width="20" x="0"
                             y="0">
                        <rect class="text-gray-200" fill="currentColor" height="4" width="4" x="0" y="0"/>
                    </pattern>
                </defs>
                <rect fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" height="384" width="404"/>
            </svg>
            <!--        <svg class="absolute bottom-12 left-full transform translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">-->
            <!--          <defs>-->
            <!--            <pattern id="d3eb07ae-5182-43e6-857d-35c643af9034" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">-->
            <!--              <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />-->
            <!--            </pattern>-->
            <!--          </defs>-->
            <!--          <rect width="404" height="384" fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />-->
            <!--        </svg>-->
        </div>
    </div>

    <div class="relative px-4 sm:px-6 lg:px-8">
        <div class="text-lg max-w-prose mx-auto">
            <h1>
                <span class="block text-4xl text-center leading-8 font-extrabold tracking-tight text-gray-800 sm:text-5xl">Качественные шкафы</span>
            </h1>
            <div class="mt-8 text-xl text-gray-500 leading-8">
                <p> Шкафы остаются одним из наиболее распространенных предметов мебели, более удобного варианта для
                    хранения вещей представить сложно. Независимо от того, планируете ли вы купить шкаф купе или
                    классическую распашную модель, важно обратить внимание на следующие особенности:</p>
                <ul>
                    <li>размер шкафа;</li>
                    <li>количество и расположение секций;</li>
                    <li>материал, из которого изготовлена мебель;</li>
                    <li>стиль оформления комнаты;</li>
                    <li>индивидуальные предпочтения.</li>
                </ul>
                <p> Перед тем как купить распашной шкаф, стоит точно определить, в какой из комнат он будет
                    располагаться и для хранения каких вещей использоваться. Интуитивно понятно, что мебель для
                    гардеробной, спальной и детской комнаты будет существенно различаться как по функциональности, так и
                    по дизайну.</p>
                <p> Немаловажное значение имеют габариты комнаты, для небольших площадей идеальным вариантом считаются
                    угловые модели, а также шкафы-купе с раздвижной системой. Компактные шкафы-пеналы тоже подойдут для
                    небольших комнат.</p>
                <p> Определиться с выбором и купить лучшие шкафы купе в Москве поможет наша компания «Мос-Мебель».</p>
            </div>
        </div>
        <div class="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
            <!--        <h3>Ждём вас!!!</h3>-->
            <figure>
                <!--          <img class="w-full rounded-lg" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3" alt="" width="1310" height="873">-->
            </figure>
            <!--        <p>Purus morbi dignissim senectus mattis <a href="#">adipiscing</a>. Amet, massa quam varius orci dapibus volutpat cras. In amet eu ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut viverra ridiculus non molestie. Gravida quis fringilla amet eget dui tempor dignissim. Facilisis auctor venenatis varius nunc, congue erat ac. Cras fermentum convallis quam.</p>-->
            <!--        <p>Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.</p>-->
        </div>
    </div>
</div>
