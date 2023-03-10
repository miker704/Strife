# PATCH NOTES

## PATCH NOTES v3.00 - 2/24/2023 - 3/3/2023

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

#### User Security

- Fixed an issue when user changes their password and the password is not of appropiate length
  - Issue is due to password length validation failing to check when updating it
  - Fixed by returning the warning that a users password must by of appropiate length when.
    changing their password, it must fall into the length required when first creating their account.

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

### Other Changes

- Changed which state for current user information to be extracted from for certain components.

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
