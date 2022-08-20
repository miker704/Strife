import React from "react";


class UserSearchModal extends React.Component {

    constructor(props){
        super(props);


        this.updateName = this.updateName.bind(this);
        this.searchDMUsers = this.searchDMUsers.bind(this);
    }

    updateName(e){
        e.preventDefault();
    }



    searchDMUsers(){

    }
    
}

export default UserSearchModal;