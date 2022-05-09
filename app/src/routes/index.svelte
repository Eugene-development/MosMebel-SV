<script>
	import { Main_v_001 } from "$lib/brocker/index.js";

	const title = 'Кухонные гарнитуры и шкафы купе в Москве и области от компании МосМебель'
	const description = 'Наша компания МосМебель предлагает шкафы купе и кухонные гарнитуры стандартного размера и под заказ в Москве и московской области'

	export let MainTestimonials;
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
						<img src="objects/9.jpg" alt="ремонт" class="w-full object-center object-cover">
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


<!--			<div class="flex flex-col rounded-lg shadow-lg overflow-hidden">-->
<!--				<div class="flex-shrink-0">-->
<!--					<img class="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80" alt="">-->
<!--				</div>-->
<!--				<div class="flex-1 bg-white p-6 flex flex-col justify-between">-->
<!--					<div class="flex-1">-->
<!--						<p class="text-sm font-medium text-indigo-600">-->
<!--							<a href="#" class="hover:underline"> Article </a>-->
<!--						</p>-->
<!--						<a href="#" class="block mt-2">-->
<!--							<p class="text-xl font-semibold text-gray-900">Boost your conversion rate</p>-->
<!--							<p class="mt-3 text-base text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.</p>-->
<!--						</a>-->
<!--					</div>-->
<!--					<div class="mt-6 flex items-center">-->
<!--						<div class="flex-shrink-0">-->
<!--							<a href="#">-->
<!--								<span class="sr-only">Roel Aufderehar</span>-->
<!--								<img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">-->
<!--							</a>-->
<!--						</div>-->
<!--						<div class="ml-3">-->
<!--							<p class="text-sm font-medium text-gray-900">-->
<!--								<a href="#" class="hover:underline"> Roel Aufderehar </a>-->
<!--							</p>-->
<!--							<div class="flex space-x-1 text-sm text-gray-500">-->
<!--								<time datetime="2020-03-16"> Mar 16, 2020 </time>-->
<!--								<span aria-hidden="true"> &middot; </span>-->
<!--								<span> 6 min read </span>-->
<!--							</div>-->
<!--						</div>-->
<!--					</div>-->
<!--				</div>-->
<!--			</div>-->

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


<div class="py-16 bg-gray-50 overflow-hidden">
	<div class="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
		<div class="text-base max-w-prose mx-auto lg:max-w-none">
			<h2 class="text-base text-main font-semibold tracking-wide uppercase">Компания</h2>
			<p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Мос-Мебель</p>
		</div>
		<div class="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
			<div class="relative z-10">
				<div class="prose prose-main text-gray-500 mx-auto lg:max-w-none">
					<p>Компания «Мос-мебель» предлагает стильную и функциональные шкафы купе и кухонные гарнитуры, которые идеально впишутся в общую концепцию вашего интерьера. Каталог насчитывает более 2500 вариантов реализации ваших идей. Но если вы не нашли подходящее решение, то дизайнеры составят индивидуальный проект с учетом ваших требований и финансовых возможностей. Поэтому даже самый притязательный покупатель выберет для себя идеальный вариант. К вашим услугам бесплатный выезд замерщика.</p>
					<p>Все модели мебели изготавливаются из надежных, проверенных материалов, качественной фурнитуры, за счет чего прослужат долгое время, сохранив безупречный вид. Вашему вниманию кухонные гарнитуры по низкой цене и недорогие шкафы-купе для обустройства вашей квартиры, загородного дома, дачи или офиса.</p>
					<p>Надеемся вас обрадуют адекватные цены, высокий уровень обслуживания, оперативная доставка и услуги по установке мебели. Воплотите свои мечты об идеальном кухонном гарнитуре или шкафе-купе вместе с нашей компанией «Мос-Мебель».Наши сотрудники постоянно совершенствуют свои знания, отслеживают новые тенденции, чтобы предложить вам самый подходящий вариант. Так же у нас постоянно расширяется модельный ряд, внедряются свежие дизайнерские разработки и применяется креативный подход.</p>
					<h3>Преимущества покупки и заказа мебели в в нашей компании:</h3>
					<ul>
						<li>Большой выбор, который удовлетворит предпочтения каждого покупателя</li>
						<li>Возможность заказать изготовление мебели по индивидуальному размеру</li>
						<li>Производство на высокоточном европейском оборудовании</li>
						<li>Эргономичный дизайн, функциональность</li>
						<li>Разнообразие форм изделий</li>
						<li>Приемлемая цена</li>
					</ul>
				</div>
				<div class="mt-10 flex text-base max-w-prose mx-auto lg:max-w-none">
					<div class="rounded-md shadow">
						<a href="#" class="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 ">
							Записаться на замер
						</a>
					</div>
				</div>
			</div>
			<div class="mt-12 relative text-base max-w-prose mx-auto lg:mt-0 lg:max-w-none">
				<svg class="absolute top-0 right-0 -mt-20 -mr-20 lg:top-auto lg:right-auto lg:bottom-1/2 lg:left-1/2 lg:mt-0 lg:mr-0 xl:top-0 xl:right-0 xl:-mt-20 xl:-mr-20" width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true">
					<defs>
						<pattern id="bedc54bc-7371-44a2-a2bc-dc68d819ae60" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
							<rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
						</pattern>
					</defs>
					<rect width="404" height="384" fill="url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)" />
				</svg>


				{#each MainTestimonials as { name, text }}
				<blockquote class="mb-6 relative bg-white rounded-lg shadow-lg">
					<div class="rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8 ">

						<div class="relative text-lg text-gray-700 font-medium mt-8">
							<svg class="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-200" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
								<path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
							</svg>
							<p class="relative">{ text }</p>
						</div>
					</div>
					<div class="relative flex items-center sm:items-start bg-gray-800 rounded-b-lg not-italic py-5 px-6 sm:py-5 sm:pl-12 sm:pr-10 sm:mt-10">
						<div class="relative rounded-full border-2 border-white sm:absolute sm:top-0 sm:transform sm:-translate-y-1/2">
							<img class="w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-main" src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=160&h=160&q=80" alt="">
						</div>
						<div class="relative ml-4 text-main font-semibold leading-6 sm:ml-24 sm:pl-1">
						  <p class="text-white font-semibold sm:inline">{ name }</p>
						</div>
					</div>
				</blockquote>
				{/each}


			</div>
		</div>
	</div>
</div>


