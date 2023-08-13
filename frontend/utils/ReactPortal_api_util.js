import { createPortal } from 'react-dom';
import React, { useState, useLayoutEffect } from 'react';

/**
 * Function to return a "WARP PORTAL" (React Portal) used as a modal container for modals across the app this replaces
 * the modal manager component takes in a React.Component as its children, a wrapperId, and classNameId which will be used to 
 * search for the existing element that matches the id element to teleport the children to render into if it does not exist it will be created
 * and destroyed upon leaving the modal.
 * @param {React.ReactNode} children a React.ReactNode React.Component to render in the portal
 * @param {string} wrapperId of an existing DOM Node element if it exists if not will be used as the id attribute of the returned container
 * @param {string} classNameId class/className of an existing DOM Node element if it exists if not will be used as the class/className
 * attribute of the returned container
 * @returns {React.ReactPortal} A React Portal containing the children rendered within the matching id of wht wrapperid if it exists else it will be
 * created and destroyed upon leaving the modal
*/
export default function REACT_PORTAL ({ children, wrapperId, classNameId }) {

    const [wrapperElement, setWrapperElement] = useState(null);
    //useLayoutEffect hook is used here as it fires before the dom is repainted which is faster than 
    // useEffect as this function handles visual effects on screen/
    useLayoutEffect(() => {
        let element = document.getElementById(wrapperId);

        let systemCreatedElement = false;

        //if element does not exist due to never existing or deleted by abnormal means create it and append 
        //to the DOM
        if (!element) {
            systemCreatedElement = true;
            element = createWrapperAndAppendToBody(wrapperId, classNameId);
        }
        setWrapperElement(element);

        return () => {
            //delete element if it was system created;
            if (systemCreatedElement && element.parentNode) {
                element.parentNode.removeChild(element);
            }
        }

    }, [wrapperId])

    //wrapper element state will be null the very first render
    if (wrapperElement === null) {
        return null;
    }

    return createPortal(children, wrapperElement);
};


function createWrapperAndAppendToBody (wrapperId, classNameId) {
    const wrapperElement = document.createElement('div');
    wrapperElement.setAttribute('id', wrapperId);
    wrapperElement.setAttribute('class', classNameId);


    if (classNameId === "subModal") {
        const spawnFromElement = document.querySelector('.appAsideWrapper')
        spawnFromElement.parentElement.insertBefore(wrapperElement, spawnFromElement.nextSibling);

    }
    else if (classNameId === "mass-modal-layer-container") {
        const spawnFromElement = document.getElementById("app-puller");
        spawnFromElement.parentElement.insertBefore(wrapperElement, spawnFromElement.nextSibling);
    }
    else {
        document.body.appendChild(wrapperElement);
    }
    return wrapperElement;
}