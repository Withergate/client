import { 
    fetchClan, 
    createClan, 
    equipWeapon, 
    unequipWeapon,
    useConsumable,
    fetchClans } from '../services/clanService';

export const FETCH_CLAN = 'FETCH_CLAN';
export const FETCH_CLAN_PENDING = 'FETCH_CLAN_PENDING';
export const FETCH_CLAN_FULFILLED = 'FETCH_CLAN_FULFILLED';
export const FETCH_CLAN_REJECTED = 'FETCH_CLAN_REJECTED';

export const CREATE_CLAN = 'CREATE_CLAN';

export const SELECT_CHARACTER = 'SELECT_CHARACTER';

export const EQUIP_WEAPON = 'EQUIP_WEAPON';
export const EQUIP_WEAPON_PENDING = 'EQUIP_WEAPON_PENDING';
export const EQUIP_WEAPON_FULFILLED = 'EQUIP_WEAPON_FULFILLED';
export const EQUIP_WEAPON_REJECTED = 'EQUIP_WEAPON_REJECTED';

export const UNEQUIP_WEAPON = 'UNEQUIP_WEAPON';
export const UNEQUIP_WEAPON_PENDING = 'UNEQUIP_WEAPON_PENDING';
export const UNEQUIP_WEAPON_FULFILLED = 'UNEQUIP_WEAPON_FULFILLED';
export const UNEQUIP_WEAPON_REJECTED = 'UNEQUIP_WEAPON_REJECTED';

export const USE_CONSUMABLE = 'USE_CONSUMABLE';
export const USE_CONSUMABLE_PENDING = 'USE_CONSUMABLE_PENDING';
export const USE_CONSUMABLE_FULFILLED = 'USE_CONSUMABLE_FULFILLED';
export const USE_CONSUMABLE_REJECTED = 'USE_CONSUMABLE_REJECTED';

export const FETCH_CLANS = 'FETCH_CLANS';
export const FETCH_CLANS_PENDING = 'FETCH_CLANS_PENDING';
export const FETCH_CLANS_FULFILLED = 'FETCH_CLANS_FULFILLED';
export const FETCH_CLANS_REJECTED = 'FETCH_CLANS_REJECTED';

const fetchClanAction = () => ({
    type: FETCH_CLAN,
    payload: fetchClan()
});

export { fetchClanAction as fetchClan };


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

const selectedCharacterAction = (characterId) => ({
    type: SELECT_CHARACTER,
    payload: characterId
});

export { selectedCharacterAction as selectCharacter };

const equipWeaponAction = (weaponId, characterId) => {
    return (dispatch) => {
        return dispatch({
            type: EQUIP_WEAPON,
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
            type: UNEQUIP_WEAPON,
            payload: unequipWeapon(weaponId, characterId)
        }).then(() => dispatch({
            type: FETCH_CLAN,
            payload: fetchClan()
        }));
    };
};

export { unequipWeaponAction as unequipWeapon };

const fetchClansAction = (page) => ({
    type: FETCH_CLANS,
    payload: fetchClans(page)
});

export { fetchClansAction as fetchClans };

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
