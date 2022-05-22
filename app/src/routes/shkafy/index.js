const seoTitle = 'Купить шкафы купе в Москве в компании МосМебель'
const seoDescription = 'Информация о том как купить шкаф купе по низким ценам в Москве'

const dataMarketingSectionV4 = {
    title: 'Шкафы купе в Москве и области',
    description: 'Шкафы купе в Москве под ваши размеры. Дизайн проект в подарок.',
}


const imgCabinets = [

]

const typesCabinets = [
    {
        title: 'Шкафы купе',
        description: 'Подвесная и нижнеопорная система высокого качества'
    },
    {
        title: 'Распашные',
        description: 'Двух, трёх и четырёх створчатые с выдвижными ящиками'
    },
    {
        title: 'Встроенные',
        description: 'Безкаркасные со встраиваемыми полками влитые в нишу'
    },
    {
        title: 'Гардеробные',
        description: 'Полнофункциональные гардеробные с любым наполнением'
    },
    {
        title: 'Двери купе',
        description: 'В качестве перегородок или для замены старых дверей'
    },
    {
        title: 'Офисные',
        description: 'Стильные и строгие варианты шкафов для офисных помещений'
    },
]

const contentMarketingSectionV5 = {
    imgCabinets,
    typesCabinets
}

export const get = () => {
    return {
        body : {
            seoTitle,
            seoDescription,
            dataMarketingSectionV4,
            contentMarketingSectionV5,
        }
    }
}
