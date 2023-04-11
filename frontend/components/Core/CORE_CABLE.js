import { receiveAllFriends } from "../../actions/friendship_actions";
import { fetchServer, fetchServers, receiveServer, receiveServers, removeServer } from "../../actions/server_actions";
import { fetchDmServer, fetchDmServers, receiveDmServer, receiveDmServers, removeDmServer } from "../../actions/dm_server_actions";
import { reSyncCurrentUser } from "../../actions/session_actions";
import { createContext } from "react";
import React from "react";

const _STRIFE_CORE_CABLE_ = (store, currentUserId, dispatch) => (
    App.StrifeCore = App.cable.subscriptions.create({ channel: 'StrifeCore', id: store.getState().session.id }, {
        // "color:#800080;"
        //"#00FD61"
    
        connected: () => {
            let currentDate = new Date();
            let time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds() + ":" + currentDate.getMilliseconds();
            let initialHeartBeat = Math.floor((Math.random() * (150 - 59) + 59))
            console.info(`%c[C0NN3CT3D T0 $TR!F3]: %c[With A HeartBeat @ ${initialHeartBeat}] %c@ [${time}%c]`, "color:#00FD61;", "color:#8442f4;", "color:#00FD61;", "color:#00FD61;");
        },
        received: (data) => {
            // debugger
            // console.error(`Curr Data = ${data}`);
            // console.table(data);
            let currentDate = new Date();
            let time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds() + ":" + currentDate.getMilliseconds();
            switch (data.type) {
                //keep this socket alive for as long as possible
                case 'HEART_BEAT':
                    console.info(`%c[W3B$0CK3T L!V3 W!TH]: %c[${data.message}%c] %c@ [${time}%c]`, "color:#00FD61;", "color:#8442f4;", "color:#8442f4;", "color:#00FD61;", "color:#00FD61;");
                    break;
                // if a user is invited to a server via a demo/admin accounts ( demo/admin forceable adds a user  to a server/dmServer)
                // dispatch to that user to receive this new server ans have it render live in the server nav bar (side bar)
                case 'RECEIVE_SERVER':
                    store.dispatch(fetchServer(data.newServerId));
                    console.info(`%c[$TR!FE M0N!T0R]: %c[SERVER_REFRESH%c] %c@ [${time}%c]`, "color:#00FD61;", "color:#8442f4;", "color:#8442f4;", "color:#00FD61;", "color:#00FD61;");
                    break;
                //invoked if deemed necessary
                case 'RECEIVE_SERVERS':
                    store.dispatch(fetchServers(store.getState().session.id));
                    console.info(`%c[$TR!FE M0N!T0R]: %c[SERVER_REFRESH%c] %c@ [${time}%c]`, "color:#00FD61;", "color:#8442f4;", "color:#8442f4;", "color:#00FD61;", "color:#00FD61;");
                    break;

                case 'REMOVE_SERVER':
                    store.dispatch(removeServer(data.removedServerId));
                    console.info(`%c[$TR!FE M0N!T0R]: %c[SERVER_REMOVAL%c] %c@ [${time}%c]`, "color:#00FD61;", "color:#A12D2F;", "color:#A12D2F;", "color:#A12D2F;", "color:#A12D2F;");
                    break;
                // if a user creates a dmserver call this to the other members it is created with so they can receive it
                // this will also take effect when using the add friends to dmserver allow new invites to receive the dmserver live
                case 'RECEIVE_DM_SERVER':
                    store.dispatch(fetchDmServer(data.newDmServerId));
                    console.info(`%c[$TR!FE M0N!T0R]: %c[DM_SERVER_REFRESH%c] %c@ [${time}%c]`, "color:#00FD61;", "color:#8442f4;", "color:#8442f4;", "color:#00FD61;", "color:#00FD61;");
                    break;
                //if invited to a DM_SERVER refresh
                case 'RECEIVE_DM_SERVERS':
                    const id = parseInt(data.core.split("$TR!F3_").join(''));
                    store.dispatch(fetchDmServers(store.getState().session.id));
                    console.info(`%c[$TR!FE M0N!T0R]: %c[DM_SERVER_REFRESH%c] %c@ [${time}%c]`, "color:#00FD61;", "color:#8442f4;", "color:#8442f4;", "color:#00FD61;", "color:#00FD61;");
                    break;
                case 'RECEIVE_DM_SERVERS_RESYNC_USER':
                    
                    store.dispatch(fetchDmServers(store.getState().session.id)).then(()=>{
                        store.dispatch(reSyncCurrentUser(store.getState().session.id));
                    });
                    console.info(`%c[$TR!FE M0N!T0R]: %c[DM_SERVER_REFRESH_USER_RESYNC%c] %c@ [${time}%c]`, "color:#00FD61;", "color:#8442f4;", "color:#8442f4;", "color:#00FD61;", "color:#00FD61;");
                    break;
                //insurance incase a user is rm when they arent in said dm at the moment
                case 'REMOVE_DM_SERVER':
                    store.dispatch(removeDmServer(data.removedDmServerId));
                    console.info(`%c[$TR!FE M0N!T0R]: %c[DM_SERVER_REMOVAL%c] %c@ [${time}%c]`, "color:#00FD61;", "color:#A12D2F;", "color:#A12D2F;", "color:#A12D2F;", "color:#A12D2F;");
                    break;
                case 'RESYNC_CURRENT_USER':
                    store.dispatch(reSyncCurrentUser(store.getState().session.id));
                    console.info(`%c[$TR!FE M0N!T0R]: %c[RESYNC_CURRENT_USER%c] %c@ [${time}%c]`, "color:#00FD61;", "color:#8442f4;", "color:#8442f4;", "color:#00FD61;", "color:#00FD61;");
                    break;

                case 'RECEIVE_ALL_FRIENDS':
                    break;

                case 'RECEIVE_FRIEND':
                    break;

                default:
                    console.warn(`%c[$TR!FE M0N!T0R]: %c[UNKNOWN REQUEST%c] %c@ [${time}%c]`, "color:#00FD61;", "color:#A12D2F;", "color:#A12D2F;", "color:#A12D2F;", "color:#A12D2F;");
                    break;
            }

        },

        disconnected: () => {
            let currentDate = new Date();
            let time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds() + ":" + currentDate.getMilliseconds();
            console.info(`%c[D!$C0NN3CT3D T0 $TR!F3]: %c[With A HeartBeat @ ${0}] %c@ [${time}%c]`, "color:#00FD61;", "color:#8442f4;", "color:#A12D2F;", "color:#A12D2F;");
        },

    }),


    setInterval(() => {
        if (store.getState().session.id !== null) {
            App.StrifeCore.perform('track_HeartBeat')
        }
    }, 15000)


)
// const _STRIFE_CORE_CABLE_ = (currentUserId, props, store, dispatch) => {
//     // const store = useStore();
//     console.log("props : ", props)
//     App.StrifeCore = App.cable.subscriptions.create({ channel: 'StrifeCore', id: currentUserId }, {

//         // "color:#800080;"
//         //"#00FD61"
//         connected: () => {
//             let currentDate = new Date();
//             let time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds() + ":" + currentDate.getMilliseconds();
//             let initialHeartBeat = Math.floor((Math.random() * (150 - 59) + 59))
//             console.info(`%c[C0NN3CT3D T0 $TR!F3]: %c[With A HeartBeat @ ${initialHeartBeat}] %c@ [${time}%c]`, "color:#00FD61;", "color:#8442f4;", "color:#00FD61;", "color:#00FD61;");
//         },
//         received: (data) => {
//             // debugger
//             let currentDate = new Date();
//             let time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds() + ":" + currentDate.getMilliseconds();
//             switch (data.type) {
//                 //keep this socket alive for as long as possible
//                 case 'HEART_BEAT':
//                     console.info(`%c[W3B$0CK3T L!V3 W!TH]: %c[${data.message}%c] %c@ [${time}%c]`, "color:#00FD61;", "color:#8442f4;", "color:#8442f4;", "color:#00FD61;", "color:#00FD61;");
//                     break;
//                 // if a user is invited to a server via a demo/admin accounts ( demo/admin forceable adds a user  to a server/dmServer)
//                 // dispatch to that user to receive this new server ans have it render live in the server nav bar (side bar)
//                 case 'RECEIVE_SERVER':
//                     dispatch(fetchServer(data.newServerId));
//                     console.info(`%c[$TR!FE M0N!T0R]: %c[SERVER_REFRESH%c] %c@ [${time}%c]`, "color:#00FD61;", "color:#8442f4;", "color:#8442f4;", "color:#00FD61;", "color:#00FD61;");
//                     break;
//                 //invoked if deemed necessary
//                 case 'RECEIVE_SERVERS':
//                     dispatch(fetchServers(store.getState().session.id));
//                     console.info(`%c[$TR!FE M0N!T0R]: %c[SERVER_REFRESH%c] %c@ [${time}%c]`, "color:#00FD61;", "color:#8442f4;", "color:#8442f4;", "color:#00FD61;", "color:#00FD61;");
//                     break;

//                 case 'REMOVE_SERVER':
//                     store.dispatch(removeServer(data.removedServerId));
//                     console.info(`%c[$TR!FE M0N!T0R]: %c[SERVER_REMOVAL%c] %c@ [${time}%c]`, "color:#00FD61;", "color:#A12D2F;", "color:#A12D2F;", "color:#A12D2F;", "color:#A12D2F;");
//                     break;
//                 // if a user creates a dmserver call this to the other members it is created with so they can receive it
//                 // this will also take effect when using the add friends to dmserver allow new invites to receive the dmserver live
//                 case 'RECEIVE_DM_SERVER':
//                     // dispatch(fetchDmServer(data.newDmServerId));
//                     store.dispatch(fetchDmServer(data.newDmServerId));
//                     console.info(`%c[$TR!FE M0N!T0R]: %c[DM_SERVER_REFRESH%c] %c@ [${time}%c]`, "color:#00FD61;", "color:#8442f4;", "color:#8442f4;", "color:#00FD61;", "color:#00FD61;");
//                     break;
//                 //if invited to a DM_SERVER refresh
//                 case 'RECEIVE_DM_SERVERS':
//                     const id = parseInt(data.core.split("$TR!F3_").join(''));
//                     dispatch(fetchDmServers(store.getState().session.id));
//                     console.info(`%c[$TR!FE M0N!T0R]: %c[DM_SERVER_REFRESH%c] %c@ [${time}%c]`, "color:#00FD61;", "color:#8442f4;", "color:#8442f4;", "color:#00FD61;", "color:#00FD61;");
//                     break;
//                 //insurance incase a user is rm when they arent in said dm at the moment
//                 case 'REMOVE_DM_SERVER':
//                     dispatch(removeDmServer(data.removedDmServerId));
//                     console.info(`%c[$TR!FE M0N!T0R]: %c[DM_SERVER_REMOVAL%c] %c@ [${time}%c]`, "color:#00FD61;", "color:#A12D2F;", "color:#A12D2F;", "color:#A12D2F;", "color:#A12D2F;");
//                     break;
//                 case 'RECEIVE_ALL_FRIENDS':
//                     break;

//                 case 'RECEIVE_FRIEND':
//                     break;

//                 default:
//                     console.warn(`%c[$TR!FE M0N!T0R]: %c[UNKNOWN REQUEST%c] %c@ [${time}%c]`, "color:#00FD61;", "color:#A12D2F;", "color:#A12D2F;", "color:#A12D2F;", "color:#A12D2F;");
//                     break;
//             }

//         },

//         disconnected: () => {
//             let currentDate = new Date();
//             let time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds() + ":" + currentDate.getMilliseconds();
//             console.info(`%c[D!$C0NN3CT3D T0 $TR!F3]: %c[With A HeartBeat @ ${0}] %c@ [${time}%c]`, "color:#00FD61;", "color:#8442f4;", "color:#A12D2F;", "color:#A12D2F;");
//             // App.StrifeCore.unsubscribe();
//         },

//     }),

//     setInterval(() => {
//         App.StrifeCore.perform('track_HeartBeat')
//     }, 30000)


// }
export default _STRIFE_CORE_CABLE_;
