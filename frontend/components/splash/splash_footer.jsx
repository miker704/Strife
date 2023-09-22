import React from "react"
import { Link } from "react-router-dom"
import mini_strife_logo from "/app/assets/images/Strife_logo_compressed.png";
import { FaceBookIcon, InstaGramIcon, LinkedInIcon, StrifeBannerLogo, TikTokIcon, TwitterIcon, YouTubeIcon } from "../front_end_svgs/Strife_svgs";

const SplashFooter = (props) => {

  return (
    <div className='splash-grid splash-footer-container'>
      <div className='splash-row'>
        <div className='splash-footer-info-box'>
          <div className='splash-footer-language-container'>
            <div className='splash-footer-language-inner-container'>
              <div className='splash-footer-language-selector-container'>
                <div className='splash-footer-language-locale-container'>
                  <img className='splash-footer-flag-img' alt=" " />
                  <div className='splash-footer-language-selector-text'>English, USA</div>
                </div>
                <img className='splash-footer-arrow-img' alt=" " />
              </div>
            </div>
          </div>

          <div className='splash-footer-social-media-container'>
            <a className="splash-footer-socialMediaLink" href="https://twitter.com/discord" title="Discord on Twitter" target="_blank">
              <TwitterIcon className="splash-footer-socialMediaIcon" />
            </a>
            <a className="splash-footer-socialMediaLink" href="https://www.instagram.com/discord/" title="Discord on Instagram" target="_blank">
              <InstaGramIcon className="splash-footer-socialMediaIcon" />
            </a>
            <a className="splash-footer-socialMediaLink" href="https://www.facebook.com/discord/" title="Discord on Facebook" target="_blank">
              <FaceBookIcon className="splash-footer-socialMediaIcon" />
            </a>
            <a className="splash-footer-socialMediaLink" href="https://www.youtube.com/discord/" title="Discord on YouTube" target="_blank">
              <YouTubeIcon className="splash-footer-socialMediaIcon" />
            </a>
            <a className="splash-footer-socialMediaLink" href="https://www.tiktok.com/@discord" title="Discord on TikTok" target="_blank">
              <TikTokIcon className="splash-footer-socialMediaIcon" />
            </a>
            <a className="splash-footer-socialMediaLink" href='https://www.linkedin.com/in/michael-ramoutar/' title="Connect With Me On LinkedIn" target="_blank">
              <LinkedInIcon className="splash-footer-socialMediaIcon" />
            </a>
          </div>

        </div>
        <div className='splash-footer-spacer'></div>
        <div className='splash-footer-route-section'>
          <h5 className='splash-footer-header-h5'>Project Status</h5>
          <a className="splash-footer-nav-link" href="https://github.com/miker704/Strife/blob/main/patches2.md" target="_blank">
            <div className='splash-footer-nav-link-inner-text'>Current Patches v5</div>
          </a>
        </div>
        <div className='splash-footer-route-section'>
          <h5 className='splash-footer-header-h5'>Other Projects</h5>
          <a className="splash-footer-nav-link" href="https://miker704.github.io/Centipede.js/" target="_blank">
            <div className='splash-footer-nav-link-inner-text'>Centipede.js</div>
          </a>
          <a className="splash-footer-nav-link" href="https://github.com/miker704/Centipede.js" target="_blank">
            <div className='splash-footer-nav-link-inner-text'>Centipede.js on Github</div>
          </a>
          <a className="splash-footer-nav-link" href="https://paint-by-numbers.onrender.com/" target="_blank">
            <div className='splash-footer-nav-link-inner-text'>Paint-by-Numbers</div>
          </a>
          <a className="splash-footer-nav-link" href="https://github.com/GabrielGroenendaal/Paint-by-Numbers" target="_blank">
            <div className='splash-footer-nav-link-inner-text'>Paint-by-Numbers on Github</div>
          </a>

        </div>

        <div className='splash-footer-route-section'>
          <h5 className='splash-footer-header-h5'>Contacts</h5>
          <a className="splash-footer-nav-link" href="https://www.linkedin.com/in/michael-ramoutar/" target="_blank">
            <div className='splash-footer-nav-link-inner-text'>LinkedIn</div>
          </a>
          <a className="splash-footer-nav-link" href="https://github.com/miker704" target="_blank">
            <div className='splash-footer-nav-link-inner-text'>Github</div>
          </a>
          <a className="splash-footer-nav-link" href="https://angel.co/u/michael-ramoutar-1" target="_blank">
            <div className='splash-footer-nav-link-inner-text'>AngelList</div>
          </a>
          <a className="splash-footer-nav-link" href="https://discordapp.com/users/765241782949642280" target="_blank">
            <div className='splash-footer-nav-link-inner-text'>Add Me On Discord</div>
          </a>
          <a className="splash-footer-nav-link" href="https://miker704.github.io/portfolio-website/" target="_blank">
            <div className='splash-footer-nav-link-inner-text'>Portfolio Site</div>
          </a>
        </div>

        <div className='splash-footer-route-section'>
          <h5 className='splash-footer-header-h5'>About $TR!F3</h5>
          <a className="splash-footer-nav-link" href="https://github.com/miker704/Strife" target="_blank">
            <div className='splash-footer-nav-link-inner-text'>$TR!F3 on Github</div>
          </a>
          <a className="splash-footer-nav-link" href={mini_strife_logo} download="STRIFE.EXE" target="_blank">
            <div className='splash-footer-nav-link-inner-text'>Download</div>
          </a>
        </div>
      </div>


      <div className='splash-row'>
        <div className='splash-footer-nav-container'>
          <div className='splash-footer-nav-seperator'></div>
          <div className='splash-footer-nav'>
            <Link className='splash-footer-nav-logo-link' to='/'>
              <StrifeBannerLogo className="strife-splash-banner-logo-footer" />
            </Link>
            <div className='splash-footer-nav-middle-text'>
              <span className='splash-footer-nav-link-inner-text'>$TR!F3 is a Discord Clone built by </span>
              <a className="splash-footer-nav-link" href="https://github.com/miker704" target="_blank">
                <div className='splash-footer-nav-link-inner-text'>Michael A. Ramoutar.</div>
              </a>
            </div>
            <Link className="splash-footer-nav-sign-up-button" to="/register">Sign Up</Link>
          </div>
        </div>
      </div>
    </div>

  )

}

export default SplashFooter;