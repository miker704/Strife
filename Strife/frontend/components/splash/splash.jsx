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
                
                {/* <NavBarContainer /> */}
                <div id="splash-div">
                    <div id="imagine-message">
                        <h2 id="imagine-header">IMAGINE A PLACE...</h2>
                        <p id="imagine-intro">...where you can belong to a school club, a gaming group,
                            or a worldwide art community.
                            Where just you and a handful of friends can spend time together.
                            A place that makes it easy to talk every day and hang out more often.
                        </p>
                        <Link to="/signup"><span id="signup-inner-text">Open Strife in the Browser!</span></Link>
                    </div>
                </div>
                <div className="white-div">
                    <img className="white-div-image-one" />
                    <div className="white-div-message">
                        <h3 className="white-div-header">Create an invite-only place where you belong</h3>
                        <p className="white-div-body">
                            Strife servers are organized into topic-based channels where you can
                            collaborate, share, and just talk about your day without clogging
                            up a group chat.
                        </p>
                    </div>
                </div>
                <div className="grey-div">
                    <div className="white-div-message">
                        <h3 className="white-div-header">Where hanging out is easy</h3>
                        <p className="white-div-body">
                            Grab a seat in a voice channel when you're free. Friends in your server can see you're around
                            and instantly pop in to talk without having to call.
                        </p>
                    </div>
                    <img className="grey-div-image-one" />
                </div>
                <div className="white-div">
                    <img className="white-div-image-two" />
                    <div className="white-div-message">
                        <h3 className="white-div-header">From few to a fandom</h3>
                        <p className="white-div-body">
                            Get any community running with moderation tools and custom member access. Give
                            members special powers, set up private channels, and more.
                        </p>
                    </div>
                </div>
                <div className="last_sec-div">
                    <img className="just_chillin_img" />
                    <div className="white-div-message">
                        <h3 className="white-div-header">Reliable Teach For Staying Close</h3>
                        <p className="white-div-body">
                        Low-latency voice and video feels like you're in the same room. Wave hello over video, 
                        watch friends stream their games, or gather up and have a drawing session with screen share.
                        </p>
                    </div>
                </div>


                <div className="grey-sign-up-div">
                    <div id="sign-up-items">
                        <h3 className="sign-up-div-header">Ready to start your journey?</h3>
                        <Link to="/signup">Open Strife in the Browser!</Link>
                    </div>
                </div>








            </div>
        )
    }

}


export default Splash;