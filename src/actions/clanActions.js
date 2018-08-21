import { fetchClan, createClan } from '../services/clanService';

export const FETCH_CLAN = 'FETCH_CLAN';
export const FETCH_CLAN_PENDING = 'FETCH_CLAN_PENDING';
export const FETCH_CLAN_FULFILLED = 'FETCH_CLAN_FULFILLED';
export const FETCH_CLAN_REJECTED = 'FETCH_CLAN_REJECTED';

export const CREATE_CLAN = 'CREATE_CLAN';

export const SELECT_CHARACTER = 'SELECT_CHARACTER';

const fetchClanAction = () => ({
    type: FETCH_CLAN,
    payload: fetchClan()
});

export { fetchClanAction as fetchClan };


const createClanAction = (clanName) => {
    console.log('Creating clan: ' + clanName);
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