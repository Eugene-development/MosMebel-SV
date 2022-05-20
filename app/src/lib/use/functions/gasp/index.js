import {gsap} from "gsap";

const gsapOpacity = (boxParam) => {
    const tl = gsap.timeline();
    tl.from('#' + boxParam.box, {
        opacity: 0
    });
}

const gaspText = (boxParam) => {
    const tl = gsap.timeline();
    const duration = 1;
    tl
        .to("#" + boxParam.box1, {duration, x: 10})
        .to("#" + boxParam.box2, {duration, x: 10})
}

export const useGasp = {
    gsapOpacity,
    gaspText
}
