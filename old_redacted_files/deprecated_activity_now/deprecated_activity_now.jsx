//div section for activity now sections


    {/* <div className="active-now-section-wrapper">
                            <div className="active-now-section">
                                <div className="active-now-section-scroller">
                                    <div className="active-now-header"><h2>Active Now</h2></div>
                                    <div className="empty-card">
                                        <h2 className={`empty-card-header ${onlineFriends.length === 0 ? `` : `is-hidden`}`}>It's quiet for now...</h2>
                                        <div className={`empty-card-text ${onlineFriends.length === 0 ? `` : `is-hidden`}`}>
                                            When a friend starts an activity—like playing a game or hanging out on voice—we’ll show it here!
                                        </div>
                                        <div className={`friend-index activl ${onlineFriends.length === 0 ? `is-hidden` : ``}`}>
                                            <div className={`friend-index-item-wrapper ${onlineFriends.length === 0 ? `is-hidden` : ``}`} >
                                                <ul>{onlineActivityMap}</ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="empty-card-div"></div>
                                </div>
                            </div>
                        </div> */}

                        // const rendered_User_PFP = default_User_PFP;
                        // const onlineFriends = this.props.onlineFriends;
                        // const randomFriendShuffleArray = onlineFriends.length ? this.randomFriendShuffle(onlineFriends) : null;
                        // //lets shuffle this a bit maybe not all of out online friends are doing stuff
                        // const onlineActivityMap = onlineFriends.length ? randomFriendShuffleArray.map((friend, idx) => {
                        //     return (
                        //         <li id="fii" className="activity-online-friend-idx" key={friend.id} >
                
                        //             <div className="friend-index-item-wrapper-inner">
                        //                 <div className="friend-account-info-wrapper-super">
                
                        //                     <div className={`${friend.photo === undefined ?
                        //                         `user-pfp-svg-render color-${friend.color_tag}` : `friend-info`}`}>
                        //                         <img src={`${friend.photo === undefined ? rendered_User_PFP : friend.photo}`} alt="pfp" />
                        //                     </div>
                        //                     <div className={`${friend.online ? "circle-online-1" : "circle-offline-1"}`}></div>
                
                        //                     <div className="friend-account-info-wrapper">
                        //                         <div className="friend-account-info">
                        //                             <div className="friend-tag">
                        //                                 {friend.username}
                        //                                 <span>#{friend.strife_id_tag}</span>
                        //                             </div>
                        //                         </div>
                        //                         <div className="subtext">
                        //                             <div className="subtext-inner">
                        //                                 {this.randomActivityMessage(friend)}
                        //                             </div>
                        //                         </div>
                        //                     </div>
                
                        //                 </div>
                        //             </div>
                        //         </li>
                        //     )
                        // }) : ("");

                        // randomActivityMessage (user) {

                        //     const _AUTH_IDS = [1, 2, 3, 4]
                    
                        //     const randomActivityMessages = [
                        //         'Playing Games.', 'Studying.', 'Listening to Spotify.', 'Playing Centipede.js.', 'Playing BlueStacks 5.0.', 'Playing Fortnite.',
                        //         'In a Group Call.', 'Eating Food.', 'Playing Paint-By-Numbers.', 'Playing Doom.', 'Playing Quake.', 'Playing BattleField.',
                        //         'Studying For an Upcoming App Academy Assessment.', 'Working on MERN Project With Partners.', 'Playing Call of Duty.',
                        //         'Playing Wolfenstein.', 'Playing Grand Theft Auto V.', 'Playing Roblox.', 'Studying for an Interview.',
                        //         'Studying Data Structures and Algorithms.', 'Playing Minecraft.', 'Playing League of Legends.', 'Playing Dota 2.',
                        //         'Playing Overwatch.', 'Playing Rocket League.', 'Playing Cyberpunk 2077.', 'Playing Monster Hunter - Iceborne.',
                        //         "Playing PlayerUnknown's Battlegrounds.", 'Playing ARK: Survival Evolved.', 'Playing Red Dead Redemption 2.',
                        //         'Playing Rainbow 6.', 'Playing Apex Legends.', 'Playing Destiny 2.', 'Playing Turok.', 'Playing Saints Row.',
                        //         'Playing Counter-Strike.', 'Playing World of Warcraft.', 'Playing Fall Guys.', 'Playing Among Us.',
                        //         'Playing Forza Horizon 5.', 'Playing Valorant.', 'Playing Bloodborne.', 'Playing Demon Souls.', 'Playing Elden Ring.',
                        //         'Playing Dark Souls.', 'Playing Borderlands.', 'Playing Yakuza.', 'Playing Tetris.', 'Playing Pac-Man.', 'Playing Face-Man.',
                        //         'Playing Tax-Man.', 'Playing Candy Crush.', 'Playing Halo.', 'Watching Anime.', 'Playing Angry Birds.',
                        //         'Playing DRAGON BALL Z: KAKAROT.', 'Playing Dead by Daylight.', 'Playing Portal 2.', 'Playing Half-Life.', 'Playing Cuphead.',
                        //         'Playing MultiVersus.', 'Playing For Honor.', 'Playing Far Cry 6.', 'Playing Crysis.', 'Playing Resident Evil 7.',
                        //         'Playing Dino Crisis.', "Playing Papers, Please.", 'Playing Carnivores.', 'Playing Jurassic World Evolution.',
                        //         'Playing Chasm: The Rift.', 'Playing Microsoft Flight Simulator.', 'Playing Genshin Impact.', 'Playing Super Mario 2.',
                        //         'Playing Team Fortress 2.', 'Playing Unreal Tournament.', 'Playing Blood.', 'Playing Duke Nukem.', 'Playing Serious Sam.',
                        //         'Playing Max Payne.', 'Playing Left 4 Dead 2.', 'Playing Dead Island.', 'Playing Planet Zoo.', 'Playing Alien Isolation.',
                        //         'Playing AMID EVIL.', 'Playing Super Castlevania IV.', "Playing Garry's Mod.", 'Playing Dusk.', 'Playing Super Mario Bros. 2.',
                        //         'Playing Plague Inc: Evolved.', 'Playing Monster Hunter Rise.', 'Playing Diablo III.', 'Playing Goat Simulator.',
                        //         'Playing The Elder Scrolls V: Skyrim.', 'Playing The Elder Scrolls IV: Oblivion.', 'Playing DOOM.', 'Playing DOOM ETERNAL.',
                        //         'Playing QUAKE CHAMPIONS.', 'Playing Call of Duty Warzone.', 'Playing Turok 2 - Seeds of Evil.', 'Playing Killing Floor 2.'
                        //     ]
                    
                        //     if (_AUTH_IDS.includes(user.id) === true) {
                        //         return 'Beep..boo..doo..bop..boo-doo..beep...Monitoring $TR!F3'
                        //     }
                        //     else {
                        //         const msgIdx = Math.floor(Math.random() * randomActivityMessages.length);
                        //         return randomActivityMessages[msgIdx];
                        //     }
                    
                        // }
                    
                        // randomFriendShuffle (onlineFriends) {
                        //     const cut = Math.floor(Math.random() * (onlineFriends.length - 1) + 1)
                        //     const shuffle = [...onlineFriends].sort(() => Math.floor(0.5 - Math.random()));
                        //     return shuffle.slice(0, cut);
                        // }