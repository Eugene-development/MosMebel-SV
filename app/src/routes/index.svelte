<script>
	import { Main_v_001} from "$lib/brocker/index.js";

	const title = 'Кухонные гарнитуры и шкафы купе в Москве и области'
	const description = 'Предлагаем шкафы купе и кухонные гарнитуры стандартного размера и под заказ в Москве и области'
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content="{description}">
</svelte:head>

<Main_v_001/>

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
