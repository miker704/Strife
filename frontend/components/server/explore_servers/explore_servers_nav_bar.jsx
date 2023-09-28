import React from "react";
import { useEffect, useRef, useState } from "react";
import UserNavContainer from "../../users/user_nav/user_nav_container";
import { ExploreCompassIcon, GameControllerIcon, GraduationCapIcon, MusicalNoteIcon, NeutronIcon, TelevisionIcon, TernaryTreeIcon } from "../../front_end_svgs/Strife_svgs";

const ExploreServersNavBar = (props) => {

    return (
        <div className="explore-server-sidebar">
            <div className="global-scroll-thin-raw-attributes global-scroller-base" style={{ overflow: `hidden scroll`, paddingRight: `0px` }}>
                <h2 className="exsbar-def-header-h2">Discover</h2>
                <div className="explore-bar-item-cat selected-choice">
                    <div className="explore-bar-item-cat-inner">
                        <div className="explore-bar-item-cat-avatar">
                            <ExploreCompassIcon />
                        </div>
                        <div className="explore-bar-item-cat-content">
                            <div className="explore-bar-item-cat-nameAndDecos">
                                <div className="explore-bar-item-cat-nameAndDecos-wrap">
                                    Home
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="explore-bar-item-cat">
                    <div className="explore-bar-item-cat-inner">
                        <div className="explore-bar-item-cat-avatar">
                            <GameControllerIcon />
                        </div>
                        <div className="explore-bar-item-cat-content">
                            <div className="explore-bar-item-cat-nameAndDecos">
                                <div className="explore-bar-item-cat-nameAndDecos-wrap">
                                    Gaming
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="explore-bar-item-cat">
                    <div className="explore-bar-item-cat-inner">
                        <div className="explore-bar-item-cat-avatar">
                            <MusicalNoteIcon />
                        </div>
                        <div className="explore-bar-item-cat-content">
                            <div className="explore-bar-item-cat-nameAndDecos">
                                <div className="explore-bar-item-cat-nameAndDecos-wrap">
                                    Music
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="explore-bar-item-cat">
                    <div className="explore-bar-item-cat-inner">
                        <div className="explore-bar-item-cat-avatar">
                            <GraduationCapIcon />
                        </div>
                        <div className="explore-bar-item-cat-content">
                            <div className="explore-bar-item-cat-nameAndDecos">
                                <div className="explore-bar-item-cat-nameAndDecos-wrap">
                                    Education
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="explore-bar-item-cat">
                    <div className="explore-bar-item-cat-inner">
                        <div className="explore-bar-item-cat-avatar">
                            <NeutronIcon />
                        </div>
                        <div className="explore-bar-item-cat-content">
                            <div className="explore-bar-item-cat-nameAndDecos">
                                <div className="explore-bar-item-cat-nameAndDecos-wrap">
                                    Science & Tech
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="explore-bar-item-cat">
                    <div className="explore-bar-item-cat-inner">
                        <div className="explore-bar-item-cat-avatar">
                            <TelevisionIcon />
                        </div>
                        <div className="explore-bar-item-cat-content">
                            <div className="explore-bar-item-cat-nameAndDecos">
                                <div className="explore-bar-item-cat-nameAndDecos-wrap">
                                    Entertainment
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="explore-bar-item-cat">
                    <div className="explore-bar-item-cat-inner">
                        <div className="explore-bar-item-cat-avatar">
                            <TernaryTreeIcon />
                        </div>
                        <div className="explore-bar-item-cat-content">
                            <div className="explore-bar-item-cat-nameAndDecos">
                                <div className="explore-bar-item-cat-nameAndDecos-wrap">
                                    Student Hubs
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <UserNavContainer />
        </div>
    )

}

export default ExploreServersNavBar;