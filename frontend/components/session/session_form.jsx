import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import SessionBackgroundSvgComponent from "./sessionBackgroundSvg.jsx";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { styled } from "@mui/material/styles";
import SvgIcon from "@mui/material/SvgIcon";

const BirthDaySelectInput = styled(Select)(({ theme }) => ({

    fontSize: '16px',
    lineHeight: '20px',
    fontFamily: "gg sans",
    fontWeight: '400',
    color: 'var(--interactive-normal)',

    '.MuiSelect-select.Mui-disabled': {
        opacity: '0.6',
        color: '#dbdee1',
        cursor: 'not-allowed',
        WebkitTextFillColor: '#dbdee1',
    },


    '.MuiSelect-select em': {
        WebkitTextFillColor: '#949BA4',
        color: '#949BA4',
        boxSizing: 'border-box',
    },

    '.MuiSelect-select': {
        backgroundColor: 'var(--input-background)',
        borderColor: 'var(--input-background)',
        cursor: 'pointer',
        outline: '0',
        border: '1px solid transparent',
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '4px',
        width: '124.8px',
        minWidth: '124.8px',
        maxWidth: '124.8px',
        minHeight: '40px',
        height: '40px',
        maxHeight: '40px',
        padding: '2px 8px',
        flexWrap: 'wrap',
        fontWeight: '500',
        letterSpacing: 'normal',
        color: 'var(--interactive-normal)',

        '.selectRegionSvgCheckMark': {
            display: 'none !important',
        },

    },
    '.MuiSvgIcon-root': {
        color: 'var(--interactive-normal)',
        display: 'flex',
        boxSizing: 'border-box',
        opacity: '1',
        transition: 'color 150ms ease 0s',
        cursor: 'pointer',
        fontSize: '1.25em',
        right: '8.7px',
        top: 'calc(47% - 0.5em)'

    },

    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        border: "none",
        borderRadius: "5px 5px 0 0",
        borderColor: 'transparent',
    },
    "& .MuiOutlinedInput-notchedOutline": {
        border: "none"
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
        border: "none",
    },

    '.MuiOutlinedInput-input': {
        padding: '2px 10px',
    },


}));

const SelectChevron = (props) => {
    return (
        <SvgIcon {...props} height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false">
            <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446
             1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 
             0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z">
            </path>
        </SvgIcon>
    );
}


const SessionForm = (props) => {

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [month, setMonth] = useState('');
    const [day, setDay] = useState('');
    const [year, setYear] = useState('');
    const [cubes, setCubes] = useState(false);
    const intervalRef = useRef(null);


    useEffect(() => {

        if (props.formType === "Sign In") {
            qrCubeSpinner();
        }

        return function cleanUp () {
            if (props.errors.length > 0) {
                props.removeSessionErrors();
            }
            clearInterval(intervalRef.current);
        }

    }, []);


    const setCubeSpinning = () => {
        setCubes((prevValue) => !prevValue)
    }

    const qrCubeSpinner = () => {

        let setIID = setInterval(() => {
            if (cubes === false) {
                setCubeSpinning();
                setTimeout(() => {
                    setCubeSpinning();
                }, 10000);
            }
        }, 20000);

        intervalRef.current = setIID;
    };


    const menuProps = {
        PaperProps: {
            sx: {
                "& .MuiMenuItem-root": {
                    cursor: 'pointer',
                    color: ' var(--interactive-normal)',
                    backgroundColor: 'transparent',
                    fontWeight: '500',
                    fontSize: '16px',
                    fontFamily: 'gg sans',
                    padding: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    boxSizing: 'border-box',
                    width: '100%',
                    userSelect: 'none',
                    boxSizing: 'border-box',
                    maxHeight: '40px',

                },

                "& .MuiMenuItem-root.Mui-selected": {
                    backgroundColor: 'var(--background-modifier-hover)',
                    color: 'var(--interactive-hover)',
                },

                "& .MuiMenuItem-root.Mui-selected .selectRegionSvgCheckMark": {
                    color: 'hsl(235, 85.6%, 64.7%)',
                },

                "& .MuiMenuItem-root.Mui-selected:hover .selectRegionSvgCheckMark": {
                    color: 'hsl(235, 85.6%, 64.7%)',
                },

                "& .MuiMenuItem-root:hover": {
                    backgroundColor: 'var(--background-modifier-hover)',
                    color: 'var(--interactive-hover)',

                },
                "& .MuiMenuItem-root:focus-within": {
                    backgroundColor: 'var(--background-modifier-hover)',
                    color: 'var(--interactive-hover)',
                },
                "& .MuiMenuItem-root:focus": {
                    backgroundColor: 'var(--background-modifier-hover)',
                    color: 'var(--interactive-hover)',
                },
                "& .MuiMenuItem-root:active": {
                    backgroundColor: 'var(--background-modifier-hover)',
                    color: 'var(--interactive-hover)',
                },

                "& .MuiMenuItem-root.Mui-selected:active, & .MuiMenuItem-root.Mui-selected:focus-within, & .MuiMenuItem-root.Mui-selected:focus, & .MuiMenuItem-root.Mui-selected:hover": {
                    backgroundColor: 'rgba(78, 80,88,0.6)',
                    color: 'white',
                },

                "&::-webkit-scrollbar": {
                    width: "8px",
                    height: "8px",
                },
                "&::-webkit-scrollbar-corner": {
                    backgroundColor: 'transparent',
                },
                "&::-webkit-scrollbar-track": {
                    backgroundColor: 'hsla(0, 0%, 0%, 0)',
                    border: '2px solid hsla(0, 0%, 0%, 0)',
                    borderColor: 'hsla(0, 0%, 0%, 0)',
                },
                "&::-webkit-scrollbar-thumb": {
                    backgroundClip: 'padding-box',
                    border: '2px solid transparent',
                    borderRadius: '4px',
                    minHeight: '40px',
                    backgroundColor: 'hsl(225, 7.1%, 11%)',
                },
                "& .MuiList-root": {
                    maxHeight: '215px',
                    overFlowY: 'auto',
                    position: 'relative',
                    boxSizing: 'border-box',
                    padding: '0px',

                }
            },

            style: {
                backgroundColor: 'var(--background-secondary)',
                color: 'var(--interactive-normal)',
                fontSize: '16px',
                lineHeight: '20px',
                fontFamily: "gg sans",
                position: 'absolute',
                fontWeight: '400',
                paddingRight: '0px',
                maxHeight: '215px',
                minWidth: '145.59px',
                width: '145.59px',
                maxWidth: '145.59px',
                boxSizing: 'border-box',
                border: '1px solid var(--background-tertiary)',
                borderRadius: '0 0 4px 4px',
                boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 4px 11px',
                marginTop: '-1px',
                marginBottom: '-1px',

            },
        },
    }

    const menuProps1 = {
        PaperProps: {
            sx: {
                "& .MuiMenuItem-root": {
                    cursor: 'pointer',
                    color: ' var(--interactive-normal)',
                    backgroundColor: 'transparent',
                    fontWeight: '500',
                    fontSize: '16px',
                    fontFamily: 'gg sans',
                    padding: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    boxSizing: 'border-box',
                    width: '100%',
                    userSelect: 'none',
                    boxSizing: 'border-box',
                    maxHeight: '40px',


                },

                "& .MuiMenuItem-root.Mui-selected": {
                    backgroundColor: 'var(--background-modifier-hover)',
                    color: 'var(--interactive-hover)',
                },

                "& .MuiMenuItem-root.Mui-selected .selectRegionSvgCheckMark": {
                    color: 'hsl(235, 85.6%, 64.7%)',
                },

                "& .MuiMenuItem-root.Mui-selected:hover .selectRegionSvgCheckMark": {
                    color: 'hsl(235, 85.6%, 64.7%)',
                },

                "& .MuiMenuItem-root:hover": {
                    backgroundColor: 'var(--background-modifier-hover)',
                    color: 'var(--interactive-hover)',

                },
                "& .MuiMenuItem-root:focus-within": {
                    backgroundColor: 'var(--background-modifier-hover)',
                    color: 'var(--interactive-hover)',
                },
                "& .MuiMenuItem-root:focus": {
                    backgroundColor: 'var(--background-modifier-hover)',
                    color: 'var(--interactive-hover)',
                },
                "& .MuiMenuItem-root:active": {
                    backgroundColor: 'var(--background-modifier-hover)',
                    color: 'var(--interactive-hover)',
                },

                "& .MuiMenuItem-root.Mui-selected:active, & .MuiMenuItem-root.Mui-selected:focus-within, & .MuiMenuItem-root.Mui-selected:focus, & .MuiMenuItem-root.Mui-selected:hover": {
                    backgroundColor: 'rgba(78, 80,88,0.6)',
                    color: 'white',
                },

                "&::-webkit-scrollbar": {
                    width: "8px",
                    height: "8px",
                },
                "&::-webkit-scrollbar-corner": {
                    backgroundColor: 'transparent',
                },
                "&::-webkit-scrollbar-track": {
                    backgroundColor: 'hsla(0, 0%, 0%, 0)',
                    border: '2px solid hsla(0, 0%, 0%, 0)',
                    borderColor: 'hsla(0, 0%, 0%, 0)',
                },
                "&::-webkit-scrollbar-thumb": {
                    backgroundClip: 'padding-box',
                    border: '2px solid transparent',
                    borderRadius: '4px',
                    minHeight: '40px',
                    backgroundColor: 'hsl(225, 7.1%, 11%)',
                },
                "& .MuiList-root": {
                    maxHeight: '215px',
                    overFlowY: 'auto',
                    position: 'relative',
                    boxSizing: 'border-box',
                    padding: '0px',

                }
            },

            style: {
                backgroundColor: 'var(--background-secondary)',
                color: 'var(--interactive-normal)',
                fontSize: '16px',
                lineHeight: '20px',
                fontFamily: "gg sans",
                position: 'absolute',
                fontWeight: '400',
                paddingRight: '0px',
                maxHeight: '215px',
                minWidth: '124.59px',
                width: '124.59px',
                maxWidth: '124.59px',
                boxSizing: 'border-box',
                border: '1px solid var(--background-tertiary)',
                borderRadius: '0 0 4px 4px',
                boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 4px 11px',
                marginTop: '-1px',
                marginBottom: '-1px',

            },
        },
    }


    const handleSetDay = (e) => {
        setDay(e.target.value);
    }

    const handleSetMonth = (e) => {
        setMonth(e.target.value);
    }
    const handleSetYear = (e) => {
        setYear(e.target.value);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if (props.errors.length > 0) {
            props.removeSessionErrors();
        }
        let submissionState = {};
        let validatedBDay = "";
        let validatedUsername = "";
        if (props.formType === 'Sign Up') {

            // Prevent user from creating account if one of the birthday fields is blank 
            if ((month === "" || day === "" || year === "") && (!(month === "" && day === "" && year === ""))) {
                submissionState = {
                    email: email,
                    username: username.trim(),
                    password: password,
                    birthday: "Invalid Date",
                }
            }
            else {
                submissionState = {
                    email: email,
                    username: username.trim(),
                    password: password,
                    birthday: new Date(month + "/" + day + "/" + year),
                }
            }

        }
        else {
            submissionState = {
                email: email,
                password: password
            }
        }
        props.processForm(submissionState).then(() => {
            props.history.push("/$/loading/");
        });

    }

    const birthdayErrors = () => {
        const BIRTHDAY_ERRORS = ["Birthday can't be blank"];

        if (props.formType === "Sign Up") {
            if (props.errors.includes("Birthday can't be blank")) {
                return "can't be blank";
            }

        }
        return "";
    }


    const passwordErrors = () => {

        const PASSWORD_ERRORS = [
            'Login or password is invalid',
            "Password can't be blank",
            "Password is too long (maximum is 72 characters)",
            "Password is too short (minimum is 8 characters)"
        ];

        const PASSWORD_ERROR_MESSAGES = {
            0: "Login or password is invalid",
            1: "can't be blank",
            2: "Must be 72 or fewer in length",
            3: "Must be at least 8 characters long"
        };

        if (props.formType === "Sign In") {
            if (props.errors.includes('Login or password is invalid')) {
                return "Login or password is invalid";
            }
        }
        else {
            for (let i = 0; i < PASSWORD_ERRORS.length; i++) {
                if (props.errors.includes(PASSWORD_ERRORS[i])) {
                    return PASSWORD_ERROR_MESSAGES[i];
                }
            }
        }

        return "";
    }


    const userNameErrors = () => {

        let USERNAME_ERRORS = [
            "Username can't be blank",
            'Username is too short (minimum is 2 characters)',
            'Username is too long (maximum is 32 characters)'
        ];

        let USERNAME_ERROR_MESSAGES = {
            0: "This field is required",
            1: 'Must be between 2 and 32 in length',
            2: 'Must be between 2 and 32 in length'
        };

        if (props.formType === "Sign Up") {
            for (let i = 0; i < USERNAME_ERRORS.length; i++) {
                if (props.errors.includes(USERNAME_ERRORS[i])) {
                    return USERNAME_ERROR_MESSAGES[i];
                }
            }

        }
        return "";
    }



    const emailErrors = () => {

        const EMAIL_ERRORS = [
            "Email can't be blank",
            "Email Not well formed email address",
            "Email Must be 320 or fewer in Length",
            "Email has already been taken",
            'Login or password is invalid'
        ];

        const EMAIL_ERROR_MESSAGES = {
            0: "can't be blank",
            1: "Not well formed email address",
            2: "Must be 320 or fewer in length",
            3: "Email is already registered ",
            4: "Login or password is invalid"
        }


        if (props.formType === "Sign In") {
            if (props.errors.includes('Login or password is invalid')) {
                return "Login or password is invalid";
            }
        }

        else {
            for (let i = 0; i < EMAIL_ERRORS.length; i++) {
                if (props.errors.includes(EMAIL_ERRORS[i])) {
                    return EMAIL_ERROR_MESSAGES[i];
                }
            }

        }


        return "";
    }


    const handleRemoveErrorsOnSwitching = (e) => {
        if (props.errors.length > 0) {
            props.removeSessionErrors();
        }
    }


    const loginAsDemoUser1 = () => {

        let demoUser = {
            email: 'DemoUser1@strife.com',
            password: 'qwerty1234'
        }
        setEmail(demoUser.email)
        setPassword(demoUser.password);
        // this.props.processForm(demoUser).then(() => {
        //     this.props.history.push("/$/loading/");
        // });
        // this.props.processForm(demoUser);

    }

    const loginAsDemoUser2 = () => {
        let demoUser2 = {
            email: 'DemoUser2@strife.com',
            password: 'QWERTY1234'
        }

        setEmail(demoUser2.email)
        setPassword(demoUser2.password);
        // this.props.processForm(demoUser2).then(() => {
        //     this.props.history.push("/$/loading/");
        // });
        // this.props.processForm(demoUser2);
    }


    const signInAsDemoUser1 = (
        <button type="submit" className="demo-login-button" onClick={() => loginAsDemoUser1()}>Demo 1 Login</button>
    );
    const signInAsDemoUser2 = (
        <button type="submit" className="demo2-login-button" onClick={() => loginAsDemoUser2()}>Demo 2 Login</button>
    );


    let userNameField = props.formType === "Sign In" ? ("") : (
        <div>
            <div className='session-info-block-mb'>
                <label className={`session-label ${userNameErrors() !== "" ? `session-error` : ``}`}>
                    Username
                    {
                        props.errors.length > 0 && userNameErrors() !== "" ? (
                            <span className='session-error-message'>
                                <span className='session-error-message-seperator'>-</span>
                                {userNameErrors()}
                            </span>
                        ) : ("")
                    }
                </label>
                <div className='session-input-inner-wrapper'>
                    <input className="session-input" type="text"
                        spellCheck={false} maxLength={999}
                        value={username}
                        onChange={(e) => setUsername(e.currentTarget.value)}
                    />
                </div>
            </div>
        </div>

    )



    let emailField = props.formType === "Sign In" ? (

        <div className='session-info-block-mb'>
            <label className={`session-label ${emailErrors() !== "" ? `session-error` : ``}`}>
                Email or Phone Number
                {
                    props.errors.length > 0 && emailErrors() !== "" ? (
                        <span className='session-error-message'>
                            <span className='session-error-message-seperator'>-</span>
                            {emailErrors()}
                        </span>
                    ) : (
                        <span className="required-star">*</span>
                    )
                }
            </label>
            <div className='session-input-wrapper'>
                <div className='session-input-outer-wrapper'>
                    <input className="session-input" type="email" required={true}
                        spellCheck={false} autoCorrect='off' maxLength={999}
                        autoComplete='off' autoCapitalize='none'
                        value={email} autoFocus={true}
                        onChange={(e) => setEmail(e.currentTarget.value)}
                    />
                </div>
            </div>
        </div>


    ) : (
        <div className='session-info-block-mb'>
            <label className={`session-label ${emailErrors() !== "" ? `session-error` : ``}`}>
                Email
                {
                    props.errors.length > 0 && emailErrors() !== "" ? (
                        <span className='session-error-message'>
                            <span className='session-error-message-seperator'>-</span>
                            {emailErrors()}
                        </span>
                    ) : ("")
                }
            </label>
            <div className='session-input-inner-wrapper'>
                <input className="session-input" type="email"
                    spellCheck={false} autoCorrect='off' maxLength={999}
                    value={email} autoFocus={true}
                    onChange={(e) => setEmail(e.currentTarget.value)}
                />
            </div>
        </div>
    )



    let passwordField = props.formType === "Sign In" ? (
        <div>
            <label className={`session-label ${passwordErrors() !== "" ? `session-error` : ``}`}>
                Password
                {
                    props.errors.length > 0 && passwordErrors() !== "" ? (
                        <span className='session-error-message'>
                            <span className='session-error-message-seperator'>-</span>
                            {passwordErrors()}
                        </span>
                    ) : (
                        <span className="required-star">*</span>
                    )
                }
            </label>
            <div className='session-input-inner-wrapper'>
                <input className="session-input" type="password"
                    spellCheck={false} maxLength={999}
                    autoComplete='off' value={password}
                    onChange={(e) => setPassword(e.currentTarget.value)}
                />
            </div>
        </div>

    ) : (
        <div>
            <label className={`session-label ${passwordErrors() !== "" ? `session-error` : ``}`}>
                Password
                {
                    props.errors.length > 0 && passwordErrors() !== "" ? (
                        <span className='session-error-message'>
                            <span className='session-error-message-seperator'>-</span>
                            {passwordErrors()}
                        </span>
                    ) : ("")
                }
            </label>
            <div className='session-input-inner-wrapper'>
                <input className="session-input" type="password"
                    spellCheck={false} maxLength={999}
                    autoComplete='off' value={password}
                    onChange={(e) => setPassword(e.currentTarget.value)}
                />
            </div>
        </div>
    )

    const demoLogins = props.formType === "Sign Up" ? ("") : (
        <>
            <div className="session-vertical-sep"></div>
            <div className="wumpus-qr-login-wrapper">
                <div className="wumpus-section-split">
                    <div className="wumpus-inner-qr-login">
                        <div className="wumpus-qr-code-container">
                            <div className="wumpus-qr-overlay">
                                {
                                    cubes === true ? (
                                        <span className={`spinning-cubes`}>
                                            <span className="inner-cubes moving-cubes">
                                                <span className="inner-cube"></span>
                                                <span className="inner-cube"></span>
                                            </span>
                                        </span>

                                    ) : (
                                        <img className={`wumpuslogin2`} alt=" " />
                                    )
                                }
                            </div>
                        </div>
                        {signInAsDemoUser1}
                        {signInAsDemoUser2}
                        <h2 className="demo-login-text-2">Login with a Demo account</h2>
                        <div className="session-text-size-md-normal">
                            {`and take a tour of `} <strong>$TR!F3</strong>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )




    const headerMessage = props.formType === "Sign In" ? (<h1 className="authBox-header-h1">Welcome back!</h1>) :
        (<h1 className="signup-header">Create an account</h1>);


    const subHeaderMessage = props.formType === "Sign In" ? (
        <div className="authBox-header-subtext">
            We're so excited to see you again!
        </div>
    ) : ("");



    const submitButtonMessage = props.formType === "Sign In" ? (
        <button className="session-action-submit-button" type="submit">
            <div className="session-action-txt">Log In</div>
        </button>
    ) : (
        <div className="session-margin-top">
            <button className="session-action-submit-button" type="submit">
                <div className="session-action-txt">Continue</div>
            </button>
        </div>
    );

    const forgotPassword = props.formType === "Sign In" ? (
        <button type="button" className="forgotPassword-button-wrapper">
            <span className="forgotPassword"><Link to="/register" onClick={(e) => handleRemoveErrorsOnSwitching(e)}>Forgot your password?</Link></span>
        </button>
    ) : ("");

    const navLinkType = props.formType === "Sign Up" ? (
        <button className="already-have-account" type="button">
            <div className="look-filled-button-contents global-button-contents">
                <Link to="/login" onClick={(e) => handleRemoveErrorsOnSwitching(e)} >Already have an account?</Link>
            </div>
        </button>
    ) : (
        <div className='session-mt'>
            <span className='needAnAccount'>Need an account?</span>
            <button type="button" className='needAnAccount-button'>
                <div className="look-filled-button-contents global-button-contents">
                    <Link to="/register" onClick={(e) => handleRemoveErrorsOnSwitching(e)}>Register</Link>
                </div>
            </button>
        </div>
    );

    const tos = props.formType === "Sign Up" ? (
        <div className="tos-container">
            By registering, you agree to $TR!F3's{" "}
            <Link to="/register">Terms of Service</Link>
            {" "}and{" "}
            <Link to="/register">Privacy Policy</Link>
            .
        </div>
    ) : ("");



    //drop box functions discord does not use the normal html date input tag 
    const days = new Array();
    for (let i = 1; i <= 31; i++) {
        days.push(<MenuItem key={i} value={i}>{i}</MenuItem >);
    }

    //to future proof this  we use the current year right now 
    let timeNow = new Date();
    let currentYear = timeNow.getFullYear() - 3; // shave present year and last two years from being options
    const years = new Array();
    // removed <=150 to <150  to remove one year 149 years total
    for (let i = 0; i < 150; i++) {
        years.push(<MenuItem key={i} value={currentYear - i}>{currentYear - i}</MenuItem >);
    }

    let birthdayField = props.formType === "Sign In" ? ("") : (
        <div className="b-day-container">
            <legend className={`b-day-legend ${birthdayErrors() !== "" ? `session-error` : ``}`}>
                DATE OF BIRTH
                {
                    props.errors.length > 0 && birthdayErrors() !== "" ? (
                        <span className='session-error-message'>
                            <span className='session-error-message-seperator'>-</span>
                            {birthdayErrors()}
                        </span>
                    ) : ("")
                }
            </legend>
            <div className="b-day-flex-container">
                <div tabIndex={1} className="birthday-month">
                    <div>
                        <BirthDaySelectInput
                            value={month}
                            onChange={handleSetMonth}
                            MenuProps={menuProps}
                            IconComponent={SelectChevron}
                            displayEmpty
                            sx={{
                                color: `${month === '' ? `#949BA4` : `var(--interactive-normal)`}`,
                                '.MuiSelect-select': {
                                    width: '145.59px !important',
                                    minWidth: '145.59px !important',
                                    maxWidth: '145.59px !important',
                                },
                            }}
                        >
                            <MenuItem disabled value="" id="month-default" sx={{ display: 'none !important' }}>
                                <em>Month</em>
                            </MenuItem>
                            <MenuItem value="01">January</MenuItem>
                            <MenuItem value="02">February</MenuItem>
                            <MenuItem value="03">March</MenuItem>
                            <MenuItem value="04">April</MenuItem>
                            <MenuItem value="05">May</MenuItem>
                            <MenuItem value="06">June</MenuItem>
                            <MenuItem value="07">July</MenuItem>
                            <MenuItem value="08">August</MenuItem>
                            <MenuItem value="09">September</MenuItem>
                            <MenuItem value="10">October</MenuItem>
                            <MenuItem value="11">November</MenuItem>
                            <MenuItem value="12">December</MenuItem>
                        </BirthDaySelectInput>
                    </div>
                </div>

                <div tabIndex={2} className="birthday-day">
                    <div>
                        <BirthDaySelectInput
                            value={day}
                            onChange={handleSetDay}
                            MenuProps={menuProps1}
                            IconComponent={SelectChevron}
                            displayEmpty
                            sx={{
                                color: `${day === '' ? `#949BA4` : `var(--interactive-normal)`}`
                            }}
                        >
                            <MenuItem disabled value="" id="day-default" sx={{ display: 'none !important' }}>
                                <em>Day</em>
                            </MenuItem>
                            {days}
                        </BirthDaySelectInput>
                    </div>
                </div>

                <div tabIndex={3} className="birthday-year">
                    <div>
                        <BirthDaySelectInput
                            value={year}
                            onChange={handleSetYear}
                            MenuProps={menuProps1}
                            IconComponent={SelectChevron}
                            displayEmpty
                            sx={{
                                color: `${year === '' ? `#949BA4` : `var(--interactive-normal)`}`
                            }}
                        >
                            <MenuItem disabled value="" id="year-default" sx={{ display: 'none !important' }}>
                                <em>Year</em>
                            </MenuItem>
                            {years}
                        </BirthDaySelectInput>
                    </div>
                </div>
            </div>
        </div>
    )

    const formtype = props.formType === "Sign In" ? "expanded" : "";

    return (

        <div className='session-app-container'>
            <div className='session-character-background'>
                <SessionBackgroundSvgComponent />
                <div className='session-wrapper'>
                    <div>
                        <div>
                            <form onSubmit={handleSubmit} className={`theme-dark authBox ${formtype}`}>
                                <div className='strife-full-logo'></div>
                                <div className='authbox-centering-wrapper'>
                                    <div className='authBox-flex' style={{ flex: `1 1 auto` }}>
                                        <div className='authBox-MainLoginContainer'>
                                            <div className='authBox-header'>
                                                {headerMessage}
                                                {subHeaderMessage}
                                            </div>
                                            <div className='session-info-block'>
                                                {emailField}
                                                {userNameField}
                                                {passwordField}
                                                {birthdayField}
                                                {forgotPassword}
                                                {submitButtonMessage}
                                                {tos}
                                                {navLinkType}
                                            </div>
                                        </div>
                                        {demoLogins}
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default SessionForm;
