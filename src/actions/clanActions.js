import { fetchClan, createClan, equipWeapon, unequipWeapon } from '../services/clanService';

export const FETCH_CLAN = 'FETCH_CLAN';
export const FETCH_CLAN_PENDING = 'FETCH_CLAN_PENDING';
export const FETCH_CLAN_FULFILLED = 'FETCH_CLAN_FULFILLED';
export const FETCH_CLAN_REJECTED = 'FETCH_CLAN_REJECTED';

export const CREATE_CLAN = 'CREATE_CLAN';

export const SELECT_CHARACTER = 'SELECT_CHARACTER';

export const EQUIP_WEAPON = 'EQUIP_WEAPON';
export const UNEQUIP_WEAPON = 'UNEQUIP_WEAPON';

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