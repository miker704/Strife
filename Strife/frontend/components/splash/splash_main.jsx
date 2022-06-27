import React from "react";
import SplashNav from "./splash_nav";
import Splash from "./splash";


class SplashMain extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
         return(
            <div>
                <SplashNav/>
                <Splash/>

            </div>
         )
    }
}

export default SplashMain;