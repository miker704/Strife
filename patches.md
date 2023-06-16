# PATCH NOTES

## Future additions and pending changes
  
- Preparing to update to React v18
  - Changes will require fixing setInvervals, setTimeouts, modals that popup on within components other than the ModalMangerContainer.

- Action and process flow of banning and kicking users from a server or a dmServer will be reworked and
    be optimized by the Core Cable anaylzing the location of said user deciding the best course of action on whether
    a user should re-receive all their dm/servers or just a single one. The hope is also to reduce and eliminate problem areas on re-renders such as channel messages re-rendering a previous or newly received server/channels messages for half a second before reverting back to the proper messages.
  - many more

### DmServer Plans

- Dmserver can manually be deleted via clicking the x icon next to it (creator only, leave the dmServer if a member)
  - (Anticipated) DmServers that become group chats (3-10 users) removing a user when they are 3 remaining deletes the dmServer in order to prevent a   duplicate chat of the same individuals regardless if it exists already or not. Change will be to check if there is a dm between those remaining two users if it exists the dmServer will be deleted if it doesnt deletion is aborted and the 3rd member that was being removed will be removed normally.
  - One to One chats when clicking on the new show user profile icon will render a profile card of the user.

### Server Plans

- Server Banners, Channel and Server descriptions which can be vieweds on the explore servers page
  - Explore Servers page will render a servers banner and server description if the server owner has added them instead of the default description and
  banner (if server has an avatar it gets rendered as a banner in the explore servers page)
- Servers will now have their theme type assigned via the backend,
  -Thus the channel creation for them will be moved to the backend to reduce redux calls for all the channels created and just receive the server itself which will give all the channels with it.

#### Channels

- Ability to give channels a description.
- Allow channels to be private, thus requiring an invite to that channel
- Channel Categories.

### Messaging as Whole

- Be able to message chain (reply to a comment)
- @ a user/ mention a user - (with upgrading to rails 7 this will be more hassle free to implement correctly)
- Inviting a user as Non Demo or admin account should work normally as in it creates a dm and with an invite to join.
- emojis
- Message/ notification inbox intergration
- Default message for channels and dm servers to be changed to match more of discords.
- Allow messages to send images
- Allow a url parser, anaylze if a text matches a url and provide a small modal/ component to wrap out send
link if possible.
- Allow url parser to embed youtube videos.

### General/Util

- Attempts to address draggable containers
- Context menus across the application
- Add Moz kit values to every style as FireFox is currently now unsupported as many styles glitch out in the browser. Microsoft edge, and Google Chrome are the only support browsers.

### Video / Voice Calling

- Re-add just voice only calling to dmServers.
- work on creating a unique room for individuals to talk in a dmServer also allowing more than users to talk at once current limits is 1 to 1 conversations.
- same will be implemented for servers, Servers have voice and video call disabled as the current state of the app interferes with this working and
the need to create a private room is need to prevent unwanted members from entering a call. (note multi web call where previously possible but could not be done on command and would randomly occur when the goal was never to 3 or more callers at once also due to certain limitations of rails and deployment platforms normal one to one chat is already stressful on app performance and webRTC has given multiple warnings on the number of ice canidates it can process even though the api can handle many callers at onces)

## Known issues currently present and being worked on
  
- A fellow Contributor noted that email format verification missed a problem with escaping periods. Resulting in email addresses being incorrectly validated. (provided a fix this will be merged soon as it was provided near patch v3.0). Credit goes to cpoppe1 who graciously pointed this out and provided the proper regex format to address the vulnerbility.

## PATCH NOTES v3.00 - 2/24/2023 - OnGoing (currently pending proposed to arrive on 5/15/23 do to some testing)

## Intra - Changes between 10/7/2022 - 11/17/2023

    - $TR!F3 has moved homes, Transitioned to Render.com from Heroku. 

## Major Changes and Fixes

    - Major overall to the apps routing system introduces a '/$' url in front of most protected routes leaving
      auth routes to login, register, and splash (home) pages to remain the default '/', modal pages still
      use the default '/' this is done due to the fact the the new CORE Async System to work properly and 
      not interfere with the default auth routes. The CORE should start running upon signing in and remain doing 
      so no matter what regarless of route changes and page refreshes until a user logs out.
    - Fixed Problem where CORE Cable interferes with the auth pages and stops the app when a user is signed out
      from visiting the splash (home), and register page. the core cable uses the same route url but though a protected route
      instead of an auth route checks if the user is signed in before running but the protected route redirects to the login page
      if the user is not signed in and since this occurs at the lowest route level it prevents the home/splash page from 
      ever being accessed and redirects back to the login page even when physically adding thwe home url in the search bar and clicking
      enter still redirects to the login page due to the protected route over riding the auth routes due to the core cable being
      at the same level as the modal and auth routes. Visiting the register page and refreshing the page redirects back to the login 
      page. This addressed by introducing another low level route.
      The lowest level route is `/` which is reserved for auth routes and the model route
      the second lowest route is '/$' which is the dedicated route for the CORE to run and start running all routes
      for all routes starting with '/$' 
      this fix allows for all auth routes to be visited login, register, and splash. and refreshing on either splash or register
      does not redirect to login and remains on the same page as normal.
      this seperation of routes allows more elegant and conflictless flow of the CORE and the rest of the apps functionality
      '/' for modal and all auth routes
      '/$' this route is available and accessed upon logging in and starts the CORE system to start running and prevents previous problems
      caused by placing the start of this system else where which caused backend routing problems and failed system starts until a refresh of the 
      page is done after being signed in.
      '/$/all_other_protected_routes' all other protected routes start with the '/$' url and the core cable of the app runs being able to touch
      all components if needed.
      The CORE API has found its proper home to be mounted in the app. More details disscussing on what this system does and  how it works will 
      be explained in the future as development of its full intergration has been reached the half way point.
    - Fixed a problem when creating a new DmServer is would not send the dmserver to invited members live.
    - Reworked ServerUserOptionsModal added Core Cable actions to all actions that can be chosen when selecting a user's UPC (User Profile Card), reworked block user function, implemented a new function for unblocking a user, have a user upc render completely from the switch check instead of user selectable options this fixes the default options from appearing and being selected when the generic layout of the upc is first rendered before fully loading the user upc completely which previously allowed if a user was fast enough to select options for a user that may or may not be available once the user upc has been fully loaded which can result in crashes and errors. Also prevented the message area from appearing on the generic layout by default when a user selects a blocked, block by or the current user themselves. Also the default generic layout has been reduced it chances from ever appearing now its now more of fail safe as it should be. previously it would rendered the generic purple background banner color along with the default profile avatar, generic/ no options/ message/no message area a # with no name or $TR!F3 id tag and an offline status for a split second before rendering the users actual data. now upon clicking a user their UPC and data loads instantly the method may impact performance but this is yet to be observed and if such issues arise another method using fragmentation will be used instead, this rendering method gives the exact rendering of a users UPC instantly like discords (discord does not have a intitial generic layout rendered first just the actual user's upc with their data instantly).
    - Added the use of Material UI libraries for easier and more stable components for inputs, forms, radio buttons, etc.
    - Added Alias for MUI libraries in webpack "@mui/material/" is mapped to the folder "@mui/material/modern" which contains all MUIs components for modern browser versions instead of grabbing the legacy version of the components for the normal unmapped path "@mui/material/".
    - Addressed issue with speed of application and rendering of components such as the channel settings modal which uses MUI components, importing and using one component even something small such as a button or even a form label from the MUI library causes a rendering slow down. After some investigations it was determined that the rendering speed for channel settings modal went from 0.5-3ms to around 3 - 9 seconds. Optimizations included removal of the majority of MUI components that used the sx={{}} style prop containing more than 5 styles as it was determined that sx prop has a performance overhead at times although not noticeable in most cases, it also helps reduce code clutter and increase readability, now components with a large amount of styles are moved into a styled component which at first before using the sx prop , worked fine in designing components but for some odd reason would not allow proper functionality of the component, problem was that the component was wrapped in the functional component that was calling it in the render. so the fix was to seperate the styled component from the functional component and call it inside the functional component and the styled component works correctly. these have given slight increases to performance. but the slow down was still noticeable, production build of the app removed the performace overhead and the app works at its normal speeds but in development components being called to render in that contain mui components are extremely slow to appear, after extensive investigation the cause was mui styling engine which was the emotion style engine, upon calling to render some component containing a mui component the header tags would generate a large amount of style tags containing the styles of the mui components and the customized styles which override the default mui styles.  Inorder to speed up rendering the styling engine for mui has been switched from emotion to "@mui/styled-engine-sc" which also allows better rendering of styled component types and eliminates the generation of style tags in the header tags of the application when a mui component loads in. this was address by adding  "@mui/styled-engine": "@mui/styled-engine-sc" as alias in the webpack config file.

## C0R3 @P! glitches and bugs addressed and added changes

- CORE is a small api combining both backend rails action cable, frontend javascript rails action cable libaries with redux to perform async like actions across the app when a user is not in
 a chat room where they normally would be connected to a websocket. Each user once signed in is given a core representing a global cable unique to them actions across the app involving user will result having them send a signal to the backend to send any involving users of said action to receive a redux action to reflect the changes live. such as creating a new server and inviting a few membes that action will be sent to the global cable and send each invited member of this new server and redux action to perform a dispatch on and recieve/render the new server LIVE WITHOUT HAVING TO REFRESH THE PAGE!! other actions such as banning or kicking a user also are reflected live as well resulting in removal of the server/dm that user was removed from even if they are not browsing the current server/dmserver they got removed from a request will be sent to that user if they are online and regardless of where they are in the app the server will be removed live.

- Mounted Root Cable to Start A Conversation Modal when clicking on friend that the user has no dmServer for upon clicking it will sent a live request to that friend if they are online to render the new dmserver live.

- Clicking start a dm message with a friend on both friend list or online friends list and their is no
current dmServer involving the user of their friend it will send a request to the friend if they are online to render the new dmServer live.

- Clicking send message when clicking on a user from the member list in a server or dmServer if there is no exisiting dmserver between them and that user is online it will send a request for them to render the new DmServer live.

- Typing a message in the user profile card on a user by clicking on that user from the member list in a server or dmserver if there is no existing dmServer with that user before it will send a live request for that user to receive this new dmServer live if that user is online.

- Deleting server purges all remaining members from the server and removes the server from their
  server list if they are actively browsing the server at the time of deletion however now if a user is online and not browsing the server at the time of deletion they will receive an action to remove the server preventing access to a non existant server live.

- Deleting dmserver purges all remaining members from the dmserver and removes the dmserver from their
  dmserver list if they are actively browsing the server at the time of deletion however now if a user is online and not browsing the dmserver at the time of deletion they will receive an action to remove the dmserver preventing access to a non existant dmserver live.

- Updating server updates all members outside the server.

- Added Core Cable Actions to member lists in DmServers and Servers where friend request actions,
  removing, adding, and accepting friend requests are sent live to the user that is being sent that request if that user is at the home dash board and is in the pending friends list the request will be received live and if the sender cancels the requests the pending request on that users screen is also removed live.

- Added interactions for friend requests for blocking, unblocking, deleting friends, updating friend requests (rejecting friend requests, approving friend requests) and creating friend requests.

- Added Core Cable call to Add Friend Page when submitting a friend requests by sending successfully submitting their $TR!F3 id if the user to be added is online they will receive LIVE said friend request from that user.

- Added Core Cable actions to blocked users page for unblocking users and for unblocking and blocking actions across servers and dmServers else where in the app.

- Added mounting of performing Core Cable Actions onto functionality in the ServerUserOptionsModal, functions including creating a dmServer by clicking on the message option on a user's UPC (User Profile Card), sending a message directly into the UPC and pressing enter to send, Sending/creating a friend request, Updating a friend request (Accepting or ignoring/denying a friend request), deleting a friend/request, blocking, unblocking, kicking (also mounting a remove dmServer action if kicking a dm member of a dmServer containing only 3 members will cause a duplication of a dmserver already containing these two members already), or banning a user.

- Mounted Cable actions when a user uploads, updates, or removes their profile avatar, or changes their username their location is analyzed and depending on whether they are in a dm/server or in the dashboard will send a request to said online dm/server members to re-render the changes.

- Mounted Cable actions on inviting members to an already exisiting server.
- Mounted Cable actions on inviting members to an already exisiting dmServer.
- Mounted Cable actions on delete friendship on elipses drop down context menu button on online friends page.
- Mounted Cable actions on delete friendship on elipses drop down context menu button on all friends page.
- Mounted Cable actions on deny friend request (update friend request action ) in pending friends page.
- Mounted Cable actions on accept friend request (update friend request action ) in pending friends page.

### Glitches and bugs Addressed

    - Fixed redux warning when a user deletes their $TR!F3 account:
        - Addressed by Rails backend controller returning a render of show user when user no
          longer exists. Fixed by removing the render show
    
    - Fixed an Issue where if a user logs out and without refreshing the page sign back in 
      and clicking on a server immediately causes a crash due to 
      a scenerio that causes the SystemUtils redux state remain empty of the $TR!F3 bots assets
      normally signing in this state becomes filled but when signing out clears this state and it remains
      cleared when logging in again without a page refresh despite serveral diifferent redux calls to initiate a rewrite to state 
      for systemUtils it returns the default state of empty even though the $TR!F3 bots assests are hardcoded and passed as 
      params to the reducer.
        - Fixed by introducing a dedicated redux call to rewrite the state that is dispatched when signing in and visting the loading 
          screen. This works in combination with the other redux calls to write to the systemutil state this dedicate redux action
          ensures that that state in overwritten
        - hard coded systemUtils into preloaded state, testing if just a redux call on signin gives the same effect before removing it
          from preloaded state. removed from preloaded state and obtained via redux call.
    
    - Fixed an issue with uploading and previewing Profile banners:
      - Issue is when a user uploads a banner and saves it changing the banner again to preview the new banner the option remove remains
        which when click removes the newly loaded image that is being preview and detaches the currently saved banner on the users
        account. attempting to select the image again without closing the modal to preview it upon loading does not render the image 
        to be preview and clears the banner file and url from the state and prevents it from being rendered to be preview regardless 
        of mutliple attempts to reselect the file, click on other files also gives a preview of gray screen. the option to save the image does 
        appear however and the image can be saved. The normal changing of a users banner that has previously upload a banner of their
        own is done by removing the old banner and selecting a new one and saving it. or selecting the banner clicking remove and selecting 
        it again inorder to obtain the save option to then upload it and save it to the account.
      - Fixed by introducing a proper comparison of checking if the user does not have a custom banner to begin with if they do have one
        check the banner save on their account and compare it to the new banner they are previewing if the files dont match 
        it removes the option to remove the banner and switch to the save option which then when click removes the old banner and saves the newly
        loaded one. The remove banner option renders by default if the user has uploaded their own banner already click it removes the image
        as normal and the users default banner will be used (based on users color tags).
    
    - Fixed an issue with uploading and previewing Profile Avatars (problems and fixes are the same as the profile banners):
      - Issue is when a user uploads a avatar and saves it changing the avatar again to preview the new avatar the option remove remains
        which when click removes the newly loaded image that is being preview and detaches the currently saved avatar on the users
        account. attempting to select the image again without closing the modal to preview it upon loading does not render the image 
        to be preview and clears the avatar file and url from the state and prevents it from being rendered to be preview regardless 
        of mutliple attempts to reselect the file, click on other files also gives a preview of gray screen. the option to save the image does 
        appear however and the image can be saved. The normal changing of a users avatar that has previously upload a avatar of their
        own is done by removing the old avatar and selecting a new one and saving it. or selecting the avatar clicking remove and selecting 
        it again inorder to obtain the save option to then upload it and save it to the account.
      - Fixed by introducing a proper comparison of checking if the user does not have a custom avatar to begin with if they do have one
        check the avatar save on their account and compare it to the new avatar they are previewing if the files dont match 
        it removes the option to remove the avatar and switch to the save option which then when click removes the old avatar and saves the newly
        loaded one. The remove avatar option renders by default if the user has uploaded their own avatar already click it removes the image
        as normal upon removal of the old avatar the users default avatar will be used (based on the users color tags).

    - Fixed an issue where if a user is attempting to disable or delete their account but owns servers, if a user deletes their servers
      visitng the profile page and attempting to intiate the disable or delete account process the notification that they own servers still
      appears even though they clearly no longer own servers. this issue happens if there is no page refresh and the user immediately goes to
      the profile page to start disabling or deleting their account after deleting their last server.
      - Issue caused by redux not resyncing the current users ownServers to be up to date causing the last server that was deleted to remain
        in the redux state till a page refresh or some redux action allows the resync of the current users data to become up to date and
        allow the user to delete their account.
      - Fixed by allowing a dispatch call to rsync the currentuser when clicking the profile page/ clicking on disable or delete account. 
        (in testing) - done

    - Fixed an issue on Invite a friend to an already existing dmserver where searching up a friend is case sensitive.
      - Fixed by making both the username and search text be compared to each other both in lowercase form.
    
    - Fixed an issue on creating a dmserver where searching up a friend is case sensitive.
      - Fixed by making both the username and search text be compared to each other both in lowercase form.
    
    - Fixed an issue on selecting dmserver members for a call where searching up a member is case sensitive.
      - Fixed by making both the username and search text be compared to each other both in lowercase form.

    - Fixed an issue on selecting server members to invite to an existing server where searching up a member is case sensitive.
      - Fixed by making both the username and search text be compared to each other both in lowercase form.

    - Added the feature where in DmServers where if a user edits their message to become blank or if it contains only whitespaces
     instead of negating the change and having it sent to thge backend and return a bad requests have the delete message modal appear
     asking if a user wants to outright delete their message instead.
     - Also added the feature if a user user aborts the deletion of their message through editing it and sending a blank or space only 
       message have the old message be refilled back into the state so when editing it again the message will be prefilled with it 
       previous remove contents.
     - Added the ability for the cursor to auto focus at the end of the text when editing instead of the beginning.

    - Fixed a problem where a user edit the name of a dmServer with containing 3 or more members and submitting a blank or name filled 
      with  only spaces. 
      - Fixed by not checking if new name entered contains only spaces or is empty and aborts the changes and returns the orginal name.
    
    - Fixed a rare issue with the DmServer Head NavBar would not change re-render the name change if a new memeber is invited to the server
      and the dmServer does not have a permanment name.
       - Addressed by being able to use the users in the dmServer state to re-render when a change in that state has occured and update 
        the pre-filled name of the dmServer head nav bar.
    
    - Fixed an issue in DmServers where a user types a message and does not send it, then proceeds to  switch to another dmServer that
      previously typed message that was not sent remains in the textArea.
      - Addressed by clearing the state of the text area the dmServer id changes.
    
    - Fixed an issue where selected dmServers would not appear as selected 
      - Problem was due too the elimination of double routing of this component.
        - Which only left it to render at '/channels/@me' which is needed in order for a user to see and click to enter a dmServer
        - The route  '/$/channels/@me/:dmServerId' was reserved to be in a special protected route to prevent from unauthorized users from
          entering. this route was also used to render the dmserver navbar component which allowed access to the  params ':dmServerId' which
          with the elimination of this component rendering of at this route the component no longer has access to that params which 
          is required inorder to activate the selected dmserver colorization 
      - Added back the double routing of DmServerNavBar with initial rendering at '/$/channels/@me' and 
        '/$/channels/@me/:dmServerId' this route here is taken to a secure route and checked to see if a user is a member of that dmServer
        rendering the dmServer navbar component again on this route allows a selected dmServer to be showm as selected.
    
    - Added a new icon 'Show user profile' on the dmServer header navbar for dmServers that are explicitly one on one chats clicking it will
      show the other users profile card (will be added at a later date) 

    - Fixed an issue where after removing prefilled data from the Add Friend search bar the send
    friend request button is no longer disabled by default only when a user types and removes the input
    the button disables itself.
      - Cause of problem is due to the state value no longer having a value by default due to a previous patch the function to disable the add friends button is called via a onKeyUp event which requires
      user input first.
      - Fixed by disabling the button by default.

    - Fixed a bug where changing the name of the general channel in a server, would cause the id of the servers general channel to switch to other  
      channel in that server if they exist editing names of that new general channel would also change it again. This allows the deletion of the general
      channel when it is not allowed.
      - Cause of the problem lies with the jbuilder code server.channels.first.id  which can suffer from a  problem where rails is read data entries from disk only and updating an entry such as the general channel causes it to be pushed to the last entry of the table as last updated. to remedy
      this is to use the code server.channels.order(:id).first.id to directly get the first channel of the server no matter what.
    
    - Fixed an issue in Server Chat Rooms where if a user enters some text in the message text area but does not send it and proceeds to switch between
      the servers channels or switches to a different server and the contents of the text area remain.
      - Addressed by clearing the state of the text area when the channel id changes.

    - Added the feature where in Server channels where if a user edits their message to become blank or if it contains only whitespaces
     instead of negating the change and having it sent to thge backend and return a bad requests have the delete message modal appear
     asking if a user wants to outright delete their message instead.
      - Also added the feature if a user user aborts the deletion of their message through editing it and sending a blank or space only 
       message have the old message be refilled back into the state so when editing it again the message will be prefilled with it 
       previous remove contents.
      - Added the ability for the cursor to auto focus at the end of the text when editing instead of the beginning.
    
    - Fixed an issue with creating dmServers via create dm modal where if an if there is an existing dmserver with said members it should 
      redirect to that dmServer. however this was overlooked do to a flaw in the algorithm to check for this it would always fail and run the createDMServer function and the backend would return the existing server redirecting to that server anyways the goal was to prevent 
      the backend from running this check anyways as the createdm dispatch would call on the core cable to parse the new dmserver and 
      send a redux action to dispatch and receive the new dmserver to its members.
      - Addressed said issue by comparing member ids properly, prior to this the algorthim was comparing member data as a whole against 
        their id which was not intended.
    
    - Addressed an Issue With Blocking Users: a user that was blocked by some other user where able to send friend requests to them hence undoing the    block between the users.
     - This was do to an issue of how blocked users where implemented typically any relationship between users are created with and referenced
     via a pair of records, blocked users only generated one record for the user that created a block, the reason for this was that the blocked user
     was able to remove the block by visiting the blocked users page. creating the record for the user that created the block only allows them to view 
     the block and remove it if they choose to. however this allowed the blocked user to still send friend requests to that user as their is not record
     on that users end that they where blocked because they arent supposed to know that they are being blocked.
      - Fixed by readding block requests to create a pair of records on indicating a -1 status for the user that created the block indicating "user A" has blocked "user b" and another record with a status of -2 stating to "user b" that the following user "user A" was the user that initaited the block between "user A" and "user B". This is a similar relationship when creating a friend request. (status 1 is the request of the user that made the friend request while status 2 indicates an incoming friend request for the user to accept the friend request ). 
    - Fixed a bug where when receiving a Blocked User the friendship status reverts to 0 when it should be -1, this is fixed by changing the reassign value to -1.
    - Passed -1 as channel type to allow the subtext in create channel modal to not appear when opening it from the channel drop down container.

#### User Security && Application Security

- Fixed an issue when user changes their password and the password is not of appropiate length
  - Issue is due to password length validation failing to check when updating it
  - Fixed by returning the warning that a users password must by of appropiate length when.
    changing their password, it must fall into the length required when first creating their account.

- A fellow Contributor noted that email format verification missed a problem with periods (and provided a fix this will be merged soon as it was provided near patch v3.0). credit goes to user cpoope1.
- Email format verification used regex to check for proper email formatting the former version has a vulnerbility Resulting in email addresses being incorrectly validated and has been addressed by cpoope1.

- A potential risky html/jsx code has been addressed in Channel Drop Down modal. Prior the modal would return avaliable options that can be selected based on the level of authorization the user has either they are a server member or the server owner it will render options that they have access to. However the modal returns Un-Authorized options as invisible, to the U.I. but it is present in the html which can be exploited and can possibly crash the app if enable. The reason for this is the modal returns the options while deciding whether or not to hide them or not. This has been addressed by having the decisons for those options decided before the returning jsx is returned.

- Fixed certain forms and buttons in delete channel modal from being XSS attacked or fall victim to form hijacking.
- Added Protection features to prevent XSS attacks and form hi-jacking on delete server messages of other users.

### UI and Cosmetic Fixes and Changes

    - UI Fixes (Cosmetic):
      - Changed the profile pages colors to a darker shade of gray to match that of discords properly.
      - Fixed Bug in the add friends page where the link to redirect to the explore public servers page over extends it button
        where clicking the same row the button is located at will register as a valid button press and redirect the user to 
        the explore servers page.
      - In the add friends page changed the header title of Other Places to Find Friends to Other Places to Make Friends.
      - In the add friends page the search bar to enter a users $TR!F3 tag the place holder is changed from "Username#0000"
        to "Enter a Username#0000" and the bar is no longer prefilled with "Username#0000" in the state.  
    - Fixed background colors of dm server navbar , dm server header navbar, textarea, dmMembers list, highlighting of dmservers 
      and dmServer members.
    - Fixed background colors of server nav bar and user nav bar.
    - Fixed background colors of Find or Start conversation bar and Search bar in DmServerHeader NavBar.
    - Added users online status of the Dm Server Header nav bar for one to one dmserver chat rooms.
    - Readjusted the colors and background colors of hovering and selecting friend options on the homepage head nav bar.
    - Added color brightness when selecting dmserver member list to be enabled
    - Added the colors when selecting friends option in the dmServer navbar
    - Recolored and changed the font-sizes in the Active now Section .
    - Switched from '-' to em dash '—' symbol for member lists on dmServers
    - Adjust opacity for offline members in dmServer member list.
    - Added Selected Color for dmServer Members list for group dmServer chats by passing state of
      hideDmServer member list.
    - Fixed a displacement issue in the edit friendship modal on the all and online friends list sections where clicking on the more options 
      button places the modal in the middle of the screen when using a 4k resolution screen.
    - Fixed a displacement issue for user profile card on dmserver members list section in dmServers 
      for 4k resolution screens.
    - Fixed a displacement issue for user profile card on server members list section in Servers 
      for 4k resolution screens.
    - Adjust opacity for offline members in Server member list of a server.
    - Switched from '-' to em dash '—' symbol for member lists on Servers for offline and online users.
    - Switched from '-' to em dash '—' symbol in the friends section for users in the online,all friends list, pending friend request list, and 
      blocked list.
    - Fixed u.i colors and problems on Dmserver nav bar
    - Fixed u.i colors and problems on homepage nav bar
    - Fixed u.i colors and problems on friend container on dm nav bar
    - Fixed u.i colors and problems on nitro container on dm nav bar
    - Added the X symbol button on hover over a dmserver on the dmServer Navbar which when clicked will allow deletion of a dmServer bar 
      (to added later).
    - Added color adjustment for selecting a channel in a server.
    - Added icon change based on channel type in Server Header navbar.
    - Added icon color adjustments in Server Header navbar.
    - Adjusted the text color and background color of tool tips around the entire app.
    - Adjusted Searchbar background colors and magnify icon colors in servers, dmServers, friends pages, and add Friend Pages.
    - Adjusted the background color of the Explore Public Servers Button in Add Friend page.
    - Changed the placeholder text in the search bar of the explore servers page. 
    - Changed the colors of the offline and online circles, texts and background colors text in the explore servers page. 
    - changed colors of user option buttons in all of the  friend list sections.
    - changed colors of usernames in all of the  friend list sections.
    - Added and fixed tooltips on channel nav bar.
    - Fixed header nav bar sizings in explore servers page, dmServers and Servers.
    - remodeled user nav bar to scale with proper sizing.
    - resized channel nav bar dmServer navbar and explore servers navbar.
    - resized server nav bar.
    - changed tool tips for server nav bar.
    - Added new colors for backend console.
    - Added new info in dev console.
    - Changed text on the deleted server loading screen.
    - Major Change: Re-Worked the Session form page for both login and sign up pages to be able to scale on various screen sizes and 
    be able to match the new slight alterations discord has made.
    - Fixed animation glitch on the session form in the register page.
    - Fixed Background for the login and registar page, background used to repeat itself now it is one image same as discords.
    - Imported login and register background to be an svg file instead for higher resolutions. 
    - Added the ability of the sign in page once the window minimizes small enough it will change to a layout similar to the sign up
    form.
    - Add required red stars on sign in page for email/phone number and password input fields.
    - Added the spinning cube animation that replaces the qr code image every few minutes it will play for a few seconds before returning the qr image.
      at the login screen.
    - Changed Demo Login button to Demo login 1.
    - Brought back the Demo 2 login button.
    - So now visiters dont have to immediately make an account although i encourage you do as there are certain features blocked when using demo accounts
      but one can can open seperate browsers or normal and incognito/private mode and login in demo 1 and demo 2 and browse the app and explore the async functionality.
    - returned both sliding animations for the sessions form slideDown animation for logging in and sliding up for signing up.
    - Fixed a visual bug with the sliding up animation (which is why it was removed before).
    - Added Autofocus on text message area input in dmServers.
    - Added Autofocus on text message area input in Servers.
    - Added Autofocus on text message area input in add friends input.
    - Re-modeled invite members to server modal to reflect that of discords and is no longer a re-hashed version of the create dmServer modal.
    - Adjusted colors of the create dmServer modal.
    - Adjusted colors of the invite to dmServer modal.
    - Adjusted colors of the old invite to Server modal.
    - Adjusted case un-sensitive search on the old invite to Server modal.
    - Added Clear/Reset search function to Invite to Server Modal.
    - Added Clear/Reset search function to online friends page.
    - Added Clear/Reset search function to all friends page.
    - Added Clear/Reset search function to pending friends page.
    - Added Clear/Reset search function to blocked users page.
    - Added online/offline status on invite to existing dmServer modal
    - Removed Spell Check on Email and Username inputs on Sign up Forms
    - Removed Spell Check on Email Input for login forms
    - Recreated create dm server modal that pops up for the homebar into a seperate component as a small amount of data passed can affect its placement.
    - Fixed the button messages on both create dm modal on home bar and nav bar to display create dm or create group dm based on the number of users selected. 
    - Added Online/Offline Status in create dm Server modal via dmServer nav bar.
    - Added Online/Offline Status in create dm Server modal via home nav bar.
    - Added a variety of various style options for online and offline status for various modals.
    - Added adjustment for 4k screens for active now section (will be moving to present day styles onwards).
    - Adjusted error color text on create dm member modals and invite to dmServer modals.
    - Reworked search alogrithm for create dm modal via dm nav bar.
    - Changed color check box check mark and check box with check mark on create dm modal via dm nav bar, home bar and invite to dm server modals.
    - Reworked the search algorithm on create dm modal via home nav bar.
    - Added a no result image when failing to find a search result in create dm modal via home nav bar.
    - Added a no result image when failing to find a search result in create dm modal via dm server nav bar.
    - Adjusted colors in some components in server settings modal.
    - Edited Inactive channel default text in server settings modal from "No Active Channel" to "No Inactive Channel".
    - Added New options on the left hand side in the Server Settings Modal.
    - Reorganized setting options in user profile/ user settings modal.
    - Changed background color of channel drop down container modal.
    - Added App directory option to Channel Drop Down Container.
    - Added styles for App Directory option in channel drop down modal.
    - Added back Server Settings to non-server owners in channel drop down modal, but it is disable till
    new modals are added. 
    - Added recoloring and style updates to Channel drop down modal.
    - Refactored channel drop down modal return html/jsx to prevent options that users do not have access too from appearing in the html file structure but are disabled these are not rendered visually in the u.i. but are present in the html file structure and can be enabled through editing the struture through dev tools. To prevent only authorized options to be rendered in both the html file structure and the u.i. the options are decided before the returning jsx. prior the returning jsx decided to hide which ever options it needed leaving said option to be hidden by styling it to be invisible instead of not rendering it at all.
    - Added discords beta "Show all Channels" option in channel drop down modal.
    - Add styles for Show all Channels option in channel drop down modal.
    - Added 2 state variables to toggle check marks in two different check mark options in channel drop down modal. 
    - Temporarly removed server settings for users that are not the server owner in channel drop down menu.
    - removed user drag and select on various texts and avatars on various components. 
    - Re-added private lock svg for creating private channels.
    - Fixed a bug where channel type defaults to text channels when opening create channel modal from the channel drop down modal.
    - Added new Styles to create channel modal.
    - Removed a few text descriptions from create channels modal.
    - Added feature to disable the create channel button until a name is entered into the the channel name input.
    - Disabled creation of private channels regardless if the channel name input has text or not once the slider for private channels is turned on any proceed attempt to create a private channel is disabled the create channel button is disabled.
    - Changed the create channel button text from "Create Channel" to "Next" when private channel selection is enabled.
    - Prevent a length greater than 100 characters in create channel name input from being submited if input is able to be submit it it will deny creation of such a channel.
    - Shift placement of item tool bar to the correct div on the server header nav bar.
    - Fixed a issue where channel names that reach 100 characters push out the item tool bar in the server header nav bar.
    - Added Height function to create channel modal to handle more added elements while using it.
    - Added clear channel errors when clicking the create channel button when using the create channel modal after failing to create a channel prior.
    - Remodeled Channel settings modal. 
    - Moved old channel settings modal to deprecated files folder.
    - Revamped styles for channel settings modal.
    - Imported discords new font gg sans in each type used by discord.
    - used gg sans font for channel settings modal.
    - preparing to switch to gg sans on every component in $TR!F3.
    - added loud speaker svg image for voice channels in channel settings.
    - Add slide in animation for channel errors when attempting to change channel name in channel settings modal.
    - Added more error detection in channel settings modal.
    - Restyled Delete Channel modal
    - Prevent form hijacking on delete channel modal.
    - Moved old delete channel modal to deprecated folder.
    - Prevent general channel from being deleted when using the delete channel modal, prevent deletion through form hijacking and XSS attacks.
    - Global vars with SCSS Vars for quicker and more consistant styling of commonly used styles.
    - Imported Material UI libraries (MUI) for custom ui components such as sliders that are more easier to build, style and work with.
    - Created workable slider in channel settings modal using MUI Slider components.
    - Placed specs for old slider using divs in old channel settings modal in the deprecated files folder.
    - Added missing/misplaced animation for delete channel modal.
    - Prevent Warping to the general channel when deleting a channel when the user is already at the general channel.
    - Added a new animation that aligns closer to discords animation when opening the channel settings modal.
    - Added App pulling animation for opening channel settings modal, when opening the channel settings modal the app is pulled in to about 
      96% of the orginal size closing the modal also plays an animation behind the animation of closing the channel settings where the main app
      re-shrinks to 96% size and grows back to 100% after the modal if fully closed.
    - Fixed escape listener bug on delete server modal where clicking outside the modal to close it causes a bug that refuses to bind to any sub modal
     hence clicking escape will close both the sub and main modal. issue is due to an old method of removing listeners when opening a sub modal and adding listeners to that sub modal a set time out is used to readd the listener to the main modal upon closing the sub modal however the timing is what causes the bug so removing the settime out fixes this. settimouts are added to the sub modal to allow the closing animation to fully play.
    - Remodeled and re styled delete server modal.
    - Addressed warp issue when failing to delete server when using the delete server form.
    - changed the close modal event when click cancel on the delete channel form.
    - Changed CSS vars to SCSS and updated colors and fonts to downloads modal.
    - Switched from Css to SCSS vars for server nav bar.
    - Fixed hover problems on server bubbles.
    - Fixed a problem on the server nav bar where if a server bubble for a server is using a custom avatar
      selecting that server does not keep the bubble expanded. Addressed the issue by adding a missing style the decrease the border radius by 30% on an img type.
    - Addressed an issue where a missing feature of selecting the following bubbles on the server nav bar
      explore public servers, create a server, download apps, bubbles if these bubbles are clicked the bubble itself does not retain 30% border radius or the color changes for a selected bubble. Addressed by using a similar approach to the home bubble for explore servers bubble attaching the guild link to a condition to ensure the selected bubble shows as selected while at the explore servers page.
      Also by using the ui state rto check which modals are currently open either download apps, or create a server if so set a custom class to show the bubble that is is selected and active and "pop" the bubble when the modal is closed this works when in the explore servers page of in any other server clicking on the modal bubbles allows those bubbles to expand as well while still having the current server bubble expanded at the same time.
    - Changed tooltip for the home bubble to say Direct Messages instead of Home.
    - Restyled the Tool Tips for server, explore servers, download apps, and create a server modal bubbles.
    - Changed font type for the text in the Server Acronyms bubbles.
    - Restyled Server Header Nav Bar switching to SCSS vars, font styles, colors, changed tool tip sizes.
    - Changed the tool tip message for hiding server members list when clicked to say either "Hide Members List" or "Show Members List" depending on the current state of the members list if it is hidden or not.
    - Addressed hover and color issues for the icon of hiding member list depending on if it is false or not. 
    - Remodeled Delete Server Message Modal.
    - Restyled Delete Server Message Modal.
    - Switched to SCSS Vars for styles in Delete Server Message Modal.
    - Added Pro tip indicator for Delete Server Message Modal.
    - Added enter and exit animations for Delete Server message modal.
    - Adjusted Server Container base Color.
    - Added animation enter and exit to leave server modal
    - Restyled Leave Server Modal.
    - Switched to functional component for download apps modal.
    - Added Open and Exit Animations for Download apps modal.
    - Switched to SCSS vars for Invite to Server Modal.
    - Added Animations for Enter and exiting Invite To Server Modal.
    - Added Loud Speaker Icon for Invite to Server Modal.
    - Added direct pass through for channel id to get the proper channel to appear in Invite to Server Modal.
    - Restyled Explore Servers Page.
    - Switched to SCSS Vars in Explore Servers Page.
    - Added "Try search for them" footer at the bottom of the explore servers page.
    - Changed Action Button Pop Up for grabbing the server invite link changed the text from the base server invite link to Copy Server ID.
    - Changed button size for the join buttons in explore servers page for 4k screens.
    - Changed placement of Action Button Popup on 4k screens.
    - Restyled Server Chat room message area.
    - Swapped to SCSS Vars for styles in Server Chat room messages.
    - Added a condition to change the styles of the current message being edited.
    - Restyled Edit message modal.
    - Restyled Server Messages.
    - Added Custom Tool tips for Edit Message options container.
    - Added more Options for Edit Message Options Container.
    - Reduced exit animation for delete server message modal.
    - Added Protection features to prevent XSS attacks and form hi-jacking on delete server messages of other users.
    - Add control functionality to edit message options container holding the shift key while hovering over a message will expand the edit message options button group revealing more options for users to select. releasing the shift key shrinks the button group back while moving the mouse away from the message also disables the listener too.
    - Fixed a bug that would crash the app when user clicked to open the invite to server modal from the channel drop down modal due too the needed props not being passed to invite to server modal from channel drop down.
    - Passed the channel id that is mapped to the invite to server modal button on the channel nav bar and used it via ownprops to extract the channels state to get that props of the channel instead of using a function.
    - Adjusted the flex container to webkit and mss flex boxes to allow proper alignment of the channel type icons and the channel name in the the invite to server modal. 
    - Switched to SCSS Vars in Servers Settings Modal.
    - Remodeled Server Settings Modal.
    - Restyled Server Settings Modal from ground up.
    - Added a better resolution image of Boost Progress bar.
    - Moved Old Server Settings Modal to deprecated folder.
    - Created custom toggle switch that uses a similar svg animation to that of discords.
    - Styled custom toggle switch.
    - Removed old server error style from global styles.
    - Added MUI components to Server Settings Modal converted static Select Boxes to Select MUI components.
    - Fixed Styling issue with border radius and div element wrapping svg element that caused the radio   item to mis-align in the radio group in Server Settings.
    - Fixed Styling Issue with radio group and radio items in Channel Settings Modal.
    - Replaced Mui Radio Group, Radio Button, FormControl and FormcontrolLabel with the orginal custom made radio group in Channel Settings Modal.
    - Replaced Mui Radio Group, Radio Button, FormControl and FormcontrolLabel with the orginal custom made radio group in Server Settings Modal.
    - Moved Mui Styles and components for Radio group for Channel Settings  Modal to deprecated inputs file.
    - Removed Redacted Code from StrifeToggleSwitch module.
    - Renamed StrifeToggleSwitch module file.
    - Fixed An issue where swapping between servers too fast and visiting the channel settings upon entering the server would cause a crash due to props.channel.channel_type not being synced fast enough. fixed by returning null if !props.channel which as a result returned the modal enter/exit animation effects to simulate a delay effect when missing props are not synced to the modal and introduce a useEffect to attempt to rescue the channelSettings Modal.If the useEffect syncs the modal appears.
    - Restyled Channel Drop Down Modal switched to SCSS Global Vars. 
    - Switch to SCSS Vars for Friend Request Failed Error Modal.
    - Restyled Friend Request Failed Error Modal.
    - Removed the old error information text in Friend Request Failed Error Modal: "Hm, didn't work. Double check that the capitalization, spelling, any spaces, and numbers are correct." and changed it to the new version "Hm, didn't work. Double check that the username is correct". As discord moves to use usernames as the method for submitting friend requests instead of nitro tags. $TR!F3 will move in a similar fashion.
    - Added enter and exit animations for Friend Request Failed Error Modal.
    - Added outside and esc listeners for exiting Friend Request Failed Error Modal.
    - Changed Friend Request Failed Error Modal from a class based component to a functional component.
    - Moved old Class based Friend Request Failed Error Modal to deprecated folder.
    - Created third Modal mod (named "modal-struct-2") which removes the double backdrop color effect on small modals.
    - Applied third modal mod on Friend Request Failed Error Modal.
    - Removed user drag on server bubbles that have avatars.
    - Added Update Is Ready Icon to Homepage Header NavBar. 
    - Added Update Is Ready Icon to Server Header NavBar.
    - Added Update Is Ready Icon to DmServer Header NavBar.
    - Function with a low probability to reveal the  Update Is Ready Icon in Homepage Header NavBar clicking it removes the icon and as of right now redirects to the loading screen (will update to redirect to a dedicated update screen).
    - Fixed an issue where search in the online friends tab changes from online - # count to All Friends - #count. 
    - Added New Update Loading Screen.
    - Added New Update Loading Screen Container.
    - Update Is ready Icon when clicked now goes to the upload loading screen instead of the normal loading screen.
    - Switched to SCSS Vars for styles for Loading, intrusion, serverDeleted (Warp), and update screens.
    - Restyled styles for Loading, intrusion, serverDeleted (Warp), and update screens.
    - Added circular progress style and animations to the update screens and certain warp containers.
    - Added Different Sized animations for each loading screen type.
    - Each Warp Screen (Loading) has its own unique color.
    - Switched from linear to radial gradients for styling loading screens.
    - Add fade away transition effect on warp/loading screens to fade into the path `/$/channels/@me/`
    - Added Show Update Icon Probability and click to remove and redirect to update screen in Server Header NavBar.
    - Added Show Update Icon Probability and click to remove and redirect to update screen in DmServer Header NavBar.
    - Fixed selection color issue with hide/show member list in DmServer Header NavBar.
    - Added conditional rendering to display hide or show members list for the tool tip when clicking the group chat member icon in DmServer Header NavBar.
    - Swapped from Div element to section element in HomePage Header NavBar.
    - Swapped from Div element to section element in Server Header NavBar.
    - Swapped from Div element to section element in DmServer Header NavBar.
    - Swapped from Div element to Aside element in Server Member List. 
    - Switched to SCSS Vars for styles for Server Header Nav Bar.
    - Restyled styles for Server Header Nav Bar.
    - Switched to SCSS Vars for styles for DmServer Header Nav Bar.
    - Restyled styles for DmServer Header Nav Bar.
    - Switched to SCSS Vars for styles for Server Container.
    - Restyled styles for Server Container.
    - Switched to SCSS Vars for styles for Channels Container.
    - Restyled styles for Channels Container.
    - Switched to SCSS Vars for styles for HomePage Header NavBar.
    - Restyled styles for HomePage Header NavBar.
    - Switched to SCSS Vars for styles for Server Members List.
    - Restyled styles for Server Members List.
    - Switched to SCSS Vars for styles for DmServer Members List.
    - Restyled styles for DmServer Members List.
    - Removed unused old DmServer Header Nav Bar version 2 file from the frontend folder and moved it to deprecated folder.
    - Moved old DmServer Header Nav Bar to deprecated folder as it was replaced by a superior version.
    - Replaced Old DmServer Header NavBar.
    - Restructured Dm Server Header NavBar.
    - Replaced @ symbol and group chat svg icon on the Dm Server Header Nav Bar with the other user profile picture for one to one dm chats and a group chat icon for dm chats greater than 2 members.
    -Moved the trigger function to allow editing of the dm Server name on to the inner  most div prior to the input component to prevent click in the middle of the header bar and being able to edit the dmServer name unintentionally.
    - Add click away to submit dmServer name change now pressing enter or clicking away after typing when the input looses focus the name will be submitted.
    - Fixed the lighting up of icons for hide members and hide user when clicked.
    - Provided condtional rendering of tool tips that change based on whether the hide members and hide user are selected or not.
    - Used more highly optmized condtional rendering removed unsafe instances of is hidden style.
    - Created a Replica of Discords Default Group Chat icon in svg format using boxy-svg editor with a circle background to allow use of a single file while being able to be recolored based on a random group members color tag.
    - Fixed an issue where the Dmserver Nav Bar Component Duplicates itself due to a weird routing issue
    - Reduced the name input size for Dm Servers in the DmServer Header Nav bar for a min of 1 to a max of 100 in length, implemented in the backend as well also with being allow to be nil.
    - Created a Replica of the discord default profile picture with a circle background that can be filled with boxy-svg editor to allow use of a single fill to server as the default profile avatar for all users as a users color tag can color the fills background allowing for custom images.
    -Mounted masking Svg component at app.jsx that allows for universaly masking of profile avatars and certain images arounf the app.
    - Removed Purple color for users and replaced it with the Secret Pink Color that is the Secret Pink Avatar uses in discord (in discord the discriminator is mod by 5 and the remainder is some number between 0-4 which is what will determine your color of your profile picture which is 5 different pictures but there is a 6th secret picture that is not attainable and it is a secret pink colored avatar since $TR!F3 offers up to ten different default colors for user profile pictures we skipped the discriminator modulus part and used svgs to gives color to the profile pictures).
    - Achieved masking with Svgs with linear and circular gradients for online statuses for user profile avatars preparation to replace each component containing profile avatars with them replacing the old plain circles made from divs. 
    - Switched to SCSS Vars for Create Channel ModaL.
    - Restyled Create a Channel Modal.
    - Replaced old radio button filling method in Create channel modal.
    - Removed old toggle switch button and replaced it with custom made toggle switch in create channel modal.
    - Added Event Listeners for exiting modal on outside click, cancel, form complete, and escape in create channel modal.
    - Using new Svg masking for online statuses replaced how user profile avatars are rendered in DmServer Members List.
    - Remove UL list and li items for rendering members in DmServer Members List with a mapped divs.
    - Applied better conditional rendering for the group owner icon in DmServer Members List.
    - Using new Svg masking for online statuses replaced how user profile avatars are rendered in Server Members List.
    - Remove UL list and li items for rendering members in Server Members List with a mapped divs.
    - Applied better conditional rendering for the Server owner icon in Server Members List.
    - Applied conditional rendering for which user is selected in Server Members List.
    - Resolved a problem where the change name input field did not grow when type only after state due to displaying a static var of the server name changed it to display current state like an input element does.
    - Removed focusing on group/server owner icons and rect statuses
    - For the Dm Server Members list users are not able to notice which member is currently selected unlike in the server members list on discord this
    feature is allowed on $TR!F3 as it allows more cleaner ui.
    - Added Tool Tips in Server Members List for the online status badges for user avatars.
    - Added Tool Tips in DmServer Members List for the online status badges for user avatars. 
    - Removed the display of the offline status badge for offline users in Server Members List as they are faded out to begin with and are rendered under the offline members list section plus the removal of the badge allows the online users to pop up more since the offline members are wrapped into a slightly smaller svg. This is the same as discord and was going to be ignored before the visual affect was noticed.
    - Removed the display of the offline status badge for offline users in DmServer Members List as they are faded out to begin with, the removal of the badge allows the online users to pop up more since the offline members are wrapped into a slightly smaller svg. This is the same as discord and was going to be ignored before the visual affect was noticed.
    - Replaced the Black color linked to users with a color tag of seven with a light purple color iunstead this is due to a visual distoration of svgs whose background is filled with a black or any dark shades of color causes it to appear smaller visually but in fact to is the same size. Since default profile pictures are not using png versions for the default profile picture and a single svg just colored in removing black as a color filling option has been removed.
    - Moved Old Dm Server Members List to deprecated Folder.
    - Moved Old Server Members List to deprecated Folder.
    - Changed text for All friends Page if a user has no friends.
    - Breaking Down Friends Homepage Container (Main DashBoard) into seperate Components.
    - Added New Pic for the active now section if the user is "Streaming a game/something".
    - Moved old JSX Structure for Active now Container to Deprecated Folder.
    - Moved old styles for Active now Container to Deprecated Folder.
    - Added unused functions from new version of Active Now Section in the deprecated Active Now section File.
    - Added old Friendships stylesheet which contains styles for the old friendship pages, friend nav button on dm Server nav bar, and friend text and icon on home header nav bar to deprecated folder.
    - Moved Old version of Friends Homepage (Home Dashboard) to deprecated folder.
    - Moved Old version of Online Friends List to deprecated folder.
    - Moved Old version of Pending Friends List to deprecated folder.
    - Moved Old version of Add Friends Page to deprecated folder.
    - Moved Old version of All Friends List to deprecated folder.
    - Moved Old version of Blocked Users List to deprecated folder.
    - Switched to SCSS Vars for all friendship pages i.e Homepage, Online, All, Pending, Blocked, Active Now, Friends Home Page Header Nav Bar Icon & Text, Friends Dm Nav Bar Button, and Add Friends Components.
    - Restyled Homepage, Online, All, Pending, Blocked, Active Now, and Add Friends Components.
    - Replaced Online Friends List Component.
    - Replaced All Friends List Component.
    - Replaced Pending Friends List Component.
    - Replaced Blocked Users List Component.
    - Replaced Add Friends Page Component.
    - Replaced Friends Home Page (Main DashBoard) Component.
    - Split Active Now Section Container into its own component as its growth has far exceeded its simple version and is to big to house all its functionality in the dash board component.
    - Intergrated Active Now Container into Home Page container.
    - Add a Redirect Button if the User has no friends and is in the all friends page list a button will appear called add friend which will redirect to the add friends page when clicked.
    - Moved class based component of Add Friends Page to deprecated.
    - Replaced class based component of Add Friends Page to a functional component as the complexity of the component is not enough to be a class based component.
    - Moved class based component of Pending Friends List to deprecated.
    - Replaced Class based Pending Friends List with a functional version.
    - Moved class based component of Blocked User List to deprecated.
    - Replaced Class based Blocked User List with a functional version.
    - Add state vars to hold error messages when friend requests fail in add friends page to maintain the error messages returned from redux state to remain on the DOM when the Friendship error modal appears/disappears as the modal clears the error state in redux wrapping it into state allows it to remain and by shown after the Friendship error modal disappears. 
    - Add a heavy modified search functionality for the input handler for the add friends input field in the add friends page component. It detects when typing a hashtag and prevents the user from entering any non number value, only allowing the user to enter a 4 digit number representing the users $TR!F3 tag. When the user deletes the hashtag from the input field it allows them to once again type anything.
    Adding a # in the input proceeded with any number less than 4 digits pressing any non number will reset the tag input deleting the input past the hashtag placeing a hash tag in between the text will remove text after the first hashtag as this represents and ensures that the hash is to indicate tag input and what ever is after the hash is suspected to be the tag. The input field max size has been set to be 37 chars in length. 32 for the username (which is the max username length) and 5 characters for the # and the 4 digit tag number. inputing the hash after the username modifies the maxlength of the inputfield to then proceed to by 4 characters more than the current input text unless it reaches over 37 chars long. Example default max length is 37 inputing a username of 10 chars long then adding a hash
    will now restrict the input to become 15 chars long with 11 chars taken by the username and hash and the remaining 4 will be the tag number which the input will then until the hash is removed take only a 4 digit number adding any non numeric character between these numbers will delete the input till the hashtag reseting the tag input removing the hashtag allows other chars to be entered again and the 
    input max length resizes back to 37. if a hash tag is entered as the 36 or 37th character the input max length will not change to prevent an submission of something that wouldnt be successful anyways. 
    - In Add Friends page added the ability when inputing a hashtag to then reveal a shadow placeholder element that shows the user a hint of what they should be typing adding the # then reveals a placeholder of 4 "0"s hinting the user to input the tag number of the user as the user procceds to input numbers the placeholder will shrink the number of zeros depending on the how many numbers the user has currently inputed. when the user removes the hash tag the shadow placeholder is removed.
    - Added Red border color around the input field in the add friends page if a friend request attempt was unsuccessful.
    - Added Green border color around the input field in the add friends page if a friend request attempt was successful.
    - Added the feature when a friend request is successful to show a success message containing the username#$TR!F3_tag_id of the user the current user has successfully sent a friend request to.
    - Added the functionality to reset state holding redux state errors and clear redux error state, and reset any error or success style modifiers and messages when the user inputs any text into the input field in add friends page this function is called in submission blocker which checks if the input has text or not and enables or disables the submit button depending on if the input field has data or not and the input handler also calls the function if needed.
    - Removed the render friend ship error modal function and instead call it in a reject promise if the friend request fails.
    - Added onReject functions after the then() function of the promise dispatch functions in add friends page.
    - Upon Successful friend request the input field will clear in add friends page.
    - Changed Most Scrollbars throughout the application to use similar class names based on their style needs as most components have very similar requirements for scrollbars so adding a generic global variants for all components to use instead of component exclusive versions. Another reason for this is to dry up some code along with being allow for all 
    scrollbars to be modified if a theme is switched without have to manually restyle each scrollbar.
    - Add autofocus and input refs to delete server modal.
    - Add autofocus and input refs to create channel modal.
    - Removed Button Margin misalignment in Create Channel Modal.
    - Removed Button Margin misalignment in Delete Server Modal.
    - Removed Button Margin misalignment in Leave Server Modal.
    - Removed Button Margin misalignment in Delete Server Messages Modal.
    - Switch to Global ScrollBar Variants in Create Channel Modal.
    - Switch to Global ScrollBar Variant in Delete Server Messages Modal.
    - Switch to Global ScrollBar Variant in Delete Server Modal.
    - Switch to Global ScrollBar Variant in Leave Server Modal.
    - Switch to Global ScrollBar Variants in Active Now Section.
    - Switch to Global ScrollBar Variant in Explore Servers Side NavBar.
    - Switch to Global ScrollBar Variant in Friend Request Error Modal.
    - Switch to Global ScrollBar Variants in Main Explore Servers Page.
    - Switch to Global ScrollBar Variant in Dm Server Members List.
    - Switch to Global ScrollBar Variant in Server Members List.
    - Switch to Global ScrollBar Variant in All Friends List.
    - Switch to Global ScrollBar Variant in Online Friends List.
    - Switch to Global ScrollBar Variant in Pending Friend Request List.
    - Switch to Global ScrollBar Variant in Blocked Users List.
    - Switch to Global ScrollBar Variant in Channel Drop Down Modal.
    - Switch to Global ScrollBar Variants in Channel Settings Modal.
    - Switch to Global ScrollBar Variants in Server Settings Modal.
    - Switch to Global ScrollBar Variants in Invite to Server Modal.
    - Switch to Global ScrollBar Variants in Server Chat Room Message Area.
    - Switch to Global ScrollBar Variants in Server Chat Room Text Area Input.
    - Switch to Global ScrollBar Variants in DmServer Chat Room Message Area.
    - Switch to Global ScrollBar Variants in DmServer Chat Room Text Area Input.
    - Restyled Root Render Error State Page.
    - Added Seperate Animation state for Root Error Render Page.
    - In DmServer Chat rooms added refs to chat input field.
    - In DmServer Chat rooms fixed place Holder bug where swapping to other dmServers cause the name of the previous room. This is caused from the place holder variable being a this variable and its value is created and assigned from a function that is passed to another component and called there. This was fixed by moving said placeholder text as a state variable and created a function to be called when the component is mounted to then run the needed algorithm to generate the placeholder in the input field. In addition when every a room is switched the function is called again to obtain a new placeholder preventing the old one from appearing.
    - Added the ability for placeholders to use the DmServer name if it exists instead of autogenerating a temporary name as a place holder based on the chats members.
    - When Switching dmServers added the ref on the chat message input box to refocus.
    - In Server Chat rooms added refs to chat input field.
    - When Switching Servers added the ref on the chat message input box to refocus.
    - When Switching channel with a Servers added the ref on the chat message input box to refocus.
    - Added extra Components to invite Server Modal including temporarly replacing redux dispatching to friends state and use a raw fetch to simulate similar loading to that of discords.
    -Added a Rescue to invite to server modal which renders the spining cubes animation while the modal resyncs its props.

## Backend Changes

- Changed the routes to the new Routing system on the frontend to redirect banned users from both dmservers
  and servers to the banned user loading screen and send them page to the home dashboard.

- Changed jbuilder return for servers general channel from general_channel_id servers.channels.first.id
  to servers.channels.order(:id).first.id to prevent reading the wrong channel when the general channel updates and switches to the end of the table when read from disk level.

- Changed jbuilder return for the first message of the general channel for servers changing from messages
  servers.channels.first.messages.includes(:user)
  to servers.channels.order(:id).first.messages.includes(:user)

- Changed return action cable text colors to easily identify which redux call is being taken place.

- Integrated Colorize gem for CoRE cable action cable calls to easily identify them in the backend rails server console.

- Reworked block user function from creating only a single record to now once again creating a pair of records to indicate a blocked relationship
between two users. including being able to deciever if there is a block relationship between two users being -1 for a user that has been blocked by current user and -2 to indicate that current user was the one that issued a block. if the user wants to block current_user it will switch to -1.

- Created a new function to unblock a user if two users blocked each other the status of the person that intitiated the unblock request will swap from -1 to -2 since the other user has blocked them if that user did not block them then both records are deleted and the friendship on the frontend changes their status to zero indicated no relationship between the two users.

- Added new rail routes for unblock user functionality

- Added new return data in Jbuilder file for index.json.jbuilder for friendships "blocked_by" which are users that have blocked the current_user.

- Added new has_many relationship called blocked_by in user models to indicate friendship relations where the current user has been blocked by some other user denoted by a newly added status number of -2.

- Added a status of -2 to indicate that the friendship status between users is the current_user has been blocked by some user. Observe the friendship record example below:
  
     #<Friendship:0x0000.......20 id: 10000, user_id: 11, friend_id: 10, friend_request_status: -1>,
     #<Friendship:0x0000.......21 id: 10001, user_id: 10, friend_id: 11, friend_request_status: -2>
  Here these records indicate that user of id: 11 has blocked user of id: 10 hence the status of -1. For user of id: 10 the -2 indicates that user id:11 was the user that blocked them. however this is hidden from user id:10. If User id:10 decides to block user id: 11 it will swap to -1.

- With new block relationships adjusted seeds for blocked users.
- Discord does allow channels with name of more than 100 characters long but instead of erroring out it splices the name after the 100 character and creates it. So changes to the backend to prevent channel if the name fails to fall in a specified range between 1 and 100 characters.
- Added a return of friend info through friend show  jbuilder.json file to potentially allow the friendship state to fully sync with the user state when
when friend actions are executed. (Friend actions orginate in the user state as the natural way to meet new users is through this state and actions such as creating a friendship is using data from the user state to create the friendship while the friendship state is used to refer to all friends/ relationships with statuses of -1, 1,2,3) of the current user in certain modals as it is not volatile like the user state. The user state changes constantly as switching between servers, and dmServers the user state becomes filled with users that are members of those entities which would force users who are not friends with the current user to appear in lists/modals that use the users friends. the friend state renders all relations and filters out what is needed and shows the type of friendships without being modified by the users state. However many actions involving friendships do not get modded into the friendship reducer as the data returned by friend actions only partially contains data to complete further actions involving friendships the extra needed data comes from the user state so returning an extra portion of data from the friendships view file can allow friendship state to be used more in the app than just a hard filtered state. The potiental of this is yet to be tested and fully intergrated.

### Front-End Changes

- Changed which state for current user information to be extracted from for certain components.
- Due to problems with blocked users added a new frontend friendship api util function to handle unblocking of users.
- Added new friend redux action REMOVE_BLOCKED_USER = (UNBLOCK_USER) for unblocking users.
- Added new removeBlockedUser dispatch function for unblocking users.
- Added the new friendship api util function for unblocking of users and implemented it.
- Added to user reducer to handle the REMOVE_BLOCKED_USER = (UNBLOCK_USER) friendship redux action call changing the friendship status of blocked users  to -2 if both users have blocked each other or 0 if only the curr_user has blocked the user.
- Removed previous dispatch function for removing block on a blocked user which used deleteFriendship dispatch this is changed to a dispatch calling the unblock dispatch function.
- Added Custom Built in Hook components for detecting when a component is mounted or not, this is used to delay to triggering of css animation effects of some elements upon initial rendering.

### Other Changes

- Completed deprecation of user options modal which was already deprecated except its container was not, now both user options modal and user options modal container are deprecated these both where replaced a while ago by the far superior ServerUserOptionsModal.

- Completed deprecation of the sessions form for login and sig up to a newer version that mimics discords recent version including the animation that plays when regenerating a qr code. Also enables scalability and now offers back the ability to login as demo user 2 and well as demo user 1. The old sessions form and styling although simple and can morph in to either log in of sign up upon url change the new version aims its best to keep that same simplicity. The old sessions forms and styles have moved to the deprecated folder.

- Added Link to Patch notes (this file) in the README.MD file

- Started to swap to scss features to replace commonly used styles.
- Add new Selector Function to extract directly from the friendship state and get a users friends based on a friendships status indicated via a number between -2 - +3, previously a selector of similar functionality was used but extracted from the users state instead.
- Added JsDoc To Friendship Selectors.

---

New Patch - 10/3/2022 - 10/7/2022
    - ADDED WEBCALLS NOW WORK USING WEBRTC AND ACTION CABLE ICE CANIDATE POOL IS RESTRICTED TO
    1 ON 1 CALLS ONLY FOR NOW
    - FRIENDS ACTIVITY PAGE IS NOW INTEGRATED
    - FRIENDS ACTIVITY PAGE WILL BE PUSHED TO HEROKU LIVE SOON, WEBRTC WEBCALLS ARE LIVE NOW ON HEROKU

    - Friends Activity - styling is no longer using the same syntax belonging to the friends item list due to a 
     an unexpected result where the search bar would target not only the friends list but also the activty list it self breaking the
     activity list ui styling - issue was due to search bar query targeting friend-lists since activity list used the same starting query
     for its style for the members list the search detects it to duping the style and renaming it removes the activity list from being targeted.


    - on friend list online and all tabs the context menu for more options had an issue where the lower 
    members on the list where the friends list contains at least 9 members member 8 and 9 the context menu is out of bounds and its
    options cant be selected - > this is fixed using a similar divison of the currenttarget boundingclientrect of the top style
    used on the user upc found on the memberlist sections of dmservers and servers

    - search bar for friends nav bar mag icon to x- icon transformations work, spell check disabled, autofocus enabled
    - search bar in explore servers search icon transforms to x icon properly, spell check disabled
    - spell check disabled for friend search and server search


    - added find converstaion button search, search up your friends, dms, dms groups, servers and their channels and get there quicker
    if you have alot of servers and friends added or just forgot where a specific channel is located in which server. located above the dm nav bar

    - optimized dmmessages to not need to process a ton of data on the backend before coming to the fronent -> due to the absurd sensitivity of
     dmservers access dm members can crash the app to ensure a better work around is to pass user data typically contained in user state back to the frontend i.e. user1 sends dmmessage -> sent to backend saved to db then parsed via jbuilder before broadcasted back to dmserver when parse 
     , author info of message includes a small state of info about the author of the message which includes {username, id, color_tag , strife_id and photo} to the props necessary to render the messages this causes alot of querying before the messgae comes back using the server messages  approach
     , by referring to the members of said server and match the author id of the message to a server member allows to use the member state of the server(already provided data) to help render the message without sending a small state with that message and induce uncessary querying with that message this approach is now used with dmmessages if a user is removed the generic bot pic will replace there pfp and the attached message user name will be provided.
    - fixed deleting and editing of dmMessages to go along with this new change

    - the result of this change has speed up load times signifcantly on refresh on homepage, signing in, moving between dmservers, and 
    participating in dmservers, messageing in dmservers, removal and adding of members editing and deleting message the rerendering of the dmserver 
    due to these actions and others that invoke it while in converstation the speed of the rerender is speed up massivley due to the 
    massively reduce data beign returned with each dmmessage and using already available resources to build the dmmessage to render instead of bringing 
    that data with the message which may already been obtained before, this reduces the amount of querying trying to access this data and return it to build the render where now it is returning props necessary to build the message body will pfp and attached props to the message are built by the same data that is already avaliable from redux store
                -old process -> user1 sends dmMessage -> {body:"hello", sender_id: user1.id, dmServerId : 2 ... etc}
                -> processed and saved to db then parsed by appcontroller template function -> with jbuilder -> which returns
                the data that was sent with this message along with the name of the author, AND author props containing name, color_tag, userPFP,
                strife_tag, which takes a large amount of query time due to userPFP runs a check to see if a pfp exists of not and when receiving 
                back said message the dmserver is fetched again to ensure this message is contained in props incase of websocket closing and loosing this message. refetching the server means all the messages along with those author props with it will be need to be queried for again if they have changed leading to alot of time wasted
                - new process -> uses the technique used in Servers for its messages send the data and it is processed the same way but it does not
                return the author props therefore getting rid of the massive query sequences allowing near instant loading. the userpfp and other author props are obtained from both the dmMemeber state and user state of the store which is refreshing when receiving a dmmessage and the 
                fetch for the dmserver is called again, but this time it does not query as long as the old method it is near instant. the old approach is used due to the sensitivity of dmServers where touching any of its props invokes a crash. 

     - added click to copy serverlink from the more button popup when clicking on a server in the explore public servers page to users 
      navigator clipboard to allow easy copy and pasting of a server link for sending to other users or joining the server from the join server slide
      in create a server modal.

    - Future change - > app will be updated to use more recent version of ruby and rails and will be moving to render.com


    //CORE API (Arrival TBA currently in alpha state)
    -when inviting someone to a dmServer if said member that was invited is online and using the app they will receive a dispatch to obtain the 
    new dmserver  live without refreshing or force updating by switching between certain sections of the app
    - removing a member from a dmServer when they are not in said dmServer does not a remove it for that user now it removes it live for that user
    if they are online. this is also added insurance to ensure a boot if they are in the server to begin with. 
    -when inviting someone to a Server if said member that was invited is online and using the app they will receive a dispatch to obtain the 
    new server  live without refreshing or force updating by switching between certain sections of the app
    - removing a member from a Server when they are not in said dmServer does not a remove it for that user now it removes it live for that user
    if they are online. this is also added insurance to ensure a boot if they are in the server to begin with. 

Incoming Patches ~ 10/10/2022 - TBA (currently in progress)
    -dm server messages will be more optimized to align with the handling of messages in normal servers
    - server and dmserver messages - author names appear live on name change
    - unless they are removed from server
    -Friends activty page pushed to heroku
    - Testing full async features
    - multi cable restesting and intergration
    - MASS INTEGRATION : core cable api - (arrival date TBA currently in alpha state)
            -enables live server and dmserver fetching with out switch to home and another server to
             receive new servers
            - logs socket life time and algos to keep socket alive
            - allows for live updates to visually changes of the user  - name change , pfp changes,
            tracking the user and determine if there location is a server and update said server accordingly
    - MASS INTEGRATION -> SAVEMYSTATE API ->
        -using lodash throttle subscribe to store to local storage, merge with preloaded state, middlewares
    - fixing bugs and missing features that dont appear on live resync in dmservers or servers
    - channel memberships will have a true use and automatically be created for each member in a server
    -live updates to user visual components when in a dm/server via core
    - new loading page for redirects to home from a deleted server
    - invites members to a dmserver or server will receive a live refresh to receive said server no more need to switch between home and another server to get the new server
    - creating a dmserver via create dm modal will live feed members to a refresh and receive the new server
    -MASS INTEGRATION -> reconverting server, and its channels to listen in on 2 cables again
     using core api to ensure active connections, transfer server responsiblities to the server cable
     and allow channel cable to listen in on messages only -> this intergration was redacted and changed back serveral times do to complexity, bugs,connection sockets closing to early, and time restraints .
    -Voice calls
    - MASS INTEGRATION unlock voice channels for servers and
    - intergrate a system for calls and video calls.
    -entering a voice channel disables members list going to a text channel enables it
    - MASS INTEGRATION Channel categories
    - mass intergration user banner - > multi file attachments, server -> banner -> multifil attachments
    - server and channel descriptions,
    -reply chaining for dmMessages and server messages
    - Server Redesign -> server genre -> descriptions server theme creation -> will be moved to the backend  
    -message filter for both dmserver and servers.
