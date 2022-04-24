<script>
	const title = 'Кухонные гарнитуры и шкафы купе в Москве и области'
	const description = 'Предлагаем шкафы купе и кухонные гарнитуры стандартного размера и под заказ в Москве и области'
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content="{description}">
</svelte:head>

<div class="relative bg-gray-900 overflow-hidden ">
	<div class="max-w-screen-xl mx-auto">
		<div class="relative z-5 pb-2 bg-gray-900 sm:pb-10 md:pb-10 lg:max-w-2xl lg:w-full lg:pb-5 xl:pb-5">
			<svg
					class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-gray-900 transform translate-x-1/2"
					fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
				<polygon points="50,0 100,0 50,100 0,100"/>
			</svg>
			<div
					class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
				<div class="lg:py-24">
					<a href="/contacts" class="inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200">
						<span class="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-gradient-to-r from-green-500 to-cyan-600 rounded-full">Мы работаем</span>
						<span class="ml-4 text-sm">Посетите наш офис</span>
						<!-- Heroicon name: solid/chevron-right -->
						<svg class="ml-2 w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
							 fill="currentColor" aria-hidden="true">
							<path fill-rule="evenodd"
								  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
								  clip-rule="evenodd"/>
						</svg>
					</a>
					<h1 class="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-5xl lg:mt-6 xl:text-5xl">
<!--						<span class="block">{mainText}</span>-->
						<span class="pb-3 block bg-clip-text text-transparent bg-gradient-to-r from-green-200 to-cyan-400 sm:pb-5">любой сложности</span>
					</h1>
					<p class="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
						Дарим каждому клиенту дизайн проект!
					</p>
					<div class="mt-10 sm:mt-12">
						<form  class="sm:max-w-xl sm:mx-auto lg:mx-0">
							<div class="sm:flex">

								{#if false}

									<div class="min-w-0 flex-1">
										<label for="phone" class="sr-only">Phone</label>
										<input  required id="phone" type="tel" placeholder="Укажите телефон для консультации"
											   class="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900">
									</div>
									<div class="mt-3 sm:mt-0 sm:ml-3">
										<button type="submit"
												class="block w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-green-600 to-cyan-700 text-white font-medium hover:from-green-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900">
											Отправить
										</button>
									</div>
								{:else}
									<div class="mt-3 sm:mt-0 ">
											<span class="block w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-green-500 to-cyan-600 text-white font-medium hover:from-green-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900">
											  Спасибо за доверие
											</span>
									</div>
								{/if}

							</div>
							<p class="mt-3 text-sm text-gray-300 sm:mt-4">В течении дня с вами свяжется специалист и даст подробную консультацию.
								<br>Услуга бесплатная.</p>
						</form>
					</div>
				</div>
			</div>


		</div>
	</div>
	<div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
		<img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
			 src="objects/4.jpg" alt="main">
		<!--                 src="https://noginsk-remont.ru/wp-content/uploads/2020/09/kosmetika.jpg" alt="">-->
		<!--                 src="https://stroy-okey.ru/wp-content/uploads/2020/10/2020-10-21_14-50-01.png" alt="">-->
		<!--             src="https://remont-kvartir-v-msk.ru/uploads/posts/2016-04/1459917460_istock_000016196507large_shironosov.jpg" alt="">-->
	</div>
</div>


<div class="">
	<div class="max-w-2xl mx-auto px-4 py-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
		<!-- Details section -->
		<section aria-labelledby="details-heading">
			<div class="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
				<div >
					<div class="w-full aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
						<img src="objects/4.jpg" alt="ремонт" class="w-full object-center object-cover">
					</div>
					<div class="prose prose-sky">
						<h3 class="mt-8 text-base text-gray-800">По желанию заказчика была отремонтирована только одна комната и выполнены следующие работы по капитальному ремонту:</h3>
						<ul>
							<li>
								Замена деревянного оконного блока на двух камерный стеклопакет от фирмы «Rehau»
							</li>
							<li>
								Произведен демонтаж старого деревянного напольного покрытия с последующим выравниванием полов и выкладки нового напольного покрытия в виде «Ламината» от фирмы «Egger»
							</li>
							<li>
								Демонтаж обоев и штукатурки на стенах с последующим выравниванием стен и поклейкой обоев
							</li>
							<li>
								Замена старых труб и радиатора отопления на новые пластиковые
							</li>
							<li>
								Возведен, обшит и покрашен каркас для двух уровневого потолка, установлено полотно натяжного потолка, также была произведена полная замена электрики с выведением новых групп розеток, выключателей и установлено освещение в виде спотов
							</li>
							<li>
								Также нашими сотрудниками были выполнены работы по сборке и установке мебели, установке телевизора, установке карниза, штор и тюлей
							</li>
						</ul>
					</div>
				</div>
				<div>
					<div class="w-full aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
						<img src="objects/9.jpg" alt="ремонт" class="w-full object-center object-cover">
					</div>
					<div class="prose prose-sky">
						<h3 class="mt-8 text-base text-gray-800">Так как квартира нам досталась от застройщика то были выполнены следующие работы по ремонту "под ключ":</h3>
						<ul>
							<li>
								По желанию клиента ремонт был выполнен в стилистике «Лофт»
							</li>
							<li>
								Были окрашены стены грунтовкой глубокого проникновения, для предотвращения осыпания и маркости стен
							</li>
							<li>
								Заменена дверная коробка межкомнатных дверей
							</li>
							<li>
								Заменен радиатор отопления на новый от фирмы «Royal»
							</li>
							<li>
								Возведен, обшит и покрашен каркас для двух уровневого потолка, покрашен потолок, по периметру потолка было выполнено освещение в виде светодиодной ленты подключенная через «диммер» для регулирования яркости светового потока и выбора цвета
							</li>
							<li>
								Возведена ниша под телевизор из ГВЛ с подсветкой, обшитая ламинатом от фирмы «Kronotex»
							</li>
							<li>
								Также нашими сотрудниками были выполнены работы по сборке и установке мебели, монтажу плазменного телевизора, установке карниза и штор
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	</div>
</div>


<div class="bg-white">
	<div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
		<div class="bg-indigo-700 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
			<div class="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
				<div class="lg:self-center">
					<h2 class="text-3xl font-extrabold text-white sm:text-4xl">
						<span class="block">Ready to dive in?</span>
						<span class="block">Start your free trial today.</span>
					</h2>
					<p class="mt-4 text-lg leading-6 text-indigo-200">Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.</p>
					<a href="#" class="mt-8 bg-white border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-indigo-600 hover:bg-indigo-50">Sign up for free</a>
				</div>
			</div>
			<div class="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
				<img class="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20" src="https://tailwindui.com/img/component-images/full-width-with-sidebar.jpg" alt="App screenshot">
			</div>
		</div>
	</div>
</div>
