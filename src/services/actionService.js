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

export const equipItem = (itemId, type, characterId) => {
    return new Promise((resolve, reject) => {
        fetch(API_URL.concat('items/equip'), {
            method: 'POST',
            headers: getHeaders(),
            body: JSON.stringify({itemId: itemId, itemType: type, characterId: characterId})
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

export const unequipItem = (itemId, type, characterId) => {
    return new Promise((resolve, reject) => {
        fetch(API_URL.concat('items/unequip'), {
            method: 'POST',
            headers: getHeaders(),
            body: JSON.stringify({itemId: itemId, itemType: type, characterId: characterId})
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

export const consume = (consumableId, characterId) => {
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

export const visitArena = (characterId) => {
    return new Promise((resolve, reject) => {
        const payload = {
            characterId: characterId
        };

        fetch(API_URL + 'arena/action', {
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

export const visitTavern = (characterId, offerId) => {
    return new Promise((resolve, reject) => {
        const payload = {
            characterId: characterId,
            offerId: offerId
        };

        fetch(API_URL + 'tavern/action', {
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

export const restWithCharacter = (characterId) => {
    return new Promise((resolve, reject) => {
        fetch(API_URL + 'characters/rest', {
            method: 'POST',
            headers: getHeaders(),
            body: JSON.stringify({characterId: characterId})
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

export const publishOffer = (itemId, itemType, price) => {
    return new Promise((resolve, reject) => {
        fetch(API_URL + 'trade/market', {
            method: 'POST',
            headers: getHeaders(),
            body: JSON.stringify({itemId: itemId, type: itemType, price: price})
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

export const tradeItem = (characterId, offerId) => {
    return new Promise((resolve, reject) => {
        fetch(API_URL + 'trade/market/action', {
            method: 'POST',
            headers: getHeaders(),
            body: JSON.stringify({characterId: characterId, offerId: offerId})
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

export const deleteOffer = (offerId) => {
    return new Promise((resolve, reject) => {
        fetch(API_URL + 'trade/market/'.concat(offerId), {
            method: 'DELETE',
            headers: getHeaders()
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

export const handleDisaster = (characterId, solution) => {
    return new Promise((resolve, reject) => {
        fetch(API_URL + 'disaster/action', {
            method: 'POST',
            headers: getHeaders(),
            body: JSON.stringify({characterId: characterId, solution: solution})
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

export const changeDefaultAction = (defaultAction) => {
    return new Promise((resolve, reject) => {
        fetch(API_URL + 'clan/defaultAction', {
            method: 'PUT',
            headers: getHeaders(),
            body: JSON.stringify({defaultAction: defaultAction})
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
