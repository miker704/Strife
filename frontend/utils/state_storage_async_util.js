import * as cacheMyState from 'lscache';

export const loadMyState = () => {

    try {
        // flush expired data from browser cache top make room when storage exceeds of ~ 5mb
        cacheMyState.flushExpired();
        const syncedState = cacheMyState.get('state');
        if (!syncedState) { return undefined; }
        return JSON.parse(syncedState);
    }
    catch (err) {
        return undefined;
    }

}


export const saveMyState = () => {
    try {
        const syncedState = JSON.stringify(state);
        cacheMyState.set('state', syncedState, 10);
        //set the state every 10 mins
    }
    catch {

    }
}