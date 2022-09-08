import React from "react"
import { Link } from "react-router-dom"
import discord_Strife_logo from "/app/assets/images/discord_Strife_logo.png";




class SplashFooter extends React.Component {
  constructor (props) {
    super(props);

  }

  render () {

    return (
      <div id="main-footer-bar">
        <div id="footer-content">
          <div id="footer-title">
            <h4> IMAGINE A PLACE</h4>
            <br />
            <span id="flag-span"><img className="flag" /> English, USA <br /></span><br />
            <div className="foot-social-flex">

              <a className="footer-social-link" href="https://twitter.com/discord" target="_blank" title="Discord on Twitter">
                <svg width="24" height="24" viewBox="0 0 24 24" className="footer-twitter-icon">
                  <path fill="currentColor" d="M8.2177 20.2976C15.798 20.2976 19.9327 14.0329 19.9327 8.58261V8.05011C20.7362 7.46091 21.435 
                6.74089 22 5.92012C21.2567 6.26235 20.4637 6.48437 19.6507 6.57791C20.5139 6.06164 21.1597 5.24885 21.4675 4.2913C20.6598
                 4.76183 19.7822 5.10021 18.8677 5.29365C17.3053 3.64491 14.7069 3.56109 13.0415 5.10571C11.9701 6.10222 
                11.5157 7.59694 11.8512 9.02114C8.54594 8.85772 5.46574 7.29769 3.37823 4.72983C2.28095 6.60789 2.84519 9.01622 4.66249
                 10.2114C4.00661 10.1858 3.36464 10.0146 2.78309 9.71026V9.7729C2.78257 11.7293 4.15628 13.417 6.07204 13.8136C5.46884 
                13.9751 4.83671 13.9965 4.22396 13.8763C4.76475 15.5538 6.31437 16.7003 8.07674 16.7267C6.62377 17.8749 4.82287 18.4936 
                2.97103 18.4808C2.65779 18.4808 2.31323 18.4495 2 18.4182C3.84433 19.6513 6.0148 20.3057 8.23336 20.2976">
                  </path>
                </svg>
              </a>


              <a className="footer-social-link" href="https://www.instagram.com/discord/" target="_blank" title="Discord on Instagram">

              </a>
              <a className="footer-social-link" href="https://www.facebook.com/discord/" target="_blank" title="Discord on Facebook">

              </a>
              <a className="footer-social-link" href="https://www.youtube.com/discord/" target="_blank" title="Discord on Youtube">

              </a>


            </div>


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
                <a className="link" href={discord_Strife_logo} download="STRIFE.EXE"
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







