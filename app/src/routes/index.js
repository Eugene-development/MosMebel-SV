import { contentSectionV1 } from "$lib/components/marketing/sectionV1/content/index.js";
import { contentSectionV3 } from "$lib/components/marketing/sectionV3/content/index.js";

const seoTitle = 'Кухонные гарнитуры и шкафы купе в Москве и области от компании МосМебель'
const seoDescription = 'Наша компания МосМебель предлагает шкафы купе и кухонные гарнитуры стандартного размера и под заказ в Москве и московской области'

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
