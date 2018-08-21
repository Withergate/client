import { getHeaders } from './apiFetch';
import { AUTH_URL } from './constants/endpoints';

export const fetchPrincipal = () => {
    getTokenFromUrl();

    return new Promise((resolve, reject) => {
        console.log(AUTH_URL + 'user');
        // fetch clan data
        fetch(AUTH_URL + 'user', {
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

// helper functions
function getTokenFromUrl() {
    const url = window.location.href;
  
    const regex = new RegExp('[#&]' + 'access_token' + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) {
        return;
    }
    if (!results[2]) {
        return;
    }
    const token = decodeURIComponent(results[2].replace(/\+/g, ''));
  
    localStorage.setItem('token', token);
  
    // change url after we fetch token
    window.location.href = url.substring(0, url.indexOf('#'));
}