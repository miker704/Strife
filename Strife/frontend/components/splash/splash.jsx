import React from "react";
import NavBarContainer from "../nav_bar/nav_bar_container";
import { Link } from "react-router-dom";
class Splash extends React.Component {

    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className="splash-home">

                <div id="splash-banner">

                    <div id="banner-message">

                        <h2 id="intro-header">IMAGINE A PLACE...</h2>
                        <p id="intro_p_text">...where you can belong to a school club, a gaming group,
                            or a worldwide art community.
                            Where just you and a handful of friends can spend time together.
                            A place that makes it easy to talk every day and hang out more often.</p>
                        <a href=""><span id="fake-download-windows">Download for Windows</span></a>
                        {" "}
                        <Link to="/register"><span id="register-embedded-text">Open Strife in your browser</span></Link>

                    </div>


                </div>


                <div className="odd-div">

                    <img className="odd-div-img1" />
                    <div className="odd-div-msg">
                        <h3 className="odd-div-header">Create an invite-only place where you belong</h3>
                    </div>


                </div>






            </div>

        )
    }

}


export default Splash;