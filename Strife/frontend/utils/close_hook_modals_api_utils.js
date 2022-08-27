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