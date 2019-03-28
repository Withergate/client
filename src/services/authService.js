import { getHeaders } from './apiFetch';
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
    return new Promise((resolve, reject) => {
        fetch(API_URL.concat('restart'), {
            method: 'POST',
            headers: getHeaders()
        }).then(response => {
            if (response.ok) {
                resolve(response);
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

export const endTurn = () => {
    return new Promise((resolve, reject) => {
        fetch(API_URL.concat('turn/end'), {
            method: 'POST',
            headers: getHeaders()
        }).then(response => {
            if (response.ok) {
                resolve(response);
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