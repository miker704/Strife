
export const appPullerPullAnimation = () => {
    let appPuller = document.getElementById("app-puller");
    if (!appPuller) {
        console.log("app puller does not exist creating one");
        let appPullerParent = document.querySelector(".app-layer-container");
        if (appPullerParent) {
            console.log("app puller found adding id");
            appPullerParent.setAttribute('id', 'app-puller');
            appPuller = appPullerParent;
        }
    }
    if (appPuller) {
        appPuller.animate(
            {
                transform: ['scale(0.93) translateZ(0px)', 'scale(0.94) translateZ(0px)', 'scale(0.95) translateZ(0px)', 'scale(0.97) translateZ(0px)', 'scale(0.99) translateZ(0px)'],
                opacity: [0, 0.2, 0.3, 0.4, 0.5],
                offset: [0.0, 0.25, 0.5, 0.75, 1.0],
            },
            {
                easing: "linear(0, 0.25 75%, 1)",
                direction: 'reverse',
                duration: 300,
                iterations: 1,
            }
        );
    }

}



export const appPullerReleaseAnimation = () => {
    let grabWrapper = document.getElementById("grab-wrapper");
    let appPuller = document.getElementById("app-puller");
    if (!grabWrapper) {
        console.log("grab-wrapper missing");
        let massMod = document.getElementById("mass-modal-container");
        massMod.firstElementChild.setAttribute("id", "grab-wrapper");
        grabWrapper = massMod.firstElementChild;
    }
    if (!appPuller) {
        console.log("app puller does not exist creating one");
        let appPullerParent = document.querySelector(".app-layer-container");
        if (appPullerParent) {
            console.log("app puller found adding id");
            appPullerParent.setAttribute('id', 'app-puller');
            appPuller = appPullerParent;
        }
    }

    if (grabWrapper && appPuller) {
        grabWrapper.style.opacity = 0.6;
        appPuller.animate(
            {
                transform: ['scale(0.93) translateZ(0px)', 'scale(0.94) translateZ(0px)', 'scale(0.95) translateZ(0px)', 'scale(0.97) translateZ(0px)', 'scale(0.99) translateZ(0px)'],
                offset: [0.0, 0.25, 0.5, 0.75, 1.0],
            },
            {
                duration: 200,
                iterations: 1,
            }
        );
    }
}



export const appPullerPullAndHoldAnimation = () => {
    let appPuller = document.getElementById('app-puller');
    if (!appPuller) {
        console.log("app puller does not exist creating one");
        let appPullerParent = document.querySelector(".app-layer-container");
        if (appPullerParent) {
            console.log("app puller found adding id");
            appPullerParent.setAttribute('id', 'app-puller');
            appPuller = appPullerParent;
        }
    }

    if (appPuller) {
        appPuller.classList.add("animating");
        appPuller.animate(
            {
                transform: ['scale(0.93) translateZ(0px)', 'scale(0.94) translateZ(0px)', 'scale(0.95) translateZ(0px)', 'scale(0.97) translateZ(0px)', 'scale(0.99) translateZ(0px)'],
                opacity: [0, 0.2, 0.3, 0.4, 0.5],
                offset: [0.0, 0.25, 0.5, 0.75, 1.0],
            },
            {
                easing: "linear(0, 0.25 75%, 1)",
                direction: 'reverse',
                duration: 300,
                iterations: 1,
            }
        );
        Promise.all(appPuller.getAnimations().map((animation) => animation.finished),)
            .then(() => {
                appPuller.classList.remove("animating");
                appPuller.style.opacity = "0";
                appPuller.style.transform = 'scale(0.93) translateZ(0px)';
            });
    }

}



export const appPullerReleaseHoldAnimation = () => {
    let grabWrapper = document.getElementById("grab-wrapper");
    let appPuller = document.getElementById("app-puller");
    if (!grabWrapper) {
        let massMod = document.getElementById("mass-modal-container");
        massMod.firstElementChild.setAttribute("id", "grab-wrapper");
        grabWrapper = massMod.firstElementChild;
    }
    if (!appPuller) {
        console.log("app puller does not exist creating one");
        let appPullerParent = document.querySelector(".app-layer-container");
        if (appPullerParent) {
            console.log("app puller found adding id");
            appPullerParent.setAttribute('id', 'app-puller');
            appPuller = appPullerParent;
        }
    }
    if (grabWrapper && appPuller) {
        appPuller.style.removeProperty('opacity');
        appPuller.style.removeProperty('transform');
        grabWrapper.style.opacity = 0.6;
        appPuller.animate(
            {
                transform: ['scale(0.93) translateZ(0px)', 'scale(0.94) translateZ(0px)', 'scale(0.95) translateZ(0px)', 'scale(0.97) translateZ(0px)', 'scale(0.99) translateZ(0px)'],
                offset: [0.0, 0.25, 0.5, 0.75, 1.0],
            },
            {
                duration: 200,
                iterations: 1,
            }
        );
    }

}