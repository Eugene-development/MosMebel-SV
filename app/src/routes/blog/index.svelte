<script>
    const title = 'Блог компании МосМебель'
    const description = 'Полезная информация о шкафах купе и кухонных гарнитурах'
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description" content="{description}">
</svelte:head>

<!-- This example requires Tailwind CSS v2.0+ -->
<div class="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
    <div class="absolute inset-0">
        <div class="bg-white h-1/3 sm:h-2/3"></div>
    </div>
    <div class="relative max-w-7xl mx-auto">
        <div class="text-center">
            <h2 class="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl">Наш блог</h2>
            <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">Информационные статьи на тему мебельной индустрии от отечественных и зарубежных авторов</p>
        </div>
        <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">


            <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div class="flex-shrink-0">
                    <img class="h-64 w-full object-cover" src="https://i.siteapi.org/GWKmj-S1IJOOThT-VYLSKShGOTU=/fit-in/330x/top/filters:format(webp)/d03f5c6ef4e0d96.s.siteapi.org/img/c1a3df5b8fccc6110e91457c0e57dc4c5a860a88.jpg" alt="шкаф купе">
                </div>
                <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                    <div class="flex-1">
                        <p class="text-sm font-medium text-teal-600">
                            <a href="post/1" class="hover:underline"> Статья </a>
                        </p>
                        <a href="post/1" class="block mt-2">
                            <p class="text-xl font-semibold text-gray-900">Выбрать шкаф купе</p>
                            <p class="mt-3 text-base text-gray-500">Помимо удобной кровати или трельяжа в спальной комнате неизменно присутствуют и другие предметы мебели такие как распашной шкаф или шкаф купе. Чтобы...</p>
                        </a>
                    </div>
                    <div class="mt-6 flex items-center">
                        <div class="flex-shrink-0">
                            <a href="#">
                                <span class="sr-only">Евгений Че</span>
                                <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                            </a>
                        </div>
                        <div class="ml-3">
                            <p class="text-sm font-medium text-gray-900">
                                <span class="hover:underline"> Евгений Че </span>
                            </p>
                            <div class="flex space-x-1 text-sm text-gray-500">
                                <time datetime="2020-03-16"> Май 10, 2022 </time>
                                <span aria-hidden="true"> &middot; </span>
                                <span> 6 мин на чтение </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
