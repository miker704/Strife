//this file is for old and testing the modal placement of the server user options modal. 
//for both dm and servers
//dmservers server user options old


// const handlePopupShow = (e) => {

    //     let currTop = e.currentTarget.getBoundingClientRect().top
    //     const realWidth = window.screen.width * window.devicePixelRatio;
    //     const realHeight = window.screen.height * window.devicePixelRatio;

    //     if (currTop > window.innerHeight * 0.93158) {
    //         if (realWidth >= 3800 && realHeight >= 2100) {
    //             if (currTop >= window.innerHeight * 0.949628) {
    //                 currTop = 1150;
    //             }
    //             setPopupTop(currTop);
    //         }
    //         else {
    //             currTop /= 3;
    //             setPopupTop(currTop);
    //         }
    //     }
    //     else if (currTop > window.innerHeight * 0.147 && currTop < window.innerHeight * 0.93013) {

    //         if (realWidth >= 3800 && realHeight >= 2100) {
    //             setPopupTop(currTop);
    //         }
    //         else {
    //             currTop /= 2;
    //             setPopupTop(currTop);
    //         }
    //     }

    //     else if (currTop <= window.innerHeight * 0.145560) {
    //         setPopupTop(currTop * 0.095);
    //     }
    //     else {
    //         setPopupTop(currTop);
    //     }

    //     setShowPopup(!showPopup);
    // }






//dmservers server user options new 







// const handlePopupShow = (e) => {
//     let currTop = e.currentTarget.getBoundingClientRect().top
//     const realWidth = window.screen.width * window.devicePixelRatio;
//     const realHeight = window.screen.height * window.devicePixelRatio;
//     let element = document.querySelector(`[data-list-item-id^=dm-server-member-item-${selectedMember.id}]`);

//     console.log("****** start of pre ******");
//     console.log(`currTop = ${currTop}`);
//     console.log(`offsettop = ${element?.offsetTop ?? 0}`);
//     console.log(`real width = ${realWidth}`);
//     console.log(`real height = ${realHeight}`);
//     console.log("****** end of pre ******");


//     if (currTop > window.innerHeight * 0.93158) {
//         console.log("%c currTop > window.innerHeight * 0.93158", `color:#0066ff`);

//         if (realWidth >= 3800 && realHeight >= 2100) {

//             console.log("%c 4k screen detected", "color:#00FD61;");

//             if (currTop >= window.innerHeight * 0.949628) {
//                 console.log("%c currTop >= window.innerHeight * 0.949628 ==== 1.11", "color:#ff6699;");
//                 // currTop = 930;
//                 currTop /= 1.15
//             }

//             else {

//                 console.log(`4k screen curtop ${currTop}`);
//                 console.log(`%c 4k screen curtop ${currTop} / ${window.innerHeight} = ${currTop / window.innerHeight}`, "color:#ff9933");
//                 currTop /= 1.10;
//             }

//             setPopupTop(currTop);
//         }
//         else {

//             currTop /= 3.25;
//             // currTop = 280;
//             console.log(`%c currtop reaches 94% of screen height currTop/=3 ${currTop}`, `color:#0066ff`);
//             setPopupTop(currTop);
//         }
//     }
//     else if (currTop > window.innerHeight * 0.147 && currTop < window.innerHeight * 0.93158) {

//         console.log("%c currTop > window.innerHeight * 0.147 && currTop < window.innerHeight * 0.93158", `color:#cc33ff`);

//         if (realWidth >= 3800 && realHeight >= 2100) {
//             console.log("%c 4k screen detected", "color:#00FD61;");
//             console.log(`%c realWidth >= 3800 && realHeight >= 2100 = ${currTop},`, `color:#cc33ff`);

//             if (currTop >= window.innerHeight * 0.90538 && currTop < window.innerHeight * 0.93158) {
//                 console.log(`%c currTop >= window.innerHeight * 0.90538  && currTop < window.innerHeight * 0.93158 4KKKK = currTop /= 1.1 ${currTop},`, `color:#ccff33`);
//                 currTop /= 1.1;
//             }

//             setPopupTop(currTop);
//         }
//         else {
//             // currTop = 83.6;
//             // currTop = 20;


//             if (currTop >= window.innerHeight * 0.63517 && currTop < window.innerHeight * 0.90538) {
//                 console.log(`%c currTop >= window.innerHeight *  0.63517  && currTop < window.innerHeight * 0.90538 1080P = currTop /= 2.55 ${currTop},`, `color:#ffff00`);
//                 currTop /= 2.55;
//             }


//             if (currTop >= window.innerHeight * 0.90538 && currTop < window.innerHeight * 0.93158) {
//                 console.log(`%c currTop >= window.innerHeight * 0.90538  && currTop < window.innerHeight * 0.93158 1080P = currTop /= 3.1 ${currTop},`, `color:#99ff99`);
//                 currTop /= 3.1;
//             }

//             else {
//                 console.log(`%c currTop > window.innerHeight * 0.147 && currTop < window.innerHeight * 0.93158 1080P = currTop /= 2 ${currTop},`, `color:#ffff00`);
//                 currTop /= 2;
//             }

//             setPopupTop(currTop);
//         }
//     }

//     else if (currTop <= window.innerHeight * 0.145560) {
//         console.log(`%c currTop <= window.innerHeight * 0.145560 ${currTop * 0.095},`, `color:#ff0000`);
//         setPopupTop(20);
//         // setPopupTop(currTop * 0.095);
//     }
//     else {
//         console.log(`%c all else fails ${currTop},`, `color:#66ffff`);
//         setPopupTop(20);
//     }

//     setShowPopup(!showPopup);
// }








    // const handlePopupShow = (e) => {
    //     let currTop = e.currentTarget.getBoundingClientRect().top
    //     const realWidth = window.screen.width * window.devicePixelRatio;
    //     const realHeight = window.screen.height * window.devicePixelRatio;

    //     if (currTop > window.innerHeight * 0.93158) {

    //         if (realWidth >= 3800 && realHeight >= 2100) {

    //             if (currTop >= window.innerHeight * 0.949628) {
    //                 currTop /= 1.15
    //             }
    //             else {
    //                 currTop /= 1.10;
    //             }

    //             setPopupTop(currTop);
    //         }
    //         else {
    //             currTop /= 3.25;
    //             setPopupTop(currTop);
    //         }
    //     }
    //     else if (currTop > window.innerHeight * 0.147 && currTop < window.innerHeight * 0.93158) {

    //         if (realWidth >= 3800 && realHeight >= 2100) {

    //             if (currTop >= window.innerHeight * 0.90538 && currTop < window.innerHeight * 0.93158) {
    //                 currTop /= 1.1;
    //             }

    //             setPopupTop(currTop);
    //         }
    //         else {

    //             if (currTop >= window.innerHeight * 0.63517 && currTop < window.innerHeight * 0.90538) {
    //                 currTop /= 2.55;
    //             }

    //             if (currTop >= window.innerHeight * 0.90538 && currTop < window.innerHeight * 0.93158) {
    //                 currTop /= 3.1;
    //             }

    //             else {
    //                 currTop /= 2;
    //             }

    //             setPopupTop(currTop);
    //         }
    //     }

    //     else if (currTop <= window.innerHeight * 0.145560) {
    //         setPopupTop(20);
    //     }
    //     else {
    //         setPopupTop(20);
    //     }

    //     setShowPopup(!showPopup);
    // }

// dmserver new screen sepration
//     const handlePopupShow1 = (e) => {
//         let currTop = e.currentTarget.getBoundingClientRect().top
//         const realWidth = window.screen.width * window.devicePixelRatio;
//         const realHeight = window.screen.height * window.devicePixelRatio;
//         let element = document.querySelector(`[data-list-item-id^=dm-server-member-item-${selectedMember.id}]`);

//         console.log("****** start of pre ******");
//         console.log(`currTop = ${currTop}`);
//         console.log(`offsettop = ${element?.offsetTop ?? 0}`);
//         console.log(`real width = ${realWidth}`);
//         console.log(`real height = ${realHeight}`);
//         console.log("****** end of pre ******");


//         if (realWidth >= 3800 && realHeight >= 2100) {
//             console.log("%c 4k screen detected", "color:#00FD61;");

//             if (currTop > window.innerHeight * 0.93158) {
//                 console.log(`%c currTop > window.innerHeight * 0.93158`, `color:#0066ff`);

//                 if (currTop >= window.innerHeight * 0.949628) {
//                     console.log(`%c currTop >= window.innerHeight * 0.949628 ==== 1.15 currtop = ${currTop / 1.15}`, "color:#ff6699;");

//                     currTop /= 1.15
//                 }
//                 else {
//                     console.log(`%c currTop > window.innerHeight * 0.93158 currTop / = 1.10 ${currTop / 1.10}`, `color:#0066ff`);
//                     currTop /= 1.10;
//                 }
//             }

//             else if (currTop > window.innerHeight * 0.147 && currTop < window.innerHeight * 0.93158) {
//                 console.log(`%c currTop > window.innerHeight * 0.147 && currTop < window.innerHeight * 0.93158  ${currTop}`, `color:#cc33ff`);

//                 if (currTop >= window.innerHeight * 0.90538 && currTop < window.innerHeight * 0.93158) {
//                     console.log(`%c currTop >= window.innerHeight * 0.90538  && currTop < window.innerHeight * 0.93158 4KKKK = currTop /= 1.1 ${currTop / 1.1},`, `color:#ccff33`);

//                     currTop /= 1.1;
//                 }
//                 console.log(`%c CONFIRMED : currTop > window.innerHeight * 0.147 && currTop < window.innerHeight * 0.93158  ${currTop}`, `color:#cc33ff`);


//             }
//             else if (currTop <= window.innerHeight * 0.145560) {
//                 // setPopupTop(20);
//                 console.log(`%c currTop <= window.innerHeight * 0.145560 ${currTop} = 20,`, `color:#ff0000`);

//                 currTop = 20;

//             }
//             else {
//                 // setPopupTop(20);
//                 console.log(`%c all else fails currtop orginal = ${currTop} currtop = ${20},`, `color:#66ffff`);

//                 currTop = 20;

//             }

//             console.log(`CURRTOP OFFICAL FOR 4K IS  = ${currTop}`, 'color:#ff00ff');
//             setPopupTop(currTop)

//         }
//         else {
//             console.log("%c ELSE 1080P  screen detected", "color:#00FD61;");

//             if (currTop > window.innerHeight * 0.93158) {
//                 console.log(`%c currTop > window.innerHeight * 0.93158 currtop reaches 94% of screen height currTop/=3.25 ${currTop / 3.25}`, `color:#0066ff`);

//                 currTop /= 3.25;
//             }
//             else if (currTop > window.innerHeight * 0.147 && currTop < window.innerHeight * 0.93158) {
//                 console.log(`%c currTop > window.innerHeight * 0.147 && currTop < window.innerHeight * 0.93158  ${currTop}`, `color:#cc33ff`);

//                 if (currTop >= window.innerHeight * 0.90538 && currTop < window.innerHeight * 0.93158) {
//                     console.log(`%c currTop >= window.innerHeight * 0.90538  && currTop < window.innerHeight * 0.93158 1080P = currTop /= 3.1 ${currTop / 3.1},`, `color:#99ff99`);
//                     currTop /= 3.1;
//                 }

//                 else if (currTop >= window.innerHeight * 0.817255 && currTop < window.innerHeight * 0.90538) {
//                     console.log(`%c currTop >= window.innerHeight * 0.817255  && currTop < window.innerHeight * 0.90538  1080P = currTop /= 3 ${currTop / 3},`, `color:#99ff99`);
//                     currTop /= 3;
//                 }

//                 else if (currTop >= window.innerHeight * 0.63517 && currTop < window.innerHeight * 0.817255) {
//                     console.log(`%c currTop >= window.innerHeight *  0.63517  && currTop < window.innerHeight * * 0.817255 1080P = currTop /= 2.55 ${currTop / 2.55},`, `color:#ffff00`);
//                     currTop /= 2.55;
//                 }

//                 else {
//                     console.log(`%c currTop > window.innerHeight * 0.147 && currTop < window.innerHeight * 0.93158 1080P = currTop /= 2 ${currTop / 2},`, `color:#ffff00`);
//                     currTop /= 2;
//                 }

//             }

//             else if (currTop <= window.innerHeight * 0.145560) {
//                 // setPopupTop(20);
//                 console.log(`%c currTop <= window.innerHeight * 0.145560 ${currTop} = 20,`, `color:#ff0000`);
//                 currTop = 20;
//             }
//             else {
//                 // setPopupTop(20);
//                 console.log(`%c all else fails currtop orginal = ${currTop} currtop = ${20},`, `color:#66ffff`);
//                 currTop = 20;

//             }

//             console.log(`CURRTOP OFFICAL FOR 1080p IS  = ${currTop}`, 'color:#ff00ff');
//             setPopupTop(currTop)

//         }

//         setShowPopup(!showPopup);
//     }

// // new compressed.
//     const handlePopupShow3 = (e) => {
//         let currTop = e.currentTarget.getBoundingClientRect().top
//         const realWidth = window.screen.width * window.devicePixelRatio;
//         const realHeight = window.screen.height * window.devicePixelRatio;

//         if (realWidth >= 3800 && realHeight >= 2100) {
//             if (currTop > window.innerHeight * 0.93158) {
//                 if (currTop >= window.innerHeight * 0.949628) {
//                     currTop /= 1.15
//                 }
//                 else {
//                     currTop /= 1.10;
//                 }
//             }

//             else if (currTop > window.innerHeight * 0.147 && currTop < window.innerHeight * 0.93158) {

//                 if (currTop >= window.innerHeight * 0.90538 && currTop < window.innerHeight * 0.93158) {
//                     currTop /= 1.1;
//                 }

//             }
//             else if (currTop <= window.innerHeight * 0.145560) {
//                 currTop = 20;
//             }
//             else {
//                 currTop = 20;
//             }
//             setPopupTop(currTop)
//         }
//         else {

//             if (currTop > window.innerHeight * 0.93158) {
//                 currTop /= 3.25;
//             }
//             else if (currTop > window.innerHeight * 0.147 && currTop < window.innerHeight * 0.93158) {

//                 if (currTop >= window.innerHeight * 0.90538 && currTop < window.innerHeight * 0.93158) {
//                     currTop /= 3.1;
//                 }

//                 else if (currTop >= window.innerHeight * 0.817255 && currTop < window.innerHeight * 0.90538) {
//                     currTop /= 3;
//                 }

//                 else if (currTop >= window.innerHeight * 0.63517 && currTop < window.innerHeight * 0.817255) {
//                     currTop /= 2.55;
//                 }

//                 else {
//                     currTop /= 2;
//                 }

//             }

//             else if (currTop <= window.innerHeight * 0.145560) {
//                 currTop = 20;
//             }
//             else {
//                 currTop = 20;
//             }

//             setPopupTop(currTop)

//         }

//         setShowPopup(!showPopup);
//     }




//servers server user options old

    // const handlePopupShow = (e) => {
    //     let currTop1 = e.currentTarget.getBoundingClientRect()
    //     let currTop = e.currentTarget.getBoundingClientRect().top
    //     const realWidth = window.screen.width * window.devicePixelRatio;
    //     const realHeight = window.screen.height * window.devicePixelRatio;

    //     console.log("****** start of pre ******");
    //     console.log(`currTop = ${currTop}`);
    //     console.log(`real width = ${realWidth}`);
    //     console.log(`real height = ${realHeight}`);
    //     console.table(currTop1);
    //     console.log("****** end of pre ******");


    //     if (currTop > window.innerHeight * 0.93158) {
    //         console.log("%c currTop > window.innerHeight * 0.93158", `color:#0066ff`);

    //         if (realWidth >= 3800 && realHeight >= 2100) {

    //             console.log("%c 4k screen detected", "color:#00FD61;");

    //             if (currTop >= window.innerHeight * 0.949628) {
    //                 console.log("%c currTop >= window.innerHeight * 0.949628 ==== 1150", "color:#00FD61;");
    //                 // currTop = 1150;
    //                 currTop = window.innerHeight - 670;
    //                 // currTop = 940;
    //             }
    //             setPopupTop(currTop);
    //         }
    //         else {

    //             // currTop /= 3;
    //             currTop = 280;
    //             console.log(`%c currtop reaches 94% of screen height currTop/=3 ${currTop}`, `color:#0066ff`);
    //             setPopupTop(currTop);
    //         }
    //     }
    //     // else if (currTop > window.innerHeight * 0.147 && currTop < window.innerHeight * 0.93013) {
    //     else if (currTop > window.innerHeight * 0.147 && currTop < window.innerHeight * 0.93158) {

    //         console.log("%c currTop > window.innerHeight * 0.147 && currTop < window.innerHeight * 0.93158", `color:#cc33ff`);

    //         if (realWidth >= 3800 && realHeight >= 2100) {
    //             console.log("%c 4k screen detected", "color:#00FD61;");
    //             console.log(`%c realWidth >= 3800 && realHeight >= 2100 = ${currTop},`, `color:#cc33ff`);
    //             setPopupTop(currTop);
    //         }
    //         else {
    //             console.log(`%c currTop > window.innerHeight * 0.147 && currTop < window.innerHeight * 0.93158 1080P = currTop /= 2 ${currTop},`, `color:#ffff00`);
    //             // currTop /= 2;
    //             // currTop = 83.6;
    //             currTop = 20;
    //             setPopupTop(currTop);
    //         }
    //     }

    //     else if (currTop <= window.innerHeight * 0.145560) {
    //         console.log(`%c currTop <= window.innerHeight * 0.145560 ${currTop * 0.095},`, `color:#ff0000`);
    //         setPopupTop(20);
    //         // setPopupTop(currTop * 0.095);

    //     }
    //     else {
    //         console.log(`%c all else fails ${currTop},`, `color:#66ffff`);
    //         setPopupTop(currTop);
    //     }

    //     setShowPopup(!showPopup);
    // }

//servers server user options new 
    // const handlePopupShow = (e) => {
    //     let currTop1 = e.currentTarget.getBoundingClientRect()
    //     let currTop = e.currentTarget.getBoundingClientRect().top
    //     const realWidth = window.screen.width * window.devicePixelRatio;
    //     const realHeight = window.screen.height * window.devicePixelRatio;

    //     console.log("****** start of pre ******");
    //     console.log(`currTop = ${currTop}`);
    //     console.log(`real width = ${realWidth}`);
    //     console.log(`real height = ${realHeight}`);
    //     console.table(currTop1);
    //     console.log("****** end of pre ******");


    //     if (currTop > window.innerHeight * 0.93158) {
    //         console.log("%c currTop > window.innerHeight * 0.93158", `color:#0066ff`);

    //         if (realWidth >= 3800 && realHeight >= 2100) {

    //             console.log("%c 4k screen detected", "color:#00FD61;");

    //             if (currTop >= window.innerHeight * 0.949628) {
    //                 console.log("%c currTop >= window.innerHeight * 0.949628 ==== 1150", "color:#00FD61;");
    //                 // currTop = 1150;
    //                 currTop = window.innerHeight - 670;
    //                 // currTop = 940;
    //             }
    //             setPopupTop(currTop);
    //         }
    //         else {

    //             // currTop /= 3;
    //             currTop = 280;
    //             console.log(`%c currtop reaches 94% of screen height currTop/=3 ${currTop}`, `color:#0066ff`);
    //             setPopupTop(currTop);
    //         }
    //     }
    //     // else if (currTop > window.innerHeight * 0.147 && currTop < window.innerHeight * 0.93013) {
    //     else if (currTop > window.innerHeight * 0.147 && currTop < window.innerHeight * 0.93158) {

    //         console.log("%c currTop > window.innerHeight * 0.147 && currTop < window.innerHeight * 0.93158", `color:#cc33ff`);

    //         if (realWidth >= 3800 && realHeight >= 2100) {
    //             console.log("%c 4k screen detected", "color:#00FD61;");
    //             console.log(`%c realWidth >= 3800 && realHeight >= 2100 = ${currTop},`, `color:#cc33ff`);
    //             setPopupTop(currTop);
    //         }
    //         else {
    //             console.log(`%c currTop > window.innerHeight * 0.147 && currTop < window.innerHeight * 0.93158 1080P = currTop /= 2 ${currTop},`, `color:#ffff00`);
    //             // currTop /= 2;
    //             // currTop = 83.6;
    //             currTop = 20;
    //             setPopupTop(currTop);
    //         }
    //     }

    //     else if (currTop <= window.innerHeight * 0.145560) {
    //         console.log(`%c currTop <= window.innerHeight * 0.145560 ${currTop * 0.095},`, `color:#ff0000`);
    //         setPopupTop(20);
    //         // setPopupTop(currTop * 0.095);

    //     }
    //     else {
    //         console.log(`%c all else fails ${currTop},`, `color:#66ffff`);
    //         setPopupTop(currTop);
    //     }

    //     setShowPopup(!showPopup);
    // }



    // const handlePopupShow = (e) => {
    //     let currTop1 = e.currentTarget.getBoundingClientRect()
    //     let currTop = e.currentTarget.getBoundingClientRect().top
    //     const realWidth = window.screen.width * window.devicePixelRatio;
    //     const realHeight = window.screen.height * window.devicePixelRatio;

    //     console.log("****** start of pre ******");
    //     console.log(`currTop = ${currTop}`);
    //     console.log(`real width = ${realWidth}`);
    //     console.log(`real height = ${realHeight}`);
    //     console.table(currTop1);
    //     console.log("****** end of pre ******");


    //     if (currTop > window.innerHeight * 0.93158) {
    //         console.log("%c currTop > window.innerHeight * 0.93158", `color:#0066ff`);

    //         if (realWidth >= 3800 && realHeight >= 2100) {

    //             console.log("%c 4k screen detected", "color:#00FD61;");

    //             if (currTop >= window.innerHeight * 0.949628) {
    //                 console.log("%c currTop >= window.innerHeight * 0.949628 ==== 1150", "color:#00FD61;");
    //                 // currTop = 1150;
    //                 currTop = window.innerHeight - 670;
    //                 // currTop = 940;
    //             }
    //             setPopupTop(currTop);
    //         }
    //         else {

    //             // currTop /= 3;
    //             currTop = 280;
    //             console.log(`%c currtop reaches 94% of screen height currTop/=3 ${currTop}`, `color:#0066ff`);
    //             setPopupTop(currTop);
    //         }
    //     }
    //     // else if (currTop > window.innerHeight * 0.147 && currTop < window.innerHeight * 0.93013) {
    //     else if (currTop > window.innerHeight * 0.147 && currTop < window.innerHeight * 0.93158) {

    //         console.log("%c currTop > window.innerHeight * 0.147 && currTop < window.innerHeight * 0.93158", `color:#cc33ff`);

    //         if (realWidth >= 3800 && realHeight >= 2100) {
    //             console.log("%c 4k screen detected", "color:#00FD61;");
    //             console.log(`%c realWidth >= 3800 && realHeight >= 2100 = ${currTop},`, `color:#cc33ff`);
    //             setPopupTop(currTop);
    //         }
    //         else {
    //             console.log(`%c currTop > window.innerHeight * 0.147 && currTop < window.innerHeight * 0.93158 1080P = currTop /= 2 ${currTop},`, `color:#ffff00`);
    //             // currTop /= 2;
    //             // currTop = 83.6;
    //             currTop = 20;
    //             setPopupTop(currTop);
    //         }
    //     }

    //     else if (currTop <= window.innerHeight * 0.145560) {
    //         console.log(`%c currTop <= window.innerHeight * 0.145560 ${currTop * 0.095},`, `color:#ff0000`);
    //         setPopupTop(20);
    //         // setPopupTop(currTop * 0.095);

    //     }
    //     else {
    //         console.log(`%c all else fails ${currTop},`, `color:#66ffff`);
    //         setPopupTop(currTop);
    //     }

    //     setShowPopup(!showPopup);
    // }



    // const handlePopupShow1 = (e) => {
    //     let currTop = e.currentTarget.getBoundingClientRect().top
    //     const realWidth = window.screen.width * window.devicePixelRatio;
    //     const realHeight = window.screen.height * window.devicePixelRatio;

    //     console.log("****** start of pre ******");
    //     console.log(`currTop = ${currTop}`);
    //     console.log(`real width = ${realWidth}`);
    //     console.log(`real height = ${realHeight}`);
    //     console.log("****** end of pre ******");


    //     if (currTop > window.innerHeight * 0.93158) {
    //         console.log("%c currTop > window.innerHeight * 0.93158", `color:#0066ff`);

    //         if (realWidth >= 3800 && realHeight >= 2100) {

    //             console.log("%c 4k screen detected", "color:#00FD61;");

    //             if (currTop >= window.innerHeight * 0.949628) {
    //                 console.log("%c currTop >= window.innerHeight * 0.949628 ==== 1.11", "color:#ff6699;");
    //                 currTop /= 1.15
    //             }

    //             else {

    //                 console.log(`4k screen curtop ${currTop}`);
    //                 console.log(`%c 4k screen curtop ${currTop} / ${window.innerHeight} = ${currTop / window.innerHeight}`, "color:#ff9933");
    //                 currTop /= 1.10;
    //             }

    //             setPopupTop(currTop);
    //         }
    //         else {
    //             currTop /= 3.25;
    //             console.log(`%c currtop reaches 94% of screen height currTop/=3 ${currTop}`, `color:#0066ff`);
    //             setPopupTop(currTop);
    //         }
    //     }
    //     else if (currTop > window.innerHeight * 0.147 && currTop < window.innerHeight * 0.93158) {

    //         console.log("%c currTop > window.innerHeight * 0.147 && currTop < window.innerHeight * 0.93158", `color:#cc33ff`);

    //         if (realWidth >= 3800 && realHeight >= 2100) {
    //             console.log("%c 4k screen detected", "color:#00FD61;");
    //             console.log(`%c realWidth >= 3800 && realHeight >= 2100 = ${currTop},`, `color:#cc33ff`);

    //             if (currTop >= window.innerHeight * 0.90538 && currTop < window.innerHeight * 0.93158) {
    //                 console.log(`%c currTop >= window.innerHeight * 0.90538  && currTop < window.innerHeight * 0.93158 4KKKK = currTop /= 1.1 ${currTop},`, `color:#ccff33`);
    //                 currTop /= 1.1;
    //             }

    //             setPopupTop(currTop);
    //         }
    //         else {
    //             // currTop = 83.6;
    //             // currTop = 20;


    //             if (currTop >= window.innerHeight * 0.90538 && currTop < window.innerHeight * 0.93158) {
    //                 console.log(`%c currTop >= window.innerHeight * 0.90538  && currTop < window.innerHeight * 0.93158 1080P = currTop /= 3.1 ${currTop / 3.1},`, `color:#99ff99`);
    //                 currTop /= 3.1;
    //             }

    //             else if (currTop >= window.innerHeight * 0.817255 && currTop < window.innerHeight * 0.90538) {
    //                 console.log(`%c currTop >= window.innerHeight * 0.817255  && currTop < window.innerHeight * 0.90538  1080P = currTop /= 3 ${currTop / 3},`, `color:#9999ff`);
    //                 currTop /= 3;
    //             }


    //             else if (currTop >= window.innerHeight * 0.63517 && currTop < window.innerHeight * 0.817255) {
    //                 console.log(`%c currTop >= window.innerHeight *  0.63517  && currTop < window.innerHeight * * 0.817255 1080P = currTop /= 2.55 ${currTop / 2.55},`, `color:#ffff00`);
    //                 currTop /= 2.55;
    //             }

    //             else {
    //                 console.log(`%c currTop > window.innerHeight * 0.147 && currTop < window.innerHeight * 0.93158 1080P = currTop /= 2 ${currTop / 2},`, `color:#ffff00`);
    //                 currTop /= 2;
    //             }

    //             setPopupTop(currTop);
    //         }
    //     }









    //     else if (currTop <= window.innerHeight * 0.145560) {
    //         console.log(`%c currTop <= window.innerHeight * 0.145560 ${currTop} = 20,`, `color:#ff0000`);

    //         setPopupTop(20);
    //         // setPopupTop(currTop * 0.095);
    //     }
    //     else {
    //         console.log(`%c all else fails currtop orginal = ${currTop} currtop = ${20},`, `color:#66ffff`);

    //         setPopupTop(20);
    //     }
    //     console.log(`CURRTOP OFFICAL IS  = ${currTop}`, 'color:#ff00ff');

    //     setShowPopup(!showPopup);
    // }
// in use version
    // const handlePopupShow = (e) => {
    //     let currTop = e.currentTarget.getBoundingClientRect().top
    //     const realWidth = window.screen.width * window.devicePixelRatio;
    //     const realHeight = window.screen.height * window.devicePixelRatio;

    //     console.log("****** start of pre ******");
    //     console.log(`currTop = ${currTop}`);
    //     console.log(`real width = ${realWidth}`);
    //     console.log(`real height = ${realHeight}`);
    //     console.log("****** end of pre ******");

    //     // this is to handle 4k screen placement for anything less the position is defaulted to 20 which is reduced to 12px top
    //     // as the modal can reach  39% - 96%+ of a 1080 screen

    //     if (realWidth >= 3800 && realHeight >= 2100) {
    //         console.log("%c 4k screen detected", "color:#00FD61;");
    //         console.log(`%c TOTAL PERCENTAGE CONSUMED =  ${currTop / window.innerHeight} %,`, "color:#00FD61;");

    //         if (currTop <= window.innerHeight * 0.145560) {
    //             console.log(`%c currTop <= window.innerHeight * 0.145560 ${currTop} = 20,`, `color:#ff0000`);
    //             currTop = 20;
    //         }

    //         else if (currTop >= window.innerHeight * 0.710665 && currTop < window.innerHeight * 0.90538) {
    //             console.log(`%c currTop >= window.innerHeight *  0.710665   && currTop < window.innerHeight ** 0.90538 4KKKK = currTop /= 1.25 ${currTop / 1.25},`, "color:#ff9933");
    //             console.log(`%c PERCENTAGE CONSUMED =  ${currTop / window.innerHeight} %,`, "color:#ff9933");
    //             currTop /= 1.25;
    //         }

    //         else if (currTop >= window.innerHeight * 0.90538) {
    //             console.log(`%c currTop >= window.innerHeight * 0.90538 ${currTop / 1.5},`, `color:#ccff33`);
    //             currTop /= 1.4;
    //         }
    //         else{
    //             currTop = 0;
    //         }

    //     }
    //     else {
    //         console.log("%c ELSE 1080P  screen detected currTop === 20", "color:#00FD61;");
    //         // the server version of server user options modal can reach around ~96%+ of the normal 1080p screen so only 
    //         // one option remains.
    //         currTop = 20;
    //     }
    //     setPopupTop(currTop);
    //     console.log(`%c CURRTOP OFFICAL IS  = ${currTop}`, 'color:#ff00ff');
    //     setShowPopup(!showPopup);
    // }