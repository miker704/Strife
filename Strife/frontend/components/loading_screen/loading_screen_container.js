import { connect } from "react-redux";
import { withRouter } from "react-router";
import LoadingScreen from "./loading_screen";



const mSTP = (state) => {


    //current discord loading messages as of sep 2, 2022
    const randomLoadingMessage = [
        "Strife was almost called Bonfire before we picked our name. It was meant to be nice and cozy.",
        "Loading",
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