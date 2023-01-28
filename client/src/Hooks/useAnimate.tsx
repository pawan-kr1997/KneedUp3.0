import { useRef, useEffect } from "react";
import _ from "lodash";

export const useAnimate = () => {
    let contentRef = useRef<HTMLElement>(null!);

    var checkHeader = _.throttle(() => {
        let scrollPosition = Math.ceil(window.scrollY);
        // console.log(scrollPosition);
        if (scrollPosition > 15) {
            contentRef.current.style.height = "3rem";
            contentRef.current.style.fontSize = "1.5rem";
        } else {
            contentRef.current.style.height = "6rem";
            contentRef.current.style.fontSize = "2rem";
        }
    }, 300);

    useEffect(() => {
        window.addEventListener("scroll", checkHeader);

        return () => {
            console.log("on removing listener");
            window.removeEventListener("scroll", checkHeader);
        };
    }, []);

    return contentRef;
};
