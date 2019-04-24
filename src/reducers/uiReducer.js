import {
    SELECT_CLAN_TAB,
    SELECT_ACTION_TAB
} from '../actions/uiActions';

const initialState = {
    clanTab: 'overview',
    actionTab: 'locations'
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
        default:
            return state;
    }
};