import React from 'react';
import { useEffect } from "react";

const DeletedServerLoadingScreen = (props) => {

    useEffect(() => {

        if (props.ui_modal?.length > 0) { props.closeModal(); }

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
            }, 5000);
        }

    }, []);


    return (
        <div className="loading-screen-wrapper" id="loading-screen-wrapper">
            <div className="circle-wrap warped">
                <img className="loading-screen-img" alt=" " />
                <div className="shiny-button-container">
                    <div className="shiny-button-flex">
                    </div>
                </div>
            </div>
            <div className="loading-circle-infinite-warped"></div>
            <h1 className="loading-screen-img-h2">SERVER HAS BEEN DELETED, TELEPORTING HOME ... </h1>
        </div>
    )
}

export default DeletedServerLoadingScreen;