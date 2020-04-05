import {
    SELECT_CLAN_TAB,
    SELECT_ACTION_TAB,
    CHANGE_CHARACTER_SORT_KEY,
    CHANGE_CHARACTER_SORT_DIRECTION,
    CHANGE_BUILDING_SORT_KEY,
    CHANGE_BUILDING_SORT_DIRECTION,
    CHANGE_ITEM_FILTER,
    CHANGE_CLAN_OFFER_FILTER,
    CHANGE_MARKET_OFFER_FILTER,
    DISPLAY_CLAN_INTEL,
    DISPLAY_PROFILE_INTEL,
    SELECT_LADDER_TAB,
    SELECT_PROFILE_TAB,
    SELECT_ADMIN_TAB
} from '../actions/uiActions';
import { ALL } from '../constants/constants';

const initialState = {
    clanTab: 'overview',
    actionTab: 'locations',
    ladderTab: 'clans',
    profileTab: 'profile',
    adminTab: 'game',
    displayClanIntel: false,
    displayProfileIntel: false,
    sort: {
        characters: {
            key: 'name',
            direction: 'asc'
        },
        buildings: {
            key: 'level',
            direction: 'desc'
        }
    },
    filter: {
        items: ALL,
        clanOffers: ALL,
        marketOffers: ALL
    }
};

export const UiReducer = (state = initialState, action) => {
    switch(action.type) {
        case SELECT_CLAN_TAB:
            return {
                ...state,
                clanTab: action.payload
            };
        case SELECT_ACTION_TAB:
            return {
                ...state,
                actionTab: action.payload
            };
        case SELECT_LADDER_TAB:
            return {
                ...state,
                ladderTab: action.payload
            };
        case SELECT_PROFILE_TAB:
            return {
                ...state,
                profileTab: action.payload
            };
        case SELECT_ADMIN_TAB:
            return {
                ...state,
                adminTab: action.payload
            };
        case CHANGE_CHARACTER_SORT_KEY:
            return {
                ...state,
                sort: {
                    ...state.sort,
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
                    ...state.sort,
                    characters: {
                        ...state.sort.characters,
                        direction: action.payload
                    }
                }
            };
        case CHANGE_BUILDING_SORT_KEY:
            return {
                ...state,
                sort: {
                    ...state.sort,
                    buildings: {
                        ...state.sort.buildings,
                        key: action.payload
                    }
                }
            };
        case CHANGE_BUILDING_SORT_DIRECTION:
            return {
                ...state,
                sort: {
                    ...state.sort,
                    buildings: {
                        ...state.sort.buildings,
                        direction: action.payload
                    }
                }
            };
        case CHANGE_ITEM_FILTER:
            return {
                ...state,
                filter: {
                    ...state.filter,
                    items: action.payload
                }
            };
        case CHANGE_CLAN_OFFER_FILTER:
            return {
                ...state,
                filter: {
                    ...state.filter,
                    clanOffers: action.payload
                }
            };
        case CHANGE_MARKET_OFFER_FILTER:
            return {
                ...state,
                filter: {
                    ...state.filter,
                    marketOffers: action.payload
                }
            };
        case DISPLAY_CLAN_INTEL:
            return {
                ...state,
                displayClanIntel: action.payload
            };
        case DISPLAY_PROFILE_INTEL:
            return {
                ...state,
                displayProfileIntel: action.payload
            };
        default:
            return state;
    }
};