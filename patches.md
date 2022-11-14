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

    - the result of this chnage has speed up load times signifcantly on refresh on homepage, signing in, moving between dmservers, and 
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


    //CORE API
    -when inviting someone to a dmServer if said member that was invited is online and using the app they will receive a dispatch to obtain the 
    new dmserver  live without refreshing or force updating by switching between certain sections of the app
    - removing a member from a dmServer when they are not in said dmServer does not a remove it for that user now it removes it live for that user
    if they are online. this is also added insurance to ensure a boot if they are in the server to begin with. 
    -when inviting someone to a Server if said member that was invited is online and using the app they will receive a dispatch to obtain the 
    new server  live without refreshing or force updating by switching between certain sections of the app
    - removing a member from a Server when they are not in said dmServer does not a remove it for that user now it removes it live for that user
    if they are online. this is also added insurance to ensure a boot if they are in the server to begin with. 


Incoming Patches ~ 10/10/2022
    -dm server messages will be more optimized to align with the handling of messages in normal servers
    - server and dmserver messages - author names appear live on name change
    - unless they are removed from server 
    -Friends activty page pushed to heroku
    - Testing full async features 
    - multi cable restesting and intergration
    - MASS INTEGRATION : core cable api 
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
    - intergrate a system for calls and video calls 
    -entering a voice channel disables members list going to a text channel enables it
    - MASS INTEGRATION Channel categories
    - mass intergration user banner - > multi file attachments, server -> banner -> multifil attachments
    - server and channel descriptions,
    -reply chaining for dmMessages and server messages
    - Server Redesign -> server genre -> descriptions server theme creation -> will be moved to the backend  
    -message filter for both dmserver and servers