import {gsap} from "gsap";

const gaspText = (boxParam) => {
    const tl = gsap.timeline();
    const duration = 2;
    tl.from('#' + boxParam.box, {
        duration,
        opacity: 0
    })
        .to("#" + boxParam.box1, {duration: 1, x:10})
        .to("#" + boxParam.box2, {duration: 1, x:10})
}

export const useGasp = {
    gaspText
}
