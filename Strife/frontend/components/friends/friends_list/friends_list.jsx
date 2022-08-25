import React from "react";



class FriendShipIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.requestFriendships();
    }


    render(){
        // let allFriends = this.props.requestFriendships();
        let allFriends = [1];
        // console.log("all friends : ", allFriends);
        console.log("this.props.friends-index : ",this.props);
        return (
            // <div className="friend-index-item-wrapper">
            //     <div className="friend-index-item">
            //         <div className="friend-info">
            //                 <p className="this-is-a-test">HELLOOOOOOOOOO</p>
            //         </div>
            //     </div>
            // </div>

            <div className="friend-index-container">
                <div className="friend-index">
                    <div className="all-friends">
                        {`ALL FRIENDS - ${allFriends.length}`}
                    </div>
                   
                </div>
            </div>


        )
    }
}

export default FriendShipIndex;