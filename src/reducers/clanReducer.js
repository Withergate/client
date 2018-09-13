import {
    FETCH_CLAN_PENDING,
    FETCH_CLAN_FULFILLED,
    FETCH_CLAN_REJECTED,
    SELECT_CHARACTER,
    EQUIP_WEAPON_FULFILLED,
    EQUIP_WEAPON_REJECTED,
    EQUIP_WEAPON_PENDING,
    UNEQUIP_WEAPON_FULFILLED,
    UNEQUIP_WEAPON_REJECTED,
    UNEQUIP_WEAPON_PENDING,
    FETCH_CLANS_PENDING,
    FETCH_CLANS_FULFILLED,
    FETCH_CLANS_REJECTED,
    USE_CONSUMABLE_PENDING,
    USE_CONSUMABLE_FULFILLED,
    USE_CONSUMABLE_REJECTED
} from '../actions/clanActions';

// INITIALIZE STATE

const initialState = {
    clan: {
        characters: []
    },
    clansPage: {
        content: []
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
        case EQUIP_WEAPON_PENDING:
            return {
                ...state,
                fetching: true,
                fetched: false,
                failed: false
            };
        case EQUIP_WEAPON_FULFILLED:
            return {
                ...state,
                fetching: false,
                fetched: true,
                failed: false
            };
        case EQUIP_WEAPON_REJECTED:
            return {
                ...state,
                fetching: false,
                fetched: true,
                failed: true,
                error: action.payload
            };
        case UNEQUIP_WEAPON_PENDING:
            return {
                ...state,
                fetching: true,
                fetched: false,
                failed: false
            };
        case UNEQUIP_WEAPON_FULFILLED:
            return {
                ...state,
                fetching: false,
                fetched: true,
                failed: false
            };
        case UNEQUIP_WEAPON_REJECTED:
            return {
                ...state,
                fetching: false,
                fetched: true,
                failed: true,
                error: action.payload
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
        case USE_CONSUMABLE_PENDING:
            return {
                ...state,
                fetching: true,
                fetched: false,
                failed: false
            };
        case USE_CONSUMABLE_FULFILLED:
            return {
                ...state,
                fetching: false,
                fetched: true,
                failed: false
            };
        case USE_CONSUMABLE_REJECTED:
            return {
                ...state,
                fetching: false,
                fetched: true,
                failed: true,
                error: action.payload
            };                          
        default:
            return state;
    }
};