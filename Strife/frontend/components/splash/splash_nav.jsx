import React from "react";
import { Link } from "react-router-dom";



class SplashNav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="splash-nav">
          
                    <div id="website-banner">
                        <i className="fa-brands fa-discord fa-xl" />
                        <span id="website-name"> Strife </span>
                    </div>
                    <div id="splash-nav-links">
                        
                        <a className="link" href="https://github.com/miker704"
                            target="_blank"> Download </a>
                        <a className="link" href="https://www.linkedin.com/in/michael-ramoutar/"
                            target="_blank"> Strife </a>
                        <a className="link" href="https://github.com/miker704"
                            target="_blank"> Github </a>
                        <a className="link" href="https://www.linkedin.com/in/michael-ramoutar/"
                            target="_blank"> LinkedIn  </a>
                        <a className="link" href="https://github.com/miker704"
                            target="_blank"> App/acc </a>
                        <a className="link" href="https://www.linkedin.com/in/michael-ramoutar/"
                            target="_blank"> Discord  </a>
                    </div>
                    <div id="login">
                        <Link to="/login">Login</Link>
                    </div>


                </div>
                )
    }
}

export default SplashNav;