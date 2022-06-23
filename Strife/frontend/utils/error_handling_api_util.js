


class errorHandlingAPI {
    constructor(){
        this.errors=[];       
    }
}


class SessionErrorHandler extends errorHandlingAPI{
    constructor(){
        this.emailErrors=["INVALID EMAIL LENGTH","EMAIL ALREADY EXISTS", "INCORRECT EMAIL FORMATTING"]
        this.passwordErrors=["INVALID PASSWORD LENGTH", "PLEASE USE A NEW PASSWORD YOU DID NOT USE BEFORE"]

    }

    email_error_handling(){
            
    }
    password_error_handling(){

    }
}
