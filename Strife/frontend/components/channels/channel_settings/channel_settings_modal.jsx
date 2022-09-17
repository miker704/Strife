import React from "react";
import { useEffect, useRef, useState } from "react";


const ChannelSettingsModal = (props) => {



    return (
        <div className="user-profile-wrapper" onClick={e => e.stopPropagation()}>
            <div className="user-profile" id="user-profile">

                <div className="sidebar">
                    <div className="sidebar-scrollbar">
                        <div className="sidebar-inner">
                            <div className="user-profile-left-side">
                                <ul className="user-profile-item-list">
                                    <li><h3 className="user-profile-header3">#Channel Name<span className="cs-inner-header-span">channeltype</span></h3></li>
                                    <li className="user-profile-item force">Overview</li>
                                    <li className="user-profile-item">Permissions</li>
                                    <li className="user-profile-item">Invites</li>
                                    <li className="user-profile-item">Integrations</li>
                                    <div className="user-settings-separator"></div>
                                    <li className="user-profile-item">
                                        <div className="user-profile-item-logout-sec">
                                            Delete Channel
                                            <svg className="upm-logout-icon" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M15 3.999V2H9V3.999H3V5.999H21V3.999H15Z"></path>
                                                <path fill="currentColor" d="M5 6.99902V18.999C5 20.101 5.897 20.999 7 20.999H17C18.103 20.999 19 20.101 19
                                             18.999V6.99902H5ZM11 17H9V11H11V17ZM15 17H13V11H15V17Z">
                                                </path>
                                            </svg>
                                        </div>
                                    </li>
                                    <li className="user-profile-item" >
                                        <div className="user-profile-item-logout-sec">
                                            Log Out
                                            <svg className="upm-logout-icon" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M18 2H7C5.897 2 5 2.898 5 4V11H12.59L10.293 8.708L11.706 7.292L16.414 11.991L11.708 16.706L10.292 15.294L12.582 
                                  13H5V20C5 21.103 5.897 22 7 22H18C19.103 22 20 21.103 20 20V4C20 2.898 19.103 2 18 2Z">
                                                </path>
                                            </svg>
                                        </div>
                                    </li>
                                    <div className="user-settings-separator"></div>
                                    <div className="version-number">
                                        <span>Stable 140575 (12c29a3)</span>
                                        <br />
                                        <span>Windows 11 64-bit</span>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="user-profile-right-side-wrapper">
                    <div className="user-profile-rs-inner-wrapper">

                        <div className="user-profile-right-side">


                            <div className="user-profile-header1-div">
                                <h1 className="user-profile-header1">Overview</h1>
                            </div>

                            <div className="my-account-container-wrapper">


                                <div className="server-op-item-flex">

                                    <div className="server-op-item-margin-bottom">
                                        <h5 className="server-op-item-margin-bottom-h5">Channel Name </h5>
                                        {/* <div className="server-op-name-input-wrapper"> */}
                                        <input className="server-op-name-input" type="text" maxLength={100} placeholder="servernameplaceholder" />
                                        <button type="button" className="faint-boost-shiny-button">
                                            <div className="shiny-button-contents">
                                                <svg className="shiny-button-icon" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 8 12">
                                                    <path d="M4 0L0 4V8L4 12L8 8V4L4 0ZM7 7.59L4 10.59L1 7.59V4.41L4 1.41L7 4.41V7.59Z" fill="currentColor">
                                                    </path>
                                                    <path d="M2 4.83V7.17L4 9.17L6 7.17V4.83L4 2.83L2 4.83Z" fill="currentColor">
                                                    </path>
                                                </svg>
                                                Submit Name Change
                                                <div className="shiny-button-container">
                                                    <div className="shiny-button-flex">
                                                        <div className="shiny-button-inner"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </button>
                                        {/* </div> */}
                                    </div>
                                </div>


                                <div className="server-op-divider">
                                    <div className="server-op-divider-flex-js">
                                        <div className="server-op-flexchild1">
                                            <h5 className="server-op-div-fjs-h5">Channel Topic</h5>
                                        </div>

                                    </div>
                                    <div className="cs-channel-topic-input-wrapper">
                                        <div className="cs-ip-maxlen">
                                            <div className="cs-text-area">
                                                <textarea disabled id="cs-ta" spellCheck={false} value={this.state.value} maxLength={1024} onChange={(e) => this.setCount(e)}
                                                    placeholder="Let everyone know how to use this channel! (STRIFE NITRO Required!)">
                                                </textarea>
                                                <span className="tmaxlen">Maximum 1024 characters.</span>
                                                <div className="maxlen-textarea-cs">{`${this.state.count}`}</div>
                                            </div>

                                        </div>
                                    </div>
                                    {/* <div className="server-op-name-input-wrapper"> */}

                                    <button type="button" className="faint-boost-shiny-button" disabled>
                                        <div className="shiny-button-contents">
                                            <svg className="shiny-button-icon" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 8 12">
                                                <path d="M4 0L0 4V8L4 12L8 8V4L4 0ZM7 7.59L4 10.59L1 7.59V4.41L4 1.41L7 4.41V7.59Z" fill="currentColor">
                                                </path>
                                                <path d="M2 4.83V7.17L4 9.17L6 7.17V4.83L4 2.83L2 4.83Z" fill="currentColor">
                                                </path>
                                            </svg>
                                            Submit Channel Topic Change
                                            <div className="shiny-button-container">
                                                <div className="shiny-button-flex">
                                                    <div className="shiny-button-inner"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </button>
                                    {/* </div> */}

                                </div>

                                <div className="server-op-divider">
                                    <div className="server-op-divider-flex-js">
                                        <div className="server-op-flexchild1">
                                            <h5 className="server-op-div-fjs-h5">SlowMode</h5>
                                            <div className="cs-slowmode-slider" role={"slider"}>
                                                <div className="cs-track">
                                                    <div className="cs-mark" style={{ left: '0%' }}>
                                                        <div className="cs-mark-value">Off</div>
                                                        <div className="cs-mark-dash"></div>
                                                    </div>
                                                    <div className="cs-mark" style={{ left: '7.69231%' }}>
                                                        <div className="cs-mark-value">5s</div>
                                                        <div className="cs-mark-dash"></div>
                                                    </div>
                                                    <div className="cs-mark" style={{ left: '15.3846%' }}>
                                                        <div className="cs-mark-value">10s</div>
                                                        <div className="cs-mark-dash"></div>
                                                    </div>
                                                    <div className="cs-mark" style={{ left: '23.0769%' }}>
                                                        <div className="cs-mark-value">15s</div>
                                                        <div className="cs-mark-dash"></div>
                                                    </div>
                                                    <div className="cs-mark" style={{ left: '30.7692%' }}>
                                                        <div className="cs-mark-value">30s</div>
                                                        <div className="cs-mark-dash"></div>
                                                    </div>
                                                    <div className="cs-mark" style={{ left: '38.4615%' }}>
                                                        <div className="cs-mark-value">1m</div>
                                                        <div className="cs-mark-dash"></div>
                                                    </div>
                                                    <div className="cs-mark" style={{ left: '46.1538%' }}>
                                                        <div className="cs-mark-value">2m</div>
                                                        <div className="cs-mark-dash"></div>
                                                    </div>
                                                    <div className="cs-mark" style={{ left: '53.8462%' }}>
                                                        <div className="cs-mark-value">5m</div>
                                                        <div className="cs-mark-dash"></div>
                                                    </div>
                                                    <div className="cs-mark" style={{ left: '61.5385%' }}>
                                                        <div className="cs-mark-value">10m</div>
                                                        <div className="cs-mark-dash"></div>
                                                    </div>
                                                    <div className="cs-mark" style={{ left: '69.2308%' }}>
                                                        <div className="cs-mark-value">15m</div>
                                                        <div className="cs-mark-dash"></div>
                                                    </div>
                                                    <div className="cs-mark" style={{ left: '76.9231%' }}>
                                                        <div className="cs-mark-value">30m</div>
                                                        <div className="cs-mark-dash"></div>
                                                    </div>
                                                    <div className="cs-mark" style={{ left: '84.6154%' }}>
                                                        <div className="cs-mark-value">1h</div>
                                                        <div className="cs-mark-dash"></div>
                                                    </div>
                                                    <div className="cs-mark" style={{ left: '92.3077%' }}>
                                                        <div className="cs-mark-value">2h</div>
                                                        <div className="cs-mark-dash"></div>
                                                    </div>
                                                    <div className="cs-mark" style={{ left: '100%' }}>
                                                        <div className="cs-mark-value">6h</div>
                                                        <div className="cs-mark-dash"></div>
                                                    </div>
                                                </div>
                                                <div className="cs-slider-bar">
                                                    <div className="cs-slider-bar-fill" style={{ width: '0%' }}></div>

                                                </div>
                                                <div className="cs-track-bar">
                                                    <div className="cs-grabber" style={{ left: '0%' }}></div>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="inactive-sub-info">
                                        Members will be restricted to sending one message and creating one thread per this interval,
                                        unless they have Manage Channel or Manage Messages permissions. (STRIFE NITRO Required!)
                                    </div>
                                </div>


                                <div>
                                    <div className="server-op-divider">


                                        <div className="sop-display-children">
                                            <div>
                                                <div className="server-op-divider-flex-js2">
                                                    <div className="server-op-divider-flex-horz">
                                                        <div className="server-op-horz-martop-container">
                                                            <div className="server-op-horz-label-wrapper">
                                                                <label className="server-op-horz-label">
                                                                    Age-Restricted Channel
                                                                </label>
                                                                <div className="control-123">
                                                                    <div className="control-inner">
                                                                        <svg className="slider-32CRPX" viewBox="0 0 28 20" preserveAspectRatio="xMinYMid meet" style={{ left: `${-3}px` }}>
                                                                            <rect fill="white" x="4" y="0" height="20" width="20" rx="10"></rect>
                                                                            <svg viewBox="0 0 20 20" fill="none">
                                                                                <path fill="hsl(218, calc(var(--saturation-factor, 1) * 4.6%), 46.9%)"
                                                                                    d="M5.13231 6.72963L6.7233 5.13864L14.855 13.2704L13.264 14.8614L5.13231 6.72963Z">
                                                                                </path>
                                                                                <path fill="hsl(218, calc(var(--saturation-factor, 1) * 4.6%), 46.9%)"
                                                                                    d="M13.2704 5.13864L14.8614 6.72963L6.72963 14.8614L5.13864 13.2704L13.2704 5.13864Z">
                                                                                </path>
                                                                            </svg>
                                                                        </svg>
                                                                        <input type="checkbox" className="sop-slider" disabled />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="inactive-sub-info">
                                                            Users will need to confirm they are of over legal age to view in the content in this channel.
                                                            Age-restricted channels are exempt from the explicit content filter. (STRIFE NITRO Required!)
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </div>


                                <div className="server-op-divider">
                                    <div className="server-op-divider-flex-js">
                                        <div className="server-op-flexchild1">
                                            <h5 className="server-op-div-fjs-h5">HIDE AFTER INACTIVITY</h5>
                                            <div className="select-box-look-filled">
                                                <span className="s-b-value">
                                                    <div className="s-b-value-flex">
                                                        <div className="sb-value-inner">24 Hours</div>
                                                    </div>
                                                </span>
                                                <div className="server-op-divider-icons-wrap">
                                                    <svg aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
                                                        <path fill="currentColor" d="M16.59 8.59003L12 13.17L7.41 8.59003L6 10L12 16L18 10L16.59 8.59003Z"></path></svg>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="inactive-sub-info">
                                        New threads will not show in the channel list after being inactive for the specified duration. (STRIFE NITRO Required!)
                                    </div>
                                </div>


                                <div className="channel-settings-img-wrap">
                                    <img className="channel-settings-img" alt="chsettings" />

                                </div>


                            </div>


                        </div>

                        <div className="tools-container">

                            <div className="tool-x-to-esc-button-wrapper">
                                <div className="inner-tool-container">
                                    <div className="x-to-esc-button" >
                                        <svg role="img" width="18" height="18" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 
                                  12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z">
                                            </path>
                                        </svg>
                                    </div>
                                    <div className="esc-bind">ESC</div>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </div>

    )

}

export default ChannelSettingsModal;