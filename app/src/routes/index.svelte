<script>
	import { Main_v_001 } from "$lib/brocker/index.js";

	const title = 'Кухонные гарнитуры и шкафы купе в Москве и области от компании МосМебель'
	const description = 'Наша компания МосМебель предлагает шкафы купе и кухонные гарнитуры стандартного размера и под заказ в Москве и московской области'
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content="{description}">
</svelte:head>

<Main_v_001/>

<div class="mt-24 bg-gradient-to-b from-white to-gray-50">

	<div class="text-center">
		<h2 class="max-w-6xl mx-auto text-3xl tracking-tight font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-cyan-500 to-cyan-600 sm:text-4xl">Мебель на заказ от ведущих производителей</h2>
<!--		<h2 class="max-w-4xl mx-auto text-3xl tracking-tight font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-red-700 to-blue-700 sm:text-4xl">Мебель на заказ от ведущих производителей</h2>-->
		<p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">Мы сотрудничаем только с проверенными производителями корпусной мебели, дающие гарантии качества и адекватные цены.</p>
	</div>

	<div class="max-w-2xl mx-auto px-4 py-8 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8 ">

		<!-- Details section -->
		<section aria-labelledby="details-heading">
			<div class="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
				<div >
					<div class="w-full aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
						<img src="objects/4.jpg" alt="ремонт" class="w-full object-center object-cover">
					</div>
					<div class="prose prose-sky">
						<h3 class="mt-8 text-lg text-gray-800">В наших кухонных гарнитурах мы предлагаем:</h3>
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
						<img src="objects/9.jpg" alt="ремонт" class="w-full object-center object-cover">
					</div>
					<div class="prose prose-sky">
						<h3 class="mt-8 text-lg text-gray-800">Заказывая шкаф вы можете приобрести по выбору:</h3>
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

<!-- This example requires Tailwind CSS v2.0+ -->
<div class="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
	<div class="absolute inset-0">
		<div class="bg-white h-1/3 sm:h-2/3"></div>
	</div>
	<div class="relative max-w-7xl mx-auto">
		<div class="text-center">
			<h2 class="max-w-4xl mx-auto text-3xl tracking-tight font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-cyan-500 to-cyan-600 sm:text-4xl">Последние посты из нашего блога</h2>
<!--			<h2 class="max-w-4xl mx-auto text-3xl tracking-tight font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-red-700 to-blue-700 sm:text-4xl">Последние посты из нашего блога</h2>-->
			<p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">Интересные статьи о тенденциях, материалах, компаниях и в целом о мебельной индустрии в нашей стране и за рубежом</p>
		</div>
		<div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
			<div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
				<div class="flex-shrink-0">
					<img class="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80" alt="">
				</div>
				<div class="flex-1 bg-white p-6 flex flex-col justify-between">
					<div class="flex-1">
						<p class="text-sm font-medium text-indigo-600">
							<a href="#" class="hover:underline"> Article </a>
						</p>
						<a href="#" class="block mt-2">
							<p class="text-xl font-semibold text-gray-900">Boost your conversion rate</p>
							<p class="mt-3 text-base text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.</p>
						</a>
					</div>
					<div class="mt-6 flex items-center">
						<div class="flex-shrink-0">
							<a href="#">
								<span class="sr-only">Roel Aufderehar</span>
								<img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
							</a>
						</div>
						<div class="ml-3">
							<p class="text-sm font-medium text-gray-900">
								<a href="#" class="hover:underline"> Roel Aufderehar </a>
							</p>
							<div class="flex space-x-1 text-sm text-gray-500">
								<time datetime="2020-03-16"> Mar 16, 2020 </time>
								<span aria-hidden="true"> &middot; </span>
								<span> 6 min read </span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
				<div class="flex-shrink-0">
					<img class="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80" alt="">
				</div>
				<div class="flex-1 bg-white p-6 flex flex-col justify-between">
					<div class="flex-1">
						<p class="text-sm font-medium text-indigo-600">
							<a href="#" class="hover:underline"> Video </a>
						</p>
						<a href="#" class="block mt-2">
							<p class="text-xl font-semibold text-gray-900">How to use search engine optimization to drive sales</p>
							<p class="mt-3 text-base text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.</p>
						</a>
					</div>
					<div class="mt-6 flex items-center">
						<div class="flex-shrink-0">
							<a href="#">
								<span class="sr-only">Brenna Goyette</span>
								<img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
							</a>
						</div>
						<div class="ml-3">
							<p class="text-sm font-medium text-gray-900">
								<a href="#" class="hover:underline"> Brenna Goyette </a>
							</p>
							<div class="flex space-x-1 text-sm text-gray-500">
								<time datetime="2020-03-10"> Mar 10, 2020 </time>
								<span aria-hidden="true"> &middot; </span>
								<span> 4 min read </span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
				<div class="flex-shrink-0">
					<img class="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80" alt="">
				</div>
				<div class="flex-1 bg-white p-6 flex flex-col justify-between">
					<div class="flex-1">
						<p class="text-sm font-medium text-indigo-600">
							<a href="#" class="hover:underline"> Case Study </a>
						</p>
						<a href="#" class="block mt-2">
							<p class="text-xl font-semibold text-gray-900">Improve your customer experience</p>
							<p class="mt-3 text-base text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.</p>
						</a>
					</div>
					<div class="mt-6 flex items-center">
						<div class="flex-shrink-0">
							<a href="#">
								<span class="sr-only">Daniela Metz</span>
								<img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
							</a>
						</div>
						<div class="ml-3">
							<p class="text-sm font-medium text-gray-900">
								<a href="#" class="hover:underline"> Daniela Metz </a>
							</p>
							<div class="flex space-x-1 text-sm text-gray-500">
								<time datetime="2020-02-12"> Feb 12, 2020 </time>
								<span aria-hidden="true"> &middot; </span>
								<span> 11 min read </span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>


<div class="bg-white">
	<div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
		<div class="bg-gray-800 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
			<div class="pt-10 pb-12 px-3 sm:pt-16 sm:px-8 lg:py-16 lg:pr-0 xl:py-20 xl:px-10">
				<div class="lg:self-center">
					<h2 class=" mx-auto text-3xl tracking-tight font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-red-500 to-blue-500 ">
						<span class="block">Вы производитель?</span>
						<span class="block">Мы готовы к взаимовыгодному сотрудничеству!</span>
					</h2>
					<p class="mt-4 text-lg leading-6 text-indigo-100">Если вы заинтересованы в продвижении вашей продукциив вашем регионе и гарантируете качество и конкурентную цену, то ознакомьтесь с нашим предложением.</p>
					<a href="/partner" class="mt-8 bg-white border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-slate-800 hover:bg-indigo-50">Подробнее</a>
				</div>
			</div>
			<div class="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
				<img class="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20" src="https://tailwindui.com/img/component-images/full-width-with-sidebar.jpg" alt="App screenshot">
			</div>
		</div>
	</div>
</div>


