
const seoTitle = 'Кухонные гарнитуры и шкафы купе в Москве и области от компании МосМебель'
const seoDescription = 'Наша компания МосМебель предлагает шкафы купе и кухонные гарнитуры стандартного размера и под заказ в Москве и московской области'


const mainTestimonials = [
    {
        id: 1,
        date: '2 янв 2022',
        name: 'Евгений Васильевич Дёмин',
        text: 'Мне всё понравилось. Мебель заказывал для съёмной квартиры и по деньгам в бюджет в аккурат уложился. Качество вполне на уровне. Проверял сторого! Рекомендую к сотрудничеству',
        img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/testimonials/3.png'
    },
    {
        id: 1,
        date: '14 фев 2022',
        name: 'Арсен Р.',
        text: 'Ребята поработали. Мусор вывезли, за что им отдельное спасибо) Заказывал недорогой кухонный нарнитур по рекомендации соседей. Не ошибся чему рад))',
        img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/testimonials/1.png'
    },
    {
        id: 1,
        date: '29 янв 2022',
        name: 'Таня Самойлова',
        text: 'Перед празниками ребята усиленно работали. Боялась что не успеют до Нового года. Пьющих нет. Активные и порядочные. Делали мебель на второй этаж в доме. Живём не в городе, но приезжали как часы. Я довольна. Спасибо!',
        img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/testimonials/2.png'
    },
]
const contentSectionV1 = {
    title: 'Мебель на заказ от ведущих производителей',
    description: 'Мы сотрудничаем только с проверенными производителями корпусной мебели, дающие гарантии качества и адекватные цены.'
}

const contentSectionV3 = {
    mainTestimonials
}

export const get = () => {
    return {
        body : {
            seoTitle,
            seoDescription,
            contentSectionV1,
            contentSectionV3
        }
    }
}
