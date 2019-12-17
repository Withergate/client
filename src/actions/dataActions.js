import {
    fetchClan,
    fetchClans,
    fetchLocations,
    fetchNotifications,
    fetchTurn,
    fetchVersion,
    fetchMarketOffers,
    fetchGlobalNotification,
    updateGlobalNotification,
    fetchTavernOffers,
    fetchDisaster,
    fetchGameProperties,
    fetchArenaStats,
    fetchClanStatistics
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

export const FETCH_GAME_PROPERTIES = 'FETCH_GAME_PROPERTIES';
export const FETCH_GAME_PROPERTIES_PENDING = 'FETCH_GAME_PROPERTIES_PENDING';
export const FETCH_GAME_PROPERTIES_FULFILLED = 'FETCH_GAME_PROPERTIES_FULFILLED';
export const FETCH_GAME_PROPERTIES_REJECTED = 'FETCH_GAME_PROPERTIES_REJECTED';

export const FETCH_MARKET_OFFERS = 'FETCH_MARKET_OFFERS';
export const FETCH_MARKET_OFFERS_PENDING = 'FETCH_MARKET_OFFERS_PENDING';
export const FETCH_MARKET_OFFERS_FULFILLED = 'FETCH_MARKET_OFFERS_FULFILLED';
export const FETCH_MARKET_OFFERS_REJECTED = 'FETCH_MARKET_OFFERS_REJECTED';

export const FETCH_TAVERN_OFFERS = 'FETCH_TAVERN_OFFERS';
export const FETCH_TAVERN_OFFERS_PENDING = 'FETCH_TAVERN_OFFERS_PENDING';
export const FETCH_TAVERN_OFFERS_FULFILLED = 'FETCH_TAVERN_OFFERS_FULFILLED';
export const FETCH_TAVERN_OFFERS_REJECTED = 'FETCH_TAVERN_OFFERS_REJECTED';

export const FETCH_GLOBAL_NOTIFICATION = 'FETCH_GLOBAL_NOTIFICATION';
export const FETCH_GLOBAL_NOTIFICATION_PENDING = 'FETCH_GLOBAL_NOTIFICATION_PENDING';
export const FETCH_GLOBAL_NOTIFICATION_FULFILLED = 'FETCH_GLOBAL_NOTIFICATION_FULFILLED';
export const FETCH_GLOBAL_NOTIFICATION_REJECTED = 'FETCH_GLOBAL_NOTIFICATION_REJECTED';

export const UPDATE_GLOBAL_NOTIFICATION = 'UPDATE_GLOBAL_NOTIFICATION';
export const UPDATE_GLOBAL_NOTIFICATION_PENDING = 'UPDATE_GLOBAL_NOTIFICATION_PENDING';
export const UPDATE_GLOBAL_NOTIFICATION_FULFILLED = 'UPDATE_GLOBAL_NOTIFICATION_FULFILLED';
export const UPDATE_GLOBAL_NOTIFICATION_REJECTED = 'UPDATE_GLOBAL_NOTIFICATION_REJECTED';

export const FETCH_DISASTER = 'FETCH_DISASTER';
export const FETCH_DISASTER_PENDING = 'FETCH_DISASTER_PENDING';
export const FETCH_DISASTER_FULFILLED = 'FETCH_DISASTER_FULFILLED';
export const FETCH_DISASTER_REJECTED = 'FETCH_DISASTER_REJECTED';

export const FETCH_ARENA_STATS = 'FETCH_ARENA_STATS';
export const FETCH_ARENA_STATS_PENDING = 'FETCH_ARENA_STATS_PENDING';
export const FETCH_ARENA_STATS_FULFILLED = 'FETCH_ARENA_STATS_FULFILLED';
export const FETCH_ARENA_STATS_REJECTED = 'FETCH_ARENA_STATS_REJECTED';

export const FETCH_CLAN_STATISTICS = 'FETCH_CLAN_STATISTICS';
export const FETCH_CLAN_STATISTICS_PENDING = 'FETCH_CLAN_STATISTICS_PENDING';
export const FETCH_CLAN_STATISTICS_FULFILLED = 'FETCH_CLAN_STATISTICS_FULFILLED';
export const FETCH_CLAN_STATISTICS_REJECTED = 'FETCH_CLAN_STATISTICS_REJECTED';

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

const fetchLocationsAction = () => ({
    type: FETCH_LOCATIONS,
    payload: fetchLocations()
});
export { fetchLocationsAction as fetchLocations };

const fetchMarketOffersAction = (number) => {
    return (dispatch) => {
        return dispatch({
            type: FETCH_MARKET_OFFERS,
            payload: fetchMarketOffers(number)
        });
    }
};
export { fetchMarketOffersAction as fetchMarketOffers };

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

const fetchGamePropertiesAction = () => ({
    type: FETCH_GAME_PROPERTIES,
    payload: fetchGameProperties()
});
export { fetchGamePropertiesAction as fetchGameProperties };

const fetchGlobalNotificationAction = () => ({
    type: FETCH_GLOBAL_NOTIFICATION,
    payload: fetchGlobalNotification()
});
export { fetchGlobalNotificationAction as fetchGlobalNotification };

const updateGlobalNotificationAction = (message, active) => {
    return (dispatch) => {
        return dispatch({
            type: UPDATE_GLOBAL_NOTIFICATION,
            payload: updateGlobalNotification(message, active)
        }).then(() => dispatch({
            type: FETCH_GLOBAL_NOTIFICATION,
            payload: fetchGlobalNotification()
        }));
    }
};
export { updateGlobalNotificationAction as updateGlobalNotification };

const fetchTavernOffersAction = () => ({
    type: FETCH_TAVERN_OFFERS,
    payload: fetchTavernOffers()
});
export { fetchTavernOffersAction as fetchTavernOffers };

const fetchDisasterAction = () => ({
    type: FETCH_DISASTER,
    payload: fetchDisaster()
});
export { fetchDisasterAction as fetchDisaster };

const fetchArenaStatsAction = () => ({
    type: FETCH_ARENA_STATS,
    payload: fetchArenaStats()
});
export { fetchArenaStatsAction as fetchArenaStats };

const fetchClanStatisticsAction = () => ({
    type: FETCH_CLAN_STATISTICS,
    payload: fetchClanStatistics()
});
export { fetchClanStatisticsAction as fetchClanStatistics };
