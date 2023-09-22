import { connect } from "react-redux";
import { withRouter } from "react-router";
import LoadingScreen from "./loading_screen";
import { receiveStrifeB0t } from "../../../actions/session_actions";
import { closeModal } from "../../../actions/modal_actions";

const mSTP = (state) => {


    //current discord loading messages as of sep 2, 2022
    const randomLoadingMessages = [
        // "Welcome to Strife",
        // "Welcome to $TR!F3",
        "Strife`s alternative spelling is STRIFE or $TR!F3",
        "Strife was almost called Bonfire before we picked our name. It was meant to be nice and cozy.",
        "Beep...bo...boo...bee...bop...bo...boo...bop...bo...boo...beep",
        "Loading ...",
        "Strife was almost called Wyvern before we picked our name. Not too proud of that one.",
        "Strife is a Discord Clone made by Michael R. for App Academy Fullstack Project.",
        "Strife is a full blown clone of Discord.",
        "Our logo's name is Mr.Wumpus.",
        "There are a bunch of hidden Easter Eggs in the app that happen when you click certain things...",
        "Strife started as a game company making a mobile game called Fates Forever.",
        "Strife's official birthday is June 19, 2022.",
        "We came up with the idea of Strife Nitro over morning breakfast potatoes.",
        "Strife is a synonym for discord",
        "Discord - disagreement between people.",
        "Strife - angry or bitter disagreement over fundamental issues; conflict",
        "Our mascot, Wumpus, was originally created as a character with no friends :(",
        "In Strife's early days, light theme was the only theme. Scary times.",
        "In the ancient days, Strife started as a browser-only app.",
        "Our HypeSquad program has three houses you can be sorted in to by taking the in-app quiz: Bravery, Balance, and Brilliance.",
        "The character on our 404 page is a robot hamster named Nelly.",
        "You can play our version of the Snake game on our 404 page by pressing a ~secret~ button.",
        "There's a very small—and we mean small—chance you can get a secret ringtone when calling someone. Good luck!",
        "Our old Partner mascot was an elf named Springle. He recently retired.",
        //tips
        "You can type /nick to quickly change your nickname in a server.",
        "Type a plus sign before an emoji name to turn it into a reaction.",
        "Right click to pin messages in a channel or DM to save them for later.",
        "Change each participant's volume by right-clicking them in a call.",
        "You can drag and drop files onto Strife to upload them.",
        "You can join up to 100 servers.",
        "You can create channel categories to group and organize your channels.",
        "Link your favorite social media accounts in the connections settings.",
        "Customize Strife's appearance in the user settings menu.",
        "Hide muted channels in a server by right clicking the server name.",
        "Highlight text in your chat bar to bold, use italics, and more.",
        "Share what you're playing by using the Game Activity settings.",
        "Type /tenor or /giphy + anything to find a GIF for that topic!",
        "Drag and drop servers on top of each other to create server folders.",
        "Click the compass in your server list to find new servers.",
        "Group DMs can have up to ten members.",
        "Click your avatar in the lower-left corner to set a custom status.",
        "You can temporarily mute a server or channel by right-clicking it.",
        "A red mic icon means that person has been muted by a server admin.",
        "The top-most role for a user defines that user's color.",
        "Hover a GIF and click the star to save it to your favorites.",
        "Click a server name in the emoji picker to hide that server's emoji.",
        "Characters like @, #, !, and * will narrow Quick Switcher results.",
        "You can type /tableflip and /unflip to spice up your messages.",
        "You can use Streamer Mode to hide personal details while streaming.",
        //keybind tips
        "$[](quickSwitcherHook) to quickly find a previous conversation or channel.",
        "$[](markUnreadHook) a message to mark it as unread.",
        "$[](markServerUnreadHook) to mark an entire server as read.",
        "$[](navigateUnreadHook) or $[](downHook) will navigate between unread channels.",
        "Use $[](keyboardShortcutsHook) to bring up the list of keyboard shortcuts.",
        "$[](messageNewlineHook) to make a new line without sending your message.",
        "Holding $[](shiftHook) while clicking emoji allows you to send multiple emoji.",
        "You can press $[](upHook) to quickly edit your most recent message."


    ]

    const pickRandomLoadingMessage = () => {
        const msgIdx = Math.floor(Math.random() * randomLoadingMessages.length);
        return randomLoadingMessages[msgIdx];
    }

    const selectedLoadingMsg = pickRandomLoadingMessage();



    return {
        currentUserId: state.session.id,
        selectedLoadingMsg: selectedLoadingMsg,
        ui_modal: state.ui.modal,
    }
}


const mDTP = (dispatch) => {
    return {
        receiveStrifeB0t: () => dispatch(receiveStrifeB0t()),
        closeModal: () => dispatch(closeModal()),
    }
}



const LoadingScreenContainer = withRouter(connect(mSTP,mDTP)(LoadingScreen));
export default LoadingScreenContainer;