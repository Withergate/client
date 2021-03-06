import { 
    createClan,
    equipItem, 
    unequipItem,
    constructBuilding,
    doResearch,
    goOnQuest,
    tradeResources,
    visitLocation,
    restWithCharacter,
    visitArena,
    visitTavern,
    publishOffer,
    deleteOffer,
    tradeItem,
    changeDefaultAction,
    handleDisaster,
    activateTrait,
    refreshTavern,
    handleFactionAction,
    handleClanCombat,
    cancelAction,
    renameDefender,
    renameCharacter,
    forgetTrait,
    processLoan,
    craftItem
} from '../services/actionService';

import {
    fetchClan, fetchMarketOffers,
} from '../services/dataService';

import { FETCH_CLAN, FETCH_MARKET_OFFERS, FETCH_PENDING_MARKET_OFFERS } from './dataActions';
import { PUBLISHED, PENDING } from '../constants/constants';

export const CREATE_CLAN = 'CREATE_CLAN';
export const CREATE_CLAN_PENDING = 'CREATE_CLAN_PENDING';
export const CREATE_CLAN_FULFILLED = 'CREATE_CLAN_FULFILLED';
export const CREATE_CLAN_REJECTED = 'CREATE_CLAN_REJECTED';

export const GAME_ACTION = 'GAME_ACTION';
export const GAME_ACTION_PENDING = 'GAME_ACTION_PENDING';
export const GAME_ACTION_FULFILLED = 'GAME_ACTION_FULFILLED';
export const GAME_ACTION_REJECTED = 'GAME_ACTION_REJECTED';

const createClanAction = (clanName, clanType) => {
    return (dispatch) => {
        return dispatch({
            type: CREATE_CLAN,
            payload: createClan(clanName, clanType)
        }).then(() => dispatch({
            type: FETCH_CLAN,
            payload: fetchClan()
        }));
    };
};
export { createClanAction as createClan };

const equipItemAction = (itemId, characterId) => {
    return (dispatch) => {
        return dispatch({
            type: GAME_ACTION,
            payload: equipItem(itemId, characterId)
        }).then(() => dispatch({
            type: FETCH_CLAN,
            payload: fetchClan()
        }));
    };
};
export { equipItemAction as equipItem };

const unequipItemAction = (itemId, characterId) => {
    return (dispatch) => {
        return dispatch({
            type: GAME_ACTION,
            payload: unequipItem(itemId, characterId)
        }).then(() => dispatch({
            type: FETCH_CLAN,
            payload: fetchClan()
        }));
    };
};
export { unequipItemAction as unequipItem };

const constructBuildingAction = (buildingName, characterId) => {
    return (dispatch) => {
        return dispatch({
            type: GAME_ACTION,
            payload: constructBuilding(buildingName, characterId)
        }).then(() => dispatch({
            type: FETCH_CLAN,
            payload: fetchClan()
        }));
    };
};
export { constructBuildingAction as constructBuilding };

const researchAction = (researchName, characterId) => {
    return (dispatch) => {
        return dispatch({
            type: GAME_ACTION,
            payload: doResearch(researchName, characterId)
        }).then(() => dispatch({
            type: FETCH_CLAN,
            payload: fetchClan()
        }));
    };
};
export { researchAction as doResearch };

const goOnQuestAction = (questId, characterId) => {
    return (dispatch) => {
        return dispatch({
            type: GAME_ACTION,
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
            type: GAME_ACTION,
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
            type: GAME_ACTION,
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
            type: GAME_ACTION,
            payload: visitArena(characterId)
        }).then(() => dispatch({
            type: FETCH_CLAN,
            payload: fetchClan()
        }));
    };
};
export { visitArenaAction as visitArena };

const visitTavernAction = (characterId, offerId) => {
    return (dispatch) => {
        return dispatch({
            type: GAME_ACTION,
            payload: visitTavern(characterId, offerId)
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
            type: GAME_ACTION,
            payload: restWithCharacter(characterId)
        }).then(() => dispatch({
            type: FETCH_CLAN,
            payload: fetchClan()
        }));
    };
};
export { restWithCharacterAction as restWithCharacter };

const publishOfferAction = (itemId, itemType, price, intelligent) => {
    return (dispatch) => {
        return dispatch({
            type: GAME_ACTION,
            payload: publishOffer(itemId, itemType, price, intelligent)
        }).then(() => dispatch({
            type: FETCH_CLAN,
            payload: fetchClan()
        })).then(() => dispatch({
            type: FETCH_MARKET_OFFERS,
            payload: fetchMarketOffers(0, 10, PUBLISHED)
        }));
    };
};
export { publishOfferAction as publishOffer };

const deleteOfferAction = (offerId) => {
    return (dispatch) => {
        return dispatch({
            type: GAME_ACTION,
            payload: deleteOffer(offerId)
        }).then(() => dispatch({
            type: FETCH_CLAN,
            payload: fetchClan()
        })).then(() => dispatch({
            type: FETCH_MARKET_OFFERS,
            payload: fetchMarketOffers(0, 10, PUBLISHED)
        }));
    };
};
export { deleteOfferAction as deleteOffer };

const tradeItemAction = (characterId, offerId) => {
    return (dispatch) => {
        return dispatch({
            type: GAME_ACTION,
            payload: tradeItem(characterId, offerId)
        }).then(() => dispatch({
            type: FETCH_CLAN,
            payload: fetchClan()
        })).then(() => dispatch({
            type: FETCH_MARKET_OFFERS,
            payload: fetchMarketOffers(0, 10, PUBLISHED)
        })).then(() => dispatch({
            type: FETCH_PENDING_MARKET_OFFERS,
            payload: fetchMarketOffers(0, 1000, PENDING)
        }));
    };
};
export { tradeItemAction as tradeItem };

const changeDefaultActionAction = (defaultAction, preferDisaster, characterId) => {
    return (dispatch) => {
        return dispatch({
            type: GAME_ACTION,
            payload: changeDefaultAction(defaultAction, preferDisaster, characterId)
        }).then(() => dispatch({
            type: FETCH_CLAN,
            payload: fetchClan()
        }));
    };
};
export { changeDefaultActionAction as changeDefaultAction };

const handleDisasterAction = (characterId, solution) => {
    return (dispatch) => {
        return dispatch({
            type: GAME_ACTION,
            payload: handleDisaster(characterId, solution)
        }).then(() => dispatch({
            type: FETCH_CLAN,
            payload: fetchClan()
        }));
    };
};
export { handleDisasterAction as handleDisaster };

const activateTraitAction = (characterId, traitName, immediate) => {
    return (dispatch) => {
        return dispatch({
            type: GAME_ACTION,
            payload: activateTrait(characterId, traitName, immediate)
        }).then(() => dispatch({
            type: FETCH_CLAN,
            payload: fetchClan()
        }));
    };
};
export { activateTraitAction as activateTrait };

const forgetTraitAction = (characterId, traitName) => {
    return (dispatch) => {
        return dispatch({
            type: GAME_ACTION,
            payload: forgetTrait(characterId, traitName)
        }).then(() => dispatch({
            type: FETCH_CLAN,
            payload: fetchClan()
        }));
    };
};
export { forgetTraitAction as forgetTrait };

const refreshTavernAction = () => {
    return (dispatch) => {
        return dispatch({
            type: GAME_ACTION,
            payload: refreshTavern()
        }).then(() => dispatch({
            type: FETCH_CLAN,
            payload: fetchClan()
        }));
    };
};
export { refreshTavernAction as refreshTavern };

const handleFactionActionAction = (characterId, type, faction, factionAid) => {
    return (dispatch) => {
        return dispatch({
            type: GAME_ACTION,
            payload: handleFactionAction(characterId, type, faction, factionAid)
        }).then(() => dispatch({
            type: FETCH_CLAN,
            payload: fetchClan()
        }));
    };
};
export { handleFactionActionAction as handleFactionAction };

const handleClanCombatAction = (characterId, targetId) => {
    return (dispatch) => {
        return dispatch({
            type: GAME_ACTION,
            payload: handleClanCombat(characterId, targetId)
        }).then(() => dispatch({
            type: FETCH_CLAN,
            payload: fetchClan()
        }));
    };
};
export { handleClanCombatAction as handleClanCombat };

const cancelActionAction = (characterId) => {
    return (dispatch) => {
        return dispatch({
            type: GAME_ACTION,
            payload: cancelAction(characterId)
        }).then(() => dispatch({
            type: FETCH_CLAN,
            payload: fetchClan()
        }));
    };
};
export { cancelActionAction as cancelAction };

const renameDefenderAction = (name) => {
    return (dispatch) => {
        return dispatch({
            type: GAME_ACTION,
            payload: renameDefender(name)
        }).then(() => dispatch({
            type: FETCH_CLAN,
            payload: fetchClan()
        }));
    };
};
export { renameDefenderAction as renameDefender };

const renameCharacterAction = (characterId, name) => {
    return (dispatch) => {
        return dispatch({
            type: GAME_ACTION,
            payload: renameCharacter(characterId, name)
        }).then(() => dispatch({
            type: FETCH_CLAN,
            payload: fetchClan()
        }));
    };
};
export { renameCharacterAction as renameCharacter };

const processLoanAction = () => {
    return (dispatch) => {
        return dispatch({
            type: GAME_ACTION,
            payload: processLoan()
        }).then(() => dispatch({
            type: FETCH_CLAN,
            payload: fetchClan()
        }));
    };
};
export { processLoanAction as processLoan };

const craftItemAction = (characterId, item) => {
    return (dispatch) => {
        return dispatch({
            type: GAME_ACTION,
            payload: craftItem(characterId, item)
        }).then(() => dispatch({
            type: FETCH_CLAN,
            payload: fetchClan()
        }));
    };
};
export { craftItemAction as craftItem };
