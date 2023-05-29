// custom made hooks for various purposes;
import { useRef, useEffect } from "react";
/**
 * Custom Hook Based Component uses a useEffect + useRef to check if a component is mounted or not
 * typically used to stop certain css effects upon intitial rendering
 * example - prevent a component from executing css animations upon intitial render till fully mounted for a switch
 * (this is what this function was initially made for)
 * @param {()} - none takes no params
 * @returns {boolean}  - returns a Boolean value of true or false indicating status of a component is mounted or not.
 * @example
 * <style>
 * 
 *  .slide-control{ 
 *      display: flex;
 *      ...
 *  }
 *  
 *  .slide-control.mounted{
 *      animation: slideSwitch 1s ease-in-out 1 backwards
 *  }
 * 
 * </style>
 * 
 * import useIsComponentMounted from `${PATH_TO_MODULE = "custom_hooks_api_util.js"}`;
 *  const GenericComponent = (props) => {
 *   const isMounted = useIsComponentMounted();
 *    return (
 *     <div className={`'slide-control'${isMounted ? `mounted`:``}`}>
 *     </div>
 *    );
 *  }
 * 
 */
const useIsComponentMounted = () => {
    const _isComponentMounted = useRef(false);
    useEffect(() => {
        _isComponentMounted.current = true;
        // return () => (_isComponentMounted.current = false);
        return () => {
            _isComponentMounted.current = false;
        }

    }, []);
    return _isComponentMounted;
}

export default useIsComponentMounted;