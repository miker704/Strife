// let prevClassState = themeElement.classList.contains(theme);
// const themeObserver = new MutationObserver((mutations) => {
//     mutations.forEach((mutation) => {
//         if (mutation.attributeName === "class") {
//             let currentClassState = mutation.target.classList.contains(theme);
//             if (prevClassState !== currentClassState) {
//                 prevClassState = currentClassState;
//                 if (currentClassState) {
//                     // console.log('class list added');
//                 }
//                 else {
//                     // console.log("class list not addded removed");
//                     themeElement.classList.add(theme);
//                 }
//             }
//         }
//     })
// })


//save for later
    // // theme observer prevent removal of theme
    // useEffect(() => {
    //     // console.log("theme element sstate = ")
    //     // console.log(themeElement)
    //     // console.log(themeElement.classList.contains(theme))
    //     // console.log("theme element observer active = ")
    //     if (props.currentUser.id === 2) {
    //         $("html").attr('class', "theme-light");
    //         setTheme('theme-light');
    //         themeObserver.observe(themeElement, { attributes: true });
    //     }
    //     else {
    //         setTheme('theme-dark');
    //         themeObserver.observe(themeElement, { attributes: true });
    //     }

    //     return function cleanUp () {
    //         // console.log("stop observing");
    //         themeObserver.disconnect();
    //     };
    // }, []);