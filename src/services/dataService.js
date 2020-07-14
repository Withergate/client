import { apiGet, apiGetText, apiPut, getHeaders, checkTokenValidity } from './apiFetch';
import { API_URL } from './constants/endpoints';
import { NOT_FOUND } from '../constants/constants';

export const fetchClan = () => {
    return new Promise((resolve, reject) => {
        fetch(API_URL.concat('clan'), {
            method: 'GET',
            headers: getHeaders()
        }).then(response => {
            if (response.ok) {
                resolve(response.json());
            }
            // clan not found
            if(response.status === NOT_FOUND) {
                reject(NOT_FOUND);
            }
            checkTokenValidity(response);
            reject('Error fetching data from server.'.concat(' Url: ').concat(response.url).concat(' Status: ').concat(response.status));
        }).catch(error => {
            return reject(error.message);
        });
    });
};

export const fetchClans = (number) => {
    return apiGet(API_URL.concat('clans?sort=fame,desc').concat('&page=').concat(number).concat('&size=').concat(10));
};

export const fetchLocations = () => {
    return apiGet(API_URL.concat('locations'));
};

export const fetchTurn = () => {
    return apiGet(API_URL.concat('turn'));
};

export const fetchNotifications = (turn) => {
    return apiGet(API_URL.concat('notifications?turn=').concat(turn));
};

export const fetchVersion = () => {
    return apiGetText(API_URL.concat('version'));
};

export const fetchGameProperties = () => {
    return apiGet(API_URL.concat('game/properties'));
};

export const fetchMarketOffers = (number, size, state) => {
    return apiGet(API_URL.concat('trade/market').concat('?page=').concat(number).concat('&size=').concat(size).concat('&state=').concat(state));
};

export const fetchTavernOffers = () => {
    return apiGet(API_URL.concat('clan/tavernOffers'));
};

export const fetchGlobalNotification = (type) => {
    return apiGet(API_URL.concat('notifications/global?type=').concat(type));
};

export const updateGlobalNotification = (message, active, type, link, linkText) => {
    return apiPut(
        API_URL.concat('notifications/global'), 
        JSON.stringify({message: message, active: active, type: type, link: link, linkText: linkText}));
};

export const fetchDisaster = () => {
    return apiGet(API_URL.concat('disaster'));
};

export const fetchArenaStats = () => {
    return apiGet(API_URL.concat('arena/stats'));
};

export const fetchClanStatistics = () => {
    return apiGet(API_URL.concat('clan/statistics'));
};

export const fetchFactions = () => {
    return apiGet(API_URL.concat('factions'));
};

export const fetchFactionsOverview = () => {
    return apiGet(API_URL.concat('factions/overview'));
};

export const setTurnStart = (date) => {
    return apiPut(
        API_URL.concat('turn/update'), 
        JSON.stringify({startDate: date}));
};

export const fetchClanIntel = (clanId) => {
    return apiGet(API_URL.concat('clan/').concat(clanId));
};

export const fetchProfileIntel = (profileId) => {
    return apiGet(API_URL.concat('profile/').concat(profileId));
};

export const fetchGameInfo = () => {
    return apiGet(API_URL.concat('game/info'));
};

export const fetchCraftingItems = () => {
    return apiGet(API_URL.concat('items/crafting'));
};
