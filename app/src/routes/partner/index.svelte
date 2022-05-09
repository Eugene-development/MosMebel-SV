<script>
    const title = 'Условия сотрудничества'
    const description = 'Мы предлагаем взаимовыгодное сотрудничество с производителями корпусной мебели'
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description" content="{description}">
</svelte:head>

<!-- This example requires Tailwind CSS v2.0+ -->
<div class="relative bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto">
        <div class="relative z-10 pb-8 bg-white  lg:max-w-2xl lg:w-full sm:pb-16 md:pb-20 lg:pb-28 xl:pb-48">
            <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <div>
                <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
                    <div class="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                        <div class=" md:pr-4 md:space-x-8">
                            <a href="#anchor-1" class="font-medium text-gray-500 hover:text-gray-900">Требования</a>

                            <a href="#anchor-2" class="font-medium text-gray-500 hover:text-gray-900">Гарантии</a>

                            <a href="#anchor-3" class="font-medium text-gray-500 hover:text-gray-900">Цены</a>

                            <a href="#anchor-4" class="font-medium text-gray-500 hover:text-gray-900">Сервис</a>

                            <a href="#anchor-5" class="font-medium text-gray-500 hover:text-gray-900">Финансы</a>
                        </div>
                    </div>
                </div>

            </div>

            <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div class="sm:text-center lg:text-left">
                    <h1 class="text-4xl tracking-tight font-extrabold  ">
                        <span class="block xl:inline sm:text-4xl md:text-5xl text-slate-700">Будем вместе делать</span> <br>
                        <span class="block bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-red-700 to-blue-700 xl:inline sm:text-6xl md:text-7xl">ЭТОТ БИЗНЕС</span>
                    </h1>
                    <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">Предлагаем взаимовыгодное и долгосрочное сотрудничество в вашем городе по обслуживанию спроса на мебельную продукцию.
                        <br> Для получения лицензии оставьте заявку.</p>
                    <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                        <div class="rounded-md shadow">
                            <button class="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-900 via-blue-600 to-blue-900 hover:from-blue-600 hover:via-blue-900 hover:to-blue-600 md:py-4 md:text-lg md:px-10"> Оформить заявку </button>
<!--                            <button class="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-500 via-red-700 to-blue-700 md:py-4 md:text-lg md:px-10"> Оформить заявку </button>-->
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
    <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt="">
    </div>
</div>


<div class="bg-gray-800" id="anchor-1">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:flex lg:justify-between">
        <div class="max-w-3xl">
            <h2 class="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">Требования</h2>
            <p class="mt-5 text-xl text-gray-400">Прежде всего хотелось бы видеть в партнёрах компанию, настроенную на долгострочное сотрудничество и располагающую потенциалом к росту.</p>
            <p class="mt-5 text-xl text-gray-400">У вас должны быть такие производственные мощности, которые имеют возможность для увеличения объёмов выпускаемой продукции.</p>
            <p class="mt-5 text-xl text-gray-400">Штат</p>

        </div>
    </div>
</div>
<hr>
<div class="bg-gray-800" id="anchor-2">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:flex lg:justify-between">
        <div class="max-w-xl">
            <h2 class="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">Гарантии</h2>
            <p class="mt-5 text-xl text-gray-400">Необходимо предоставлять гарантии на продукцию от 12 до 36 месяцев и более по возможности.</p>
            <p class="mt-5 text-xl text-gray-400">Отдельным соглашением нужно предоставить гарантии на услуги по сборке и установке мебели.</p>
        </div>
    </div>
</div>
<hr>
<div class="bg-gray-800" id="anchor-3">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:flex lg:justify-between">
        <div class="max-w-xl">
            <h2 class="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">Цены</h2>
            <p class="mt-5 text-xl text-gray-400">Ценовая политика однозначно предполагается в конкурентном поле без перегибов. Мы как компания партнёр будем отслеживать конкурентную тональность и по ценовому критерию в том числе.</p>
            <p class="mt-5 text-xl text-gray-400">Поощряется проведение акций, нацеленных на обслуживание спроса аудитории с пониженной покупатеьской способностью.</p>
        </div>
    </div>
</div>
<hr>
<div class="bg-gray-800" id="anchor-4">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:flex lg:justify-between">
        <div class="max-w-xl">
            <h2 class="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">Сервис</h2>
            <p class="mt-5 text-xl text-gray-400">Желательно наличие складского помещение на случай, если клиент пожелает забрать заказ самовывозом.</p>
            <p class="mt-5 text-xl text-gray-400">Для облегчения процесса заказа мебели надеемся, что у вас есть замерщик.</p>
            <p class="mt-5 text-xl text-gray-400">Достаточное количество бригад монтажников не создаст ситуацию, когда заказчик долго ждёт установки.</p>
            <p class="mt-5 text-xl text-gray-400">Оперативное решение рекламаций сохранит клиентскую базу на более высоком уровне.</p>
        </div>
    </div>
</div>
<hr>
<div class="bg-gray-800" id="anchor-5">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:flex lg:justify-between">
        <div class="max-w-xl">
            <h2 class="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">Финансы</h2>
            <p class="mt-5 text-xl text-gray-400">взаимоотношения</p>
            <p class="mt-5 text-xl text-gray-400">лично</p>
        </div>
    </div>
</div>

<style>
    .scroll-container {
        overflow-y: scroll;
        scroll-behavior: smooth;
    }
</style>
