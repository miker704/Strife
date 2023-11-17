/**
 * Custom hook designed to return the appropriate url for create consumer, based on whether the current build mode is in 
 * production or development and its production development service uses a combination of config environment vars that must be
 * created within the production deployment platform itself.
 * @param {void} none
 * @returns {String} string representing the url to be used by @railsActionCable createConsumer function to hook up a webSocket.
 */

export const useCreateConsumerCableURL = () => {
    const LOCAL_HOST_CABLE_URL = 'ws://localhost:3000/cable';
    if (process.env.NODE_ENV !== "production") {
        console.info(`%c CURRENTLY USING ${process.env.NODE_ENV}, CONNECTED TO LOCAL HOST CABLE URL : `, "color:#05dc28", LOCAL_HOST_CABLE_URL);
        return LOCAL_HOST_CABLE_URL;
    }
    else {
        console.log(`%c CURRENTLY USING ${process.env.NODE_ENV}, CONNECTED TO URL:`, "color:#FF0000", process.env.CABLE_URL);
        return process.env.CABLE_URL;
    }
}