const seoTitle = 'Купить кухонный гарнитур в Москве в компании МосМебель'
const seoDescription = 'Информация о том как купить кухонный гарнитур по низким ценам в Москве'

const dataMarketingSectionV4 = {
    title: 'Кухонные гарнитуры в Москве',
    description: 'Кухонные гарнитуры с учётом всех нюансов вашего помещения и пожеланий',
    pathImg: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/kitchens/4.jpg'
}

const mainText =
    {
        title: 'Кухонные гарнитуры на заказ и по стандартным модулям',
        description: 'Недорогие кухонные гарнитуры по низким ценам. Выбирайте наиболее подходящий под ваши нужды вариант.'
    }

const img = [
    {
        path: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/kitchens/1.jpg',
        alt: ''
    },
    {
        path: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/kitchens/2.jpg',
        alt: ''
    },
    {
        path: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/kitchens/3.jpg',
        alt: ''
    },
    {
        path: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/kitchens/5.jpg',
        alt: ''
    },
    {
        path: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/kitchens/6.jpg',
        alt: ''
    },
    {
        path: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/kitchens/7.jpg',
        alt: ''
    },
]

const types = [
    {
        title: 'Прямые',
        description: 'Прямые линейные кухонные гарнитуры во всю стену'
    },
    {
        title: 'Угловые',
        description: 'Угловые кухонные гарнитуры на один или два угла'
    },
    {
        title: 'Встроенные',
        description: 'Встроенные кухонные гарнитуры от пола до потолка'
    },
    {
        title: 'Модульные',
        description: 'Модули кухонных гарнитуров, которые вам нужны'
    },
    {
        title: 'Пластик',
        description: 'Кухонные гарнитуры с фасадами из пластика в профиле'
    },
    {
        title: 'МДФ ПВХ',
        description: 'Кухонные гарнитуры с фасадами из МДФ с покрытием ПВХ'
    },
]

const contentMarketingSectionV5 = {
    mainText,
    img,
    types
}


export const get = () => {
    return {
        body : {
            seoTitle,
            seoDescription,
            dataMarketingSectionV4,
            contentMarketingSectionV5
        }
    }
}
