import { connect } from "react-redux";
import { withRouter } from "react-router";
import { closeModal } from "../../../actions/modal_actions";
import { handleKeyUp } from "../../../utils/modal_api_util";
import DownloadApps from "./download_apps_modal";

const mDTP = (dispatch) => {
    return {
        closeModal: () => dispatch(closeModal()),
        handleESC: (e) => handleKeyUp(e),

    }
}
const DownloadAppsContainer = withRouter(connect(null,mDTP)(DownloadApps));
export default DownloadAppsContainer;