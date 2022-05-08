import { usePanel } from "$lib/components/marketing/panel/content/index.js";

const { Panel } = usePanel;
const titlePage = Panel[4].title;
const textPage = Panel[4].description;
const data = {
    titlePage,
    textPage
}

export async function get() {
    return {
        body: {
            data,
            title: 'Подъём на этаж мебели',
            description: 'Условия подъёма приобретённой вами мебели на этаж на лифте или по лестничным проёмам'
        }
    }
}
