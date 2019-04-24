import { 
    createClan, 
    equipWeapon, 
    unequipWeapon,
    useConsumable,
    constructBuilding, 
    goOnQuest,
    tradeResources,
    equipGear,
    unequipGear,
    visitLocation
} from '../services/actionService';

import {
    fetchClan,
} from '../services/dataService';

import { FETCH_CLAN } from './dataActions';

export const CREATE_CLAN = 'CREATE_CLAN';

export const EQUIP_ITEM = 'EQUIP_ITEM';
export const EQUIP_ITEM_PENDING = 'EQUIP_ITEM_PENDING';
export const EQUIP_ITEM_FULFILLED = 'EQUIP_ITEM_FULFILLED';
export const EQUIP_ITEM_REJECTED = 'EQUIP_ITEM_REJECTED';

export const UNEQUIP_ITEM = 'UNEQUIP_ITEM';
export const UNEQUIP_ITEM_PENDING = 'UNEQUIP_ITEM_PENDING';
export const UNEQUIP_ITEM_FULFILLED = 'UNEQUIP_ITEM_FULFILLED';
export const UNEQUIP_ITEM_REJECTED = 'UNEQUIP_ITEM_REJECTED';

export const USE_CONSUMABLE = 'USE_CONSUMABLE';
export const USE_CONSUMABLE_PENDING = 'USE_CONSUMABLE_PENDING';
export const USE_CONSUMABLE_FULFILLED = 'USE_CONSUMABLE_FULFILLED';
export const USE_CONSUMABLE_REJECTED = 'USE_CONSUMABLE_REJECTED';

export const BUILDING = 'BUILDING';
export const BUILDING_PENDING = 'BUILDING_PENDING';
export const BUILDING_FULFILLED = 'BUILDING_FULFILLED';
export const BUILDING_REJECTED = 'BUILDING_REJECTED';

export const QUEST = 'QUEST';
export const QUEST_PENDING = 'QUEST_PENDING';
export const QUEST_FULFILLED = 'QUEST_FULFILLED';
export const QUEST_REJECTED = 'QUEST_REJECTED';

export const TRADE_RESOURCES = 'TRADE_RESOURCES';
export const TRADE_RESOURCES_PENDING = 'TRADE_RESOURCES_PENDING';
export const TRADE_RESOURCES_FULFILLED = 'TRADE_RESOURCES_FULFILLED';
export const TRADE_RESOURCES_REJECTED = 'TRADE_RESOURCES_REJECTED';

export const VISIT_LOCATION = 'VISIT_LOCATIONS';
export const VISIT_LOCATION_PENDING = 'VISIT_LOCATIONS_PENDING';
export const VISIT_LOCATION_FULFILLED = 'VISIT_LOCATIONS_FULFILLED';
export const VISIT_LOCATION_REJECTED = 'VISIT_LOCATIONS_REJECTED';

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

const equipWeaponAction = (weaponId, characterId) => {
    return (dispatch) => {
        return dispatch({
            type: EQUIP_ITEM,
            payload: equipWeapon(weaponId, characterId)
        }).then(() => dispatch({
            type: FETCH_CLAN,
            payload: fetchClan()
        }));
    };
};
export { equipWeaponAction as equipWeapon };

const unequipWeaponAction = (weaponId, characterId) => {
    return (dispatch) => {
        return dispatch({
            type: UNEQUIP_ITEM,
            payload: unequipWeapon(weaponId, characterId)
        }).then(() => dispatch({
            type: FETCH_CLAN,
            payload: fetchClan()
        }));
    };
};
export { unequipWeaponAction as unequipWeapon };

const equipGearAction = (gearId, characterId) => {
    return (dispatch) => {
        return dispatch({
            type: EQUIP_ITEM,
            payload: equipGear(gearId, characterId)
        }).then(() => dispatch({
            type: FETCH_CLAN,
            payload: fetchClan()
        }));
    };
};
export { equipGearAction as equipGear };

const unequipGearAction = (gearId, characterId) => {
    return (dispatch) => {
        return dispatch({
            type: UNEQUIP_ITEM,
            payload: unequipGear(gearId, characterId)
        }).then(() => dispatch({
            type: FETCH_CLAN,
            payload: fetchClan()
        }));
    };
};
export { unequipGearAction as unequipGear };

const useConsumableAction = (consumableId, characterId) => {
    return (dispatch) => {
        return dispatch({
            type: USE_CONSUMABLE,
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
            type: BUILDING,
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
            type: QUEST,
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
            type: TRADE_RESOURCES,
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
            type: VISIT_LOCATION,
            payload: visitLocation(characterId, location, type)
        }).then(() => dispatch({
            type: FETCH_CLAN,
            payload: fetchClan()
        }));
    };
};
export { visitLocationAction as visitLocation };
