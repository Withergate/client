import { getHeaders } from './apiFetch';
import { API_URL } from './constants/endpoints';

export const fetchNotifications = (currentOnly) => {
    return new Promise((resolve, reject) => {
        console.log(currentOnly);
        console.log('Length: '+arguments.length + ', ');
        // fetch notifications data
        var url = API_URL + 'notifications';
        if (currentOnly) {
            url = url + '/current';
        }
        fetch(url, {
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
