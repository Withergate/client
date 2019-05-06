import {
    SELECT_CLAN_TAB,
    SELECT_ACTION_TAB,
    CHANGE_CHARACTER_SORT_KEY,
    CHANGE_CHARACTER_SORT_DIRECTION,
    CHANGE_ITEM_FILTER
} from '../actions/uiActions';
import { ALL } from '../constants/constants';

const initialState = {
    clanTab: 'overview',
    actionTab: 'locations',
    sort: {
        characters: {
            key: 'name',
            direction: 'asc'
        }
    },
    filter: {
        items: ALL
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
        case CHANGE_ITEM_FILTER:
            return {
                ...state,
                filter: {
                    ...state.filter,
                    items: action.payload
                }
            };
        default:
            return state;
    }
};