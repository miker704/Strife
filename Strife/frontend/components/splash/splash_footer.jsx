import React from "react"
import { Link } from "react-router-dom"




class SplashFooter extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    return (
      <div id="main-footer-bar">
        <div id="footer-content">
          <div id="footer-title">
            <h4> IMAGINE A PLACE</h4>
            <br />
            <span id="flag-span"><img className="flag" /> English, USA <br /></span><br />
            <i className="fa-brands fa-twitter fa-lg"></i>{"    "}
            <i className="fa-brands fa-instagram fa-lg"></i>{"    "}
            <i className="fa-brands fa-facebook-square fa-lg"></i>{"    "}
            <i className="fa-brands fa-youtube fa-lg"></i>


          </div>
          <h6> <a className="link" href="https://www.linkedin.com/in/michael-ramoutar/"
            target="_blank"> LinkedIn  </a></h6>
          <h6> <a className="link" href="https://github.com/miker704"
            target="_blank"> Github </a></h6>
          <h6>  <a className="link" href="https://angel.co/u/michael-ramoutar-1"
            target="_blank"> AngelList</a></h6>
          <h6> <a className="link" href="https://discord.com/"
            target="_blank"> Discord  </a></h6>

          <div id="footer-cnt">
            <ul className="footer-list"> About STRIFE
              <li>
                <a className="link" href="https://github.com/miker704/Strife"
                  target="_blank"> STRIFE on Github </a>
              </li>
              <li>
              <a className="link" href="app/assets/images/discord_Strife_logo.png" download = "STRIFE.EXE"
                            target="_blank"> Download </a>
              </li>

            </ul>
          </div>
        </div>
        <br />
        <div id="footer-navbar">
          <div id="bottom_site">
            <i className="fa-brands fa-discord fa-xl" />
            <span id="website-name"> STRIFE </span>
          </div>
          <div id="NW">
            <div>
              <span>STRIFE is a Discord Clone built by </span>
              <a className="link" href="https://github.com/miker704" target="_blank">
                Michael A. Ramoutar.</a>
            </div>

          </div>
          <div id="register-link-footer">
            <Link to="/register">Sign Up</Link>
          </div>
        </div>
      </div>
    )

  }
}

export default SplashFooter;







