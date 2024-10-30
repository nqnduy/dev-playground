import Lenis from 'lenis';

let lenis;

function initLenis(options = {}) {
    lenis = new Lenis({
        smooth: true,
    });

    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
    return lenis;
}

function getLenis() {
    if (!lenis) {
        initLenis ()
    }
    return lenis;
}

export { initLenis, getLenis };
