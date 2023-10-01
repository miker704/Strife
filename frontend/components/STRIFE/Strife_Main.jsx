import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from '../../utils/route_util.jsx';
import ModalManagerContainer from '../modals/modal_manager_container.js';
import ServerNavBarContainer from '../server/server_nav_bar/server_nav_bar_container.js';
import HomePageContainer from '../friends/friends_page_main/friends_home_page_container.js';
import LoadingScreenContainer from '../loading_screens/loading_screen/loading_screen_container.js';
import IntrusionPreventionLoadingScreenContainer from '../loading_screens/intrustion_prevention_loading_screen/instrusion_loading_screen_container.js';
import DeletedServerLoadingScreenContainer from '../loading_screens/delete_server_loading_screen/delete_server_loading_screen_container.js';
import UpdateLoadingScreenContainer from '../loading_screens/update_loading_screen/update_screen_loading_screen_container.js';
import ExploreServersContainer from '../server/server_search/server_search_container.js';
import PROTECTED_DM_SERVER_CONTAINER from '../dm_servers/dm_server_security/protect_dm_server_container.js';
import PROTECTED_SERVER_CONTAINER from '../server/server_security/protect_server_container.js';
import _STRIFE_CORE_CONTAINER_ from '../Core/CORE_CONTAINER.js';
import TestPageContainer from '../test_bench/test_container.js';
import STRIFE_VOICE_CALL_API_CONTAINER from '../voice_calls/voice_call_container.js'


const _STRIFE_MAIN_ = () => {



    return (
        <div className='app-puller' id='app-puller'>
            <svg viewBox="0 0 1 1" aria-hidden="true"
                style={{ position: 'absolute', pointerEvents: 'none', top: '-1px', left: '-1px', width: '1px', height: '1px' }}
            >

                <mask id="svg-mask-avatar-default" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
                    <circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle>
                </mask>
                <mask id="svg-mask-avatar-status-round-16" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
                    <circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle>
                    <circle fill="black" cx="0.8125" cy="0.8125" r="0.3125"></circle>
                </mask>
                <mask id="svg-mask-avatar-status-round-20" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
                    <circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle>
                    <circle fill="black" cx="0.85" cy="0.85" r="0.25"></circle>
                </mask>
                <mask id="svg-mask-avatar-status-round-24" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
                    <circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle>
                    <circle fill="black" cx="0.8333333333333334" cy="0.8333333333333334" r="0.2916666666666667"></circle>
                </mask>

                <mask id="svg-mask-avatar-status-round-32" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
                    <circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle>
                    <circle fill="black" cx="0.84375" cy="0.84375" r="0.25">
                    </circle>
                </mask>
                <mask id="svg-mask-avatar-status-round-40" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
                    <circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle>
                    <circle fill="black" cx="0.85" cy="0.85" r="0.25"></circle>
                </mask>
                <mask id="svg-mask-avatar-status-round-56" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
                    <circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle>
                    <circle fill="black" cx="0.8392857142857143" cy="0.8392857142857143" r="0.19642857142857142"></circle>
                </mask>
                <mask id="svg-mask-avatar-status-round-80" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
                    <circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle>
                    <circle fill="black" cx="0.85" cy="0.85" r="0.175"></circle>
                </mask>
                <mask id="svg-mask-avatar-status-round-120" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
                    <circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle>
                    <circle fill="black" cx="0.8333333333333334" cy="0.8333333333333334" r="0.16666666666666666"></circle>
                </mask>
                <mask id="svg-mask-status-online" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
                    <circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle>
                </mask>
                <mask id="svg-mask-status-idle" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
                    <circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle>
                    <circle fill="black" cx="0.25" cy="0.25" r="0.375"></circle>
                </mask>
                <mask id="svg-mask-status-dnd" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
                    <circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle>
                    <rect fill="black" x="0.125" y="0.375" width="0.75" height="0.25" rx="0.125" ry="0.125"></rect>
                </mask>
                <mask id="svg-mask-status-offline" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
                    <circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle>
                    <circle fill="black" cx="0.5" cy="0.5" r="0.25"></circle>
                </mask>
            </svg>

            <Route path='/' component={ModalManagerContainer}></Route>
            <ProtectedRoute path='/$/' component={_STRIFE_CORE_CONTAINER_} ></ProtectedRoute>

            <div className='container-mapper'>

                <ProtectedRoute path="/$/channels/:serverId/" component={ServerNavBarContainer} />
                <ProtectedRoute path="/$/test/" component={TestPageContainer} />
                {/* <ProtectedRoute exact path="/voice/" component={STRIFE_VOICE_CALL_API_CONTAINER} /> */}

                {/* render proper component for messages type or friends list */}
                <Switch>

                    <ProtectedRoute path="/$/channels/@me/:dmServerId" component={PROTECTED_DM_SERVER_CONTAINER} />
                    <ProtectedRoute path="/$/channels/:serverId/:channelId" component={PROTECTED_SERVER_CONTAINER} />
                    <ProtectedRoute path="/$/channels/@me" component={HomePageContainer} />
                    <ProtectedRoute path="/$/channels/guild-discovery/" component={ExploreServersContainer} />

                </Switch>
                {/* this componenet is routed again to this path in order to activate which dmServer is selected  
                        the first route path to this component is to display the component and be able to enter it*/}

                {/* alt routes to other areas not involving main app */}
                <Switch>
                    <ProtectedRoute path="/$/loading/" component={LoadingScreenContainer} />
                    <ProtectedRoute path='/$/updating/' component={UpdateLoadingScreenContainer} />
                    <ProtectedRoute path="/$/telefrag/" component={DeletedServerLoadingScreenContainer} />
                    <ProtectedRoute path='/$/$TR!F3-INTRUSION-PREVENTION/' component={IntrusionPreventionLoadingScreenContainer} />
                </Switch>
            </div>
            <div id="sub-modal" className='subModal'></div>
            <div id="sub-modal-2" className='subModal'></div>
        </div>
    )

}
export default _STRIFE_MAIN_;