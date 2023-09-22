import React from "react";
import { useEffect } from "react";
import REACT_PORTAL from "../../../utils/ReactPortal_api_util";
import { CloseXIcon } from "../../front_end_svgs/Strife_svgs";

const DownloadApps = (props) => {

    useEffect(() => {
        window.addEventListener('keyup', handleESC, false);
        return function cleanUp () {
            window.removeEventListener('keyup', handleESC, false);
        }
    }, [])

    const handleESC = (e) => {
        const keys = {
            27: () => {
                e.preventDefault();
                handleCloseOnOuterClick(e);
            },
        };
        if (keys[e.keyCode]) {
            keys[e.keyCode]();
        }
    }

    const handleCloseOnOuterClick = (e) => {
        e.preventDefault();
        let modalToClose = document.getElementById("da-modal");
        if (modalToClose) {
            modalToClose.classList.add("transition-out");
            Promise.all(modalToClose.getAnimations().map((animation) => animation.finished),)
                .then(() => {
                    props.closeModal();
                    window.removeEventListener('keyup', handleESC, false);

                }, () => {
                    props.closeModal()
                    window.removeEventListener('keyup', handleESC, false);
                });
        }
        else {
            props.closeModal();
            window.removeEventListener('keyup', handleESC, false);
        }
    }


    return (
        <REACT_PORTAL wrapperId={'sub-modal'} classNameId={'subModal'} onClick={(e) => e.stopPropagation()}>
            <div className="da-layer" onClick={(e) => handleCloseOnOuterClick(e)}>
                <div className="da-backdrop"></div>
                <div className="da-flex-layer">
                    <div className="da-focus-lock" onClick={e => e.stopPropagation()}>
                        <div id="da-modal" className="da-dl-apps">
                            <div className="da-dl-apps-inner">
                                <button type="button" className="close-da" onClick={(e) => handleCloseOnOuterClick(e)}>
                                    <div className="close-da-contents">
                                        <CloseXIcon className="close-da-icon" />
                                    </div>
                                </button>
                                <div className="platform-wraps">
                                    <h3 className="platform-wraps-h3">
                                        Get $TR!F3 at Home
                                    </h3>
                                    <ul className="platforms-ul">
                                        <li className="platforms-li-item">
                                            <div className="platforms-li-item-inner-wrapper">
                                                <div className="platforms-icon-wrap">
                                                    <div className="platform-apple-icon"></div>
                                                    <div className="platform-apple-icon-active"></div>
                                                </div>
                                                <div>
                                                    <h3 className="da-icon-header">
                                                        MacOS
                                                    </h3>
                                                    <div className="download-app-buttons">
                                                        <a target="_blank" className="download-app-buttons-anchor" href="https://discord.com/api/download?platform=osx">Download</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="platforms-li-item">
                                            <div className="platforms-li-item-inner-wrapper">
                                                <div className="platforms-icon-wrap">
                                                    <div className="platform-windows-icon"></div>
                                                    <div className="platform-windows-icon-active"></div>
                                                </div>
                                                <div>
                                                    <h3 className="da-icon-header">
                                                        Windows
                                                    </h3>
                                                    <div className="download-app-buttons">
                                                        <a target="_blank" className="download-app-buttons-anchor" href="https://discord.com/api/download?platform=win">Download</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="platforms-li-item">
                                            <div className="platforms-li-item-inner-wrapper">
                                                <div className="platforms-icon-wrap">
                                                    <div className="platform-linux-icon"></div>
                                                    <div className="platform-linux-icon-active"></div>
                                                </div>
                                                <div>
                                                    <h3 className="da-icon-header">
                                                        Linux
                                                    </h3>
                                                    <div className="download-app-buttons">
                                                        <a target="_blank" className="download-app-buttons-anchor-2"
                                                            href="https://discord.com/api/download?platform=linux&amp;format=deb">Deb</a>

                                                        <a target="_blank" className="download-app-buttons-anchor-3"
                                                            href="https://discord.com/api/download?platform=linux&format=tar.gz">Tar</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mobile-platforms">
                                    <h3 className="mobile-header">Or on the go</h3>
                                    <ul className="platforms-ul">
                                        <li className="platforms-li-item">
                                            <div className="platforms-li-item-inner-wrapper">
                                                <div className="platforms-icon-wrap">
                                                    <div className="platform-apple-ios-icon"></div>
                                                    <div className="platform-apple-ios-icon-active"></div>
                                                </div>
                                                <div>
                                                    <h3 className="da-icon-header">
                                                        Apple iOS
                                                    </h3>
                                                    <div className="download-app-buttons">
                                                        <a target="_blank" className="download-app-buttons-anchor" href="https://itunes.apple.com/app/discord/id985746746">Download</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="platforms-li-item">
                                            <div className="platforms-li-item-inner-wrapper">
                                                <div className="platforms-icon-wrap">
                                                    <div className="platform-android-icon"></div>
                                                    <div className="platform-android-icon-active"></div>
                                                </div>
                                                <div>
                                                    <h3 className="da-icon-header">
                                                        Android
                                                    </h3>
                                                    <div className="download-app-buttons">
                                                        <a target="_blank" className="download-app-buttons-anchor" href="https://play.google.com/store/apps/details?id=com.discord">Download</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </REACT_PORTAL >

    )

}

export default DownloadApps;