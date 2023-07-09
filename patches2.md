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

## PATCH NOTES v4.00 - 5/1/2023 - OnGoing

## Major Changes and Fixes

    - Added the use of Material UI libraries for easier and more stable components for inputs, forms, radio buttons, etc.
    - Added Alias for MUI libraries in webpack "@mui/material/" is mapped to the folder "@mui/material/modern" which contains all MUIs components for modern browser versions instead of grabbing the legacy version of the components for the normal unmapped path "@mui/material/".
    - Addressed issue with speed of application and rendering of components such as the channel settings modal which uses MUI components, importing and using one component even something small such as a button or even a form label from the MUI library causes a rendering slow down. After some investigations it was determined that the rendering speed for channel settings modal went from 0.5-3ms to around 3 - 9 seconds. Optimizations included removal of the majority of MUI components that used the sx={{}} style prop containing more than 5 styles as it was determined that sx prop has a performance overhead at times although not noticeable in most cases, it also helps reduce code clutter and increase readability, now components with a large amount of styles are moved into a styled component which at first before using the sx prop , worked fine in designing components but for some odd reason would not allow proper functionality of the component, problem was that the component was wrapped in the functional component that was calling it in the render. so the fix was to seperate the styled component from the functional component and call it inside the functional component and the styled component works correctly. these have given slight increases to performance. but the slow down was still noticeable, production build of the app removed the performace overhead and the app works at its normal speeds but in development components being called to render in that contain mui components are extremely slow to appear, after extensive investigation the cause was mui styling engine which was the emotion style engine, upon calling to render some component containing a mui component the header tags would generate a large amount of style tags containing the styles of the mui components and the customized styles which override the default mui styles.  Inorder to speed up rendering the styling engine for mui has been switched from emotion to "@mui/styled-engine-sc" which also allows better rendering of styled component types and eliminates the generation of style tags in the header tags of the application when a mui component loads in. this was address by adding  "@mui/styled-engine": "@mui/styled-engine-sc" as alias in the webpack config file.

## C0R3 @P! glitches and bugs addressed and added changes

### Glitches and bugs Addressed

    - Passed -1 as channel type to allow the subtext in create channel modal to not appear when opening it from the channel drop down container.

#### User Security && Application Security

- A potential risky html/jsx code has been addressed in Channel Drop Down modal. Prior the modal would return avaliable options that can be selected based on the level of authorization the user has either they are a server member or the server owner it will render options that they have access to. However the modal returns Un-Authorized options as invisible, to the U.I. but it is present in the html which can be exploited and can possibly crash the app if enable. The reason for this is the modal returns the options while deciding whether or not to hide them or not. This has been addressed by having the decisons for those options decided before the returning jsx is returned.

- Fixed certain forms and buttons in delete channel modal from being XSS attacked or fall victim to form hijacking.
- Added Protection features to prevent XSS attacks and form hi-jacking on delete server messages of other users.

### UI and Cosmetic Fixes and Changes

    - UI Fixes (Cosmetic):
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
    - If user has no friends or has no friends to invite to a server (all friends of the user are joined in the server) to render a smaller version of the invite to server modal that shows a copy server link id and share it.
    - Added random chance for the server owner to see the add image to server invite link invite to server modal.
    - Refined the search algorithm for search the available friends instead of using is hidden a filter is used instead.
    - Refining live search allows to conditionally render no results found when search return no results without the need for is-hidden props.
    - Added DmServers To invite to Server Modal where a users dms will be parsed as a selectable option to invite which invites all the members of that chat room into said server, if a user is already in the server but is in said dm they will be filtered out from being invited. Inviting any users via a dmServer if those users are available as individual options to invite by themselves or if they are invitable from another dmserver choice inviting them from a dmServer will remove their options for a stand alone invite, and filter them out from being sent an invite for any dmServer choices they may be in.
    - Changed the rendering of messages when adding a member to a server only the first channel of the server will give a message about the invited person.
    -Prevent the inviting of blocked by and blocked users when selecting a dmServer as the invite option in invite to server modal.
    - Added new Redux action to handle inviting multiple members (from a dmServer) at once in invite to server modal.
    - Added new ajax api call to handle inviting multiple members (from a dmServer) at once in invite to server modal.
    - Implemented new rescue tatics for invite to server modal, including spinning cube animations, null screen overlay and if a rescue fails a user can just click on the animation or over lay to leave the modal. also if a null screen is activated then the modal will close itself after some time ahas passed.
    - Added proper triggers and conditions to render the correct modal the first time instead of loading one and switching to the other when a condtion is made upon initial render for invite to server modal.
    - To Prevent redux store from changing every thing in the background behind invite to server modal most dispatch calls are replaced with the raw ajax call without a dispatch or fetch requests.
    - Combined both dmServers and friends together inorder for them to be searchable and auto refilter themselves when users are added in dmServers.
    - Switched To SCSS Vars for user nav bar container.
    - Restyled user nav bar container.
    - Add div scroller on User nav bar where status is displayed first and on hover the username and strife tag.
    - Add on Mouse enter and Mouse leave event function listeners to activate a forced hover state for the div scroller in UserNav Bar.
    - Move Old Styles for user nav bar to deprecated folder.
    - Move Old function component version for user nav bar to deprecated folder.
    - Replaced previous method of rendering user avatars with svg masking in user nav bar.
    - Added online status badges to user avatars in user nav bar using svg masking.
    - Switched To SCSS Vars for DmServer nav bar container.
    - Restyled DmServer nav bar container.
    - Move Old Styles for DmServer nav bar to deprecated folder.
    - Replaced Class Based component version of DmServer Nav Bar with a Functional Component.
    - Move Old Class based component version for DmServer nav bar to deprecated folder.
    - Restyled Friend nav bar button in DmServer Nav Bar.
    - Moved old Friend page Styles to deprecated folder.
    - Switched to SCSS Vars for Friend pages.
    - Restyled Nitro nav bar button in DmServer Nav Bar.
    - Switched to SCSS Vars for Nitro nav bar.
    - Moved old styles for Nitro nav bar to deprecated folder.
    - Add random chance for the nitro nav button to switch to a different color.
    - Replaced previous method of rendering user avatars with svg masking in DmServer nav bar.
    - Removed online status bubbles and function to render it on user avatars in DmServer nav bar due to svg rendering does it automatically.
    - Replaced previous method of rendering dmServer icon avatars with svg masking in DmServer nav bar.
    - Replaced previous svg image use for dmServer avatars with a newer on in dmServer nav bar.
    - Add global scroll bars style sheet.
    - Add scroll bar backups for reference to old version of previopusly used styled bars for components across the app.
    - Add Nav into DmServer Nav Bar.
    - Add Section into User Nav Bar.
    - Switched to SCSS vars for Create Dm Modal, Create Dm Modal Homebar, and Invite to Dm Modal.
    - Restyled Create Dm Modal, Create Dm Modal Homebar, and Invite to Dm Modal.
    - Remodeled Create Dm Modal, Create Dm Modal Homebar, and Invite to Dm Modal.
    - Add states for switching to different modals for create dm modal variants if one has no friends, no friends to add and is not friends with the current on to one dm member.
    - Moved from in component modal call to modal manager for all create dm modal variants.
    - Switched to props params for all create dm modal variants instead of using deconstructed params.
    - Moved old Channel nav bar to Deprecated folder.
    - Removed unused server chat room file.
    - Moved old second Channel settings to Deprecated folder.
    - Moved old create channel modal to deprecated folder.
    - Moved old nitro style file to deprecated folder.
    - Deleted Old alternative that was unsed move a copy of it to deprecated Channel nav bar file.
    - Moved old a copy create channel modal to deprecated folder.
    - Created and moved old user nav style file to deprecated folder.
    - Created and moved old friends error request modal to deprecated.
    - Created and moved old functional user nav bar to deprecated.
    - Created and moved old second deprecated version of server settings modal to deprecated.
    - Created and moved old  deprecated version of server members list to deprecated.
    - Created and moved old  deprecated version of invite to dm modal to deprecated.
    - Created and moved old second deprecated version of friends homepage to deprecated.
    - Created and moved old deprecated version of DmServer Nav Bar to deprecated.
    - Switched from class based to functional based component for DmServer Nav Bar.
    - Created and moved old deprecated version of DmServer members list to deprecated.
    - Created and moved old deprecated version of DmServer header nav bar to deprecated.
    - Created and moved old second deprecated version of DmServer header nav bar to deprecated.
    - Moved old created dm modal style file to deprecated folder.
    - Created and moved old deprecated version of create dm modal to deprecated.
    - Created and moved old deprecated version of create dm modal home bar version to deprecated.
    - Created and moved second deprecated version of create dm modal home bar version to deprecated.
    - Created and moved deprecated version of delete dm message modal to deprecated.
    - Restructured error loading screen aka root.html.erb file.
    - Updated Bundle License.
    - Replaced All Current Alt tags for images with a null prop to work well with negative text indentation.
    - Add a scroll ref to scroll to the selected dm server when clicked on.
    - Modified Selector Functions that sort friend state out based on statuses to sort objects more precisely by lowercasing user names to sort more accurately as js .sort() method places uppercase letters before lowercase.
    - For Create DmModals added the ability to use the backspace button to deselect the last selected user that was click to be potientially invited to the dm server if the search text is blank hitting back space removes the last seleceted friend if any was selected.
    - Moved Old Version of select dm members for video calling modal to deprecated.
    - Remodeled select dm members for video calling modal.
    - Remodeled select dm members call modal top be used for both either video, or just voice calling.
    - Reconfigured the following modals Create DmServer, Create DmServer HomeBar Version, InviteToDmServer Modal and Select Dm Members for video ad voice calling to be deployed via the modal manager instead of being called in the contained component where it it can be launched from, the reason for this is to prepare for react version 18 which stops modals from being deployed with in the same component that may overflow be rendered invisible.
    - These Modals will be deployed in a sub modal container instead later on.
    - Added a no friends to add modal when in dm servers clicking the dm server side bar create dm modal button or the invite/create dm modal button in  dm header bar, or homepage header bar in a that pop up if a user has no friends or does not have any friends at all to invite (including not being friends with anyone in the dmserver) which will warp to the homepage and enable the add friends tab if they are in a dm server already.
    - Added another modal that is displayed in a one to one dmServer when clicking on the dmserver header bar and clicking add dm members button if the user is not friends with the other user in the dm chat they are not allowed to invite anyone till they become friends there is a button to submit a friend request to that user once the user is added it will check if the user has any friends to invite or if they do display the no friends to add modal or a variant of the invite to dmServer modal.
    -Remodeled select dm members for video calling modal.
    -Remodeled select dm members for voice calling modal.
    - Add a switch props for select dm members for calling modal depending on which button pressed will switch styles and specific call modals based on whether video or voice call is pressed.
    - Added voice call option when clicking the phone icon in dmServers to select members to invite to a call, this is disabled for now.
    - Add in Select Dm Members to call to have the form handle which cally type it is and deploy the appropiate call modal, this is switched back to the previous on submit function for now while voice call modal is worked on.
    - Added Select Dm Members to invite to call be deployed from within the dm serve app bar to just be called to be opened from their and be spawned from the modal manager.
    - Move old Select Dm Members to Call modal to deprecated.
    - Move old Select Dm Members to Call modal container to deprecated.
    - Swapped to props param instead of deconstructured prop params for Select Dm Members to Call modal;
    - Passed useparams to Select Dm Members to Call modal to get the current dm server;
    - Swapped Friends homepage from a class based component to a function component in order to use a call back to use location from certain modals.
    - Moved Class Based component of friends homepage container to deprecated folder.
    - Created Styles sheet for delete friend confirmation modal.
    - Created Delete friend confirmation modal which will pop up when proceeding to delete a friend.
    - Created Delete friend confirmation modal container.
    - Removed Unused user search modal that has never been used to deprecated folder as a reference file.
    - Switched to SCSS vars temporaly for Create Server Modal.
    - Create Server Modal uses discords light theme so preparations have been made to switch to starting the theme switching feature earlier. started the conversion fo scss vars and mapping them to the light theme equivalent.
    - Restyled create server modal.
    - Remodeled and reworked create server modal.
    - Moved old styles of create server modal to deprecated.
    - Moved old class based component of create server modal to deprecated.
    - Switched to functional based component for create server modal.
    - Swapped Create Server function using a template option in create server modal from the front end to the backend.
    - Switched to SCSS Vars for styles for Channel Nav Bar.
    - Restyled Channel Nav Bar.
    - Remodeled Channel Nav Bar.
    - Moved Old Channel Nav Bar Styles to deprecated folder.
    - Moved Old Channel Nav Bar to deprecated folder.
    - Modified SCSS/CSS reset sheet to match more closely to discords reset of html styling values.
    - Replaced the backend controller function for create servers with a combination of the frontend server creation from the create server modal that uses a template to create channels for server setup. The backend controller takes the template type and creates the pre made channels on the backend instead of the frontend allowing for much more faster creation and reducing unecessary redux calls from numberous channel creations and fetches when creating a server with a template with multiple channels.
    - Made a create channel dispatch function that can be used to in combination of create server modal for creating multiple channels then injecting those channels in that server state. this is made but replaced with a direct method but kept as a backup as an alternative.
    - Made a channel injection api function.
    - Made a channel injection redux dispatch function.
    - Made a channel injection redux dispatch variable which is received by server reducer to inject the channels into server redux state.
    - Made a backend function to create channels based on server template in channel controller.
    - Moved a backup alternative create dm modal that uses fetch instead of redux dispatch to deprecated folder.
    - Replaced the filter search that uses the is-hidden attribute to hide non matching results and show the no results found in Online Friends List Page.
    - Moved Online Friends List Page that uses the old search method to deprecated folder.
    - Removed the Blue X to clear search from search inputs across the entire app via reset sheet.
    - Added input refocus when clicking the gray X to reset the search when in live search in online friends page.
    - Replaced the filter search that uses the is-hidden attribute to hide non matching results and show the no results found in All Friends List Page.
    - Moved All Friends List Page that uses the old search method to deprecated folder.
    - Added input refocus when clicking the gray X to reset the search when in live search in All friends page.
    - Added input refocus when clicking the gray X to reset the search when in live search in Block Users page.
    - Moved Blocked Users Page that uses the old search method to deprecated folder.
    - Replaced the filter search that uses the is-hidden attribute to hide non matching results and show the no results found in Blocked Users Page.
    - Added input refocus when clicking the gray X to reset the search when in live search in Pending requests page.
    - Replaced the filter search that uses the is-hidden attribute to hide non matching results and show the no results found in Pending requests Page.
    - Moved Pending Requests Page that uses the old search method to deprecated folder.
    - Removed Blocked Users - # count to Blocked - # count in Blocked users page.
    - Removed Pending Friend Requests - # count to Pending - # count in Pending Friend Requests page.
    - Adjust the subtext sizing of each list element in blocked users page.
    - Adjust the subtext sizing of each list element in Pending Friend Requests page.
    - Added Pulsing ellipis animation to create server button in create server modal.
    - Added Pulsing ellipis animation to join server button in create server modal.
    - Created Util Function to return the mask url of online user badge.
    - Created Util Function to return the badge color of online user badge.
    - Switched to SCSS Vars for User Settings Modal.
    - Restyled User Settings Modal.
    - Remodeled User Settings Modal.
    - Backed up old styles for user settings modal to deprecated folder.
    - Backed up old version of user settings modal to deprecated folder.
    - Replaced Class based component of user settings modal with a function component version.
    - Designed fake buttons/divs for user settings modal to prevent XSS attacks.
    - Moved Deprecated Class based component version of all submodals belonging to user settings to deprecated folder.
    - Moved Deprecated Class based component version of Edit User Avatar modal to deprecated.
    - Moved Deprecated Class based component version of Edit User Banner modal to deprecated.
    - Moved Deprecated Class based component version of Edit User Password modal to deprecated.
    - Moved Deprecated Class based component version of Edit User Username modal to deprecated.
    - Moved Deprecated Class based component version of Edit User Email modal to deprecated.
    - Moved Deprecated Class based component version of Edit User Phone Number modal to deprecated.
    - Moved Deprecated Class based component version of Disable User Account modal to deprecated.
    - Moved Deprecated Class based component version of Delete User Account modal to deprecated.
    - Moved Deprecated Class based component version of  Delete User Phone number modal to deprecated.
    - Moved Deprecated Class based component version of Search User modal to deprecated.
    - Moved Deprecated Class based component version of User owns servers modal to deprecated.
    - Fixed a backend issue related to returing errors when using the remove phone number modal.
    - Added Connect Container for User Owns Servers Warning Modal.
    - Added container for edit user display name modal.
    - Created edit user display name modal for editing the user display name when that feature is fully added.
    - Created a Logout Modal to confirm if a user wants to logout this is to prevent accidently clicking logout and signing out unintentionally.
    - Created connect container for logout modal.
    - Moved Old Class Based Component Version of the Loading Screen Container to Deprecated Folder.
    - Moved Old Class Based Component Version of the Updating Loading Screen Container to Deprecated Folder.
    - Moved Old Class Based Component Version of the Intrusion Loading Screen Container to Deprecated Folder.
    - Moved Old Class Based Component Version of the Warp Loading Screen Container to Deprecated Folder.
    - Replaced Class Based Component Version of the Loading Screen Container with a Functional Component.
    - Replaced Class Based Component Version of the Warp Loading Screen Container with a Functional Component.
    - Replaced Class Based Component Version of the Intrusion Loading Screen Container with a Functional Component.
    - Replaced Class Based Component Version of the Updating Loading Screen Container with a Functional Component.
    - Created Copy Strife_id tag pop up modal.
    - Create Connect Container for Copy Strife_id tag pop up modal.
    - ReStyled User Settings Modal.
    - Re-modeled User Settings Modal.
    - Switched From Class Based Component for User Settings to a Function Component.
    - ReStyled Edit User Avatar modal.
    - Re-Modeled Edit User Avatar modal.
    - Edit User Avatar modal is now more inline to the actual discords version.
    - Switched From Class Based Component for Edit User Avatar to a Function Component.
    - ReStyled Edit User Banner modal.
    - Re-Modeled Edit User Banner modal.
    - Edit User Banner modal is now more inline to the actual discords version.
    - Switched From Class Based Component for Edit User Banner modal to a Function Component.
    - ReStyled Edit User Password modal.
    - Re-Modeled Edit User Password modal.
    - Switched From Class Based Component for Edit User Password modal to a Function Component.
    - ReStyled Edit User Email modal.
    - Re-Modeled Edit User Email modal.
    - Added Email Image to Edit User Email Modal.
    - Add Edit user Email Image.
    - Switched From Class Based Component for Edit User Email modal to a Function Component.
    - ReStyled Edit User Phone Number modal.
    - Re-Modeled Edit User Phone Number modal.
    - Added Phone Image to edit user Phone number modal.
    - Added Add Phone Number Svg file.
    - Switched From Class Based Component for Edit User Phone Number modal to a Function Component.
    - Re-Modeled Edit User Username modal.
    - ReStyled Edit User Username modal.
    - Switched From Class Based Component for Edit User Username modal to a Function Component.
    - Re-Modeled Disable User Account modal.
    - ReStyled Disable User Account modal.
    - Switched From Class Based Component for Disable User Account modal to a Function Component.
    - Re-Modeled Delete User Account modal.
    - Re-Modeled Delete User Account modal.
    - Switched From Class Based Component for Delete User Account modal to a Function Component.
    - Renamed UserProfileContainer to UserSettingsContainer in  modal and sub modal manager.
    - Renamed openModal choice "userProfile" to "userSettings" in channel drop down menu, user nav bar,
    and in modal, sub modal manager.
    - Renamed User Profile folder to User Settings.
    - Renamed User Profile container to User Settings Container.
    - Renamed User Profile modal to User settings instead.
    - Update System version number on all major modals in user, server, and channel settings.
    - Add App Puller animation to user settings in modal manager.
    - Added App Puller animation to user settings when exiting with click x button or hitting escape.
    - Add tik tok icon in the socials section in user settings.
    - Fixed rendering of errors on all user sub modals to allow only the errored input field to turn read and give the error message instead of all the fields.
    - Created Edit Display name modal.
    - Created Edit Display name container.
     - Added strife id image badge to user settings similar to discords badge that was added to members that joined prior to the full deprecation of the discriminator tag system in favor for a unique username system, $TR!F3 will continue to use the tag system along with the new user name system as well.

## Backend Changes

- Discord does allow channels with name of more than 100 characters long but instead of erroring out it splices the name after the 100 character and creates it. So changes to the backend to prevent channel if the name fails to fall in a specified range between 1 and 100 characters.
- Added a return of friend info through friend show  jbuilder.json file to potentially allow the friendship state to fully sync with the user state when
when friend actions are executed. (Friend actions orginate in the user state as the natural way to meet new users is through this state and actions such as creating a friendship is using data from the user state to create the friendship while the friendship state is used to refer to all friends/ relationships with statuses of -1, 1,2,3) of the current user in certain modals as it is not volatile like the user state. The user state changes constantly as switching between servers, and dmServers the user state becomes filled with users that are members of those entities which would force users who are not friends with the current user to appear in lists/modals that use the users friends. the friend state renders all relations and filters out what is needed and shows the type of friendships without being modified by the users state. However many actions involving friendships do not get modded into the friendship reducer as the data returned by friend actions only partially contains data to complete further actions involving friendships the extra needed data comes from the user state so returning an extra portion of data from the friendships view file can allow friendship state to be used more in the app than just a hard filtered state. The potiental of this is yet to be tested and fully intergrated.
- Changed the rendering of messages when adding a member to a server only the first channel of the server will give a message about the invited person.
- Added a new function that passes in an array of member ids to grant server and channel memberships when inviting members of a group/dm server.
- Add another backend strife core cable action to parse members that where invited via a dm server in invite to server modal.
- Added new route to  call the new function to handle inviting multiple members (from a dmServer) at once from the invite to server modal in the server_memberships controller.

### Front-End Changes

- Added Custom Built in Hook components for detecting when a component is mounted or not, this is used to delay to triggering of css animation effects of some elements upon initial rendering.

### Other Changes

- Added Link to Patch notes (this file) in the README.MD file

- Started to swap to scss features to replace commonly used styles.
- Add new Selector Function to extract directly from the friendship state and get a users friends based on a friendships status indicated via a number between -2 - +3, previously a selector of similar functionality was used but extracted from the users state instead.
- Added JsDoc To Friendship Selectors.

---
