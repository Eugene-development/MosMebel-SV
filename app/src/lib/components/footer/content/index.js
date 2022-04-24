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
            id: 2,
            value: 'Кухни',
            path: '/kuhni',
        },
        {
            id: 2,
            value: 'Блог',
            path: '/blog',
        },
        {
            id: 2,
            value: 'Контакты',
            path: '/contacts',
        },
    ]
}

const text = 'Компания "Новострой". Ремонт квартир в Дзержинске любой сложности.'
const dataStart = '2015'

export const useFooter = {
    token,
    option,
    menu,
    text,
    dataStart
}
