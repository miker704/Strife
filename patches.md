# PATCH NOTES

## Future additions and pending changes
  
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

### General/Util

- Attempts to address draggable containers
- Context menus across the application

### Video / Voice Calling

- Re-add just voice only calling to dmServers.
- work on creating a unique room for individuals to talk in a dmServer also allowing more than users to talk at once current limits is 1 to 1 conversations.
- same will be implemented for servers, Servers have voice and video call disabled as the current state of the app interferes with this working and
the need to create a private room is need to prevent unwanted members from entering a call. (note multi web call where previously possible but could not be done on command and would randomly occur when the goal was never to 3 or more callers at once also due to certain limitations of rails and deployment platforms normal one to one chat is already stressful on app performance and webRTC has given multiple warnings on the number of ice canidates it can process even though the api can handle many callers at onces)

## Known issues currently present and being worked on
  
- A fellow Contributor noted that email format verification missed a problem with escaping periods. Resulting in email addresses being incorrectly validated. (provided a fix this will be merged soon as it was provided near patch v3.0). Credit goes to cpoppe1 who graciously pointed this out and provided the proper regex format to address the vulnerbility.

## PATCH NOTES v3.00 - 2/24/2023 - OnGoing (currently pending proposed to arrive on 4/25/23 do to some testing)

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

#### User Security

- Fixed an issue when user changes their password and the password is not of appropiate length
  - Issue is due to password length validation failing to check when updating it
  - Fixed by returning the warning that a users password must by of appropiate length when.
    changing their password, it must fall into the length required when first creating their account.

- A fellow Contributor noted that email format verification missed a problem with periods (and provided a fix this will be merged soon as it was provided near patch v3.0). credit goes to user cpoope1.
- Email format verification used regex to check for proper email formatting the former version has a vulnerbility Resulting in email addresses being incorrectly validated and has been addressed by cpoope1.

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
    - Changed color for check mark on create dm modal via dm nav bar, home bar and invite to dm server modals.

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

### Front-End Changes

- Changed which state for current user information to be extracted from for certain components.
- Due to problems with blocked users added a new frontend friendship api util function to handle unblocking of users.
- Added new friend redux action REMOVE_BLOCKED_USER = (UNBLOCK_USER) for unblocking users.
- Added new removeBlockedUser dispatch function for unblocking users.
- Added the new friendship api util function for unblocking of users and implemented it.
- Added to user reducer to handle the REMOVE_BLOCKED_USER = (UNBLOCK_USER) friendship redux action call changing the friendship status of blocked users  to -2 if both users have blocked each other or 0 if only the curr_user has blocked the user.
- Removed previous dispatch function for removing block on a blocked user which used deleteFriendship dispatch this is changed to a dispatch calling the unblock dispatch function.

### Other Changes

- Completed deprecation of user options modal which was already deprecated except its container was not, now both user options modal and user options modal container are deprecated these both where replaced a while ago by the far superior ServerUserOptionsModal.

- Completed deprecation of the sessions form for login and sig up to a newer version that mimics discords recent version including the animation that plays when regenerating a qr code. Also enables scalability and now offers back the ability to login as demo user 2 and well as demo user 1. The old sessions form and styling although simple and can morph in to either log in of sign up upon url change the new version aims its best to keep that same simplicity. The old sessions forms and styles have moved to the deprecated folder.

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
