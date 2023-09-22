import React from "react";
import { useState, useRef, useEffect } from "react";
import DefaultPFPSVG from "../../../../app/assets/images/defaultPFPSVG.svg";
import defaultStrifeSpiderQuad from '../../../../app/assets/images/strife_spider_quad.png';
import { requestAllOnlineFriends } from "../../../utils/friendship_api_util";
import { LoudSpeakerIcon } from "../../front_end_svgs/Strife_svgs";

const ActiveNowSection = (props) => {

    const [onlineFriendsList, setOnlineFriendsList] = useState([]);
    const [loading, isLoading] = useState(false);
    const randomOnlineFriendsRef = useRef();


    // useEffect(() => {
    //     props.requestAllFriendships();
    //     setOnlineFriendsList(props.onlineFriends);
    //     return () => {
    //         if (props.errors.length > 0) {
    //             props.removeFriendshipErrors();
    //         }

    //     };
    // }, [props.onlineFriends?.length]);


    const rendered_Default_PFP = DefaultPFPSVG;

    const randomActivityMessage = (user) => {

        const _AUTH_IDS = [1, 2, 3, 4]

        const randomActivityMessages = [
            'Playing Games.', 'Studying.', 'Listening to Spotify.', 'Playing Centipede.js.', 'Playing BlueStacks 5.0.', 'Playing Fortnite.',
            'In a Group Call.', 'Eating Food.', 'Playing Paint-By-Numbers.', 'Playing Doom (1993).', 'Playing Quake (1996).', 'Playing BattleField.',
            'Studying For an Upcoming App Academy Assessment.', 'Working on MERN Project With Partners.', 'Playing Call of Duty.',
            'Playing Wolfenstein.', 'Playing Grand Theft Auto V.', 'Playing Roblox.', 'Studying for an Interview.',
            'Studying Data Structures and Algorithms.', 'Playing Minecraft.', 'Playing League of Legends.', 'Playing Dota 2.',
            'Playing Overwatch.', 'Playing Rocket League.', 'Playing Cyberpunk 2077.', 'Playing Monster Hunter - Iceborne.',
            "Playing PlayerUnknown's Battlegrounds.", 'Playing ARK: Survival Evolved.', 'Playing Red Dead Redemption 2.',
            'Playing Rainbow 6.', 'Playing Apex Legends.', 'Playing Destiny 2.', 'Playing Turok.', 'Playing Saints Row.',
            'Playing Counter-Strike.', 'Playing World of Warcraft.', 'Playing Fall Guys.', 'Playing Among Us.',
            'Playing Forza Horizon 5.', 'Playing Valorant.', 'Playing Bloodborne.', 'Playing Demon Souls.', 'Playing Elden Ring.',
            'Playing Dark Souls.', 'Playing Borderlands.', 'Playing Borderlands 2.', 'Playing Borderlands 3.', 'Playing Yakuza.', 'Playing Tetris.',
            'Playing Tax-Man.', 'Playing Candy Crush.', 'Playing Halo.', 'Watching Anime.', 'Playing Angry Birds.',
            'Playing DRAGON BALL Z: KAKAROT.', 'Playing Dead by Daylight.', 'Playing Portal 2.', 'Playing Half-Life.', 'Playing Cuphead.',
            'Playing MultiVersus.', 'Playing For Honor.', 'Playing Far Cry 6.', 'Playing Crysis.', 'Playing Resident Evil 7.',
            'Playing Dino Crisis.', "Playing Papers, Please.", 'Playing Carnivores.', 'Playing Jurassic World Evolution.',
            'Playing Chasm: The Rift.', 'Playing Microsoft Flight Simulator.', 'Playing Genshin Impact.', 'Playing Super Mario 2.',
            'Playing Team Fortress 2.', 'Playing Unreal Tournament.', 'Playing Blood.', 'Playing Duke Nukem.', 'Playing Serious Sam.',
            'Playing Max Payne.', 'Playing Left 4 Dead 2.', 'Playing Dead Island.', 'Playing Planet Zoo.', 'Playing Alien Isolation.',
            'Playing AMID EVIL.', 'Playing Super Castlevania IV.', "Playing Garry's Mod.", 'Playing Dusk.', 'Playing Super Mario Bros. 2.',
            'Playing Plague Inc: Evolved.', 'Playing Monster Hunter Rise.', 'Playing Diablo III.', 'Playing Goat Simulator.',
            'Playing The Elder Scrolls V: Skyrim.', 'Playing The Elder Scrolls IV: Oblivion.', 'Playing DOOM (2016).', 'Playing DOOM ETERNAL.',
            'Playing QUAKE CHAMPIONS.', 'Playing Call of Duty Warzone.', 'Playing Turok 2 - Seeds of Evil.', 'Playing Killing Floor 2.',
            'Playing Diablo IV.', 'Playing Dead Island 2', 'Playing Jurassic World Evolution 2.', 'Playing Senran Kagura', 'Playing Street Fighter 6',
            'Playing Carnivores 2.', 'Playing Carnivores: Ice Age', 'Playing Dino Crisis 2.', 'Playing Pac-Man.', 'Playing Face-Man.',
            "Playing Tom Clancy's Ghost Recon Wildlands", 'Playing Ghost of Tsushima', 'Playing Nioh', 'Playing Nioh 2', 'Playing Mortal Kombat',
            'Playing Runescape',
        ]

        if (_AUTH_IDS.includes(user.id) === true) {
            return 'Beep..boo..doo..bop..boo-doo..beep...Monitoring $TR!F3.';
        }
        else {
            const msgIdx = Math.floor(Math.random() * randomActivityMessages.length);
            return randomActivityMessages[msgIdx];
        }

    }

    const randomStreamingActivityMessage = (user) => {

        const _AUTH_IDS = [1, 2, 3, 4]

        const randomStreamingActivityMessages = [
            "Tom Clancy's Ghost Recon Wildlands", 'Ghost of Tsushima', 'Nioh', 'Nioh 2', 'Mortal Kombat', 'Runescape',
            'A Group Meeting', 'Call of Duty: Black ops 4 - Multiplayer - Domination.', 'BattleField - Multiplayer - Operations.',
            'Doom (1993) - Multiplayer - TDM - Via GZDOOM Multiplayer CLI.', 'Quake (1996) - Multiplayer - CTF.', 'Fortnite - Battle Royale.',
            'Wolfenstein Youngblood.', 'Grand Theft Auto V.', 'Roblox.', 'Minecraft.', 'League of Legends.', 'Dota 2.', 'Overwatch.', 'Rocket League.',
            'Cyberpunk 2077.', 'Monster Hunter - Iceborne.', "PlayerUnknown's Battlegrounds.", 'ARK: Survival Evolved.', 'Red Dead Redemption 2.',
            'Rainbow 6.', 'Apex Legends.', 'Destiny 2.', 'Turok - Multiplayer - TDM.', 'Saints Row IV.', 'Counter-Strike.', 'World of Warcraft.',
            'Fall Guys.', 'Among Us.', 'Forza Horizon 5.', 'Valorant.', 'Borderlands.', 'Borderlands 2.', 'Borderlands 3.', 'Halo.', 'DRAGON BALL Z: KAKAROT.',
            'Dead by Daylight.', 'Portal 2.', 'MultiVersus.', 'For Honor.', 'Far Cry 6.', 'Crysis.', 'Resident Evil 7.', 'Chasm: The Rift.',
            'Microsoft Flight Simulator.', 'Genshin Impact.', 'Team Fortress 2.', 'Unreal Tournament - CTF.', 'Blood - Multiplayer.',
            'Duke Nukem - Multiplayer.', 'Serious Sam - Multiplayer.', 'Left 4 Dead 2.', 'Dead Island.', 'Dead Island 2.', "Garry's Mod.",
            'Monster Hunter Rise.', 'Diablo III.', 'Diablo IV.', 'DOOM (2016) - Multiplayer.', 'DOOM ETERNAL - Multiplayer.',
            'QUAKE CHAMPIONS.', 'Call of Duty Warzone.', 'Turok 2 - Seeds of Evil - Multiplayer - Team DeathMatch.', 'Killing Floor 2.',
            'Senran Kagura', 'Street Fighter 6',
        ]

        if (_AUTH_IDS.includes(user.id) === true) {
            return 'Beep..boo..doo..bop..boo-doo..beep...Monitoring $TR!F3.';
        }
        else {
            const msgIdx = Math.floor(Math.random() * randomStreamingActivityMessages.length);
            return randomStreamingActivityMessages[msgIdx];
        }

    }

    const randomFriendShuffle = (onlineFriends) => {
        const cut = Math.floor(Math.random() * (onlineFriends.length - 1) + 1)
        const shuffle = [...onlineFriends].sort(() => Math.floor(0.5 - Math.random()));
        return shuffle.slice(0, cut);
    }

    const randomColorCode = () => {
        return Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    }

    const giveMeMyPartyMembers = (randomNum) => {

        if (randomNum > 2) {

            return (
                <>
                    <div className="partyMember-known partyMembers-M1">
                        <div className="partyMember-svg-wrapper partyMembers-M1" tabIndex="0" aria-hidden="false" role="button">
                            <svg width="24" height="24" viewBox="0 0 24 24" className="partyMember-svg-mask partyMember-svg-layer" aria-hidden="true">
                                <foreignObject x="0" y="0" width="24" height="24" mask="url(#svg-mask-avatar-default)">
                                    <div className="partyMember-avatar-stack">
                                        <img className={`partyMember-avatar-pfp color-${randomColorCode()}`} src={rendered_Default_PFP} alt=" " aria-hidden="true" />
                                    </div>
                                </foreignObject>
                            </svg>
                        </div>
                    </div>
                    <div className="partyMember-known partyMembers-M1">
                        <div className="partyMember-svg-wrapper partyMembers-M1" tabIndex="0" aria-hidden="false" role="button">
                            <svg width="24" height="24" viewBox="0 0 24 24" className="partyMember-svg-mask partyMember-svg-layer" aria-hidden="true">
                                <foreignObject x="0" y="0" width="24" height="24" mask="url(#svg-mask-avatar-default)">
                                    <div className="partyMember-avatar-stack">
                                        <img className={`partyMember-avatar-pfp color-${randomColorCode()}`} src={rendered_Default_PFP} alt=" " aria-hidden="true" />
                                    </div>
                                </foreignObject>
                            </svg>
                        </div>
                    </div>
                    <div className="partyMember-overflow">
                        +{`${randomNum - 2}`}
                    </div>
                </>
            )
        }
        else if (randomNum === 2) {
            return (
                <>
                    <div className="partyMember-known partyMembers-M1">
                        <div className="partyMember-svg-wrapper partyMembers-M1" tabIndex="0" aria-hidden="false" role="button">
                            <svg width="24" height="24" viewBox="0 0 24 24" className="partyMember-svg-mask partyMember-svg-layer" aria-hidden="true">
                                <foreignObject x="0" y="0" width="24" height="24" mask="url(#svg-mask-avatar-default)">
                                    <div className="partyMember-avatar-stack">
                                        <img className={`partyMember-avatar-pfp color-${randomColorCode()}`} src={rendered_Default_PFP} alt=" " aria-hidden="true" />
                                    </div>
                                </foreignObject>
                            </svg>
                        </div>
                    </div>
                    <div className="partyMember-known partyMembers-M1">
                        <div className="partyMember-svg-wrapper partyMembers-M1" tabIndex="0" aria-hidden="false" role="button">
                            <svg width="24" height="24" viewBox="0 0 24 24" className="partyMember-svg-mask partyMember-svg-layer" aria-hidden="true">
                                <foreignObject x="0" y="0" width="24" height="24" mask="url(#svg-mask-avatar-default)">
                                    <div className="partyMember-avatar-stack">
                                        <img className={`partyMember-avatar-pfp color-${randomColorCode()}`} src={rendered_Default_PFP} alt=" " aria-hidden="true" />
                                    </div>
                                </foreignObject>
                            </svg>
                        </div>
                    </div>
                </>

            )
        }
        else if (randomNum === 1) {
            return (

                <>
                    <div className="partyMember-known partyMembers-M1">
                        <div className="partyMember-svg-wrapper partyMembers-M1" tabIndex="0" aria-hidden="false" role="button">
                            <svg width="24" height="24" viewBox="0 0 24 24" className="partyMember-svg-mask partyMember-svg-layer" aria-hidden="true">
                                <foreignObject x="0" y="0" width="24" height="24" mask="url(#svg-mask-avatar-default)">
                                    <div className="partyMember-avatar-stack">
                                        <img className={`partyMember-avatar-pfp color-${randomColorCode()}`} src={rendered_Default_PFP} alt=" " aria-hidden="true" />
                                    </div>
                                </foreignObject>
                            </svg>
                        </div>
                    </div>
                </>


            )
        }

        else {
            return ('')
        }
    }

    const onlineFriends = props.onlineFriends;
    const randomFriendShuffleArray = onlineFriends.length ? randomFriendShuffle(onlineFriends) : null;

    const onlineActivityMap = onlineFriends.length ? randomFriendShuffleArray.map((friend, idx) => {

        const randomActivtyChance = Math.random();
        const StreamingActivityChance = randomActivtyChance > 0.90;
        const soloPlay = randomActivtyChance >= 0 && randomActivtyChance <= 0.50;
        const inBetween = randomActivtyChance > 0.50 && randomActivtyChance < 0.90;

        const randomNumber = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
        const renderColabs = randomNumber > 1 ? `and ${randomNumber} Others` : `and a Friend`;
        const streamMessage = Math.random() > 0.50 ? `Stream just started. Get in here!` : `Stream started a while ago. Get in here!`;
        const genericServerPFPOrDefaultServerPFP = Math.random() > 0.50;

        const renderGenericServerPFPOrDefaultServerPFP = genericServerPFPOrDefaultServerPFP === true ? (
            <div role="button">
                <div className="anficb-voice-section-assets">
                    <div className="anficb-voice-section-no-guild-img-wrapper">
                        <div className="anficb-voice-section-no-guild-img">PvS</div>
                    </div>
                    <div className="anficb-voice-section-assets-icon-wrapper">
                        <LoudSpeakerIcon className="voiceSectionIcon" />
                    </div>
                </div>
            </div>

        ) : (

            <div role="button">
                <div className="anficb-voice-section-assets">
                    <img className="anficb-voice-section-guild-img" src={defaultStrifeSpiderQuad} alt=" " />
                    <div className="anficb-voice-section-assets-icon-wrapper">
                        <LoudSpeakerIcon className="voiceSectionIcon" />
                    </div>
                </div>
            </div>

        );

        const renderPartyMembers = StreamingActivityChance === true ? giveMeMyPartyMembers(randomNumber) : ('');

        if (StreamingActivityChance === true) {
            return (
                <div className="active-now-friend-item-card" key={friend.id}>
                    <div>
                        <header className="active-now-friend-item-card-header">
                            <div className="anficard-header-avatar-wrapper anficard-header-avatar" role="img" aria-hidden="false">
                                <svg width="40" height="40" viewBox="0 0 40 40" className="anficard-svg-mask anficard-svg" aria-hidden="true">
                                    <foreignObject x="0" y="0" width="32" height="32" mask="url(#svg-mask-avatar-status-round-32)">
                                        <div className="anficard-svg-avatar-stack">
                                            {
                                                friend.photo === undefined ? (
                                                    <img className={`anficard-svg-avatar-pfp color-${friend.color_tag}`} src={rendered_Default_PFP} alt=" " aria-hidden="true" />

                                                ) : (
                                                    <img className="anficard-svg-avatar-pfp" src={friend.photo} alt=" " aria-hidden="true" />
                                                )
                                            }
                                        </div>
                                    </foreignObject>
                                    <rect width="10" height="10" x="22" y="22" fill="rgb(35, 165, 90)" mask="url(#svg-mask-status-online)" className="anficard-svg-pointer-events"></rect>
                                </svg>
                            </div>
                            <div>
                                <div className="acfic-header-username">
                                    {friend.username}
                                    {` `}
                                    {renderColabs}
                                </div>
                                <div className="acfic-header-channel-type-name">In a Voice Channel </div>

                            </div>
                        </header>
                        <div className="active-now-friend-item-card-body">

                            <section className="anficb-section">
                                <div className="anficb-voice-section">

                                    {renderGenericServerPFPOrDefaultServerPFP}

                                    <div role="button">
                                        <div className="anficb-voice-section-details">
                                            <div className="anficb-voice-section-details-servername">{`${genericServerPFPOrDefaultServerPFP === true ? `Private Server` : `$TR!F3 L!V3`}`}</div>
                                            <div className="anficb-voice-section-details-activity">Gaming</div>
                                        </div>
                                    </div>


                                    <div className="anficb-voice-section-member-wrapper">
                                        <div className="anficbvs-partyMembers">
                                            <div className="partyMember-known partyMembers-M1">
                                                <div className="partyMember-svg-wrapper partyMembers-M1" tabIndex="0" aria-hidden="false" role="button">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" className="partyMember-svg-mask partyMember-svg-layer" aria-hidden="true">
                                                        <foreignObject x="0" y="0" width="24" height="24" mask="url(#svg-mask-avatar-default)">
                                                            <div className="partyMember-avatar-stack">
                                                                {
                                                                    friend.photo === undefined ? (
                                                                        <img className={`partyMember-avatar-pfp color-${friend.color_tag}`} src={rendered_Default_PFP} alt=" " aria-hidden="true" />

                                                                    ) : (
                                                                        <img className="partyMember-avatar-pfp" src={friend.photo} alt=" " aria-hidden="true" />
                                                                    )
                                                                }
                                                            </div>
                                                        </foreignObject>
                                                    </svg>
                                                </div>
                                            </div>
                                            {renderPartyMembers}
                                        </div>
                                    </div>

                                </div>


                            </section>

                            <div className="anficb-section-sep"></div>


                            <section className="anficb-section">
                                <div className="applicationStreamingSection">
                                    <div className="wrapper-applicationStreamingAvatar">
                                        <svg width="32" height="32" viewBox="0 0 32 32" className="applicationStreamingAvatar-svg-mask applicationStreamingAvatar-svg" aria-hidden="true">
                                            <foreignObject x="0" y="0" width="32" height="32" mask="url(#svg-mask-avatar-default)">
                                                <div className="applicationStreamingAvatar-stack">
                                                    {
                                                        friend.photo === undefined ? (
                                                            <img className={`applicationStreamingAvatar-img color-${friend.color_tag}`} src={rendered_Default_PFP} alt=" " aria-hidden="true" />

                                                        ) : (
                                                            <img className="applicationStreamingAvatar-img" src={friend.photo} alt=" " aria-hidden="true" />
                                                        )
                                                    }
                                                </div>
                                            </foreignObject>
                                        </svg>
                                    </div>
                                    <div className="cut-off-sliders">
                                        <div className="applicationStreamingSection-username">{friend.username}</div>
                                        <div className="applicationStreamingSection-activity">
                                            Streaming{` `}
                                            <strong>{randomStreamingActivityMessage(friend)}</strong>
                                        </div>
                                    </div>
                                    <div className="applicationStreaming-live">Live</div>
                                </div>
                                <div className="applicationStreamingPreviewWrapper">
                                    <div className="aspw-inner">
                                        <div className="applicationStreamingPreview-size" role="button">
                                            <div className="applicationStreamingPreview-flex">
                                                <div className="emptyPreviewImage"></div>
                                                <div className="emptyPreviewImage-text">{streamMessage}</div>
                                            </div>
                                            <div className="applicationStreamingHoverWrapper">
                                                <div className="applicationStreamingHoverText">Watch Stream</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            )
        }
        else if (inBetween === true) {
            return (
                <div className="active-now-friend-item-card" key={friend.id}>
                    <div>
                        <header className="active-now-friend-item-card-header">
                            <div className="anficard-header-avatar-wrapper anficard-header-avatar" role="img" aria-hidden="false">
                                <svg width="40" height="40" viewBox="0 0 40 40" className="anficard-svg-mask anficard-svg" aria-hidden="true">
                                    <foreignObject x="0" y="0" width="32" height="32" mask="url(#svg-mask-avatar-status-round-32)">
                                        <div className="anficard-svg-avatar-stack">
                                            {
                                                friend.photo === undefined ? (
                                                    <img className={`anficard-svg-avatar-pfp color-${friend.color_tag}`} src={rendered_Default_PFP} alt=" " aria-hidden="true" />

                                                ) : (
                                                    <img className="anficard-svg-avatar-pfp" src={friend.photo} alt=" " aria-hidden="true" />
                                                )
                                            }
                                        </div>
                                    </foreignObject>
                                    <rect width="10" height="10" x="22" y="22" fill="rgb(35, 165, 90)" mask="url(#svg-mask-status-online)" className="anficard-svg-pointer-events"></rect>
                                </svg>
                            </div>
                            <div className="cut-off-sliders">

                                <div className="acfic-header-username">
                                    {friend.username}
                                    <span className="acfic-header-strife-discriminator-tag">#{friend.strife_id_tag}</span>
                                </div>
                                <div className="acfic-header-activty-name">{randomActivityMessage(friend)}</div>

                            </div>
                        </header>
                        <div className="active-now-friend-item-card-body">
                            <section className="anficb-section">
                                <div className="anficb-voice-section">
                                    {renderGenericServerPFPOrDefaultServerPFP}
                                    <div role="button">
                                        <div className="anficb-voice-section-details">
                                            <div className="anficb-voice-section-details-servername">{`${genericServerPFPOrDefaultServerPFP === true ? `Private Server` : `$TR!F3 L!V3`}`}</div>
                                            <div className="anficb-voice-section-details-activity">Gaming</div>
                                        </div>
                                    </div>

                                    <div className="anficb-voice-section-member-wrapper">
                                        <div className="anficbvs-partyMembers">
                                            <div className="partyMember-known partyMembers-M1">
                                                <div className="partyMember-svg-wrapper partyMembers-M1" tabIndex="0" aria-hidden="false" role="button">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" className="partyMember-svg-mask partyMember-svg-layer" aria-hidden="true">
                                                        <foreignObject x="0" y="0" width="24" height="24" mask="url(#svg-mask-avatar-default)">
                                                            <div className="partyMember-avatar-stack">
                                                                {
                                                                    friend.photo === undefined ? (
                                                                        <img className={`partyMember-avatar-pfp color-${friend.color_tag}`} src={rendered_Default_PFP} alt=" " aria-hidden="true" />

                                                                    ) : (
                                                                        <img className="partyMember-avatar-pfp" src={friend.photo} alt=" " aria-hidden="true" />
                                                                    )
                                                                }
                                                            </div>
                                                        </foreignObject>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <div className="anficb-section-sep"></div>
                        </div>
                    </div>
                </div>
            )
        }
        else {

            return (
                <div className="active-now-friend-item-card" key={friend.id}>
                    <div>
                        <header className="active-now-friend-item-card-header">
                            <div className="anficard-header-avatar-wrapper anficard-header-avatar" role="img" aria-hidden="false">
                                <svg width="40" height="40" viewBox="0 0 40 40" className="anficard-svg-mask anficard-svg" aria-hidden="true">
                                    <foreignObject x="0" y="0" width="32" height="32" mask="url(#svg-mask-avatar-status-round-32)">
                                        <div className="anficard-svg-avatar-stack">
                                            {
                                                friend.photo === undefined ? (
                                                    <img className={`anficard-svg-avatar-pfp color-${friend.color_tag}`} src={rendered_Default_PFP} alt=" " aria-hidden="true" />

                                                ) : (
                                                    <img className="anficard-svg-avatar-pfp" src={friend.photo} alt=" " aria-hidden="true" />
                                                )
                                            }
                                        </div>
                                    </foreignObject>
                                    <rect width="10" height="10" x="22" y="22" fill="rgb(35, 165, 90)" mask="url(#svg-mask-status-online)" className="anficard-svg-pointer-events"></rect>
                                </svg>
                            </div>
                            <div className="cut-off-sliders">
                                <div className="acfic-header-username">
                                    {friend.username}
                                    <span className="acfic-header-strife-discriminator-tag">#{friend.strife_id_tag}</span>
                                </div>
                                <div className="acfic-header-activty-name">{randomActivityMessage(friend)}</div>
                            </div>
                        </header>
                    </div>
                </div>
            )

        }

    }) : ("");



    if (onlineFriends.length > 0) {
        return (

            <div className="now-playing-activity-section">
                <aside className="active-now-section-container">
                    <div className="global-scroller global-scroll-thin-raw-attributes global-scroller-base" style={{ overflow: `hidden scroll`, paddingRight: `8px` }}>
                        <h2 className="active-now-section-header">Active Now</h2>
                        {onlineActivityMap}
                        <div className="active-now-empty-card-div-sep"></div>
                    </div>
                </aside>
            </div>
        )
    }
    else {
        return (
            <div className="now-playing-activity-section">
                <aside className="active-now-section-container">
                    <div className="global-scroller global-scroll-thin-raw-attributes global-scroller-base">
                        <h2 className="active-now-section-header">Active Now</h2>
                        <div className="active-now-section-empty-card">
                            <h2 className='active-now-section-empty-card-header'>It's quiet for now...</h2>
                            <div className='active-now-section-empty-card-subtext'>
                                When a friend starts an activity—like playing a game or hanging out on voice—we’ll show it here!
                            </div>
                        </div>
                        <div className="active-now-empty-card-div-sep"></div>
                    </div>
                </aside>
            </div>
        )
    }

}


export default ActiveNowSection;
