import { getHeaders } from './apiFetch';
import { API_URL } from './constants/endpoints';

export const fetchNotifications = (turn) => {
    return new Promise((resolve, reject) => {
        // fetch notifications data
        var url = API_URL + 'notifications?turn=' + turn;
        fetch(url, {
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
