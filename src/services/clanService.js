import { getHeaders } from './apiFetch';
import { API_URL } from './constants/endpoints';

export const fetchClan = () => {
    return new Promise((resolve, reject) => {
        // fetch clan data
        fetch(API_URL + 'clan', {
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
            reject('Error fetching clan data.');
        }).catch(error => {
            return reject(error.message);
        });
    });
};

export const createClan = (clanName) => {
    return new Promise((resolve, reject) => {
        // fetch clan data
        fetch(API_URL + 'clan', {
            method: 'POST',
            headers: getHeaders(),
            body: JSON.stringify({name: clanName})
        }).then(response => {
            if (response.ok) {
                resolve(response.json());
            }
            reject('Error creating clan.');
        }).catch(error => {
            return reject(error.message);
        });
    });
};

export const equipWeapon = (weaponId, characterId) => {
    return new Promise((resolve, reject) => {
        // fetch clan data
        fetch(API_URL + 'items/weapons/equip', {
            method: 'POST',
            headers: getHeaders(),
            body: JSON.stringify({weaponId: weaponId, characterId: characterId})
        }).then(response => {
            if (response.ok) {
                resolve(response.status);
            }
            reject('Error performing weapon-equip action.');
        }).catch(error => {
            return reject(error.message);
        });
    });
};

export const unequipWeapon = (weaponId, characterId) => {
    return new Promise((resolve, reject) => {
        // fetch clan data
        fetch(API_URL + 'items/weapons/unequip', {
            method: 'POST',
            headers: getHeaders(),
            body: JSON.stringify({weaponId: weaponId, characterId: characterId})
        }).then(response => {
            if (response.ok) {
                resolve(response.status);
            }
            reject('Error performing weapon-equip action.');
        }).catch(error => {
            return reject(error.message);
        });
    });
};
