import React from "react";
import { useState, useEffect, useRef } from "react";
import { styled } from "@mui/material/styles";
import Skeleton from "@mui/material/Skeleton";

const StyledSkeleton = styled(Skeleton)(({ theme }) => ({
    backgroundColor: `var(--text-normal)`, opacity: `0.08`, borderRadius: `0.5rem`,
    flex: `0 0 auto`, height: `1rem`, lineHeight: `1.375rem`, verticalAlign: `middle`,
    marginTop: `0.1875rem`,
    '&.MuiSkeleton-root+&.MuiSkeleton-root': {
        marginLeft: `0.25rem`,
    },
}));

export const MessageSkeleton = ({ item, idx }) => {

    const textBlobWidths = [1.875, 2.0625, 2.375, 2.5, 2.75, 2.8125, 2.875, 2.9375, 3.0, 3.25, 3.5, 3.75, 4.0, 4.1875, 4.25, 4.5, 4.75, 4.8125];
    const randomNameWidths = [5.3125, 6.5625, 6.625, 6.8125, 7.5, 7.75, 8.0, 8.75, 9.0, 10.125];
    const randomTimeWidths = [5.125, 5.3125, 5.5, 5.75];
    const imageStyles = {
        0: { opacity: '0.03', width: '299px', height: '133px', marginTop: `0.125rem`, borderRadius: `6px`, backgroundColor: `var(--text-normal)` },
        1: { opacity: '0.03', width: '281px', height: '190px', marginTop: `0.125rem`, borderRadius: `6px`, backgroundColor: `var(--text-normal)` },
        2: { opacity: '0.03', width: '180px', height: '274px', marginTop: `0.125rem`, borderRadius: `6px`, backgroundColor: `var(--text-normal)` },
        3: { opacity: '0.03', width: '150px', height: '134px', marginTop: `0.125rem`, borderRadius: `6px`, backgroundColor: `var(--text-normal)` },
    }
    const pickRandomTextWidth = () => {
        const idx = Math.floor(Math.random() * textBlobWidths.length);
        return textBlobWidths[idx];
    }
    const pickRandomNameWidth = () => {
        const idx = Math.floor(Math.random() * randomNameWidths.length);
        return randomNameWidths[idx];
    }
    const pickRandomTimeWidth = () => {
        const idx = Math.floor(Math.random() * randomTimeWidths.length);
        return randomTimeWidths[idx];
    }
    const randomNumOfColumns = () => {
        return Math.floor(Math.random() * (8 - 1 + 1)) + 1;
    }
    const randomNumOfRows = () => {
        return Math.floor(Math.random() * (4 - 1 + 1)) + 1;
    }
    const randomImageStyle = () => {
        const idx = Math.floor(Math.random() * Object.values(imageStyles).length);
        return imageStyles[idx];
    }

    const userNameWidth = pickRandomNameWidth();
    const timeWidth = pickRandomTimeWidth();
    const numOfRows = new Array(randomNumOfRows()).fill(`skeleton-msg-${item}-${idx}-row`).map((ele, idx) => {
        return `${ele}-${idx}`;
    });
    const ImageChance = Math.random();

    return (
        <li className={`chat-message-item skeleton`} key={`skeleton-msg-${item}-${idx}`}>
            <div className="message-wrapper" tabIndex={-1}>
                <div className="message-wrapper-contents">
                    <div className="chat-member-avatar-img">
                        <StyledSkeleton animation="wave" variant="circular" height={40} width={40} sx={{ borderRadius: `50%` }} />
                    </div>
                    <h3 className="chat-member-username-header">
                        <div style={{ display: `flex` }}>
                            <span className="chat-member-username-wrap">
                                <span role="button" tabIndex={0} className="chat-member-username" >
                                    <div style={{ display: `flex` }}>
                                        <StyledSkeleton animation="wave" variant="rounded" height={20} width={`${userNameWidth}rem`} />
                                        <StyledSkeleton animation="wave" variant="rounded" height={20} width={`5.125rem`} />
                                    </div>
                                </span>
                            </span>

                            <span className="chat-message-timestamp" >
                                <time >
                                    <i className="chat-message-timestamp-i"> — </i>
                                    <StyledSkeleton animation="wave" variant="rounded" height={20} width={`${timeWidth}rem`} />
                                </time>
                            </span>
                        </div>
                    </h3>
                    <div className="chat-message">

                        {
                            numOfRows.map((ele, idx) => {
                                const wordCols = new Array(randomNumOfColumns()).fill(`${ele}-word-${idx}`).map((ele, idx) => `${ele}-${idx}`);
                                return (
                                    <div style={{ display: `flex` }} key={ele}>
                                        {
                                            wordCols.map((word, idx) => {
                                                const wordWidth = pickRandomTextWidth();
                                                return (
                                                    <StyledSkeleton animation="wave" variant="rounded" height={16} width={`${wordWidth}rem`} key={word} />
                                                )
                                            })
                                        }
                                    </div>
                                )
                            })
                        }
                        {ImageChance > 0.75 ? (
                            <div className="blank-attachment-container">
                                <StyledSkeleton animation="wave" variant="rectangular" sx={randomImageStyle()} />
                            </div>
                        ) : (null)
                        }
                    </div>
                </div>
            </div>
        </li>
    )
}


export const MessageSkeletonList = () => {
    return (
        <>
            <ol className="chat-scroller-inner" id="ol-message-list">
                <MessageSkeleton item={1} idx={1} />
                <MessageSkeleton item={2} idx={2} />
                <MessageSkeleton item={3} idx={3} />
                <MessageSkeleton item={4} idx={4} />
                <MessageSkeleton item={5} idx={5} />
                <MessageSkeleton item={6} idx={6} />
                <MessageSkeleton item={7} idx={7} />
                <MessageSkeleton item={8} idx={8} />
                <MessageSkeleton item={9} idx={9} />
                <MessageSkeleton item={10} idx={10} />
            </ol>
        </>
    )

}

export const MessageSkeletonList__Custom_Length = ({ listLength }) => {
    return (
        <>
            <ol className="chat-scroller-inner" id="ol-message-list">
                {
                    Array(listLength)
                        .fill(1)
                        .map((item, index) => (
                            <MessageSkeleton item={index} idx={index} />
                        ))
                }
            </ol>
        </>
    )

}