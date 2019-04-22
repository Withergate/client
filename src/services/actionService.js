import { getHeaders } from './apiFetch';
import { API_URL } from './constants/endpoints';

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
            body: JSON.stringify({itemId: weaponId, characterId: characterId})
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
            body: JSON.stringify({itemId: weaponId, characterId: characterId})
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

export const equipGear = (gearId, characterId) => {
    return new Promise((resolve, reject) => {
        fetch(API_URL.concat('items/gear/equip'), {
            method: 'POST',
            headers: getHeaders(),
            body: JSON.stringify({itemId: gearId, characterId: characterId})
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

export const unequipGear = (gearId, characterId) => {
    return new Promise((resolve, reject) => {
        fetch(API_URL.concat('items/gear/unequip'), {
            method: 'POST',
            headers: getHeaders(),
            body: JSON.stringify({itemId: gearId, characterId: characterId})
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

export const visitLocation = (characterId, location, type) => {
    return new Promise((resolve, reject) => {
        const payload = {
            characterId: characterId,
            location: location,
            type: type
        };

        fetch(API_URL + 'locations/action', {
            method: 'POST',
            headers: getHeaders(),
            body: JSON.stringify(payload)
        }).then(response => {
            if (response.ok) {
                resolve();
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

