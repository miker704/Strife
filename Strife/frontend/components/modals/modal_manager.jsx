import React from "react";
import CreateServerFormContainer from "../server/server_forms/create_server_forms/create_server_form_container.js";

class ModalManager extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            serverPublic: false
        }
        this.setPublicTrue = this.setPublicTrue.bind(this);
        this.setPublicFalse = this.setPublicFalse.bind(this);
        console.log(
            "modal call"
        )
    }

    setPublicTrue () {
        this.setState({ serverPublic: true });
    }

    setPublicFalse () {
        this.setState({ serverPublic: false });

    }

    render () {
        let renderedModal = "";
        // using a switch statement to reduce slow down of processing multiple if statemnets with similar
        // or little complex condtions also to dry up the code
        switch (this.props.modal) {
            case "createServerForm":
                console.log("createServerForm called to be rendered")
                renderedModal = <CreateServerFormContainer />
                break;
            case "EditServerForm":
                renderedModal = <EditServerFormContainer />
                break;

            // case "SearchServerForm":
            //     renderedModal = <EditServerFormContainer />
            //     break;

          
            default:
                return null;
        }



        if (!this.props.modal) {
            console.log("returned null model");
            return null;
        }

        return (
            <div className="modal-struct" onClick={this.props.closeModal}>
                <div className="modal-child-componenet" onClick={e => e.stopPropagation()}>
                    {renderedModal}
                </div>
            </div>

            // <div>
            //     <div>{renderedModal}</div>
            // </div>

        );




    }


}

export default ModalManager;

