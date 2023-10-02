// import React from "react";
// import user_Default_PFP from '../../../app/assets/images/discord_PFP.svg';
// import { useState, useEffect, useRef } from "react";
// // import ReactTooltip from "react-tooltip";
// import { Tooltip } from "react-tooltip";
// import { AddReactionIcon, AddSuperReactionIcon, ChainLinkIcon, CopyIDIcon, MarkUnReadIcon, OverFlowEllipsisIcon, PenEditIcon, PinnedIcon, ReplyArrowIcon, StrifeNitroBadgeIcon, ThreadsIcon, TrashCanIcon } from "../front_end_svgs/Strife_svgs";
// // import SpeedDial from '@mui/material/SpeedDial';
// // import SpeedDialIcon from '@mui/material/SpeedDialIcon';
// // import SpeedDialAction from '@mui/material/SpeedDialAction';
// import { styled } from "@mui/material/styles";
// import { useHover } from "@uidotdev/usehooks";
// import Skeleton from "@mui/material/Skeleton";


// // const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
// //     position: 'absolute',
// //     '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
// //         bottom: theme.spacing(2),
// //         right: theme.spacing(2),
// //     },
// //     '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
// //         top: theme.spacing(2),
// //         left: theme.spacing(2),
// //     },
// // }));


// const StyledSkeleton = styled(Skeleton)(({ theme }) => ({
//     backgroundColor: `var(--text-normal)`, opacity: `0.08`, borderRadius: `0.5rem`,
//     flex: `0 0 auto`, height: `1rem`, lineHeight: `1.375rem`, verticalAlign: `middle`,
//     marginTop: `0.1875rem`,
//     '&.MuiSkeleton-root+&.MuiSkeleton-root': {
//         marginLeft: `0.25rem`,
//     },
// }));





// const TestPage33 = (props) => {
//     const [visible, setVisible] = useState(false);
//     const [reveal, setReveal] = useState(false);
//     const [keyCd, setKeyCD] = useState("");
//     const expandRef = useRef(null);
//     const [enableGrowth, setEnableGrowth] = useState(false);
//     const [_SHIFT, setSHIFT] = useState(false);

//     const scrollRef = useRef();
//     const [ref, hovering] = useHover();

//     const [isLoading, setIsLoading] = React.useState(true);
//     useEffect(() => {

//         setIsLoading(true);
//         setTimeout(() => {
//             setIsLoading(false);
//             scrollToBottomOfChat2("smooth");
//         }, 5000); 
//     }, [])


//     // useEffect(() => {
//     //     ReactTooltip.rebuild();
//     // }, [_SHIFT])


//     const handleShiftKey = (e) => {
//         // let _shiftEQ = [16, 'Shift'];
//         // _key = _shiftEQ.includes(_key) ? "Shift" : "";
//         // let _key = e.key || e.keyCode;
//         // _key = _key === 16 || _key === 'Shift' ? "Shift" : "";
//         let _key = e.key || e.keyCode || e.code;
//         let _shiftEQ = [16, "Shift", "ShiftRight", "ShiftLeft"];
//         _key = _shiftEQ.includes(_key) ? "Shift" : "";
//         const keys = {
//             Shift: () => {
//                 e.preventDefault();
//                 console.log("hello");
//                 setReveal(true);
//                 // window.removeEventListener('keyup', handleShiftKey, false);
//             },
//         };
//         if (keys[_key]) {

//             keys[_key]();
//             setKeyCD(e.code);
//         }
//         else {
//             setKeyCD(e.code);
//             setReveal(false);

//         }
//     }

//     const handleShiftKey2 = (e) => {
//         e.preventDefault();
//         console.log("hi");
//         if (e.shiftKey) {
//             console.log('The shift key has been pressed');
//             setSHIFT(true);
//             setReveal(true);
//             setKeyCD(e.code);
//             // e.currentTarget.addEventListener('keyup', handleShiftCancel, false);
//             document.addEventListener('keyup', handleShiftCancel, false);

//         }
//     }

//     const handleShiftCancel = (e) => {
//         console.log("in shift cancel")
//         if (!e.shiftKey && enableGrowth === true) {
//             setSHIFT(false);
//             console.log('!e.shiftKey && enableGrowth === true')
//             // if(enableGrowth === false){
//             // e.currentTarget.removeEventListener('keydown', handleShiftKey2, false);
//             // }
//         }
//         else if (enableGrowth === false) {
//             console.log('enableGrowth === false')
//             // e.currentTarget.removeEventListener('keydown', handleShiftKey2, false);
//             document.removeEventListener('keydown', handleShiftKey2, false);
//             document.removeEventListener('keyup', handleShiftCancel, false);
//             setSHIFT(false);
//         }

//     }

//     const mouseOverEvent = (e) => {
//         // console.log('e');
//         // console.table(e);
//         console.log('e curr target');

//         console.log(e.currentTarget)
//         console.log('e target');

//         console.log(e.target);
//         e.currentTarget.style.backgroundColor = "gold";
//         // e.currentTarget.addEventListener('keydown', handleShiftKey2, false);
//         document.addEventListener('keydown', handleShiftKey2, false);

//     }

//     const mouseLeaveEvent = (e) => {
//         document.removeEventListener('keyup', handleShiftCancel, false);
//         document.removeEventListener('keydown', handleShiftKey2, false);
//         // e.currentTarget.removeEventListener('keydown', handleShiftKey2, false);
//         // e.currentTarget.removeEventListener('keyup', handleShiftCancel, false);
//         e.currentTarget.style.backgroundColor = "";

//     }


//     let messagesToBeMapped = Object.values({
//         "6": {
//             "created_at": "4/14/2023 6:12:44 PM",
//             "id": 6,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome to #general!",
//             "authorName": "Mr.Wumpus"
//         },
//         "7": {
//             "created_at": "4/14/2023 6:12:44 PM",
//             "id": 7,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Hello There Vistor Welcome! You can invite your friends to your Server and start chatting, you can also create or delete channels if you wish!",
//             "authorName": "Mr.Wumpus"
//         },
//         "8": {
//             "created_at": "4/14/2023 6:12:44 PM",
//             "id": 8,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Please Note That even though you maybe able to create and access voice channels, other members cannot, $TR!F3 N!TR0 is required to allow members of your server and yourself access to voice channels.\n    Voice Calls are not available without $TR!F3 N!TR0.",
//             "authorName": "Mr.Wumpus"
//         },
//         "304": {
//             "created_at": "4/24/2023 8:58:45 PM",
//             "id": 304,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @DemoUser2 to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "308": {
//             "created_at": "4/24/2023 8:59:43 PM",
//             "id": 308,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "@DemoUser2 has been banned from the server",
//             "authorName": "Mr.Wumpus"
//         },
//         "312": {
//             "created_at": "4/24/2023 9:01:02 PM",
//             "id": 312,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @DemoUser2 to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "316": {
//             "created_at": "4/24/2023 9:01:14 PM",
//             "id": 316,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "@DemoUser2 has been banned from the server",
//             "authorName": "Mr.Wumpus"
//         },
//         "320": {
//             "created_at": "4/24/2023 9:02:01 PM",
//             "id": 320,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @DemoUser2 to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "324": {
//             "created_at": "4/24/2023 9:03:32 PM",
//             "id": 324,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "@DemoUser2 has been banned from the server",
//             "authorName": "Mr.Wumpus"
//         },
//         "328": {
//             "created_at": "4/24/2023 9:04:07 PM",
//             "id": 328,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @DemoUser2 to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "332": {
//             "created_at": "4/24/2023 10:02:55 PM",
//             "id": 332,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "@DemoUser2 has been banned from the server",
//             "authorName": "Mr.Wumpus"
//         },
//         "336": {
//             "created_at": "4/24/2023 10:03:04 PM",
//             "id": 336,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @DemoUser2 to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "340": {
//             "created_at": "4/24/2023 10:04:09 PM",
//             "id": 340,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "@DemoUser2 has been banned from the server",
//             "authorName": "Mr.Wumpus"
//         },
//         "344": {
//             "created_at": "4/24/2023 10:05:15 PM",
//             "id": 344,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @DemoUser2 to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "348": {
//             "created_at": "4/24/2023 10:05:48 PM",
//             "id": 348,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "@DemoUser2 has been banned from the server",
//             "authorName": "Mr.Wumpus"
//         },
//         "352": {
//             "created_at": "4/24/2023 10:06:16 PM",
//             "id": 352,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @DemoUser2 to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "356": {
//             "created_at": "4/24/2023 10:07:04 PM",
//             "id": 356,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "@DemoUser2 has been banned from the server",
//             "authorName": "Mr.Wumpus"
//         },
//         "360": {
//             "created_at": "4/24/2023 10:07:51 PM",
//             "id": 360,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @DemoUser2 to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "364": {
//             "created_at": "4/24/2023 10:08:24 PM",
//             "id": 364,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "@DemoUser2 has been banned from the server",
//             "authorName": "Mr.Wumpus"
//         },
//         "369": {
//             "created_at": "4/24/2023 10:12:27 PM",
//             "id": 369,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @DemoUser2 to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "373": {
//             "created_at": "4/24/2023 10:12:38 PM",
//             "id": 373,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "@DemoUser2 has been banned from the server",
//             "authorName": "Mr.Wumpus"
//         },
//         "392": {
//             "created_at": "4/24/2023 10:50:52 PM",
//             "id": 392,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @DemoUser2 to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "396": {
//             "created_at": "4/24/2023 10:51:39 PM",
//             "id": 396,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "@DemoUser2 has been banned from the server",
//             "authorName": "Mr.Wumpus"
//         },
//         "400": {
//             "created_at": "4/24/2023 10:52:05 PM",
//             "id": 400,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @DemoUser2 to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "404": {
//             "created_at": "4/24/2023 10:57:58 PM",
//             "id": 404,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "@DemoUser2 has been banned from the server",
//             "authorName": "Mr.Wumpus"
//         },
//         "408": {
//             "created_at": "4/24/2023 11:00:08 PM",
//             "id": 408,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @DemoUser2 to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "412": {
//             "created_at": "4/24/2023 11:43:46 PM",
//             "id": 412,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "@DemoUser2 has been banned from the server",
//             "authorName": "Mr.Wumpus"
//         },
//         "416": {
//             "created_at": "4/24/2023 11:44:02 PM",
//             "id": 416,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @DemoUser2 to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "420": {
//             "created_at": "4/24/2023 11:44:22 PM",
//             "id": 420,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "@DemoUser2 has been banned from the server",
//             "authorName": "Mr.Wumpus"
//         },
//         "424": {
//             "created_at": "4/24/2023 11:44:34 PM",
//             "id": 424,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @DemoUser2 to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "428": {
//             "created_at": "4/24/2023 11:44:46 PM",
//             "id": 428,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "@DemoUser2 has been banned from the server",
//             "authorName": "Mr.Wumpus"
//         },
//         "432": {
//             "created_at": "4/24/2023 11:51:53 PM",
//             "id": 432,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @DemoUser2 to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "436": {
//             "created_at": "4/24/2023 11:52:16 PM",
//             "id": 436,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "@DemoUser2 has been banned from the server",
//             "authorName": "Mr.Wumpus"
//         },
//         "761": {
//             "created_at": "5/18/2023 9:05:24 PM",
//             "id": 761,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @DemoUser2 to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "804": {
//             "created_at": "5/29/2023 12:15:30 AM",
//             "id": 804,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @Alan to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "821": {
//             "created_at": "6/14/2023 6:02:45 PM",
//             "id": 821,
//             "channel_id": 2,
//             "author_id": 3,
//             "body": "awdwdwa\nd",
//             "authorName": "DemoUser2"
//         },
//         "901": {
//             "created_at": "6/16/2023 7:24:52 PM",
//             "id": 901,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @Mr.Wumpus to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1892": {
//             "created_at": "7/15/2023 6:29:03 PM",
//             "id": 1892,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "@DemoUser2 has been banned from the server",
//             "authorName": "Mr.Wumpus"
//         },
//         "1896": {
//             "created_at": "7/15/2023 6:30:27 PM",
//             "id": 1896,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @DemoUser2 to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1900": {
//             "created_at": "7/15/2023 6:30:41 PM",
//             "id": 1900,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "@DemoUser2 has been banned from the server",
//             "authorName": "Mr.Wumpus"
//         },
//         "1904": {
//             "created_at": "7/16/2023 4:55:33 PM",
//             "id": 1904,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @DemoUser2 to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1908": {
//             "created_at": "7/19/2023 10:00:58 PM",
//             "id": 1908,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @Stacy to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1909": {
//             "created_at": "7/19/2023 10:00:58 PM",
//             "id": 1909,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @Stacy to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1910": {
//             "created_at": "7/19/2023 10:00:58 PM",
//             "id": 1910,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @Stacy to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1911": {
//             "created_at": "7/19/2023 10:00:58 PM",
//             "id": 1911,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @Stacy to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1912": {
//             "created_at": "7/19/2023 10:00:59 PM",
//             "id": 1912,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @MichaelR to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1913": {
//             "created_at": "7/19/2023 10:00:59 PM",
//             "id": 1913,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @MichaelR to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1914": {
//             "created_at": "7/19/2023 10:00:59 PM",
//             "id": 1914,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @MichaelR to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1915": {
//             "created_at": "7/19/2023 10:01:00 PM",
//             "id": 1915,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @MichaelR to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1916": {
//             "created_at": "7/19/2023 10:01:02 PM",
//             "id": 1916,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @Vivian to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1917": {
//             "created_at": "7/19/2023 10:01:02 PM",
//             "id": 1917,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @Vivian to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1918": {
//             "created_at": "7/19/2023 10:01:02 PM",
//             "id": 1918,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @Vivian to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1919": {
//             "created_at": "7/19/2023 10:01:02 PM",
//             "id": 1919,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @Vivian to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1920": {
//             "created_at": "7/19/2023 10:01:03 PM",
//             "id": 1920,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @KrystalR to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1921": {
//             "created_at": "7/19/2023 10:01:03 PM",
//             "id": 1921,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @KrystalR to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1922": {
//             "created_at": "7/19/2023 10:01:03 PM",
//             "id": 1922,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @KrystalR to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1923": {
//             "created_at": "7/19/2023 10:01:03 PM",
//             "id": 1923,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @KrystalR to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1924": {
//             "created_at": "7/19/2023 10:01:04 PM",
//             "id": 1924,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @Karen to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1925": {
//             "created_at": "7/19/2023 10:01:04 PM",
//             "id": 1925,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @Karen to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1926": {
//             "created_at": "7/19/2023 10:01:05 PM",
//             "id": 1926,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @Karen to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1927": {
//             "created_at": "7/19/2023 10:01:05 PM",
//             "id": 1927,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @Karen to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1928": {
//             "created_at": "7/19/2023 10:01:05 PM",
//             "id": 1928,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @David-allen to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1929": {
//             "created_at": "7/19/2023 10:01:06 PM",
//             "id": 1929,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @David-allen to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1930": {
//             "created_at": "7/19/2023 10:01:06 PM",
//             "id": 1930,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @David-allen to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1931": {
//             "created_at": "7/19/2023 10:01:06 PM",
//             "id": 1931,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @David-allen to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1932": {
//             "created_at": "7/19/2023 10:01:08 PM",
//             "id": 1932,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @1@gmail.com to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1933": {
//             "created_at": "7/19/2023 10:01:09 PM",
//             "id": 1933,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @1@gmail.com to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1934": {
//             "created_at": "7/19/2023 10:01:09 PM",
//             "id": 1934,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @1@gmail.com to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1935": {
//             "created_at": "7/19/2023 10:01:09 PM",
//             "id": 1935,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @1@gmail.com to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1936": {
//             "created_at": "7/19/2023 10:01:14 PM",
//             "id": 1936,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @michaelRK to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1937": {
//             "created_at": "7/19/2023 10:01:14 PM",
//             "id": 1937,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @michaelRK to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1938": {
//             "created_at": "7/19/2023 10:01:14 PM",
//             "id": 1938,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @michaelRK to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1939": {
//             "created_at": "7/19/2023 10:01:14 PM",
//             "id": 1939,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @michaelRK to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1940": {
//             "created_at": "7/19/2023 10:01:15 PM",
//             "id": 1940,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @Nikhil to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1941": {
//             "created_at": "7/19/2023 10:01:15 PM",
//             "id": 1941,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @Nikhil to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1942": {
//             "created_at": "7/19/2023 10:01:15 PM",
//             "id": 1942,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @Nikhil to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1943": {
//             "created_at": "7/19/2023 10:01:15 PM",
//             "id": 1943,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @Nikhil to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1944": {
//             "created_at": "7/19/2023 10:01:17 PM",
//             "id": 1944,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @Gabriel to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1945": {
//             "created_at": "7/19/2023 10:01:17 PM",
//             "id": 1945,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @Gabriel to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1946": {
//             "created_at": "7/19/2023 10:01:17 PM",
//             "id": 1946,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @Tom to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1947": {
//             "created_at": "7/19/2023 10:01:17 PM",
//             "id": 1947,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @Gabriel to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1948": {
//             "created_at": "7/19/2023 10:01:18 PM",
//             "id": 1948,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @Tom to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1949": {
//             "created_at": "7/19/2023 10:01:18 PM",
//             "id": 1949,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @Gabriel to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1950": {
//             "created_at": "7/19/2023 10:01:18 PM",
//             "id": 1950,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @Tom to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1951": {
//             "created_at": "7/19/2023 10:01:18 PM",
//             "id": 1951,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @Tom to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1952": {
//             "created_at": "7/19/2023 10:01:24 PM",
//             "id": 1952,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @Ayce machine to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1953": {
//             "created_at": "7/19/2023 10:01:24 PM",
//             "id": 1953,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @Ayce machine to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1954": {
//             "created_at": "7/19/2023 10:01:24 PM",
//             "id": 1954,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @Ayce machine to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1955": {
//             "created_at": "7/19/2023 10:01:24 PM",
//             "id": 1955,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @Ayce machine to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1956": {
//             "created_at": "7/19/2023 10:01:45 PM",
//             "id": 1956,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @Iascone to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1957": {
//             "created_at": "7/19/2023 10:01:45 PM",
//             "id": 1957,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @Iascone to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1958": {
//             "created_at": "7/19/2023 10:01:45 PM",
//             "id": 1958,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @Iascone to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1959": {
//             "created_at": "7/19/2023 10:01:46 PM",
//             "id": 1959,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @Iascone to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1960": {
//             "created_at": "7/19/2023 10:01:46 PM",
//             "id": 1960,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @Jwong to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1961": {
//             "created_at": "7/19/2023 10:01:46 PM",
//             "id": 1961,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @Jwong to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1962": {
//             "created_at": "7/19/2023 10:01:46 PM",
//             "id": 1962,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @Jwong to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1963": {
//             "created_at": "7/19/2023 10:01:47 PM",
//             "id": 1963,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @Jwong to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1964": {
//             "created_at": "7/19/2023 10:01:47 PM",
//             "id": 1964,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @MichaelC to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1965": {
//             "created_at": "7/19/2023 10:01:48 PM",
//             "id": 1965,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @MichaelC to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1966": {
//             "created_at": "7/19/2023 10:01:48 PM",
//             "id": 1966,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @MichaelC to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1967": {
//             "created_at": "7/19/2023 10:01:48 PM",
//             "id": 1967,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @MichaelC to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1968": {
//             "created_at": "7/19/2023 10:01:49 PM",
//             "id": 1968,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @MichaelH to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1969": {
//             "created_at": "7/19/2023 10:01:49 PM",
//             "id": 1969,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @MichaelH to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1970": {
//             "created_at": "7/19/2023 10:01:50 PM",
//             "id": 1970,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @MichaelH to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1971": {
//             "created_at": "7/19/2023 10:01:50 PM",
//             "id": 1971,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @MichaelH to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1972": {
//             "created_at": "7/19/2023 10:01:50 PM",
//             "id": 1972,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @Vera to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1973": {
//             "created_at": "7/19/2023 10:01:51 PM",
//             "id": 1973,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @Vera to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1974": {
//             "created_at": "7/19/2023 10:01:51 PM",
//             "id": 1974,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @Vera to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1975": {
//             "created_at": "7/19/2023 10:01:51 PM",
//             "id": 1975,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @Vera to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1976": {
//             "created_at": "7/19/2023 10:01:52 PM",
//             "id": 1976,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @Eric to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1977": {
//             "created_at": "7/19/2023 10:01:52 PM",
//             "id": 1977,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @Eric to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1978": {
//             "created_at": "7/19/2023 10:01:53 PM",
//             "id": 1978,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @Eric to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1979": {
//             "created_at": "7/19/2023 10:01:53 PM",
//             "id": 1979,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @Eric to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1980": {
//             "created_at": "7/19/2023 10:01:53 PM",
//             "id": 1980,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @Evan to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1981": {
//             "created_at": "7/19/2023 10:01:54 PM",
//             "id": 1981,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @Evan to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1982": {
//             "created_at": "7/19/2023 10:01:54 PM",
//             "id": 1982,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @Evan to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1983": {
//             "created_at": "7/19/2023 10:01:54 PM",
//             "id": 1983,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @Evan to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1984": {
//             "created_at": "7/19/2023 10:01:55 PM",
//             "id": 1984,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @LinShen to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1985": {
//             "created_at": "7/19/2023 10:01:55 PM",
//             "id": 1985,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @LinShen to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1986": {
//             "created_at": "7/19/2023 10:01:55 PM",
//             "id": 1986,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @LinShen to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1987": {
//             "created_at": "7/19/2023 10:01:56 PM",
//             "id": 1987,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @LinShen to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1988": {
//             "created_at": "7/19/2023 10:01:56 PM",
//             "id": 1988,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @Kevin to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1989": {
//             "created_at": "7/19/2023 10:01:56 PM",
//             "id": 1989,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @Kevin to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1990": {
//             "created_at": "7/19/2023 10:01:57 PM",
//             "id": 1990,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @Kevin to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1991": {
//             "created_at": "7/19/2023 10:01:57 PM",
//             "id": 1991,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @Kevin to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1992": {
//             "created_at": "7/19/2023 10:01:58 PM",
//             "id": 1992,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @Madeleine to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1993": {
//             "created_at": "7/19/2023 10:01:58 PM",
//             "id": 1993,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @Madeleine to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1994": {
//             "created_at": "7/19/2023 10:01:59 PM",
//             "id": 1994,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @Madeleine to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1995": {
//             "created_at": "7/19/2023 10:02:00 PM",
//             "id": 1995,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @Madeleine to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1996": {
//             "created_at": "7/19/2023 10:02:00 PM",
//             "id": 1996,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @Leo to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1997": {
//             "created_at": "7/19/2023 10:02:00 PM",
//             "id": 1997,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @Leo to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1998": {
//             "created_at": "7/19/2023 10:02:01 PM",
//             "id": 1998,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @Leo to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "1999": {
//             "created_at": "7/19/2023 10:02:01 PM",
//             "id": 1999,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @Leo to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "2000": {
//             "created_at": "7/19/2023 10:02:02 PM",
//             "id": 2000,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @DavidZ to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "2001": {
//             "created_at": "7/19/2023 10:02:02 PM",
//             "id": 2001,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @DavidZ to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "2002": {
//             "created_at": "7/19/2023 10:02:03 PM",
//             "id": 2002,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @DavidZ to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "2003": {
//             "created_at": "7/19/2023 10:02:03 PM",
//             "id": 2003,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @DavidZ to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "2004": {
//             "created_at": "7/19/2023 10:02:04 PM",
//             "id": 2004,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @Naran to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "2005": {
//             "created_at": "7/19/2023 10:02:04 PM",
//             "id": 2005,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @Naran to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "2006": {
//             "created_at": "7/19/2023 10:02:04 PM",
//             "id": 2006,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @Naran to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "2007": {
//             "created_at": "7/19/2023 10:02:04 PM",
//             "id": 2007,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @Naran to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "2008": {
//             "created_at": "7/19/2023 10:02:05 PM",
//             "id": 2008,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @Duncan to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "2009": {
//             "created_at": "7/19/2023 10:02:05 PM",
//             "id": 2009,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @Duncan to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "2010": {
//             "created_at": "7/19/2023 10:02:05 PM",
//             "id": 2010,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @Duncan to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "2011": {
//             "created_at": "7/19/2023 10:02:06 PM",
//             "id": 2011,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @Duncan to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "2012": {
//             "created_at": "7/19/2023 10:02:06 PM",
//             "id": 2012,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @Alisher to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "2013": {
//             "created_at": "7/19/2023 10:02:06 PM",
//             "id": 2013,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @Alisher to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "2014": {
//             "created_at": "7/19/2023 10:02:07 PM",
//             "id": 2014,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @Alisher to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "2015": {
//             "created_at": "7/19/2023 10:02:07 PM",
//             "id": 2015,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @Alisher to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "2016": {
//             "created_at": "7/19/2023 10:02:07 PM",
//             "id": 2016,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @ff to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "2017": {
//             "created_at": "7/19/2023 10:02:08 PM",
//             "id": 2017,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @ff to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "2018": {
//             "created_at": "7/19/2023 10:02:08 PM",
//             "id": 2018,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @ff to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "2019": {
//             "created_at": "7/19/2023 10:02:08 PM",
//             "id": 2019,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @ff to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "2020": {
//             "created_at": "7/19/2023 10:02:09 PM",
//             "id": 2020,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @spamuser0@strife.com to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "2021": {
//             "created_at": "7/19/2023 10:02:09 PM",
//             "id": 2021,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @spamuser0@strife.com to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "2022": {
//             "created_at": "7/19/2023 10:02:09 PM",
//             "id": 2022,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @spamuser0@strife.com to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "2023": {
//             "created_at": "7/19/2023 10:02:10 PM",
//             "id": 2023,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @spamuser0@strife.com to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "2024": {
//             "created_at": "7/19/2023 10:02:10 PM",
//             "id": 2024,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @miker@1.com to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "2025": {
//             "created_at": "7/19/2023 10:02:10 PM",
//             "id": 2025,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @miker@1.com to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "2026": {
//             "created_at": "7/19/2023 10:02:11 PM",
//             "id": 2026,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @miker@1.com to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "2027": {
//             "created_at": "7/19/2023 10:02:11 PM",
//             "id": 2027,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @miker@1.com to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "2028": {
//             "created_at": "7/19/2023 10:02:11 PM",
//             "id": 2028,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @helloworld@1.com to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "2029": {
//             "created_at": "7/19/2023 10:02:12 PM",
//             "id": 2029,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @helloworld@1.com to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "2030": {
//             "created_at": "7/19/2023 10:02:12 PM",
//             "id": 2030,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @helloworld@1.com to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "2031": {
//             "created_at": "7/19/2023 10:02:12 PM",
//             "id": 2031,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @helloworld@1.com to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "2032": {
//             "created_at": "7/19/2023 10:02:13 PM",
//             "id": 2032,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @DemoUser1 to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "2033": {
//             "created_at": "7/19/2023 10:02:13 PM",
//             "id": 2033,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @DemoUser1 to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "2034": {
//             "created_at": "7/19/2023 10:02:13 PM",
//             "id": 2034,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @DemoUser1 to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "2035": {
//             "created_at": "7/19/2023 10:02:14 PM",
//             "id": 2035,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @DemoUser1 to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "2036": {
//             "created_at": "7/19/2023 10:02:14 PM",
//             "id": 2036,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @moomooman to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "2037": {
//             "created_at": "7/19/2023 10:02:14 PM",
//             "id": 2037,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @moomooman to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "2038": {
//             "created_at": "7/19/2023 10:02:15 PM",
//             "id": 2038,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @moomooman to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "2039": {
//             "created_at": "7/19/2023 10:02:15 PM",
//             "id": 2039,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @moomooman to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "2040": {
//             "created_at": "7/19/2023 10:02:15 PM",
//             "id": 2040,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @miker1@gmail.com to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "2041": {
//             "created_at": "7/19/2023 10:02:16 PM",
//             "id": 2041,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @miker1@gmail.com to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "2042": {
//             "created_at": "7/19/2023 10:02:16 PM",
//             "id": 2042,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @miker1@gmail.com to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "2043": {
//             "created_at": "7/19/2023 10:02:16 PM",
//             "id": 2043,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @miker1@gmail.com to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "2096": {
//             "created_at": "7/21/2023 12:02:09 AM",
//             "id": 2096,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "@Gabriel has been banned from the server",
//             "authorName": "Mr.Wumpus"
//         },
//         "2100": {
//             "created_at": "7/21/2023 12:02:45 AM",
//             "id": 2100,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "@David-allen has been banned from the server",
//             "authorName": "Mr.Wumpus"
//         },
//         "2869": {
//             "created_at": "8/5/2023 7:27:07 PM",
//             "id": 2869,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "Welcome @miker@1354r3.com to Demo Server!",
//             "authorName": "Mr.Wumpus"
//         },
//         "2894": {
//             "created_at": "8/5/2023 7:38:37 PM",
//             "id": 2894,
//             "channel_id": 2,
//             "author_id": 1,
//             "body": "@miker@1354r3.com has left the server",
//             "authorName": "Mr.Wumpus"
//         },
//         "2915": {
//             "created_at": "8/12/2023 1:52:57 PM",
//             "id": 2915,
//             "channel_id": 2,
//             "author_id": 2,
//             "body": "dwwdadad",
//             "authorName": "DemoUser1"
//         },
//         "2917": {
//             "created_at": "8/12/2023 5:33:54 PM",
//             "id": 2917,
//             "channel_id": 2,
//             "author_id": 2,
//             "body": "dwqdqwd",
//             "authorName": "DemoUser1"
//         },
//         "2918": {
//             "created_at": "8/12/2023 5:33:55 PM",
//             "id": 2918,
//             "channel_id": 2,
//             "author_id": 2,
//             "body": "ded",
//             "authorName": "DemoUser1"
//         },
//         "2919": {
//             "created_at": "8/12/2023 5:33:55 PM",
//             "id": 2919,
//             "channel_id": 2,
//             "author_id": 2,
//             "body": "wadw",
//             "authorName": "DemoUser1"
//         },
//         "2922": {
//             "created_at": "8/12/2023 5:33:56 PM",
//             "id": 2922,
//             "channel_id": 2,
//             "author_id": 2,
//             "body": "dwa",
//             "authorName": "DemoUser1"
//         },
//         "2923": {
//             "created_at": "8/12/2023 5:33:56 PM",
//             "id": 2923,
//             "channel_id": 2,
//             "author_id": 2,
//             "body": "daw",
//             "authorName": "DemoUser1"
//         },
//         "2924": {
//             "created_at": "8/12/2023 5:33:56 PM",
//             "id": 2924,
//             "channel_id": 2,
//             "author_id": 2,
//             "body": "d",
//             "authorName": "DemoUser1"
//         },
//         "2925": {
//             "created_at": "8/12/2023 5:33:56 PM",
//             "id": 2925,
//             "channel_id": 2,
//             "author_id": 2,
//             "body": "ad",
//             "authorName": "DemoUser1"
//         },
//         "2926": {
//             "created_at": "8/12/2023 5:33:56 PM",
//             "id": 2926,
//             "channel_id": 2,
//             "author_id": 2,
//             "body": "awd",
//             "authorName": "DemoUser1"
//         },
//         "2927": {
//             "created_at": "8/12/2023 5:33:56 PM",
//             "id": 2927,
//             "channel_id": 2,
//             "author_id": 2,
//             "body": "awd",
//             "authorName": "DemoUser1"
//         },
//         "2928": {
//             "created_at": "8/12/2023 5:33:57 PM",
//             "id": 2928,
//             "channel_id": 2,
//             "author_id": 2,
//             "body": "aw",
//             "authorName": "DemoUser1"
//         }
//     })



//     const scrollToBottomOfChat = (speed) => {
//         if (scrollRef?.current) {
//             scrollRef.current.scrollIntoView({ behavior: speed });
//         }
//     }

//     const scrollToBottomOfChat2 = (speed) => {
//         let oLScrollerSpacer = document.querySelector(".ol-scroller-spacer");

//         if (oLScrollerSpacer) {
//             // oLScrollerSpacer.scrollIntoView({ behavior: speed,  });
//             oLScrollerSpacer.scrollIntoView(true);

//         }
//     }



//     const expand = (e) => {
//         if (e.shiftKey) {
//             setSHIFT(true);
//         }
//         else {
//             setSHIFT(false);
//         }
//     }
//     const expandOff = (e) => {
//         if (!e.shiftKey) {
//             setSHIFT(false);
//         }
//     }

//     const render_User_PFP = user_Default_PFP;

//     return (

//         <main className="server-chat-container">
//             <div className="message-wrapper">
//                 <div className="chat-scroller auto-scroll-raw-attributes global-scroller-base disableScrollAnchor reactive-scroller">
//                     <div className="chat-scroller-content">
//                         <ol className="chat-scroller-inner">
//                             <div className="chat-divider">
//                                 <span className="chat-divider-content"></span>
//                             </div>

//                             {
//                                 messagesToBeMapped.map((message, msgIdx) => {
//                                     return (
//                                         <li className="chat-message-item" key={message.id} ref={expandRef}
//                                             onMouseEnter={(e) => {
//                                                 e.stopPropagation();
//                                                 // setEnableGrowth(true);
//                                                 if (expandRef?.current.focus) {
//                                                     console.log("focused")
//                                                 }


//                                                 // document.addEventListener("keydown",expand);
//                                             }}
//                                             onMouseLeave={(e) => {
//                                                 e.stopPropagation();
//                                                 // setEnableGrowth(false);
//                                                 // document.removeEventListener("keydown",expand);
//                                                 // setSHIFT(false); 
//                                             }}
//                                             onKeyDown={(e) => {
//                                                 e.preventDefault();
//                                                 e.stopPropagation();
//                                                 if (expandRef?.current.focus && e.shiftKey) {
//                                                     setSHIFT(true);
//                                                 }
//                                             }}
//                                             onKeyUp={(e) => {
//                                                 e.preventDefault();
//                                                 e.stopPropagation();
//                                                 if (!e.shiftKey) {
//                                                     setSHIFT(false);
//                                                     setReveal(false);
//                                                     setKeyCD(e.code);
//                                                 }
//                                             }}

//                                         >
//                                             <div className="message-wrapper1" tabIndex={-1}>

//                                                 <div className="message-wrapper-contents">

//                                                     <h2 className="chat-member-username-header">
//                                                         <span className="chat-member-username-wrap">
//                                                             <span className="chat-member-username">{message.authorName}</span>
//                                                         </span>
//                                                         <span className="chat-message-timestamp-wrap">
//                                                             <p className="chat-message-timestamp">
//                                                                 {message.created_at}
//                                                             </p>
//                                                         </span>
//                                                     </h2>
//                                                     <div className="chat-message">
//                                                         {message.body}
//                                                     </div>
//                                                 </div>
//                                                 <div className="message-accessories"></div>
//                                                 <div className="message-accessories-button-container">
//                                                     <div className="message-accessories-button-layer" role="group" aria-label="Message Actions">
//                                                         <div className={`message-accessories-button-wrapper1`} >

//                                                             {
//                                                                 _SHIFT === true ? (
//                                                                     <div className="message-accessories-button" role="button" tabIndex={0} data-msg-control="1" data-tooltip-id="msg-control" data-tooltip-place="top" data-tooltip-content={'Copy Message ID'}>
//                                                                         <CopyIDIcon className="copy-msg-id-icon" width={24} height={24} />
//                                                                     </div>
//                                                                 ) : ("")
//                                                             }
//                                                             {
//                                                                 _SHIFT === true ? (
//                                                                     <div className="message-accessories-button" role="button" tabIndex={0} data-msg-control="1" data-tooltip-id="msg-control" data-tooltip-place="top" data-tooltip-content={'Copy Link'}>
//                                                                         <ChainLinkIcon className="copy-msg-link-icon" width={24} height={24} />
//                                                                     </div>
//                                                                 ) : ("")
//                                                             }
//                                                             {
//                                                                 _SHIFT === true ? (
//                                                                     <div className="message-accessories-button" role="button" tabIndex={0} data-msg-control="1" data-tooltip-id="msg-control" data-tooltip-place="top" data-tooltip-content={'Mark Unread'}>
//                                                                         <MarkUnReadIcon className="mark-msg-unread-icon" width={24} height={24} />
//                                                                     </div>
//                                                                 ) : ("")
//                                                             }
//                                                             {
//                                                                 _SHIFT === true ? (
//                                                                     <div className="message-accessories-button" role="button" tabIndex={0} data-msg-control="1" data-tooltip-id="msg-control" data-tooltip-place="top" data-tooltip-content={'Pin Message'}>
//                                                                         <PinnedIcon className="pinned-msg-icon" width={24} height={24} />
//                                                                     </div>
//                                                                 ) : ("")
//                                                             }


//                                                             {
//                                                                 _SHIFT === true ? (
//                                                                     <div className="message-accessories-button" role="button" tabIndex={0} data-msg-control="1" data-tooltip-id="msg-control" data-tooltip-place="top" data-tooltip-content={'Reply'}>
//                                                                         <ReplyArrowIcon className="reply-to-msg-icon" width={24} height={24} />
//                                                                     </div>
//                                                                 ) : ("")
//                                                             }


//                                                             <div className="message-accessories-button" role="button" tabIndex={0} data-msg-control="1" data-tooltip-id="msg-control" data-tooltip-place="top" data-tooltip-content={'Add Reaction'}>
//                                                                 <AddReactionIcon className="add-reaction-icon" width={18} height={18} />
//                                                             </div>

//                                                             <div className="message-accessories-button" role="button" tabIndex={0} data-msg-control="2" data-tooltip-id="message-control-super-reaction" data-tooltip-place="top" data-tooltip-content={"Add Super Reaction"}>
//                                                                 <AddSuperReactionIcon className="add-super-reaction-icon" width={18} height={18} />
//                                                             </div>

//                                                             <div className="message-accessories-button" role="button" tabIndex={0} data-msg-control="1" data-tooltip-id="msg-control" data-tooltip-place="top" data-tooltip-content={'Edit'}>
//                                                                 <PenEditIcon className="pen-icon" width={16} height={16} />
//                                                             </div>
//                                                             <div className="message-accessories-button" role="button" tabIndex={0} data-msg-control="1" data-tooltip-id="msg-control" data-tooltip-place="top" data-tooltip-content={'Create Thread'}>
//                                                                 <ThreadsIcon className="edit-msg-create-thread-icon" width={24} height={24} />
//                                                             </div>

//                                                             <div className="message-accessories-button" role="button" tabIndex={0} data-msg-control="1" data-tooltip-id="msg-control" data-tooltip-place="top" data-tooltip-content={'Delete'}>
//                                                                 <TrashCanIcon className="delete-msg-icon danger-warning-del-msg" width={24} height={24} />
//                                                             </div>

//                                                             {
//                                                                 _SHIFT === false ? (
//                                                                     <div className="message-accessories-button" role="button" tabIndex={0} data-msg-control="1" data-tooltip-id="msg-control" data-tooltip-place="top" data-tooltip-content={'More'}>
//                                                                         <OverFlowEllipsisIcon className="edit-msg-more-options-icon" width={24} height={24} />
//                                                                     </div>
//                                                                 ) : ("")
//                                                             }
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </li>

//                                     )
//                                 })
//                             }


//                             <div className="ol-scroller-spacer" ref={el => scrollRef.current = el} />
//                         </ol>
//                     </div>
//                 </div>
//             </div>
//             <Tooltip className="thread-tool-tip" id="msg-control" position={"top"} />
//             <Tooltip
//                 className="thread-tool-tip"
//                 id="message-control-super-reaction"
//                 position={"top"}
//                 render={({ content, activeAnchor }) => (
//                     <div className="add-a-super-reaction-tool-tip-container">
//                         {activeAnchor?.getAttribute('data-msg-control') === "2" ? (<StrifeNitroBadgeIcon className="msg-nitro-wheel-icon" height={24} width={24} />) : ("")}
//                         <div className="tool-tip-contents">
//                             {content}
//                         </div>
//                     </div>
//                 )}
//             />
//         </main>

//         // {/* <li className={`chat-message-item`}
//         //     onMouseEnter={(e) => {
//         //         setEnableGrowth(true);
//         //         expandRef.current.focus();
//         //     }}
//         //     onMouseLeave={(e) => {
//         //         setEnableGrowth(false);
//         //         setSHIFT(false);
//         //         expandRef.current.blur();
//         //         console.log('remved listen shift')
//         //     }}>
//         //     <div className="message-wrapper1"
//         //         ref={expandRef}
//         //         onKeyDown={(e) => {
//         //             // if (enableGrowth === true) {
//         //             if (e.shiftKey) {
//         //                 console.log('currently holding shift')
//         //                 setSHIFT(true)
//         //                 setReveal(true);
//         //                 setKeyCD(e.code);
//         //             }
//         //         }
//         //             // }
//         //         }
//         //         onKeyUp={(e) => {
//         //             if (!e.shiftKey) {
//         //                 setSHIFT(false);
//         //                 setReveal(false);
//         //                 setKeyCD(e.code);
//         //             }
//         //         }}
//         //         tabIndex={0}
//         //     >
//         //         <div className="message-wrapper-contents">

//         //             <div className={`${props.currentUser.photo === undefined ?
//         //                 `chat-user-pfp-svg-render color-${props.currentUser.color_tag}` :
//         //                 `chat-member-avatar-img`}`}>
//         //                 <img src={`${props.currentUser.photo === undefined
//         //                     ? render_User_PFP : props.currentUser.photo}`} alt="SMPFP" />
//         //             </div>

//         //             <h2 className="chat-member-username-header">
//         //                 <span className="chat-member-username-wrap">
//         //                     <span className="chat-member-username">{props.currentUser.username}</span>
//         //                 </span>
//         //                 <span className="chat-message-timestamp-wrap">
//         //                     <p className="chat-message-timestamp">
//         //                         5:23pm
//         //                     </p>
//         //                 </span>
//         //             </h2>
//         //             <div className="chat-message">
//         //                 mooo mooo mooo mooo
//         //             </div>
//         //         </div>
//         //         <div className="message-accessories"></div>
//         //         <div className="message-accessories-button-container">
//         //             <div className="message-accessories-button-layer" role="group">
//         //                 <div className={`message-accessories-button-wrapper1`} >

//         //                     {
//         //                         _SHIFT === true ? (
//         //                             <div className="message-accessories-button" data-msg-control="1" data-tooltip-id="msg-control" data-tooltip-place="top" data-tooltip-content={'Copy Message ID'}>
//         //                                 <CopyIDIcon className="copy-msg-id-icon" width={24} height={24} />
//         //                             </div>
//         //                         ) : ("")
//         //                     }
//         //                     {
//         //                         _SHIFT === true ? (
//         //                             <div className="message-accessories-button" data-msg-control="1" data-tooltip-id="msg-control" data-tooltip-place="top" data-tooltip-content={'Copy Link'}>
//         //                                 <ChainLinkIcon className="copy-msg-link-icon" width={24} height={24} />
//         //                             </div>
//         //                         ) : ("")
//         //                     }
//         //                     {
//         //                         _SHIFT === true ? (
//         //                             <div className="message-accessories-button" data-msg-control="1" data-tooltip-id="msg-control" data-tooltip-place="top" data-tooltip-content={'Mark Unread'}>
//         //                                 <MarkUnReadIcon className="mark-msg-unread-icon" width={24} height={24} />
//         //                             </div>
//         //                         ) : ("")
//         //                     }
//         //                     {
//         //                         _SHIFT === true ? (
//         //                             <div className="message-accessories-button" data-msg-control="1" data-tooltip-id="msg-control" data-tooltip-place="top" data-tooltip-content={'Pin Message'}>
//         //                                 <PinnedIcon className="pinned-msg-icon" width={24} height={24} />
//         //                             </div>
//         //                         ) : ("")
//         //                     }


//         //                     {
//         //                         _SHIFT === true ? (
//         //                             <div className="message-accessories-button" data-msg-control="1" data-tooltip-id="msg-control" data-tooltip-place="top" data-tooltip-content={'Reply'}>
//         //                                 <ReplyArrowIcon className="reply-to-msg-icon" width={24} height={24} />
//         //                             </div>
//         //                         ) : ("")
//         //                     }


//         //                     <div className="message-accessories-button" data-msg-control="1" data-tooltip-id="msg-control" data-tooltip-place="top" data-tooltip-content={'Add Reaction'}>
//         //                         <AddReactionIcon className="add-reaction-icon" width={18} height={18} />
//         //                     </div>

//         //                     <div className="message-accessories-button" data-msg-control="2" data-tooltip-id="message-control-super-reaction" data-tooltip-place="top" data-tooltip-content={"Add Super Reaction"}>
//         //                         <AddSuperReactionIcon className="add-super-reaction-icon" width={18} height={18} />
//         //                     </div>

//         //                     <div className="message-accessories-button" data-msg-control="1" data-tooltip-id="msg-control" data-tooltip-place="top" data-tooltip-content={'Edit'}>
//         //                         <PenEditIcon className="pen-icon" width={16} height={16} />
//         //                     </div>
//         //                     <div className="message-accessories-button" data-msg-control="1" data-tooltip-id="msg-control" data-tooltip-place="top" data-tooltip-content={'Create Thread'}>
//         //                         <ThreadsIcon className="edit-msg-create-thread-icon" width={24} height={24} />
//         //                     </div>

//         //                     <div className="message-accessories-button" data-msg-control="1" data-tooltip-id="msg-control" data-tooltip-place="top" data-tooltip-content={'Delete'}>
//         //                         <TrashCanIcon className="delete-msg-icon danger-warning-del-msg" width={24} height={24} />
//         //                     </div>

//         //                     {
//         //                         _SHIFT === false ? (
//         //                             <div className="message-accessories-button" data-msg-control="1" data-tooltip-id="msg-control" data-tooltip-place="top" data-tooltip-content={'More'}>
//         //                                 <OverFlowEllipsisIcon className="edit-msg-more-options-icon" width={24} height={24} />
//         //                             </div>
//         //                         ) : ("")
//         //                     }
//         //                 </div>
//         //             </div>
//         //         </div>
//         //     </div>
//         // </li> */}

//     )
// }

// export default TestPage33;

