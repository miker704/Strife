import React from 'react';
import { useRef, useEffect } from 'react';

const RefreshLoadingScreen = (props) => {

    const loadingScreenStyles = ['default', 'updating', 'sips', 'warped'];
    const loadingScreenAnimations = ['infinite-default', 'updating-progress', 'infinite-sips', 'infinite-warped'];

    const pickRandom = () => {
        const msgIdx = Math.floor(Math.random() * (4 - 1)) + 1;
        return msgIdx;
    }
    const randomIdx = useRef(pickRandom());


    useEffect(() => {

        //prevent this screen from showing if just signing into $TR!F3
        if (props.ui_modal?.length > 0) { props.closeModal(); }

        if (props.history.location.pathname !== `/$/loading/`) {
            let lsd =  document.getElementById('loading-screen-wrapper');
            setTimeout(() => {
                if(lsd){
                    lsd.classList.add('transition-out');
                    Promise.all(lsd.getAnimations().map((animation) => animation.finished),)
                    .then(() => {
                        props.setRefreshLoadingScreen(false);
                    }, () => {
                        props.setRefreshLoadingScreen(false);
                    });
                }
                else{
                    props.setRefreshLoadingScreen(false);
                }
            }, 3000);
        }
        else if (props.history.location.pathname === `/$/loading/`) {
            props.setRefreshLoadingScreen(false);
        }

    }, []);



    return props.refreshLoadingScreen ? (
        <div className="loading-screen-wrapper" id="loading-screen-wrapper" >
            <div className={`circle-wrap ${loadingScreenStyles[randomIdx.current]}`}>
                <img className="loading-screen-img" alt=" " />
                <div className="shiny-button-container">
                    <div className="shiny-button-flex">
                    </div>
                </div>
            </div>
            <div className={`loading-circle-${loadingScreenAnimations[randomIdx.current]}`}></div>
            <h1 className="loading-screen-img-h2">Loading .... ... .. .</h1>
        </div>
    ) : (null);
}
export default RefreshLoadingScreen;


// import React from 'react';
// import { useRef, useEffect } from 'react';

// const RefreshLoadingScreen = (props) => {

//     const loadingScreenStyles = ['default', 'updating', 'sips', 'warped'];
//     const loadingScreenAnimations = ['infinite-default', 'updating-progress', 'infinite-sips', 'infinite-warped'];

//     const pickRandom = () => {
//         const msgIdx = Math.floor(Math.random() * (4 - 1)) + 1;
//         return msgIdx;
//     }
//     const randomIdx = useRef(pickRandom());


//     useEffect(() => {

//         //prevent this screen from showing if just signing into $TR!F3
//         if (props.ui_modal.length > 0) { props.closeModal(); }
//         props.requestAllFriendships();
//         props.reSyncCurrentUser(props.currentUserId);
//         props.fetchUserDmServers(props.currentUserId);
//         // props.fetchUserServers(props.currentUserId);

        
//         if (props.history.location.pathname !== `/$/loading/`) {
//             props.fetchUserServers(props.currentUserId).then(()=>{
//                 document.getElementById('loading-screen-wrapper').classList.add('transition-out');
//                 setTimeout(()=>{
//                     props.setRefreshLoadingScreen(false);
//                 },300)
//             });

//             // setTimeout(() => {
//             //     document.getElementById('loading-screen-wrapper').classList.add('transition-out');
//             // }, 2700);
//             // setTimeout(() => {
//             //     props.setRefreshLoadingScreen(false);
//             // }, 3000);
//         }
//         else if (props.history.location.pathname === `/$/loading/`) {
//             props.setRefreshLoadingScreen(false);
//         }

//     }, []);



//     return props.refreshLoadingScreen ? (
//         <div className="loading-screen-wrapper" id="loading-screen-wrapper" >
//             <div className={`circle-wrap ${loadingScreenStyles[randomIdx.current]}`}>
//                 <img className="loading-screen-img" alt=" " />
//                 <div className="shiny-button-container">
//                     <div className="shiny-button-flex">
//                     </div>
//                 </div>
//             </div>
//             <div className={`loading-circle-${loadingScreenAnimations[randomIdx.current]}`}></div>
//             <h1 className="loading-screen-img-h2">Loading .... ... .. .</h1>
//         </div>
//     ) : (null);
// }
// export default RefreshLoadingScreen;