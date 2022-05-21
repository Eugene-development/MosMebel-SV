<script>
    export let title;
    export let description;
</script>


<div class="mt-24 bg-gradient-to-b from-white to-gray-50">

    <div class="text-center">
        <h2 class="max-w-4xl mx-auto text-3xl tracking-tight font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-red-700 to-amber-500 sm:text-4xl">{title}</h2>
        <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">{description}</p>
    </div>

    <div class="max-w-2xl mx-auto px-4 py-8 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8 ">

        <!-- Details section -->
        <section aria-labelledby="details-heading">
            <div class="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
                <div>
                    <div class="w-full aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                        <img src="https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV1/kitchen.jpeg" alt="кухонный гарнитур" class="w-full object-center object-cover">
                    </div>
                    <div class="prose prose-sky">
                        <h3 class="mt-8 text-lg text-gray-800" class:text-gray-900={true}>В наших кухонных гарнитурах мы предлагаем:</h3>
                        <ul>
                            <li>Дизайн-проект гарнитура</li>
                        </ul>
                        <ul>
                            <li>Столешницы постформинг или жидкий камень</li>
                        </ul>
                        <ul>
                            <li>Высоту навесных ящиков под потолок</li>
                        </ul>
                        <ul>
                            <li>Монтаж и подключение встраиваемой техники</li>
                        </ul>
                        <ul>
                            <li>Подвеска навесных шкафов на шину или уголки</li>
                        </ul>
                        <ul>
                            <li>Стеновые панели с фотопечатью из закалённого стекла</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div class="w-full aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                        <img src="https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV1/shkaf.jpeg" alt="шкаф купе" class="w-full object-center object-cover">
                    </div>
                    <div class="prose prose-sky">
                        <h3 class="mt-8 text-lg text-gray-800" class:text-gray-900={true}>Заказывая шкаф вы можете приобрести по выбору:</h3>
                        <ul>
                            <li>Дизайн-проект шкафа</li>
                        </ul>
                        <ul>
                            <li>Нижнеопорная или подвесная система направляющих</li>
                        </ul>
                        <ul>
                            <li>Втраиваемую или корпусную структуру каркаса</li>
                        </ul>
                        <ul>
                            <li>4-х шарнирные петли для регулирования дверок</li>
                        </ul>
                        <ul>
                            <li>Сетчатые корзины или ящики на направляющих</li>
                        </ul>
                        <ul>
                            <li>Фотопечать или пескоструйные рисунки на дверях</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </div>
</div>
