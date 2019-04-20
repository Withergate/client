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

export const createClan = (clanName) => {
    return new Promise((resolve, reject) => {
        fetch(API_URL.concat('clan'), {
            method: 'POST',
            headers: getHeaders(),
            body: JSON.stringify({name: clanName})
        }).then(response => {
            if (response.ok) {
                resolve(response.json());
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

export const equipWeapon = (weaponId, characterId) => {
    return new Promise((resolve, reject) => {
        fetch(API_URL.concat('items/weapons/equip'), {
            method: 'POST',
            headers: getHeaders(),
            body: JSON.stringify({weaponId: weaponId, characterId: characterId})
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

export const unequipWeapon = (weaponId, characterId) => {
    return new Promise((resolve, reject) => {
        fetch(API_URL.concat('items/weapons/unequip'), {
            method: 'POST',
            headers: getHeaders(),
            body: JSON.stringify({weaponId: weaponId, characterId: characterId})
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

export const fetchClans = (page) => {
    return new Promise((resolve, reject) => {
        fetch(API_URL.concat('clans?sort=fame,desc').concat('&page=').concat(page), {
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

export const useConsumable = (consumableId, characterId) => {
    return new Promise((resolve, reject) => {
        fetch(API_URL + 'items/consumables/use', {
            method: 'POST',
            headers: getHeaders(),
            body: JSON.stringify({consumableId: consumableId, characterId: characterId})
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

export const constructBuilding = (buildingName, characterId, type) => {
    return new Promise((resolve, reject) => {
        fetch(API_URL + 'buildings/action', {
            method: 'POST',
            headers: getHeaders(),
            body: JSON.stringify({building: buildingName, characterId: characterId, type: type})
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

export const goOnQuest = (questId, characterId) => {
    return new Promise((resolve, reject) => {
        fetch(API_URL + 'quests/action', {
            method: 'POST',
            headers: getHeaders(),
            body: JSON.stringify({questId: questId, characterId: characterId})
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

export const tradeResources = (characterId, food, junk, type) => {
    return new Promise((resolve, reject) => {
        fetch(API_URL + 'trade/resources/action', {
            method: 'POST',
            headers: getHeaders(),
            body: JSON.stringify({characterId: characterId, food: food, junk: junk, type: type})
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
