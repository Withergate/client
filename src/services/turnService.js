import { getHeaders } from './apiFetch';
import { API_URL } from './constants/endpoints';

export const fetchTurn = () => {
    return new Promise((resolve, reject) => {
        // fetch turn data
        fetch(API_URL + 'turn', {
            method: 'GET',
            headers: getHeaders()
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