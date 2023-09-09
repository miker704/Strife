export const useToolTipFullTimeStamp = (timeOfCreation) => {
    const date = new Date(timeOfCreation);
    const dateOptions = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    let timeOptions = { hour: 'numeric', minute: 'numeric' };
    let formattedTime = `${date.toLocaleString([], dateOptions)} ${date.toLocaleString([], timeOptions)}`
    return formattedTime;
}

export const useFormatTimeStampMessageBody = (timeOfCreation) => {
    const date = new Date(timeOfCreation);
    const now = new Date();
    const startOfDay = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate()
    ).getTime();

    const startOfYesterday = startOfDay - (1000 * 60 * 60 * 24);
    let formattedTime = date.toLocaleTimeString([], {
        timeStyle: 'short'
    });
    if (date.getTime() < startOfYesterday) {
        let dateOptions = { month: '2-digit', day: '2-digit', year: 'numeric' };
        let timeOptions = { hour: 'numeric', minute: 'numeric' }
        formattedTime = `${date.toLocaleString([], dateOptions)} ${date.toLocaleString([], timeOptions)}`
    } else if (date.getTime() < startOfDay) {
        formattedTime = `Yesterday at ${formattedTime}`;
    }
    else {
        formattedTime = `Today at ${formattedTime}`;
    }
    return formattedTime;
}
