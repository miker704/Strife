


class errorHandlingAPI {
    constructor(props){
        this.errors=[];       
    }
}


class SessionErrorHandler extends errorHandlingAPI{
    constructor(props){
        // this.emailErrors=["INVALID EMAIL LENGTH","EMAIL ALREADY EXISTS", "INCORRECT EMAIL FORMATTING"]
        // this.passwordErrors=["INVALID PASSWORD LENGTH", "PLEASE USE A NEW PASSWORD YOU DID NOT USE BEFORE"]
        super(props);
    }

    email_signup_error_handling(){
       let email = this.props.errors.includes("Email can't be blank") ? <h5 className="login-error">
        EMAIL - REQUIRED FIELD </h5> : <h5 className="login-normal">EMAIL</h5>
        
        if (this.props.errors.includes("Email has already been taken")){
            email = <h5 className="login-error">AN ACCOUNT WITH THAT EMAIL ALREADY EXISTS</h5>
        }
        return email;
    }
    password_error_handling(){

    }
}

export default SessionErrorHandler;

// let email = this.props.errors.includes("Email can't be blank") ? <h5 className="login-error">
//             EMAIL - REQUIRED FIELD </h5> : <h5 className="login-normal">EMAIL</h5>


        // let password=this.props.errors.includes('Password is too short (minimum is 6 characters)') ? <h5 className="login-error">
        // PASSWORD - MUST BE AT LEAST 6 CHARACTERS LONG </h5> : <h5 className="login-normal">PASSWORD</h5>
        // let username=this.props.errors.includes("Username can't be blank") ? <h5 className="login-error">
        // USERNAME - REQUIRED FIELD </h5> : <h5 className="login-normal">USERNAME</h5>
        // let birthday=this.props.errors.includes("Birthday can't be blank") ? <h5 className="login-error">
        // BIRTHDAY - REQUIRED FIELD </h5> : <h5 className="login-normal">BIRTHDAY</h5>
