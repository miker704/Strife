import React from "react";


class DmMessages extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        console.log("dmserver messages props", this.props);

        if (this.props.dmMessages.length === 0) {
            return (

                <div className="empty-messages-container">Hello World</div>

            )
        }


       
    }
}

export default DmMessages;