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