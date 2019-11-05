import { apiPost, getHeaders } from './apiFetch';
import { AUTH_URL, API_URL } from './constants/endpoints';

export const fetchPrincipal = () => {
    getTokenFromUrl();

    return new Promise((resolve, reject) => {
        // fetch principal
        fetch(AUTH_URL.concat('user'), {
            method: 'GET',
            headers: getHeaders()
        }).then(response => {
            if (response.ok) {
                resolve(response.json());
            }
            
            reject('Error fetching profile from authorization server.');
        }).catch(error => {
            return reject(error.message);
        });
    });
};

export const restartGame = () => {
    return apiPost(API_URL.concat('restart'), null);
};

export const endTurn = () => {
    return apiPost(API_URL.concat('turn/end'), null);
};

// helper functions
function getTokenFromUrl() {
    const url = window.location.href;
  
    const regex = new RegExp('[#&]'.concat('access_token').concat('(=([^&#]*)|&|#|$)')),
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