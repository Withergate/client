import { getHeaders } from './apiFetch';
import { API_URL } from './constants/endpoints';

export const visitLocation = (characterId, location, type) => {
    return new Promise((resolve, reject) => {
        const payload = {
            characterId: characterId,
            location: location,
            type: type
        };

        fetch(API_URL + 'locations/action', {
            method: 'POST',
            headers: getHeaders(),
            body: JSON.stringify(payload)
        }).then(response => {
            if (response.ok) {
                resolve();
            } else {
                response.json().then(function(error) {
                    reject(error.message);
                });
            }  
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