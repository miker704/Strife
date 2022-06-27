import React from "react";
import { Link } from "react-router-dom";



class SplashNav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="splash-nav">
          
                    <div id="site-intro">
                        <i className="fa-brands fa-discord fa-xl" />
                        <span id="site-name"> Strife </span>
                    </div>
                    <div className="splash-nav-links">
                        <a className="link" href="https://github.com/miker704"
                            target="_blank"> Github </a>
                        <a className="link" href="https://www.linkedin.com/in/michael-ramoutar/"
                            target="_blank"> LinkedIn  </a>
                    </div>
                    <div id="login">
                        <Link to="/login">Login</Link>
                    </div>


                </div>
                )
    }
}

export default SplashNav;