// useEffect(() => {
//     console.log("%c [FIRST_RENDER_DM_SERVER]", "color:#FF0000;")
//     props.fetchDmServers(props.currentUser.id);
//     return function cleanUp () {
//         if (props.errors.length > 0) {
//             props.removeDmServerErrors();
//         }
//     }
// }, []);