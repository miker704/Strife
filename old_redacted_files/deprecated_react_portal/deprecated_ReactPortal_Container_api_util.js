// import { createPortal } from 'react-dom';
// import { useState, useLayoutEffect } from 'react';

// export default function REACT_PORTAL ({ children, wrapperId, classNameId }) {

//     const [wrapperElement, setWrapperElement] = useState(null);
//     //useLayoutEffect hook is used here as it fires before the dom is repainted which is faster than 
//     // useEffect as this function handles visual effects on screen/
//     useLayoutEffect(() => {
//         let element = document.getElementById(wrapperId);

//         let systemCreatedElement = false;

//         //if element does not exist due to never existing or deleted by abnormal means create it and append 
//         //to the DOM
//         if (!element) {
//             systemCreatedElement = true;
//             console.log("element does not exist creating it")
//             element = createWrapperAndAppendToBody(wrapperId, classNameId);
//         }
//         else { console.log("element does exist deploying portal") }
//         setWrapperElement(element);

//         return () => {
//             //delete element if it was system created;
//             if (systemCreatedElement && element.parentNode) {
//                 element.parentNode.removeChild(element);
//             }
//         }

//     }, [wrapperId])

//     //wrapper element state will be null the very first render
//     if (wrapperElement === null) {
//         return null;
//     }

//     return createPortal(children, wrapperElement);
// };


// function createWrapperAndAppendToBody (wrapperId, classNameId) {
//     const wrapperElement = document.createElement('div');
//     wrapperElement.setAttribute('id', wrapperId);
//     wrapperElement.setAttribute('class', classNameId);

//     const spawnFromElement = "";

//     if (classNameId === "subModal") {
//         console.log("creating submodal")

//         spawnFromElement = document.querySelector('.appAsideWrapper')
//         spawnFromElement.parentElement.insertBefore(wrapperElement, spawnFromElement.nextSibling);

//     }
//     else if (classNameId === "mass-modal-layer-container") {
//         console.log("mass modal")

//         spawnFromElement = document.getElementById("app-puller");
//         spawnFromElement.parentElement.insertBefore(wrapperElement, spawnFromElement.nextSibling);
//     }
//     else {
//         document.body.appendChild(wrapperElement);
//     }
//     return wrapperElement;
// }