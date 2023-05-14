import { closeModal } from "../actions/modal_actions";

export const handleKeyUp = (e) => {

    const keys = {
        27: () => {
            e.preventDefault();
            dispatch(closeModal());
            window.removeEventListener('keyup', handleKeyUp, false);
        },
    };
    if (keys[e.keyCode]) {
        keys[e.keyCode]();
    }
}


export const handleKeyEnter = (e) => {
    const keys = {
        13: () => {
            e.preventDefault();
            dispatch(closeModal());
            window.removeEventListener('keyup', handleKeyEnter, false);
        },
    };
    if (keys[e.keyCode]) {
        keys[e.keyCode]();
    }
}
