import React from "react";
import _STRIFE_CORE_CABLE_ from "./CORE_CABLE";
import { useEffect } from "react";
import { useStore } from "react-redux";

const _STRIFE_CORE_ = (props) => {
    const _CABLE_STORE_ = useStore();
    useEffect(() => {
        if (props.loggedIn === true) {
            _STRIFE_CORE_CABLE_(_CABLE_STORE_);
        }
        return function _DECONSTRUCTOR_ () {
            if (_CABLE_STORE_.getState().session.id === null) {
                App.StrifeCore.disconnected();
                App.StrifeCore.unsubscribe();
            }
        }
    }, [])
}


export default _STRIFE_CORE_;