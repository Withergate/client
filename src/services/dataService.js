import { getHeaders } from './apiFetch';
import { API_URL } from './constants/endpoints';

export const fetchClan = () => {
    return new Promise((resolve, reject) => {
        fetch(API_URL.concat('clan'), {
            method: 'GET',
            headers: getHeaders()
        }).then(response => {
            if (response.ok) {
                resolve(response.json());
            }
            // clan not found
            if(response.status === 404) {
                reject('404');
            }
            reject('Error fetching data from server.');
        }).catch(error => {
            return reject(error.message);
        });
    });
};

export const fetchClans = (number) => {
    return new Promise((resolve, reject) => {
        fetch(API_URL.concat('clans?sort=fame,desc').concat('&page=').concat(number).concat('&size=').concat(10), {
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
            
            reject('Error fetching data from server.');
        }).catch(error => {
            return reject(error.message);
        });
    });
};

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

export const fetchGameProperties = () => {
    return new Promise((resolve, reject) => {
        // fetch clan data
        fetch(API_URL + 'game/properties', {
            method: 'GET',
            headers: getHeaders()
        }).then(response => {
            if (response.ok) {
                resolve(response.json());
            }
            
            reject('Error fetching game properties info from server.');
        }).catch(error => {
            return reject(error.message);
        });
    });
};

export const fetchMarketOffers = (number) => {
    return new Promise((resolve, reject) => {
        // fetch clan data
        fetch(API_URL + 'trade/market'.concat('?page=').concat(number).concat('&size=').concat(10), {
            method: 'GET',
            headers: getHeaders()
        }).then(response => {
            if (response.ok) {
                resolve(response.json());
            }
            
            reject('Error fetching market offers info from server.');
        }).catch(error => {
            return reject(error.message);
        });
    });
};

export const fetchTavernOffers = () => {
    return new Promise((resolve, reject) => {
        // fetch clan data
        fetch(API_URL + 'clan/tavernOffers', {
            method: 'GET',
            headers: getHeaders()
        }).then(response => {
            if (response.ok) {
                resolve(response.json());
            }
            
            reject('Error fetching market offers info from server.');
        }).catch(error => {
            return reject(error.message);
        });
    });
};

export const fetchGlobalNotification = () => {
    return new Promise((resolve, reject) => {
        // fetch notification
        fetch(API_URL + 'notifications/global', {
            method: 'GET',
            headers: getHeaders()
        }).then(response => {
            if (response.ok) {
                resolve(response.json());
            }
            
            reject('Error fetching global notification from server.');
        }).catch(error => {
            return reject(error.message);
        });
    });
};

export const updateGlobalNotification = (message, active) => {
    return new Promise((resolve, reject) => {
        fetch(API_URL + 'notifications/global', {
            method: 'PUT',
            headers: getHeaders(),
            body: JSON.stringify({message: message, active: active})
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
};

export const fetchDisaster = () => {
    return new Promise((resolve, reject) => {
        // fetch disaster data
        fetch(API_URL + 'disaster', {
            method: 'GET',
            headers: getHeaders()
        }).then(response => {
            if (response.ok) {
                // check if disaster is present
                var contentType = response.headers.get('content-type')
                if (contentType && contentType.indexOf('application/json') !== -1) {
                    resolve(response.json());
                } else {
                    // if response is not json and mostly empty
                    resolve(undefined)
                }
            }
            reject('Error fetching disaster from server.');
        }).catch(error => {
            return reject(error.message);
        });
    });
};

export const fetchArenaStats = () => {
    return new Promise((resolve, reject) => {
        fetch(API_URL + 'arena/stats', {
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
