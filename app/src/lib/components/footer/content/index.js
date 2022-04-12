const token = import.meta.env.VITE_localhost


const option = '1'

let menu;
if (import.meta.env.VITE_localhost === '5'){
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
if (import.meta.env.VITE_localhost === '6'){
     menu = [
        {
            id: 1,
            value: 'Главная2',
            path: '/',
        },
        {
            id: 2,
            value: 'О нас2',
            path: '/about',
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
