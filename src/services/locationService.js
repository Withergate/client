import { getHeaders } from './apiFetch';
import { API_URL } from './constants/endpoints';

export const visitLocation = (characterId, location) => {
    return new Promise((resolve, reject) => {
        const payload = {
            characterId: characterId,
            location: location
        };

        fetch(API_URL + 'locations/action', {
            method: 'POST',
            headers: getHeaders(),
            body: JSON.stringify(payload)
        }).then(response => {
            if (response.ok) {
                resolve();
            }
            reject('error');
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
            reject('error');
        }).catch(error => {
            return reject(error.message);
        });
    });
};