import React from "react";

class DownloadApps extends React.Component {

    constructor (props) {
        super(props);
    }
    render () {
        return (
            <div className="da-layer">
                <div className="da-backdrop"></div>
                <div className="da-flex-layer">
                    <div className="da-focus-lock">
                        <div className="da-dl-apps">
                            <div className="da-dl-apps-inner">
                                <button type="button" className="close-da">
                                    <div className="close-da-contents">
                                        <svg className="close-da-icon" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12
                                             13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z">
                                            </path>
                                        </svg>
                                    </div>
                                </button>
                                <div className="platform-wraps">
                                    <h3 className="platform-wraps-h3">
                                        Get Discord at Home
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
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default DownloadApps;