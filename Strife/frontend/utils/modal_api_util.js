import { closeModal } from "../actions/modal_actions";

export const handleKeyUp = (e) => {
    // console.log("in esc function");

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