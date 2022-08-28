import React from "react";

class FriendRequestErrorModal extends React.Component {
    constructor (props) {
        super(props);
        this.cancel = false;
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    componentDidMount () {
        window.addEventListener('keyup', this.props.handleESC, false);

    }

    componentWillUnmount () {
        window.removeEventListener('keyup', this.props.handleESC, false);
        this.props.removeSessionErrors();
    }



    handleSubmit () {
        if (this.cancel === true) {

            this.props.closeModal();
            this.props.removeSessionErrors();

        }
    }

    render () {
        return (
            <div className="frfm-backdrop">
                <div className="frfm-wrapper" onClick={e => e.stopPropagation}>
                    <div className="frfm">
                        <div className="frfm-inner">
                            <form className="form-class-200" onSubmit={this.handleSubmit}>
                                <div className="form-content-1">
                                    <div className="form-content-1-inner">
                                        <h2 className="form-content-1-header">
                                            Friend Request Failed
                                        </h2>
                                        <div className="form-content-1-subtext">
                                            Hm, didn't work. Double check that the capitalization, spelling,
                                            any spaces, and numbers are correct.
                                        </div>
                                    </div>
                                    <div className="frfm-div-sep"></div>
                                </div>

                                <div className="frfm-button-sec">
                                    <button type="submit" onClick={() => this.cancel = true} className="frfm-button">Okay</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FriendRequestErrorModal;