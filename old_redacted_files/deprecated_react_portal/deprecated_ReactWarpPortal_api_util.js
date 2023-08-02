// import { createPortal } from 'react-dom';
// import { useState, useLayoutEffect } from 'react';

// export default function REACT_WARP_PORTAL ({ children, wrapperId, classNameId }) {

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
//             element = createWrapperAndAppendToBodyMassModal(wrapperId, classNameId);
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





// function createWrapperAndAppendToBodyMassModal (wrapperId, classNameId) {
//     let getAppPuller = document.getElementById('app-puller');
//     const wrapperElement = document.createElement('div');
//     wrapperElement.setAttribute('id', wrapperId);
//     wrapperElement.setAttribute('class', classNameId);
//     // document.body.appendChild(wrapperElement);

//     getAppPuller.parentElement.insertBefore(wrapperElement, getAppPuller.nextSibling);

//     return wrapperElement;
// }






//from original 

// function createWrapperAndAppendToBody (wrapperId) {

//     const wrapperElement = document.createElement('div');
//     wrapperElement.setAttribute('id', wrapperId);
//     document.body.appendChild(wrapperElement);
//     return wrapperElement;
// }


// export default function REACT_PORTAL ({ children, wrapperId }) {
//     return createPortal(children, document.getElementById(wrapperId));
// };