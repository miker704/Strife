
// const handleSubmit = (e) => {
//     e.preventDefault();
//     const createServerFormData = new FormData();

//     if (serverPrivacy === "public") {
//         setPublicServer(true);

//         createServerFormData.append(`server[server_owner_id]`, props.currentUser.id);
//         createServerFormData.append(`server[server_name]`, serverName);
//         createServerFormData.append(`server[public]`, publicServer);
//         createServerFormData.append(`server[serverTemplate]`, serverTemplate);

//         if (server_Icon) {
//             createServerFormData.append(`server[server_Icon]`, server_Icon);
//         }
//     }
//     else if (serverPrivacy === "private") {

//         setPublicServer(false);
//         createServerFormData.append(`server[server_owner_id]`, props.currentUser.id);
//         createServerFormData.append(`server[server_name]`, serverName);
//         createServerFormData.append(`server[public]`, publicServer);
//         createServerFormData.append(`server[serverTemplate]`, serverTemplate);

//         if (server_Icon) {
//             createServerFormData.append(`server[server_Icon]`, server_Icon);
//         }

//     }
//     let newServer;
//     let elipAnimation = document.getElementById('elip-spin');
//     let buttonText = document.getElementById("create-button-text");
//     let button = document.getElementById("serverCreateButton");
//     buttonText.innerHTML = "";
//     elipAnimation.classList.remove('is-hidden');

//     props.createServer(createServerFormData).then((action) => {
//         newServer = action.server;

//     }).then(() => {
//         document.getElementById('create-server-modal').classList.add('transition-out');
//         setTimeout(() => {
//             props.closeModal();
//         }, 300);
//     }).then(() => {
//         props.reSyncCurrentUser(props.currentUserId).then(() => {
//             props.history.push(`/$/channels/${newServer.id}/${newServer.general_channel_id}`);
//         })
//     })

//     setTimeout(() => {
//         elipAnimation.classList.add('is-hidden');
//         buttonText.innerHTML = "Create";
//     }, 285);
// }