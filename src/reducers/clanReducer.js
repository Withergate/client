import {
    SELECT_CHARACTER,
    DISMISS_ERROR
} from '../actions/uiActions';

import {
    FETCH_CLAN_PENDING,
    FETCH_CLAN_FULFILLED,
    FETCH_CLAN_REJECTED,
    FETCH_TAVERN_OFFERS_PENDING,
    FETCH_TAVERN_OFFERS_FULFILLED,
    FETCH_TAVERN_OFFERS_REJECTED,
} from '../actions/dataActions';

import {
    CREATE_CLAN_PENDING,
    CREATE_CLAN_FULFILLED,
    CREATE_CLAN_REJECTED
} from '../actions/actionActions';
import { NOT_FOUND } from '../constants/constants';

// INITIALIZE STATE

const initialState = {
    clan: {
        characters: []
    },
    tavernOffers: {
        data: [],
        fetching: false,
        fetched: false,
        failed: false,
        error: ''
    },
    clanCreation: {
        fetching: false,
        fetched: false,
        failed: false,
        error: ''
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
                error: '',
                clanCreation: {
                    ...state.clanCreation,
                    error: '',
                    failed: false
                }
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
            if (action.payload === NOT_FOUND) {
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
        case FETCH_TAVERN_OFFERS_PENDING:
            return {
                ...state,
                tavernOffers: {
                    data: [],
                    fetching: true,
                    fetched: false,
                    failed: false,
                    error: ''
                },    
            };
        case FETCH_TAVERN_OFFERS_FULFILLED:
            return {
                ...state,
                tavernOffers: {
                    data: action.payload,
                    fetching: false,
                    fetched: true,
                    failed: false,
                    error: '',
                }
            };
        case FETCH_TAVERN_OFFERS_REJECTED:
            return {
                ...state,
                tavernOffers: {
                    data: [],
                    fetching: false,
                    fetched: false,
                    failed: true,
                    error: action.payload,
                }
            };
        case CREATE_CLAN_PENDING:
            return {
                ...state,
                clanCreation: {
                    fetching: true,
                    fetched: false,
                    failed: false,
                    error: ''
                },    
            };
        case CREATE_CLAN_FULFILLED:
            return {
                ...state,
                clanCreation: {
                    fetching: false,
                    fetched: true,
                    failed: false,
                    error: '',
                }
            };
        case CREATE_CLAN_REJECTED:
            return {
                ...state,
                clanCreation: {
                    fetching: false,
                    fetched: false,
                    failed: true,
                    error: action.payload,
                }
            };
        default:
            return state;
    }
};