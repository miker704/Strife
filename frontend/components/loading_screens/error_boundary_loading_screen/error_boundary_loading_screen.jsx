// This is an error boundary screen and must be written in class based component
// as per instruction and current specs stated by React itself.
import React from 'react';
import { useState, useEffect } from "react";

const ErrorBoundaryLoadingScreen = (props) => {


    useEffect(() => {
        props.reSyncCurrentUser(props.currentUser.id).then((data) => {
            let currUser = data.currentUser;
            if (!currUser.serversJoined.includes(parseInt(props.serverParams.serverId))) {
                props.history.push('/$/$TR!F3-INTRUSION-PREVENTION/');
                props.closeModal();
            }
            else {
                setTimeout(() => {
                    props.closeModal();
                }, 500);
            }
        });
        // setTimeout(() => {

        // }, );


        // if (props.history.location.pathname === "/$/channels/:serverId/:channelId") {
        //     console.log("yes at a server");
        //     setTimeout(() => {
        //         props.closeModal();
        //     }, 300);

        // }
        // else if (props.history.location.pathname !== "/$/channels/@me") {
        //     setTimeout(() => {
        //         document.getElementById('loading-screen-wrapper').classList.add('transition-out');
        //     }, 9700);
        //     setTimeout(() => {
        //         props.history.push("/$/channels/@me");
        //         props.closeModal();
        //     }, 10000);
        // }

    }, []);


    return (
        <div className="loading-screen-wrapper" id="loading-screen-wrapper" >
            <div className="circle-wrap sips">
                <img className="loading-screen-img" alt=" " />
                <div className="shiny-button-container">
                    <div className="shiny-button-flex">
                    </div>
                </div>
            </div>
            <div className="loading-circle-infinite-sips"></div>
            <h1 className="intrusion-warning">ooops! .... Something went wrong! Warping to home.</h1>
        </div >
    )
}

export default ErrorBoundaryLoadingScreen;