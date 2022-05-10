<script>

    import {mobileMenu} from "../../../../stores.js";
    import { Info_v_002 } from "$lib/brocker";
    import { useInfo } from "$lib/components/info/content/index.js";
    const { Info : {value} } = useInfo; //Вложенная деструктуризация
    const dataInfo = {
        value
    }
    import {useVisible} from "$lib/use/functions/visible";

    const { invert } = useVisible;

    const changeVisibleMobileMenu = () => mobileMenu.update(invert);

    import MobileMenu from "../mobile/v_001/index.svelte";


</script>

<Info_v_002 { ...dataInfo }/>

<div class="pt-1 pb-4 relative bg-gray-800 overflow-hidden">
    <nav class="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6" aria-label="Global">
        <div class="flex items-center flex-1 justify-between">
            <div class="flex mt-2 items-center justify-between w-full md:w-auto">
                <a href="/">
                    <span class="sr-only">Logo</span>
                    <img class="h-8 w-auto sm:h-12" src="https://storage.yandexcloud.net/brand-logo/mos-mebel/5.png" alt="logo">
                </a>
                <div class="-mr-2 flex items-center md:hidden">
                    <button on:click={changeVisibleMobileMenu} type="button" class="bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <!-- Heroicon name: outline/menu -->
                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="hidden space-x-10 md:flex md:ml-10 mt-3 mr-12">
                <a href="/" class="font-medium text-white hover:text-gray-300">Главная</a>

                <a href="/shkafy" class="font-medium text-white hover:text-gray-300">Шкафы</a>

                <a href="/kuhni" class="font-medium text-white hover:text-gray-300">Кухни</a>

                <a href="/blog" class="font-medium text-white hover:text-gray-300">Блог</a>

                <a href="/partner" class="font-medium text-white hover:text-gray-300">Партнёрам</a>

                <a href="/contacts" class="font-medium text-white hover:text-gray-300">Контакты</a>
            </div>
        </div>
<!--        <div class="hidden lg:flex items-center px-2">-->
<!--            <div class="">-->
<!--                <div class="flex space-x-2 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-xl items-center">-->
<!--                    &lt;!&ndash; Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" &ndash;&gt;-->
<!--                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-gray-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">-->
<!--                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />-->
<!--                    </svg>-->
<!--                    <a href="tel:+74951475550" class="text-gray-50 rounded-md text-2xl font-bold">+7 (495) 147-55-50</a>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
    </nav>


</div>

<MobileMenu/>
