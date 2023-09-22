import React from "react";
import mini_strife_logo from "/app/assets/images/Strife_logo_compressed.png";
import { SplashDownloadIcon } from "../front_end_svgs/Strife_svgs";

const SplashBody = (props) => {

    return (
        <div>
            <div className='splash-grid whiteBackGround'>
                <div id="row-1" className='splash-row splash-cont-1 splashImgLeft splashVisible'>
                    <img className='splash-img-level-1 splash-img-level-1-size' alt=" " />
                    <div className='splash-content-description'>
                        <h2 className='splash-content-description-h2'>
                            Create an invite-only place where you belong
                        </h2>
                        <div className='splash-content-description-subtitle'>
                            $TR!F3 servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.
                        </div>
                    </div>
                </div>
            </div>

            <div className='splash-grid greyBackGround'>
                <div id="row-2" className='splash-row splash-cont-1 splashImgRight splashVisible'>

                    <img className='splash-img-level-2 splash-img-level-1-size' alt=" " />
                    <div className='splash-content-description'>
                        <h2 className='splash-content-description-h2'>
                            Where hanging out is easy
                        </h2>
                        <div className='splash-content-description-subtitle'>
                            Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call.
                        </div>
                    </div>
                </div>
            </div>

            <div className='splash-grid whiteBackGround'>
                <div id="row-3" className='splash-row splash-cont-1 splashImgLeft splashVisible'>
                    <img className='splash-img-level-3 splash-img-level-1-size' alt=" " />
                    <div className='splash-content-description'>
                        <h2 className='splash-content-description-h2'>
                            From few to a fandom
                        </h2>
                        <div className='splash-content-description-subtitle'>
                            Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.
                        </div>
                    </div>
                </div>
            </div>

            <div className='splash-grid greyBackGround'>
                <div id="row-4" className='splash-row splash-cont-1 splashImgBottom splashFeatureLastTitle splashVisible'>
                    <div className='splash-content-description'>
                        <h2 className='splash-content-description-h2 headline-splash-h2'>
                            Reliable tech for staying close
                        </h2>
                        <div className='splash-content-description-subtitle'>
                            Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their games,
                            or gather up and have a drawing session with screen share.
                        </div>
                    </div>
                    <img className='splash-img-level-4' alt=" " />
                </div>
            </div>
            <div className='splash-grid greyBackGround'>
                <div className='splash-row splash-cont-2 splash-sparkles-cont'>
                    <div className='sparkles-container'>
                        <img className='sparkles-img' alt=" " />
                    </div>
                    <h4 className='splash-header-h4'>
                        Ready to start your journey?
                    </h4>
                    <a className='splash-sparkles-button' href={mini_strife_logo} download="STRIFE.EXE">
                        <SplashDownloadIcon className="change-down-icon-2" />
                        Download for Windows
                    </a>
                </div>
            </div>
        </div>
    )
}

export default SplashBody;