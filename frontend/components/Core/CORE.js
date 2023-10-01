import React from "react";
import _STRIFE_CORE_CABLE_ from "./CORE_CABLE";
import { useEffect } from "react";
import { useStore } from "react-redux";
import { useHistory } from 'react-router-dom';
const _STRIFE_CORE_ = (props) => {
    const _CABLE_STORE_ = useStore();
    const _HISTORY_ = useHistory();
    useEffect(() => {
        if (props.loggedIn === true) {
            // _STRIFE_CORE_CABLE_(_CABLE_STORE_,props,props.history); //nope some how 404 upon reboot of pc
            // _STRIFE_CORE_CABLE_(_CABLE_STORE_, _HISTORY_, props);
            // _STRIFE_CORE_CABLE_(_CABLE_STORE_, _HISTORY_);
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