import React from "react";
import NavBarContainer from "../nav_bar/nav_bar_container";
class Splash extends React.Component{

    constructor(props){
        super(props);

    }
    render(){
        return(
            <div className="splash-home">
              <h1>calling from home</h1>
              <NavBarContainer/>
            </div>
        )
    }

} 


export default Splash;