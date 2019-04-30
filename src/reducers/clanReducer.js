import {
    SELECT_CHARACTER,
    DISMISS_ERROR,
    CHANGE_CHARACTER_SORT_KEY,
    CHANGE_CHARACTER_SORT_DIRECTION
} from '../actions/uiActions';

import {
    FETCH_CLAN_PENDING,
    FETCH_CLAN_FULFILLED,
    FETCH_CLAN_REJECTED,
    FETCH_CLANS_PENDING,
    FETCH_CLANS_FULFILLED,
    FETCH_CLANS_REJECTED,
} from '../actions/dataActions';

// INITIALIZE STATE

const initialState = {
    clan: {
        characters: []
    },
    clansPage: {
        content: []
    },
    sort: {
        characters: {
            key: 'name',
            direction: 'asc'
        }
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
        case DISMISS_ERROR:
            return {
                ...state,
                failed: false,
                error: ''
            };
        case FETCH_CLAN_PENDING:
            return {
                ...state,
                clan: {
                    characters: []
                },
                fetching: true,
                fetched: false,
                failed: false
            };
        case FETCH_CLAN_FULFILLED:
            return {
                ...state,
                exists: true,
                clan: action.payload,
                fetching: false,
                fetched: true,
                failed: false,
                error: '',
                selectedCharacter: state.selectedCharacter !== undefined ? 
                    action.payload.characters.find(character => character.id === state.selectedCharacter.id) : undefined
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
                    error: ''
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
        case FETCH_CLANS_PENDING:
            return {
                ...state,
                fetching: true,
                fetched: false,
                failed: false
            };
        case FETCH_CLANS_FULFILLED:
            return {
                ...state,
                clansPage: action.payload,
                fetching: false,
                fetched: true,
                failed: false,
                error: ''
            };
        case FETCH_CLANS_REJECTED:
            return {
                ...state,
                clansPage: {
                    content: []
                },
                fetching: false,
                fetched: false,
                failed: true,
                error: action.payload
            };
        case CHANGE_CHARACTER_SORT_KEY:
            return {
                ...state,
                sort: {
                    characters: {
                        ...state.sort.characters,
                        key: action.payload
                    }
                }
            };
        case CHANGE_CHARACTER_SORT_DIRECTION:
            return {
                ...state,
                sort: {
                    characters: {
                        ...state.sort.characters,
                        direction: action.payload
                    }
                }
            };
        default:
            return state;
    }
};