import { apiPost, getHeaders, checkTokenValidity } from './apiFetch';
import { API_URL } from './constants/endpoints';
import { NOT_FOUND } from '../constants/constants';

export const fetchProfile = () => {
    return new Promise((resolve, reject) => {
        fetch(API_URL.concat('profile'), {
            method: 'GET',
            headers: getHeaders()
        }).then(response => {
            if (response.ok) {
                resolve(response.json());
            }
            // profile not found
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

export const createProfile = (name) => {
    return apiPost(API_URL.concat('profile'), JSON.stringify({name: name}));
};
