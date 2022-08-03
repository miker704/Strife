import React from "react";
import { Link } from "react-router-dom";



class SplashNav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

            <div className="splash-nav-flex-grid">
            <div className="splash-nav-grid">
                <div id="splash-nav">
                    <div className="website-banner-flex">
                    <div id="website-banner">
                        <span id="change-down-icon">
                        <i className="fa-brands fa-discord fa-xl logo-banner">{"    "}</i>
                        </span>
                        <span id="website-name-banner"> STRIFE </span>
                    </div>
                    </div>


                    <div id="splash-nav-links">

                        <a className="link" href="app/assets/images/discord_Strife_logo.png" download="STRIFE.EXE"
                            target="_blank"> Download </a>
                        <a className="link" href="https://github.com/miker704/Strife"
                            target="_blank"> STRIFE </a>
                        <a className="link" href="https://github.com/miker704"
                            target="_blank"> Github </a>
                        <a className="link" href="https://www.linkedin.com/in/michael-ramoutar/"
                            target="_blank"> LinkedIn  </a>
                        <a className="link" href="https://angel.co/u/michael-ramoutar-1"
                            target="_blank"> AngelList </a>
                        <a className="link" href="https://discord.com/"
                            target="_blank"> Discord  </a>
                    </div>
                    <div className="login-container">
                    <div id="login">
                        <Link to="/login">Login</Link>
                    </div>
                    </div>

                </div>
            </div>
            </div>
        )
    }
}

export default SplashNav;