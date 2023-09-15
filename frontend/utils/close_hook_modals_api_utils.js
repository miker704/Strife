import React from "react";
import { useEffect } from "react";

export const closeHookModalOnESC = (closeHookModal) => {
    const checkforESCPress = (e) => {
        if (e.keyCode === 27) {
            e.stopImmediatePropagation();
            closeModal();
        }
    };

    useEffect(() => {
        document.addEventListener("keydown", checkforESCPress, true);
        return () => document.removeEventListener("keydown", checkforESCPress, true);
    }, []);

}

export const closeOnEsc = (setBoolean) => {

    const checkForEsc = (e) => {
        if (e.keyCode === 27) {
            setBoolean(false);
        }
    };

    useEffect(() => {
        document.addEventListener("keydown", checkForEsc);
        return () => document.removeEventListener("keydown", checkForEsc);
    }, []);
}

export const closeHookModalOnOutsideClick = (ref, setBoolean) => {

    const checkOutsideClick = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
            setBoolean(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", checkOutsideClick);
        return () => document.removeEventListener("click", checkOutsideClick);
    }, []);
}

/**
 * Custom React Hook to close non settings related modals takes in a bool use state that allows the modal to be opened
 * and classNames of the modal and the exit transition effect class to be added on closing, and another bool use state which is passed to
 * hold a value if a subModal of the modal is open if so it locks the modal from closing till the submodal is disengaged this version also
 * handle the case if the modal has submodals in it (however this is not for setting type modals! only for modals that do not occupy the
 * entire screen and have subModals ). The function listens for when the ESC is pressed adds the transistion class to run the closing 
 * animation & a promise is ran to handle closing the modal at the end of the animation. If the modal class cant be found it closes the modal instead.
 * @param {React.Dispatch<React.SetStateAction<boolean>>} setBoolean boolean useState().
 * @param {string} modalToFind string representing className of the modal to close and find and the transition out animation.
 * @param {string} transitionEffectToAdd string representing the className to add to modalToFind representing a class that adds the exit animation
 * @param {boolean} isSubModMounted boolean representing any submod open default is false.
 * @returns {void} void
 * 
 */

export const useCloseModalOnESC = (setBoolean, modalToFind, transitionEffectToAdd, isSubModMounted = false) => {
    const checkForEsc = (e) => {
        if (e.keyCode === 27 && isSubModMounted === false) {
            if (modalToFind && transitionEffectToAdd) {
                let modalToClose = document.querySelector(`.${modalToFind}`);
                if (modalToClose) {
                    modalToClose.classList.add(transitionEffectToAdd);
                    Promise.all(modalToClose.getAnimations().map((animation) => animation.finished),)
                        .then(() => {
                            setBoolean(false);
                        }, () => {
                            setBoolean(false);
                        });
                }
            }
            else {
                setBoolean(false);
            }
        }
    };
    useEffect(() => {
        if (isSubModMounted === true) {
            document.removeEventListener("keydown", checkForEsc)
        }
        else {
            document.addEventListener("keydown", checkForEsc);
        }
        return () => document.removeEventListener("keydown", checkForEsc);
    }, [isSubModMounted]);
}

/**
 * Custom React Hook to close non settings related modals on outside click takes in a useRef variable attached to the modal
 * a bool use state that allows the modal to be opened and classNames of the modal and the exit transition effect class to be added on closing.
 * The function listens for when a click occurs outside the modal ref adds the transistion class to run the closing animation & a promise
 * is ran to handle closing the modal at the end of the animation. If the modal class cant be found it closes the modal instead.  
 * @param {React.MutableRefObject<T>} ref React.useRef(HtmlElement) useRef attached to modal
 * @param {React.Dispatch<React.SetStateAction<boolean>>} setBoolean boolean useState().
 * @param {string} modalToFind string representing className of the modal to close and find and the transition out animation.
 * @param {string} transitionEffectToAdd string representing the className to add to modalToFind representing a class that adds the exit animation
 * @returns {void} void
 * 
 */

export const useCloseModalOnOutsideClick = (ref, setBoolean, modalToFind, transitionEffectToAdd) => {

    const checkOutsideClick = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
            if (modalToFind && transitionEffectToAdd) {
                let modalToClose = document.querySelector(`.${modalToFind}`);
                if (modalToClose) {
                    modalToClose.classList.add(transitionEffectToAdd);
                    Promise.all(modalToClose.getAnimations().map((animation) => animation.finished),)
                        .then(() => {
                            setBoolean(false);
                        }, () => {
                            setBoolean(false);
                        });
                }
            }
            else {
                setBoolean(false);
            }
        }
    };

    useEffect(() => {
        document.addEventListener("click", checkOutsideClick);
        return () => document.removeEventListener("click", checkOutsideClick);
    }, [setBoolean]);
}
