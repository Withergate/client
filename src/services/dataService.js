import { apiGet, apiGetText, apiPut, getHeaders } from './apiFetch';
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
            reject('Error fetching data from server.');
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

export const fetchMarketOffers = (number) => {
    return apiGet(API_URL.concat('trade/market').concat('?page=').concat(number).concat('&size=').concat(10));
};

export const fetchTavernOffers = () => {
    return apiGet(API_URL.concat('clan/tavernOffers'));
};

export const fetchGlobalNotification = () => {
    return apiGet(API_URL.concat('notifications/global'));
};

export const updateGlobalNotification = (message, active) => {
    return apiPut(
        API_URL.concat('notifications/global'), 
        JSON.stringify({message: message, active: active}));
};

export const fetchDisaster = () => {
    return apiGet(API_URL.concat('disaster'));
};

export const fetchArenaStats = () => {
    return apiGet(API_URL.concat('arena/stats'));
};
