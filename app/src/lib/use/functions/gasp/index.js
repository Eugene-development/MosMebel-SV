import {gsap} from "gsap";

const gaspText = () => {
    const tl = gsap.timeline();
    const duration = 2;
    tl.from('#test2', {
        duration,
        opacity: 0
    })
        .to("#box1", {duration: 1, x:10})
        .to("#box2", {duration: 1, x:10})
}

export const useGasp = {
    gaspText
}
