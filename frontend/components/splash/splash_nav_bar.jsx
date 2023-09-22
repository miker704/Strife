import React from "react";
import { Link } from "react-router-dom";
import mini_strife_logo from "/app/assets/images/Strife_logo_compressed.png";
import { StrifeBannerLogo, SplashDownloadIcon } from "../front_end_svgs/Strife_svgs";
const SplashNavBar = (props) => {

    return (
        <div className='splash-grid splash-banner-background'>

            <div className='splash-row splash-header splashthemeWhite'>
                <header className='splash-header-desktop'>
                    <nav className='splash-nav'>
                        <Link className='splash-nav-link-logo' to='/'>
                            <StrifeBannerLogo />
                        </Link>
                        <div className='splash-nav-links-container'>
                            <a className="splash-nav-link" href={mini_strife_logo} download="STRIFE.EXE"
                                target="_blank"> Download </a>
                            <a className="splash-nav-link" href="https://github.com/miker704/Strife"
                                target="_blank"> $TR!F3 </a>
                            <a className="splash-nav-link" href="https://github.com/miker704"
                                target="_blank"> Github </a>
                            <a className="splash-nav-link" href="https://www.linkedin.com/in/michael-ramoutar/"
                                target="_blank"> LinkedIn  </a>
                            <a className="splash-nav-link" href="https://angel.co/u/michael-ramoutar-1"
                                target="_blank"> AngelList </a>
                            <a className="splash-nav-link" href="https://discord.com/"
                                target="_blank"> Discord  </a>
                        </div>
                        <div className='splash-nav-button-container'>
                            <Link className='splash-nav-login-button' to="/login">Login</Link>
                        </div>

                    </nav>
                </header>
                <header className='splash-header-mobile'>
                    <nav className='splash-nav'>
                        <Link className='splash-nav-link-logo' to='/'>
                            <StrifeBannerLogo />
                        </Link>
                        <div className='splash-nav-links-container'>
                            <a className="splash-nav-link" href={mini_strife_logo} download="STRIFE.EXE"
                                target="_blank"> Download </a>
                            <a className="splash-nav-link" href="https://github.com/miker704/Strife"
                                target="_blank"> $TR!F3 </a>
                            <a className="splash-nav-link" href="https://github.com/miker704"
                                target="_blank"> Github </a>
                            <a className="splash-nav-link" href="https://www.linkedin.com/in/michael-ramoutar/"
                                target="_blank"> LinkedIn  </a>
                            <a className="splash-nav-link" href="https://angel.co/u/michael-ramoutar-1"
                                target="_blank"> AngelList </a>
                            <a className="splash-nav-link" href="https://discord.com/"
                                target="_blank"> Discord  </a>
                        </div>
                        <div className='splash-nav-button-container'>
                            <Link className='splash-nav-login-button' to="/login">Login</Link>
                        </div>
                    </nav>
                </header>
            </div>
            <div className='splash-row splash-banner-text-container'>
                <div className='splash-banner-text-body'>
                    <div className='splash-banner-text'>
                        <h1 className='splash-banner-h1'>Imagine a place...</h1>
                        <div className='splash-banner-subtitle'>
                            ...where you can belong to a school club, a gaming group, or a worldwide art community.
                            Where just you and a handful of friends can spend time together.
                            A place that makes it easy to talk every day and hang out more often.
                        </div>
                    </div>
                    <div className='splash-banner-button-container'>
                        <a className='splash-banner-button-dfw' href={mini_strife_logo} download="STRIFE.EXE">
                            <SplashDownloadIcon className="change-down-icon"/>
                            Download for Windows
                        </a>
                        <Link className='splash-banner-button-osiyb' to='/login'>
                            Open $TR!F3 in your browser
                        </Link >
                    </div>
                </div>
            </div>
            <div className='splash-banner-imgs-container'>
                <img className="splash-svg-background-imgs splash-clouds" alt=" " />
                <img className="splash-left-side splash-left-side-img" alt=" " />
                <img className="splash-right-side splash-right-side-img" alt=" " />
            </div>
        </div>
    )

}
export default SplashNavBar;