import { useTestimonials } from "$lib/use/content/testimonials/index.js";

const { MainTestimonials } = useTestimonials;
const title = 'Кухонные гарнитуры и шкафы купе в Москве и области от компании МосМебель'
const description = 'Наша компания МосМебель предлагает шкафы купе и кухонные гарнитуры стандартного размера и под заказ в Москве и московской области'

export const get = () => {
    return {
        body : {
            title,
            description,
            MainTestimonials
        }
    }
}
