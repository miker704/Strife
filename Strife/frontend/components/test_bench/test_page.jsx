import React from "react";
import defaultPFP from '../../../app/assets/images/discord_PFP.svg';
import { Link } from "react-router-dom";
class TestPage extends React.Component {
    constructor (props) {
        super(props);
        this.renderModal = this.renderModal.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handlePrivacy = this.handlePrivacy.bind(this);
        this.setCount = this.setCount.bind(this);
        this.selectChannelTypes = this.selectChannelTypes.bind(this);
        this.cancel = false;
        this.state = {
            password: '',
            // allServers: this.props.servers,
            // currServer: '',
            // serverName: '',
            value: '',
            count: 1024,
            choice: 1,
            private_Selected: false,
            channelName: '',
            channelType: '',
            selected_Option: 'TextChannel',

            textChannelChecked: true,
            voiceChecked: false


        }
    }


    setCount (e) {
        this.setState({
            count: Math.abs(this.state.count - 1),
            value: e.currentTarget.value

        });

        if (this.state.value === '') {
            this.setState({ count: 1024 });
        }

    }




    componentDidMount () {
        // this.props.fetchServers();
        this.props.fetchServer(28);
    }
    renderModal (modalName) {

        this.props.openModal(modalName);
    }
    handleInput (field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value });
        }
    }
    handleSubmit (e) {
        e.preventDefault();
        console.log("choice: ", this.state.selected_Option);
    }

    handleOnChange (e) {
        // return this.setState({channelType:field})
        console.log("before: ", this.state.selected_Option);
        this.setState({ selected_Option: e.currentTarget.value });
        console.log("now: ", this.state.selected_Option);

    }
    handlePrivacy () {
        // console.log("onChange: ", e.currentTarget.value);
        this.setState({ private_Selected: !this.state.private_Selected });
        console.log("onChange: ", this.state.private_Selected);

    }
    selectChannelTypes (channels) {
        let channelHash = new Object();

        for (let i of channels) {
            console.log("channel_cat_name: ", i.channel_cat_name);
            channelHash[i.channel_cat_name] = [];
        }
        console.log("channel hash after cat insertion: ")
        console.table(channelHash);
        for (let i of channels) {
            console.log("channel_cat_name: ", i.channel_cat_name);
            channelHash[i.channel_cat_name].push(i)
        }

        return channelHash;

    }

    render () {
        let default_PFP = defaultPFP;
        let default_png = "https://strife-seeds.s3.amazonaws.com/defaultProfilePic.png";
        // let default_profile_pic = this.props.currentUser.photo === undefined ?
        //     <img src={default_png} alt="PFP" /> : <img className="pfp-svg" src={default_PFP} alt="PFP" />

        let default_profile_pic = this.props.currentUser.photo === undefined ? <img className="user-avatar-img" /> : <img src={this.props.currentUser.photo} alt="pfp" />
        let default_profile_pic1 = this.props.currentUser.photo === undefined ?
            <div className={`user-avatar-img-svg-render color-${this.props.currentUser.color_tag}`}>
                <img className="user-avatar-img-svg" />

            </div> :
            <img src={this.props.currentUser.photo} alt="pfp" />

        let default_user_pfp = this.props.currentUser.photo === undefined ?
            default_PFP : this.props.currentUser.photo;
        let passwordErrorTag = this.props.errors.length > 0 ? "field-error" : "";



        return (


            <div className="empty-messages-container">
                <div className="explore-server-base">
                    <div className="explore-server-content">
                        <div className="explore-server-sidebar">
                            <div className="explore-server-sidebar-scroll-base">
                                <h2 className="exsbar-def-header-h2">Discover</h2>
                                <div className="explore-bar-item-cat selected-choice">
                                    <div className="explore-bar-item-cat-inner">
                                        <div className="explore-bar-item-cat-avatar">
                                            <svg aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M12 10.9C11.39 10.9 10.9 11.39 10.9 12C10.9 12.61 11.39 13.1 12 
                                            13.1C12.61 13.1 13.1 12.61 13.1 12C13.1 11.39 12.61 10.9 12 10.9ZM12 2C6.48 2 2 6.48 2 12C2 
                                            17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM14.19 14.19L6 18L9.81 9.81L18 6L14.19 14.19Z">
                                                </path>
                                            </svg>
                                        </div>
                                        <div className="explore-bar-item-cat-content">
                                            <div className="explore-bar-item-cat-nameAndDecos">
                                                <div className="explore-bar-item-cat-nameAndDecos-wrap">
                                                    Home
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="explore-bar-item-cat">
                                    <div className="explore-bar-item-cat-inner">
                                        <div className="explore-bar-item-cat-avatar">
                                            <svg aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
                                                <g fill="none" fillRule="evenodd">
                                                    <path fill="currentColor" d="M5.79335761,5 L18.2066424,5 C19.7805584,5 21.0868816,6.21634264
                                                 21.1990185,7.78625885 L21.8575059,17.0050826 C21.9307825,18.0309548 21.1585512,18.9219909 
                                                 20.132679,18.9952675 C20.088523,18.9984215 20.0442685,19 20,19 C18.8245863,19 17.8000084,
                                                 18.2000338 17.5149287,17.059715 L17,15 L7,15 L6.48507125,17.059715 C6.19999155,18.2000338 
                                                 5.1754137,19 4,19 C2.97151413,19 2.13776159,18.1662475 2.13776159,17.1377616 C2.13776159,
                                                 17.0934931 2.1393401,17.0492386 2.1424941,17.0050826 L2.80098151,7.78625885 C2.91311838,
                                                 6.21634264 4.21944161,5 5.79335761,5 Z M14.5,10 C15.3284271,10 16,9.32842712 16,8.5 
                                                 C16,7.67157288 15.3284271,7 14.5,7 C13.6715729,7 13,7.67157288 13,8.5 C13,9.32842712 
                                                 13.6715729,10 14.5,10 Z M18.5,13 C19.3284271,13 20,12.3284271 20,11.5 C20,10.6715729 
                                                 19.3284271,10 18.5,10 C17.6715729,10 17,10.6715729 17,11.5 C17,12.3284271 17.6715729,
                                                 13 18.5,13 Z M6,9 L4,9 L4,11 L6,11 L6,13 L8,13 L8,11 L10,11 L10,9 L8,9 L8,7 L6,7 L6,9 Z">
                                                    </path>
                                                    <rect width="24" height="24"></rect>
                                                </g>
                                            </svg>
                                        </div>
                                        <div className="explore-bar-item-cat-content">
                                            <div className="explore-bar-item-cat-nameAndDecos">
                                                <div className="explore-bar-item-cat-nameAndDecos-wrap">
                                                    Gaming
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="explore-bar-item-cat">
                                    <div className="explore-bar-item-cat-inner">
                                        <div className="explore-bar-item-cat-avatar">
                                            <svg aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M19.396 3.29898C19.016 3.01598 18.524 2.93098 
                                                18.07 3.06498L8.07 6.06498C7.435 6.25498 7 6.83998 7 7.50298V15.054C6.835
                                                15.03 6.671 15.003 6.5 15.003C4.566 15.003 3 16.571 3 18.503C3 20.434 
                                                4.566 22.003 6.5 22.003C8.434 22.003 10 20.434 10 18.503V8.61798L17
                                                6.51798V13.054C16.835 13.03 16.671 13.003 16.5 13.003C14.566 13.003 
                                                13 14.571 13 16.503C13 18.434 14.566 20.003 16.5 20.003C18.434 20.003
                                                20 18.434 20 16.503V4.50298C20 4.02698 19.775 3.58198 19.396 3.29898Z">
                                                </path>
                                            </svg>
                                        </div>
                                        <div className="explore-bar-item-cat-content">
                                            <div className="explore-bar-item-cat-nameAndDecos">
                                                <div className="explore-bar-item-cat-nameAndDecos-wrap">
                                                    Music
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="explore-bar-item-cat">
                                    <div className="explore-bar-item-cat-inner">
                                        <div className="explore-bar-item-cat-avatar">
                                            <svg aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
                                                <path fill="currentColor" fillRule="evenodd" clipRule="evenodd"
                                                    d="M22.447 8.11002L12.447 3.11002C12.166 2.96902 11.834 2.96902 11.552 
                                                3.11002L1.552 8.11002C1.35 8.21002 1.197 8.38402 1.107 8.57302C1.046 8.69502
                                                1 8.90202 1 9.00502V14.77C1 15.322 1.448 15.77 2 15.77C2.552 15.77 3 15.322
                                                3 14.77V10.172L12.015 13.927L22.372 9.93302C22.737 9.78602 22.983 9.44002
                                                22.999 9.04602C23.016 8.65202 22.799 8.28702 22.447 8.11002ZM12 
                                                16.005C11.869 16.005 11.738 15.979 11.615 15.928L5 13.172V16.185C5 
                                                16.564 5.214 16.91 5.553 17.08C5.7173 17.1621 5.88209 17.2461 6.04836 
                                                17.3308C7.61773 18.1306 9.31996 18.998 12 18.998C14.6812 18.998 16.3872 18.1284 
                                                17.956 17.3287C18.1208 17.2447 18.2842 17.1614 18.447 17.08C18.786 16.911 19 16.564 
                                                19 16.186V13.385L12.359 15.939C12.243 15.982 12.122 16.005 12 16.005ZM1 18.005C1 
                                                17.453 1.448 17.005 2 17.005C2.552 17.005 3 17.453 3 18.005V20.005C3 20.557
                                                2.552 21.005 2 21.005C1.448 21.005 1 20.557 1 20.005V18.005Z">
                                                </path>
                                            </svg>
                                        </div>
                                        <div className="explore-bar-item-cat-content">
                                            <div className="explore-bar-item-cat-nameAndDecos">
                                                <div className="explore-bar-item-cat-nameAndDecos-wrap">
                                                    Education
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="explore-bar-item-cat">
                                    <div className="explore-bar-item-cat-inner">
                                        <div className="explore-bar-item-cat-avatar">
                                            <svg aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
                                                <path fill="currentColor" fillRule="evenodd" clipRule="evenodd"
                                                    d="M18.6683 11.9964C19.5992 13.2208 20.3732 14.4331 20.9422 15.5701C22.5858 
                                                    18.8593 22.0118 20.4688 21.2418 21.2398C20.895 21.5846 20.2596 21.9978 19.1951
                                                    21.9978C17.3645 21.9978 14.7478 20.7553 12.0004 18.6683C9.25198 20.7553 6.63527
                                                    21.9978 4.80569 21.9978C3.74111 21.9978 3.10478 21.5846 2.75896 21.2398C1.98792
                                                    20.4677 1.41392 18.8593 3.05853 15.5701C3.62751 14.4331 4.40257 13.2218 5.33245
                                                    11.9964C2.51569 8.28291 1.00176 4.51719 2.75896 2.75898C3.10578 2.41316 3.74111
                                                    2 4.80569 2C6.63628 2 9.25298 3.24251 12.0004 5.32944C14.7488 3.24251 17.3655
                                                    2 19.1951 2C20.2596 2 20.895 2.41216 21.2418 2.75898C22.999 4.51618 21.4851
                                                    8.28191 18.6683 11.9964ZM19.8203 4.18042C19.6806 4.03969 19.4032 4.01053
                                                    19.1951 4.01053C18.0481 4.01053 15.9933 4.9203 13.6209 6.64835C15.0262 
                                                    7.86472 16.2346 9.08512 17.3655 10.395C19.752 7.13188 20.3541 4.71422 
                                                    19.8203 4.18042ZM14.1325 14.1316C14.8654 13.3987 15.5108 12.689 16.0928 
                                                    12.0024C15.4876 11.2856 14.8342 10.5689 14.1325 9.86621C13.4128 9.14744 12.701 
                                                    8.51312 12.0004 7.92202C11.2997 8.51312 10.588 9.14744 9.86821 9.86621C9.16653 
                                                    0.5689 8.51311 11.2856 7.90794 12.0024C8.48999 12.689 9.13637 13.3987 9.86821 
                                                    14.1316C10.588 14.8513 11.2997 15.4856 12.0004 16.0747C12.701 15.4856 13.4128 
                                                    14.8513 14.1325 14.1316ZM4.80569 4.01053C4.5986 4.01053 4.32115 4.03969 4.18142 
                                                    4.18042C3.64661 4.71422 4.24977 7.13088 6.63628 10.394C7.83556 9.00469 9.05696 
                                                    7.79435 10.3799 6.64735C8.00645 4.9203 5.95269 4.01053 4.80569 4.01053ZM4.18041 
                                                    19.8183C4.32014 19.9581 4.5976 19.9872 4.80569 19.9872C5.95269 19.9872 8.00746 
                                                    19.0785 10.3799 17.3514C8.98357 16.1421 7.7873 14.9348 6.6413 13.6078C5.92053 
                                                    14.593 5.31133 15.56 4.85695 16.4688C3.79539 18.5909 3.9502 19.5881 4.18041 
                                                    19.8183ZM19.1941 19.9872C19.4021 19.9872 19.6796 19.9581 19.8193 19.8183C20.0495
                                                    19.5881 20.2044 18.5919 19.1428 16.4688C18.6884 15.559 18.0792 14.592 17.3584
                                                    13.6078C16.2114 14.9358 15.0152 16.1431 13.6199 17.3514C15.9933 19.0785 18.0471 
                                                    19.9872 19.1941 19.9872ZM14.0109 11.9984C14.0109 13.1088 13.1108 14.0089 12.0004 
                                                    14.0089C10.89 14.0089 9.98984 13.1088 9.98984 11.9984C9.98984 10.888 10.89 9.98784 
                                                    12.0004 9.98784C13.1108 9.98784 14.0109 10.888 14.0109 11.9984Z">
                                                </path>
                                            </svg>
                                        </div>
                                        <div className="explore-bar-item-cat-content">
                                            <div className="explore-bar-item-cat-nameAndDecos">
                                                <div className="explore-bar-item-cat-nameAndDecos-wrap">
                                                    Science & Tech
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="explore-bar-item-cat">
                                    <div className="explore-bar-item-cat-inner">
                                        <div className="explore-bar-item-cat-avatar">
                                            <svg aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
                                                <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M16.781
                                                  2.27293L14.081 5.7126H9.919L7.219 2.27293L8.781 1L12 5.10008L15.219 1L16.781
                                                  2.27293ZM4 6.73175H20C21.1 6.73175 22 7.649 22 8.77007V18.9617C22 20.0828 
                                                  21.1 21 20 21H4C2.9 21 2 20.0828 2 18.9617V8.77007C2 7.649 2.9 6.73175 4 
                                                  6.73175ZM4 18.9617H16V8.77007H4V18.9617ZM18 16.4138C18 16.9764 18.448 17.4329 
                                                  19 17.4329C19.552 17.4329 20 16.9764 20 16.4138C20 15.8512 19.552 15.3946 19 
                                                  15.3946C18.448 15.3946 18 15.8512 18 16.4138ZM18 11.318C18 11.8806 18.448 12.3371
                                                  19 12.3371C19.552 12.3371 20 11.8806 20 11.318C20 10.7554 19.552 10.2988 19 
                                                  10.2988C18.448 10.2988 18 10.7554 18 11.318Z">
                                                </path>
                                            </svg>
                                        </div>
                                        <div className="explore-bar-item-cat-content">
                                            <div className="explore-bar-item-cat-nameAndDecos">
                                                <div className="explore-bar-item-cat-nameAndDecos-wrap">
                                                    Entertainment
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="explore-bar-item-cat">
                                    <div className="explore-bar-item-cat-inner">
                                        <div className="explore-bar-item-cat-avatar">
                                            <svg aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M13.25 18L13.25 6L11.75 6L11.75 18L13.25 18Z" fill="currentColor"></path>
                                                <path fillRule="evenodd" clipRule="evenodd" d="M7 12.75C6.30964 12.75 5.75 13.3096 5.75 14V18H4.25V14C4.25 12.4812 5.48122
                                                    11.25 7 11.25H18C19.5188 11.25 20.75 12.4812 20.75 14V18H19.25V14C19.25 13.3096 18.6904 12.75 18 12.75H7Z" fill="currentColor">
                                                </path>
                                                <path d="M12.5 7C11.1193 7 10 5.88071 10 4.5C10 3.11929 11.1193 2 12.5 2C13.8807 2 15 3.11929 15 4.5C15 5.88071 13.8807 7 12.5 7Z"
                                                    fill="currentColor">
                                                </path>
                                                <path d="M20 22C18.6193 22 17.5 20.8807 17.5 19.5C17.5 18.1193 18.6193 17 20 17C21.3807 17 22.5 18.1193 22.5 19.5C22.5 20.8807
                                                    21.3807 22 20 22Z" fill="currentColor">
                                                </path>
                                                <path d="M12.5 22C11.1193 22 10 20.8807 10 19.5C10 18.1193 11.1193 17 12.5 17C13.8807 17 15 18.1193 15 19.5C15 20.8807 13.8807
                                                    22 12.5 22Z" fill="currentColor">
                                                </path>
                                                <path d="M5 22C3.61929 22 2.5 20.8807 2.5 19.5C2.5 18.1193 3.61929 17 5 17C6.38071
                                                    17 7.5 18.1193 7.5 19.5C7.5 20.8807 6.38071 22 5 22Z" fill="currentColor">
                                                </path>
                                            </svg>
                                        </div>
                                        <div className="explore-bar-item-cat-content">
                                            <div className="explore-bar-item-cat-nameAndDecos">
                                                <div className="explore-bar-item-cat-nameAndDecos-wrap">
                                                    Student Hubs
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div className="explore-server-page-wrapper">
                            <div className="exs-drag-region"></div>
                            <div className="exs-main-content-scroller-base">
                                <div className="exs-view-wrapper">
                                    <div className="exs-searchHeader">
                                        <img className="exs-searchImg" alt="exsimg" />
                                        <div className="exs-header-content-wrapper">
                                            <div className="exs-header-content">
                                                <h3 className="exs-search-title">Find Your Community on STRIFE</h3>
                                                <div className="exs-search-subtitle">
                                                    From gaming, to music, to learning, there's a place for you.
                                                </div>
                                                <div className="exs-search-content">
                                                    <div className="exs-search">
                                                        <div className="exs-search-box">
                                                            <div className="exs-search-input-wrapper">
                                                                <input className="exs-search-input" type="search" />
                                                            </div>
                                                            <svg className="exs-search-icon"
                                                                aria-label="Search" aria-hidden="false" role="img" width="24" height="24" viewBox="0 0 24 24">
                                                                <path fill="currentColor" d="M21.707 20.293L16.314 14.9C17.403 13.504 18 11.799 18 10C18 
                                                                7.863 17.167 5.854 15.656 4.344C14.146 2.832 12.137 2 10 2C7.863 2 5.854 2.832 4.344 4.344C2.833 
                                                                5.854 2 7.863 2 10C2 12.137 2.833 14.146 4.344 15.656C5.854 17.168 7.863 18 10 18C11.799 18 
                                                                13.504 17.404 14.9 16.314L20.293 21.706L21.707 20.293ZM10 16C8.397 16 6.891 15.376 5.758 
                                                                14.243C4.624 13.11 4 11.603 4 10C4 8.398 4.624 6.891 5.758 5.758C6.891 4.624 8.397 4 10 
                                                                4C11.603 4 13.109 4.624 14.242 5.758C15.376 6.891 16 8.398 16 10C16 11.603 15.376 13.11 14.242 
                                                                14.243C13.109 15.376 11.603 16 10 16Z">
                                                                </path>
                                                            </svg>
                                                        </div>

                                                    </div>

                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                    <div>
                                        <section className="guildListSection">
                                                <h3 className="gls-h3">Featured communities</h3>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )









    }
}

export default TestPage;