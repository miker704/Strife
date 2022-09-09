import React from "react";
import CreateServerFormContainer from "../server/server_forms/create_server_forms/create_server_form_container.js";
import UserProfileContainer from "../users/user_profile/user_profile_container.js";
import EditUserPFPContainer from "../users/user_edit_profile_pic_form/user_edit_pfp_container.js";
import EditUserPasswordContainer from "../users/user_edit_password_form/user_edit_password_container.js";
import EditUserEmailContainer from "../users/user_edit_email_form/user_edit_email_container.js";
import EditUserPhoneNumberContainer from "../users/user_edit_phone_number_form/user_edit_phone_number_container.js";
import EditUserNameContainer from "../users/user_edit_username_form/user_edit_username_container.js";
import UserSearchContainer from "../users/user_search_modal/user_search_container.js";
import CreateDmModalContainer from "../dm_servers/create_new_dm/create_dm_container.js";
import FriendRequestErrorModalContainer from "../friends/friend_request_error_modal/friend_request_error_modal_container.js";
import DownloadAppsContainer from "../server/download_apps/download_apps_container.js";
import EditFriendshipModalContainer from "../friends/edit_friendship_modal/edit_friendship_container.js";



class ModalManager extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            setSpecialFeatures : 0
        }
        this.setModalSpecialFeatures = this.setModalSpecialFeatures.bind(this);
        console.log("modal call");
    }

    //this function is to set special modal background/ positioning for different modals that need it 
    setModalSpecialFeatures (modifier) {
        this.setState({ setSpecialFeatures: modifier });
    }



    render () {
        let renderedModal;
        let modalMod=0;
        // using a switch statement to reduce slow down of processing multiple if statemnets with similar
        // or little complex condtions also to dry up the code
        switch (this.props.modal) {
            case 'createServerForm':
                console.log("createServerForm called to be rendered")

                // renderedModal =  <CreateServerFormContainer />
                renderedModal = (<div className="modal-child-component" onClick={e => e.stopPropagation()}>
                    <CreateServerFormContainer />
                </div>)

                break;
            case 'userProfile':
                renderedModal = <UserProfileContainer />
                break;

            case 'frf-error':
                renderedModal = <FriendRequestErrorModalContainer />
                break;

            case 'downloadApps':
                renderedModal = <DownloadAppsContainer />
                break;

            case 'userSearch':

                renderedModal = <UserSearchContainer />

                break;


            case 'friendOptions':

                renderedModal = <EditFriendshipModalContainer />

                break;


            case 'createDmModal':

                renderedModal = <CreateDmModalContainer/>

                break;

            default:
                return null;
        }



        if (!this.props.modal) {
            console.log("returned null model");
            return null;
        }

        if(this.props.modal === "createDmModal"){
            modalMod=1;
        }


        return (
            <div className={`modal-struct-${modalMod}`} onClick={this.props.closeModal}>
                {/* <div className="modal-child-component" onClick={e => e.stopPropagation()}>
                    {renderedModal}
                </div> */}
                {renderedModal}
            </div>


        );




    }


}

export default ModalManager;

