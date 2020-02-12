import { apiPost, apiPut, apiDelete } from './apiFetch';
import { API_URL } from './constants/endpoints';

export const createClan = (clanName) => {
    return apiPost(API_URL.concat('clan'), JSON.stringify({name: clanName}));
};

export const equipItem = (itemId, characterId) => {
    return apiPost(API_URL.concat('items/equip'), 
    JSON.stringify({itemId: itemId, characterId: characterId}));
};

export const unequipItem = (itemId, characterId) => {
    return apiPost(API_URL.concat('items/unequip'), 
    JSON.stringify({itemId: itemId, characterId: characterId}));
};

export const constructBuilding = (buildingName, characterId, type) => {
    return apiPost(API_URL.concat('buildings/action'), 
    JSON.stringify({building: buildingName, characterId: characterId, type: type}));
};

export const doResearch = (researchName, characterId) => {
    return apiPost(API_URL.concat('research/action'), 
    JSON.stringify({research: researchName, characterId: characterId}));
};

export const goOnQuest = (questId, characterId) => {
    return apiPost(API_URL.concat('quests/action'), 
    JSON.stringify({questId: questId, characterId: characterId}));
};

export const tradeResources = (characterId, food, junk, type) => {
    return apiPost(API_URL.concat('trade/resources/action'), 
    JSON.stringify({characterId: characterId, food: food, junk: junk, type: type}));
};

export const visitLocation = (characterId, location, type) => {
    return apiPost(API_URL.concat('locations/action'), 
    JSON.stringify({characterId: characterId, location: location, type: type}));
};

export const visitArena = (characterId) => {
    return apiPost(API_URL.concat('arena/action'), 
    JSON.stringify({characterId: characterId}));
};

export const visitTavern = (characterId, offerId) => {
    return apiPost(API_URL.concat('tavern/action'), 
    JSON.stringify({characterId: characterId, offerId: offerId}));
};

export const restWithCharacter = (characterId) => {
    return apiPost(API_URL.concat('characters/rest'), 
    JSON.stringify({characterId: characterId}));
};

export const publishOffer = (itemId, itemType, price) => {
    return apiPost(API_URL.concat('trade/market'), 
    JSON.stringify({itemId: itemId, type: itemType, price: price}));
};

export const deleteOffer = (offerId) => {
    return apiDelete(API_URL.concat('trade/market/').concat(offerId));
};

export const tradeItem = (offerId) => {
    return apiPost(API_URL.concat('trade/market/action'), 
    JSON.stringify({offerId: offerId}));
};

export const handleDisaster = (characterId, solution) => {
    return apiPost(API_URL.concat('disaster/action'), 
    JSON.stringify({characterId: characterId, solution: solution}));
};

export const changeDefaultAction = (defaultAction, preferDisaster) => {
    return apiPut(API_URL.concat('clan/defaultAction'), JSON.stringify({defaultAction: defaultAction, preferDisaster: preferDisaster}))
};

export const activateTrait = (characterId, traitName, immediate) => {
    return apiPost(API_URL.concat('characters/trait'), 
    JSON.stringify({characterId: characterId, traitName: traitName, immediate: immediate}));
};

export const refreshTavern = () => {
    return apiPost(API_URL.concat('clan/tavernOffers/refresh'), null);
};

export const handleFactionAction = (characterId, type, faction, factionAid) => {
    return apiPost(API_URL.concat('factions/action'), 
    JSON.stringify({characterId: characterId, type: type, faction: faction, factionAid: factionAid}));
};

export const handleClanCombat = (characterId, targetId) => {
    return apiPost(API_URL.concat('factions/action/combat'), 
    JSON.stringify({characterId: characterId, targetId: targetId}));
};

export const cancelAction = (characterId) => {
    return apiPost(API_URL.concat('character/action/cancel'), 
    JSON.stringify({characterId: characterId}));
};
