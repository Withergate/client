import {
    fetchClan,
    fetchClans,
    fetchLocations,
    fetchNotifications,
    fetchTurn,
    fetchVersion,
    fetchMarketOffers
} from '../services/dataService';

export const FETCH_CLAN = 'FETCH_CLAN';
export const FETCH_CLAN_PENDING = 'FETCH_CLAN_PENDING';
export const FETCH_CLAN_FULFILLED = 'FETCH_CLAN_FULFILLED';
export const FETCH_CLAN_REJECTED = 'FETCH_CLAN_REJECTED';

export const FETCH_CLANS = 'FETCH_CLANS';
export const FETCH_CLANS_PENDING = 'FETCH_CLANS_PENDING';
export const FETCH_CLANS_FULFILLED = 'FETCH_CLANS_FULFILLED';
export const FETCH_CLANS_REJECTED = 'FETCH_CLANS_REJECTED';

export const FETCH_LOCATIONS = 'FETCH_LOCATIONS';
export const FETCH_LOCATIONS_PENDING = 'FETCH_LOCATIONS_PENDING';
export const FETCH_LOCATIONS_FULFILLED = 'FETCH_LOCATIONS_FULFILLED';
export const FETCH_LOCATIONS_REJECTED = 'FETCH_LOCATIONS_REJECTED';

export const FETCH_NOTIFICATIONS = 'FETCH_NOTIFICATIONS';
export const FETCH_NOTIFICATIONS_PENDING = 'FETCH_NOTIFICATIONS_PENDING';
export const FETCH_NOTIFICATIONS_FULFILLED = 'FETCH_NOTIFICATIONS_FULFILLED';
export const FETCH_NOTIFICATIONS_REJECTED = 'FETCH_NOTIFICATIONS_REJECTED';

export const FETCH_TURN = 'FETCH_TURN';
export const FETCH_TURN_PENDING = 'FETCH_TURN_PENDING';
export const FETCH_TURN_FULFILLED = 'FETCH_TURN_FULFILLED';
export const FETCH_TURN_REJECTED = 'FETCH_TURN_REJECTED';

export const DISPLAY_TURN_NOTIFICATIONS = 'DISPLAY_TURN_NOTIFICATIONS';

export const FETCH_VERSION = 'FETCH_VERSION';
export const FETCH_VERSION_PENDING = 'FETCH_VERSION_PENDING';
export const FETCH_VERSION_FULFILLED = 'FETCH_VERSION_FULFILLED';
export const FETCH_VERSION_REJECTED = 'FETCH_VERSION_REJECTED';

export const FETCH_MARKET_OFFERS = 'FETCH_MARKET_OFFERS';
export const FETCH_MARKET_OFFERS_PENDING = 'FETCH_MARKET_OFFERS_PENDING';
export const FETCH_MARKET_OFFERS_FULFILLED = 'FETCH_MARKET_OFFERS_FULFILLED';
export const FETCH_MARKET_OFFERS_REJECTED = 'FETCH_MARKET_OFFERS_REJECTED';

const fetchClanAction = () => ({
    type: FETCH_CLAN,
    payload: fetchClan()
});
export { fetchClanAction as fetchClan };

const fetchClansAction = (number) => ({
    type: FETCH_CLANS,
    payload: fetchClans(number)
});
export { fetchClansAction as fetchClans };

const fetchDataAction = () => {
    return (dispatch) => {
        return dispatch({
            type: FETCH_LOCATIONS,
            payload: fetchLocations()
        }).then(() => dispatch({
            type: FETCH_MARKET_OFFERS,
            payload: fetchMarketOffers()
        }));
    }
};
export { fetchDataAction as fetchData };

const fetchNotificationsAction = (turn) => ({
    type: FETCH_NOTIFICATIONS,
    payload: fetchNotifications(turn)
});
export { fetchNotificationsAction as fetchNotifications };

const fetchTurnAction = () => ({
    type: FETCH_TURN,
    payload: fetchTurn()
});
export { fetchTurnAction as fetchTurn };

const displayTurnNotificationsAction = (turn) => {
    return (dispatch) => {
        return dispatch({
            type: FETCH_NOTIFICATIONS,
            payload: fetchNotifications(turn)
        }).then(() => dispatch({
            type: DISPLAY_TURN_NOTIFICATIONS,
            payload: turn
        }));
    }
};
export { displayTurnNotificationsAction as displayTurnNotifications };

const fetchVersionAction = () => ({
    type: FETCH_VERSION,
    payload: fetchVersion()
});
export { fetchVersionAction as fetchVersion };