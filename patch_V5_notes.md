# PATCH NOTES V5.00

## Future additions and pending changes
  
- Preparing to update to React v18
  - Changes will require fixing setInvervals, setTimeouts, modals that popup on within components other than the ModalMangerContainer.

- Action and process flow of banning and kicking users from a server or a dmServer will be reworked and
    be optimized by the Core Cable anaylzing the location of said user deciding the best course of action on whether
    a user should re-receive all their dm/servers or just a single one. The hope is also to reduce and eliminate problem areas on re-renders such as channel messages re-rendering a previous or newly received server/channels messages for half a second before reverting back to the proper messages.
  - many more

- Will be adding the new shop page.

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
- Allow Servers to have no channels and be able to render to users when reloading the page and signing in.
- Allow the deletion of general channel,  a server with no channels leads to rendering no servers.
- Server Folder Bubble servers within servers
- Allow servers to be dragged and placed (requires placement values)
- When creating a server 2 channel catergories for a default server, voice and text are created and those channels are then inserted into those catergories.

### Channels

- Ability to give channels a description.
- Allow channels to be private, thus requiring an invite to that channel
- Allow the deletion of general channel.
- Channel Categories (channel that contains channels).
- Allow channels to be dragged and placed (requires placement values).
- Add new channel types including quick access member list, Q&A. etc
- Voice channels will have a complete different rendering scheme yielding no member list instead of a side acordian where text messages can be viewed.
- Voice channels for servers will now feature calling.

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
- Display edit, read status for messages.
- Allow dmMessages to be part of a server where the relationship is a server invite.

### General/Util

- Attempts to address draggable containers
- Context menus across the application
- Add Moz kit values to every style as FireFox is currently now unsupported as many styles glitch out in the browser. Microsoft edge, and Google Chrome are the only support browsers.

### Video / Voice Calling

- Re-add just voice only calling to dmServers.
- work on creating a unique room for individuals to talk in a dmServer also allowing more than users to talk at once current limits is 1 to 1 conversations.
- same will be implemented for servers, Servers have voice and video call disabled as the current state of the app interferes with this working and
the need to create a private room is need to prevent unwanted members from entering a call. (note multi web call where previously possible but could not be done on command and would randomly occur when the goal was never to 3 or more callers at once also due to certain limitations of rails and deployment platforms normal one to one chat is already stressful on app performance and webRTC has given multiple warnings on the number of ice canidates it can process even though the api can handle many callers at onces)

## PATCH NOTES v5.00 - 10/3/2023 - ongoing

## Major Changes and Fixes

## Backend Changes

    - Changed to signal every channel in a server to resync the server when as user in the server updates there name, avatar or banner. instead of only the channel they are in to allow updates to be sync with other users in the server but are currently in a different channel of the server.
    - Added proper cable updates to all channels of a server when a user joins using an invite link.
    - Added new returns for Server _server.json.jbuilder.
    - Removed unneeded general channel in Server : explore.json.jbuilder.
    - Removed unneeded general channel in Server : index.json.jbuilder.
    - Removed unneeded general channel in Server : compressIndex.json.jbuilder.

## Frontend Changes

    - Started Shop page components.
    -  Created Shop header nav bar.
    -  Created Shop header nav bar container.
    -  Created Shop header nav bar styles.
    -  Created Shop styles.
    -  Created Shop Container.
    -  Created Shop page.
    -  Created Shop dm Nav bar button.
    -  Added styles for Shop dm Nav bar buttons including coloring in dm nav bar styles.
    - Added shop icon to dm nav bar.
    - Added new route to enter the shop in dm nav bar.
    - Added new route for shop component in _CORE_.
    - Mounted Shop Component in _CORE_ to the route `/$/SH0P/`.
    - Added new flex container to surround child and tool bar elements in home header nav bar in both styles and component.
    - Added new flex container to surround child and tool bar elements in nitro header nav bar in both styles and component.
    - Added new flex container to surround child and tool bar elements in server header nav barin both styles and component.
    - Added new flex container to surround child and tool bar elements in dm server header nav barin both styles and component.
    - Added styles in dm server header nav bar for one to one chat rooms for aka names.
    - Added aka names for one to one chats in dm server header nav bar.
    - Added shopBannerHeaderSparkle.png img.
    - Added shopHeaderBannerBackground.png img.
    - Added shopBannerHeaderForeground.png img.
    - Added shopHeaderBannerHand.png img.
    - Added disxcore.png img.
    - Added halloweenLogo.png img.
    - Added halloweenWumpusFaded.png img.
    - Added halloweenCatGrave.png img.
    - Renamed halloweenCatGrave.png to halloweenCatGraveStatic.png.
    - Added halloweenCatGraveAnimated.png img.
    - Added shopHalloweenbg.png img.
    - Added shopbackgroundbanner.png img.
    - Added shopWumpusdisxcorelogo.png img.
    - Added techhud.png img.
    - Added renamed techhud.png img to techHudStatic.png.
    - Added techhudAnimated.png img.
    - Added shakingBlueHeadset.png img.
    - Added greenSmokeScreen.png img.
    - Added renamed greenSmokeScreen.png img to greenSmokeScreenStatic.png.
    - Added greenSmokeScreenAnimated.png img.
    - Added renamed shakingBlueHeadset.png img to shakingBlueHeadsetStatic.png.
    - Added shakingBlueHeadsetAnimated.png img.
    - Created StrifeShop Icon and added to StrifeSvgs Library.
    - Created EnableCameraPreview Icon and added to StrifeSvgs Library.
    - Updated Styles for Shop.
    - Updated Styles for core theme.
    - Updated Shop page.
    - Added halloweenGhostsAnimated.png img.
    - Added halloweenGhostsStatic.png img.
    - Added halloweenMinionsStatic.png img.
    - Added halloweenMinionsAnimated.png img.
    - Added jackolaternAnimated.png img.
    - Added jackolaternStatic.png img.
    - Added fallLeavesAnimated.png img.
    - Added fallLeavesStatic.png img.
    - Added frogHatStatic.png img.
    - Added frogHatAnimated.png img.
    - Added foxHatStatic.png img.
    - Added foxHatAnimated.png img.
    - Added shopUPCProfileEffectPrePreview.png img.
    - Added shopAnimeBanner.png img.
    - Added shopAnimeBannerLogo.png img.
    - Added shopBreakfastBanner.png img.
    - Added shopBreakfastBannerLogo.png img.
    - Added shopFallBanner.png img.
    - Added shopFallBannerLogo.png img.
    - Added shopFantasyBanner.png img.
    - Added shopFantasyBannerLogo.png img.
    - Added slimeZombieIntro.png img.
    - Added slimeZombieLoop.png img.
    - Added slimeZombieThumbnail.png img.
    - Added punkGirlThumbnail.png img.
    - Added punkGirlLoop.png img.
    - Added punkGirlIntro.png img.
    - Added ghostSkullsLoop.png img.
    - Added ghostSkullsIntro.png img.
    - Added ghostSkullsThumbnail.png img.
    - Added pumpkinSpiceStatic.png img.
    - Added pumpkinSpiceAnimated.png img.
    - Added toastStatic.png img.
    - Added toastAnimated.png img.
    - Added wizardStaffStatic.png img.
    - Added wizardStaffAnimated.png img.
    - Added inLoveStatic.png img.
    - Added inLoveAnimated.png img.
    - Added donutsStatic.png img.
    - Added donutsAnimated.png img.
    - Added starryEyedAnimated.png img.
    - Added starryEyedStatic.png img.
    - Added waterSplashThumbnail.png img.
    - Added vinesThumbnail.png img.
    - Added cerealThumbnail.png img.
    - Added rainThumbnail.png img.
    - Added earthquakeThumbnail.png img.
    - Added fallLeavesThumbnail.png img.
    - Added plateThumbnail.png img.
    - Added fairyThumbnail.png img.
    - Added magicGirlThumbnail.png img.
    - Added sakuraThumbnail.png img.
    - Added sayanThumbnail.png img.
    - Added shurikenThumbnail.png img.
    - Added friedEggsStatic.png img.
    - Added friedEggsAnimated.png img.
    - Added bbJamStatic.png img.
    - Added bbJamAnimated.png img.
    - Added flamingSwordAnimated.png img.
    - Added flamingSwordStatic.png img.
    - Added magicPotionStatic.png img.
    - Added magicPotionAnimated.png img.
    - Added sweatDropsStatic.png img.
    - Added sweatDropsAnimated.png img.
    - Added pancakesStatic.png img.
    - Added pancakesAnimated.png img.
    - Added morningCoffeeAnimated.png img.
    - Added morningCoffeeStatic.png img.
    - Added treasureNKeyStatic.png img.
    - Added treasureNKeyAnimated.png img.
    - Added soulLeavingBodyAnimated.png img.
    - Added soulLeavingBodyStatic.png img.
    - Added glowingRunesAnimated.png img.
    - Added glowingRunesStatic.png img.
    - Added radiatingEnergyStatic.png img.
    - Added radiatingEnergyAnimated.png img.
    - Added fantasyDefenseShieldAnimated.png img.
    - Added fantasyDefenseShieldStatic.png img.
    - Added fairySpriteStatic.png img.
    - Added fairySpriteAnimated.png img.
    - Added animeShockedStatic.png img.
    - Added animeShockedAnimated.png img.
    - Added animeAngryStatic.png img.
    - Added animeAngryAnimated.png img.
    - Added skullMedallionStatic.png img.
    - Added skullMedallionAnimated.png img.
    - Added rainLoop.png img.
    - Added rainIntro.png img.
    - Added cerealIntro.png img.
    - Added fairyIntro.png img.
    - Added sayanIntro.png img.
    - Added sakuraIntro.png img.
    - Added shurikenIntro.png img.
    - Added vinesIntro.png img.
    - Added plateIntro.png img.
    - Added waterSplashIntro.png img.
    - Added earthquakeIntro.png img.
    - Added magicGirlIntro.png img.
    - Added magicGirlLoop.png img.
    - Added cerealLoop.png img.
    - Added earthquakeLoop.png img.
    - Added shurikenLoop.png img.
    - Added plateLoop.png img.
    - Added fairyLoop.png img.
    - Added sakuraLoop.png img.
    - Added sayanLoop.png img.
    - Added waterSplashLoop.png img.
    -

