import { connect } from "react-redux";
import { withRouter } from "react-router";
import LoadingScreen from "./loading_screen";



const mSTP = (state) => {


    //current discord loading messages as of sep 2, 2022
    const randomLoadingMessage = [
        "Strife was almost called Bonfire before we picked our name. It was meant to be nice and cozy.",
        "Loading",
        "Strife was almost called Wyvern before we picked our name. Not too proud of that one.",
        "Strife is a Discord Clone made by Michael R. for App Academy Fullstack Project.",
        "Strife is a full blown clone of Discord.",
        "Our logo's name is Mr.Wumpus.",
        "There are a bunch of hidden Easter Eggs in the app that happen when you click certain things...",
        "Discord started as a game company making a mobile game called Fates Forever.",
        "Discord’s official birthday is May 13, 2015.",
        "We came up with the idea of Discord Nitro over morning breakfast potatoes.",

        "Strife is a synom for discord",

        ""
    ]

    




    return {
        
    }
}


const mDTP = (dispatch) => {
    return {

    }
}



const LoadingScreenContainer = withRouter(connect(mSTP,mDTP)(LoadingScreen));
export default LoadingScreenContainer;