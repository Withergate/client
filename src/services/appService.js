import { getHeaders } from './apiFetch';
import { API_URL } from './constants/endpoints';

export const fetchVersion = () => {
    return new Promise((resolve, reject) => {
        // fetch clan data
        fetch(API_URL + 'version', {
            method: 'GET',
            headers: getHeaders()
        }).then(response => {
            if (response.ok) {
                resolve(response.text());
            }
            
            reject('Error fetching version info from server.');
        }).catch(error => {
            return reject(error.message);
        });
    });
};
