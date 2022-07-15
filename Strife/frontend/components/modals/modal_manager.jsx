import React from "react";


class ModalManager extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            serverPublic: false
        }
        this.setPublicTrue = this.setPublicTrue.bind(this);
        this.setPublicFalse = this.setPublicFalse.bind(this);

    }

    setPublicTrue() {
        this.setState({ serverPublic: true });
    }

    setPublicFalse() {
        this.setState({ serverPublic: false });

    }

    render() {
        let renderedModal = "";
        // using a switch statement to reduce slow down of processing multiple if statemnets with similar
        // or little complex condtions also to dry up the code
        switch (this.props.modal) {
            case "createServerForm":
                renderedModal = <CreateServerFormContainer />
                break;
            case "EditServerForm":
                renderedModal = <EditServerFormContainer />
                break;
            default:
                return null;
        }



        if (!this.props.modal) {
            return null;
        }

        return (
            <div className="modal-struct" onClick={this.props.closeModal}>
                <div className="modal-child-componenet" onClick={e => e.stopPropagation()}>
                    {renderedModal}
                </div>
            </div>
        );




    }


}

export default ModalManager;

