<script>
    import {useVisible} from "$lib/use/functions/visible/index.js";
    import {mobileMenu} from "../../../../../stores.js";
    const { invert } = useVisible;
    const changeVisibleMobileMenu = () => mobileMenu.update(invert);
    export let menu;
</script>

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
                {#each menu as {value, path}}
                    <a href="/{path}" class="font-medium text-white hover:text-gray-300">{value}</a>
                {/each}

            </div>
        </div>
    </nav>
</div>
