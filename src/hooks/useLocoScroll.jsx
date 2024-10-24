import { useEffect } from "react"
import LocomotiveScroll from "locomotive-scroll";


const useLocoScroll = (start) => {
    useEffect(
        () => {
            if(!start) return;

            const scrollEl = document.querySelector('[data-scroll-container]');

            const locoScroll = new LocomotiveScroll({
                el: scrollEl,
                smooth: true,
            })
        }, [start]
    )
}

export default useLocoScroll;