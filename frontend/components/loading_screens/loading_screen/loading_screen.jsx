import React from 'react';
import { useState, useEffect } from "react";

const LoadingScreen = (props) => {

    const [loadingMessage, setLoadingMessage] = useState('');

    useEffect(() => {
        setLoadingMessage(props.selectedLoadingMsg);
        if (props.ui_modal?.length > 0) { props.closeModal(); }
        props.receiveStrifeB0t();
        if (props.history.location.pathname !== "/$/channels/@me") {
            let lsd = document.getElementById('loading-screen-wrapper');
            setTimeout(() => {
                if (lsd) {
                    lsd.classList.add('transition-out');
                    Promise.all(lsd.getAnimations().map((animation) => animation.finished),)
                        .then(() => {
                            props.history.push("/$/channels/@me");
                        }, () => {
                            props.history.push("/$/channels/@me");
                        });
                }
                else {
                    props.history.push("/$/channels/@me");
                }
            }, 6000);
        }
    }, []);


    return (
        <div className="loading-screen-wrapper" id="loading-screen-wrapper" >
            <div className="circle-wrap default">
                <img className="loading-screen-img" alt=" " />
                <div className="shiny-button-container">
                    <div className="shiny-button-flex">
                    </div>
                </div>
            </div>
            <div className="loading-circle-infinite-default"></div>
            <h1 className="loading-screen-img-h2">Welcome to $TR!F3</h1>
            <h1 className="loading-screen-img-h2">{loadingMessage}</h1>
        </div>
    )
}


export default LoadingScreen;