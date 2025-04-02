import { useState, useEffect } from "react";

interface WindowSize {
    width: number;
    height: number;
};

export default function useWindowSize (): WindowSize {
    const [windowSize, setWindowSize] = useState<WindowSize>({
       width:0,
       height: 0
    });

    useEffect(() => {
       function updateSize () {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        })
       };

       window.addEventListener('resize', updateSize);
       updateSize();
       return(() => window.removeEventListener('resize', updateSize));
    }, []);

    return windowSize;
};