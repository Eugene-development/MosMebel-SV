import { useTestimonials } from "$lib/use/content/testimonials/index.js";

const { MainTestimonials } = useTestimonials;

export const get  = () => {
    return {
        body : {
            MainTestimonials
        }
    }
}
