const token = import.meta.env.VITE_LOCALHOST


const option = '1'

let menu;
if (import.meta.env.VITE_LOCALHOST === '5'){
     menu = [
        {
            id: 1,
            value: 'Главная',
            path: '/',
        },
        {
            id: 2,
            value: 'О нас',
            path: '/about',
        },
    ]
}
if (import.meta.env.VITE_LOCALHOST === '6'){
     menu = [
        {
            id: 1,
            value: 'Главная',
            path: '/',
        },
        {
            id: 2,
            value: 'Шкафы',
            path: '/shkafy',
        },
        {
            id: 3,
            value: 'Кухни',
            path: '/kuhni',
        },
        {
            id: 4,
            value: 'Блог',
            path: '/blog',
        },
        {
            id: 5,
            value: 'Партнёрам',
            path: '/partner',
        },
        {
            id: 6,
            value: 'Контакты',
            path: '/contacts',
        },
    ]
}

const text = 'Компания "МосМебель". Кухонные гарнитуры и шкафы купе под заказ.'
const dataStart = '2001'

export const useFooter = {
    token,
    option,
    menu,
    text,
    dataStart
}
