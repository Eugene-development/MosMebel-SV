<script>
    export let pathImg
    export let title
    export let description
</script>

<div class="relative">
    <div class="absolute inset-0">
        <img class="w-full h-full object-cover grayscale" src="{pathImg}" alt="">
        <div class="absolute inset-0 bg-gray-800 mix-blend-multiply" aria-hidden="true"></div>
    </div>
    <div class="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">{title}</h1>
        <p class="mt-6 text-xl text-indigo-100 max-w-3xl">{description}</p>
    </div>
</div>
