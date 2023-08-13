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

