import { UNAUTHORIZED } from "../constants/constants";

export function apiGet(url) {
    return new Promise((resolve, reject) => {
        fetch(url, {
            method: 'GET',
            headers: getHeaders()
        }).then(response => {
            if (response.ok) {
                // check if json is present
                var contentType = response.headers.get('content-type')
                if (contentType && contentType.indexOf('application/json') !== -1) {
                    resolve(response.json());
                } else {
                    // if response is not json and mostly empty
                    resolve(undefined)
                }
            } else {
                checkTokenValidity(response);
                reject('Error fetching data from server.'.concat(' Url: ').concat(url).concat(' Status: ').concat(response.status));
            }
        }).catch(error => {
            reject(error);
        });
    });
}

export function apiGetText(url) {
    return new Promise((resolve, reject) => {
        fetch(url, {
            method: 'GET',
            headers: getHeaders()
        }).then(response => {
            if (response.ok) {
                resolve(response.text());
            } else {
                checkTokenValidity(response);
                reject('Error fetching data from server.'.concat(' Url: ').concat(url).concat(' Status: ').concat(response.status));
            }
        }).catch(error => {
            reject(error);
        });
    });
}

export function apiPost(url, data) {
    return new Promise((resolve, reject) => {
        fetch(url, {
            method: 'POST',
            headers: getHeaders(),
            body: data
        }).then(response => {
            if (response.ok) {
                resolve(response.status);
            } else {
                checkTokenValidity(response);
                response.json().then(function(error) {
                    reject(error);
                });
            }
        }).catch(error => {
            return reject(error);
        });
    });
}

export function apiPut(url, data) {
    return new Promise((resolve, reject) => {
        fetch(url, {
            method: 'PUT',
            headers: getHeaders(),
            body: data
        }).then(response => {
            if (response.ok) {
                resolve(response.status);
            } else {
                checkTokenValidity(response);
                response.json().then(function(error) {
                    reject(error);
                });
            }
        }).catch(error => {
            reject(error);
        });
    });
}

export function apiDelete(url) {
    return new Promise((resolve, reject) => {
        fetch(url, {
            method: 'DELETE',
            headers: getHeaders(),
        }).then(response => {
            if (response.ok) {
                resolve(response.status);
            } else {
                checkTokenValidity(response);
                reject('Error deleteting data from server.'.concat(' Url: ').concat(url).concat(' Status: ').concat(response.status));
            }
        }).catch(error => {
            reject(error);
        });
    });
}

export function getHeaders() {
    const token = localStorage.getItem('token');
  
    // only fetch if we have token
    if (token === null) {
        return;
    }
  
    // request headers
    const config = {
        Authorization: 'Bearer ' + token,
        Accept: 'application/json',
        'Content-Type': 'application/json'
    };
  
    return config;
}

export function checkTokenValidity(response) {
    if (response.status === UNAUTHORIZED && localStorage.getItem('token') !== null) {
        // remove token
        localStorage.removeItem('token');
        // refresh
        window.location.reload(true);
    }
}
