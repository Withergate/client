import { getHeaders } from './apiFetch';
import { API_URL } from './constants/endpoints';

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
            if(response.status === 404) {
                reject('404');
            }
            reject('Error fetching data from server.');
        }).catch(error => {
            return reject(error.message);
        });
    });
};

export const fetchClans = (page) => {
    return new Promise((resolve, reject) => {
        fetch(API_URL.concat('clans?sort=fame,desc').concat('&page=').concat(page), {
            method: 'GET',
            headers: getHeaders()
        }).then(response => {
            if (response.ok) {
                resolve(response.json());
            }
    
            reject('Error fetching data from server.');
        }).catch(error => {
            return reject(error.message);
        });
    });
};

export const fetchLocations = () => {
    return new Promise((resolve, reject) => {
        fetch(API_URL + 'locations', {
            method: 'GET',
            headers: getHeaders(),
        }).then(response => {
            if (response.ok) {
                resolve(response.json());
            }
            reject('Error fetching data from server.');
        }).catch(error => {
            return reject(error.message);
        });
    });
};