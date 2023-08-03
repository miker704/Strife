// custom made hooks for various purposes;
import { useRef, useEffect } from "react";
/**
 * Custom Hook Based Component uses a useEffect + useRef provides a boolean flag to 
 * indicate whether the current render is the first render (when the component was mounted)
 * @param {()} - none takes no params
 * @returns {boolean}  - returns a Boolean value of true or false indicating status of a component is mounted or not.
 */
export const useIsMountedFirstRender = () => {
    const isMountRef = useRef(true);
    useEffect(() => {
        isMountRef.current = false;
    }, []);
    return isMountRef.current;
};