import { connect } from "react-redux";
import { withRouter } from "react-router";
import LoadingScreen from "./loading_screen";



const mSTP = (state) => {

    const randomLoadingMessage = {
        
    }




    return {
        
    }
}


const mDTP = (dispatch) => {
    return {

    }
}



const LoadingScreenContainer = withRouter(connect(mSTP,mDTP)(LoadingScreen));
export default LoadingScreenContainer;