import {
    SELECT_CLAN_TAB,
    SELECT_ACTION_TAB,
    CHANGE_CHARACTER_SORT_KEY,
    CHANGE_CHARACTER_SORT_DIRECTION,
    CHANGE_BUILDING_SORT_KEY,
    CHANGE_BUILDING_SORT_DIRECTION,
    CHANGE_ITEM_FILTER,
    CHANGE_CLAN_OFFER_FILTER,
    CHANGE_MARKET_OFFER_FILTER
} from '../actions/uiActions';
import { ALL } from '../constants/constants';

const initialState = {
    clanTab: 'overview',
    actionTab: 'locations',
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
        default:
            return state;
    }
};