import React from "react";
import { useState, useEffect, useRef } from "react";

const PrevPropsHook = (value) => {
    const ref = useRef();

    useEffect(() => {

        ref.current = value;

    }, [value]);

    return ref.current;
}

export default PrevPropsHook;