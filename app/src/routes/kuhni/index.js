const seoTitle = 'Купить кухонный гарнитур в Москве в компании МосМебель'
const seoDescription = 'Информация о том как купить кухонный гарнитур по низким ценам в Москве'

const dataMarketingSectionV4 = {
    title: 'Кухонные гарнитуры в Москве',
    description: 'Кухонные гарнитуры с учётом всех нюансов вашего помещения и пожеланий',
}

export const get = () => {
    return {
        body : {
            seoTitle,
            seoDescription,
            dataMarketingSectionV4
        }
    }
}
