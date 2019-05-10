import { 
    createClan, 
    equipItem, 
    unequipItem,
    useConsumable,
    constructBuilding, 
    goOnQuest,
    tradeResources,
    visitLocation,
    restWithCharacter,
    visitArena,
    visitTavern,
    publishOffer,
    deleteOffer,
    tradeItem
} from '../services/actionService';

import {
    fetchClan, fetchMarketOffers,
} from '../services/dataService';

import { FETCH_CLAN, FETCH_MARKET_OFFERS } from './dataActions';

export const CREATE_CLAN = 'CREATE_CLAN';

export const CHARACTER_ACTION = 'CHARACTER_ACTION';
export const CHARACTER_ACTION_PENDING = 'CHARACTER_ACTION_PENDING';
export const CHARACTER_ACTION_FULFILLED = 'CHARACTER_ACTION_FULFILLED';
export const CHARACTER_ACTION_REJECTED = 'CHARACTER_ACTION_REJECTED';

const createClanAction = (clanName) => {
    return (dispatch) => {
        return dispatch({
            type: CREATE_CLAN,
            payload: createClan(clanName)
        }).then(() => dispatch({
            type: FETCH_CLAN,
            payload: fetchClan()
        }));
    };
};
export { createClanAction as createClan };

const equipItemAction = (itemId, type, characterId) => {
    return (dispatch) => {
        return dispatch({
            type: CHARACTER_ACTION,
            payload: equipItem(itemId, type, characterId)
        }).then(() => dispatch({
            type: FETCH_CLAN,
            payload: fetchClan()
        }));
    };
};
export { equipItemAction as equipItem };

const unequipItemAction = (itemId, type, characterId) => {
    return (dispatch) => {
        return dispatch({
            type: CHARACTER_ACTION,
            payload: unequipItem(itemId, type, characterId)
        }).then(() => dispatch({
            type: FETCH_CLAN,
            payload: fetchClan()
        }));
    };
};
export { unequipItemAction as unequipItem };

const useConsumableAction = (consumableId, characterId) => {
    return (dispatch) => {
        return dispatch({
            type: CHARACTER_ACTION,
            payload: useConsumable(consumableId, characterId)
        }).then(() => dispatch({
            type: FETCH_CLAN,
            payload: fetchClan()
        }));
    };
};
export { useConsumableAction as useConsumable };

const constructBuildingAction = (buildingName, characterId, type) => {
    return (dispatch) => {
        return dispatch({
            type: CHARACTER_ACTION,
            payload: constructBuilding(buildingName, characterId, type)
        }).then(() => dispatch({
            type: FETCH_CLAN,
            payload: fetchClan()
        }));
    };
};
export { constructBuildingAction as constructBuilding };

const goOnQuestAction = (questId, characterId) => {
    return (dispatch) => {
        return dispatch({
            type: CHARACTER_ACTION,
            payload: goOnQuest(questId, characterId)
        }).then(() => dispatch({
            type: FETCH_CLAN,
            payload: fetchClan()
        }));
    };
};
export { goOnQuestAction as goOnQuest };

const tradeResourcesAction = (characterId, food, junk, type) => {
    return (dispatch) => {
        return dispatch({
            type: CHARACTER_ACTION,
            payload: tradeResources(characterId, food, junk, type)
        }).then(() => dispatch({
            type: FETCH_CLAN,
            payload: fetchClan()
        }));
    };
};
export { tradeResourcesAction as tradeResources };

const visitLocationAction = (characterId, location, type) => {
    return (dispatch) => {
        return dispatch({
            type: CHARACTER_ACTION,
            payload: visitLocation(characterId, location, type)
        }).then(() => dispatch({
            type: FETCH_CLAN,
            payload: fetchClan()
        }));
    };
};
export { visitLocationAction as visitLocation };

const visitArenaAction = (characterId) => {
    return (dispatch) => {
        return dispatch({
            type: CHARACTER_ACTION,
            payload: visitArena(characterId)
        }).then(() => dispatch({
            type: FETCH_CLAN,
            payload: fetchClan()
        }));
    };
};
export { visitArenaAction as visitArena };

const visitTavernAction = (characterId) => {
    return (dispatch) => {
        return dispatch({
            type: CHARACTER_ACTION,
            payload: visitTavern(characterId)
        }).then(() => dispatch({
            type: FETCH_CLAN,
            payload: fetchClan()
        }));
    };
};
export { visitTavernAction as visitTavern };

const restWithCharacterAction = (characterId) => {
    return (dispatch) => {
        return dispatch({
            type: CHARACTER_ACTION,
            payload: restWithCharacter(characterId)
        }).then(() => dispatch({
            type: FETCH_CLAN,
            payload: fetchClan()
        }));
    };
};
export { restWithCharacterAction as restWithCharacter };

const publishOfferAction = (itemId, itemType, price) => {
    return (dispatch) => {
        return dispatch({
            type: CHARACTER_ACTION,
            payload: publishOffer(itemId, itemType, price)
        }).then(() => dispatch({
            type: FETCH_CLAN,
            payload: fetchClan()
        })).then(() => dispatch({
            type: FETCH_MARKET_OFFERS,
            payload: fetchMarketOffers()
        }));
    };
};
export { publishOfferAction as publishOffer };

const deleteOfferAction = (offerId) => {
    return (dispatch) => {
        return dispatch({
            type: CHARACTER_ACTION,
            payload: deleteOffer(offerId)
        }).then(() => dispatch({
            type: FETCH_CLAN,
            payload: fetchClan()
        })).then(() => dispatch({
            type: FETCH_MARKET_OFFERS,
            payload: fetchMarketOffers()
        }));
    };
};
export { deleteOfferAction as deleteOffer };

const tradeItemAction = (characterId, offerId) => {
    return (dispatch) => {
        return dispatch({
            type: CHARACTER_ACTION,
            payload: tradeItem(characterId, offerId)
        }).then(() => dispatch({
            type: FETCH_CLAN,
            payload: fetchClan()
        })).then(() => dispatch({
            type: FETCH_MARKET_OFFERS,
            payload: fetchMarketOffers()
        }));
    };
};
export { tradeItemAction as tradeItem };
