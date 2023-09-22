import React from "react";
import SplashNavBar from "./splash_nav_bar";
import SplashBody from "./splash_body";
import SplashFooter from "./splash_footer";
import { useEffect } from "react";

const SplashMain = (props) => {


    // useEffect(() => {
    //     document.getElementById('root').style.overflow = "hidden scroll";
    //     return function cleanUp () {
    //         document.getElementById("root").removeAttribute("style");
    //     }

    // }, [])


    return (

        <div id="app-mount">
            <div className='splash-home-container'>
                <SplashNavBar />
                <SplashBody />
                <SplashFooter />
            </div>
        </div>

    )
}

export default SplashMain;