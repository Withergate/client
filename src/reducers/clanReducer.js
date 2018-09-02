import {
    FETCH_CLAN_PENDING,
    FETCH_CLAN_FULFILLED,
    FETCH_CLAN_REJECTED,
    SELECT_CHARACTER
} from '../actions/clanActions';

// INITIALIZE STATE

const initialState = {
    clan: {
        characters: []
    },
    exists: true,
    selectedCharacter: undefined,
    fetching: false,
    fetched: false,
    failed: false,
    error: ''
};

export const ClanReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_CLAN_PENDING:
            return {
                ...state,
                clan: {
                    characters: []
                },
                fetching: true,
                fetched: false,
                failed: false,
                error: ''
            };
        case FETCH_CLAN_FULFILLED:
            return {
                ...state,
                exists: true,
                clan: action.payload,
                fetching: false,
                fetched: true,
                failed: false,
                error: ''
            };
        case FETCH_CLAN_REJECTED:
            // check if fetch failed or clan does not exists 
            if (action.payload === '404') {
                return {
                    ...state,
                    exists: false,
                    fetching: false,
                    fetched: true,
                    failed: false,
                    error: action.payload
                };
            } else { // fetch failed
                return {
                    ...state,
                    exists: true,
                    fetching: false,
                    fetched: false,
                    failed: true,
                    error: action.payload
                };
            }
            
        case SELECT_CHARACTER:
            return {
                ...state,
                selectedCharacter: state.clan.characters.find(character => character.id === action.payload)
            };
        default:
            return state;
    }
};