import {gsap} from "gsap";

const gsapOpacity = (boxParam) => {
    const tl = gsap.timeline();
    tl.from('#' + boxParam.box, {
        opacity: 0
    });
}

const gaspText = (param1, param2) => {
    const tl = gsap.timeline();
    const duration = 2;
    tl
        .to("#" + param1, {duration, x: 10, delay: 1})
        .to("#" + param2, {duration, x: 10})
}

const toBig = (param1) => {
    const tl = gsap.timeline();
    tl
        .to("#" + param1, {scale: 1.02})
}

export const useGasp = {
    gsapOpacity,
    gaspText,
    toBig
}
