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
                reject('Error fetching data from server.'.concat(' Url: ').concat(url).concat(' Status: ').concat(response.status));
            }
        }).catch(error => {
            reject(error.message);
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
                reject('Error fetching data from server.'.concat(' Url: ').concat(url).concat(' Status: ').concat(response.status));
            }
        }).catch(error => {
            reject(error.message);
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
                response.json().then(function(error) {
                    reject(error.message);
                });
            }
        }).catch(error => {
            return reject(error.message);
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
                reject('Error sending data to server.'.concat(' Url: ').concat(url).concat(' Status: ').concat(response.status));
            }
        }).catch(error => {
            reject(error.message);
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
                reject('Error deleteting data from server.'.concat(' Url: ').concat(url).concat(' Status: ').concat(response.status));
            }
        }).catch(error => {
            reject(error.message);
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
