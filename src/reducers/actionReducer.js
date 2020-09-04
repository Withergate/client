import {
    GAME_ACTION_PENDING,
    GAME_ACTION_FULFILLED,
    GAME_ACTION_REJECTED
} from '../actions/actionActions';

import {
    DISMISS_ERROR
} from '../actions/uiActions';

// INITIALIZE STATE

const initialState = {
    fetching: false,
    fetched: true,
    failed: false,
    error: null
};

export const ActionReducer = (state = initialState, action) => {
    switch(action.type) {
        case DISMISS_ERROR:
            return {
                ...state,
                failed: false,
                error: null
            };
        case GAME_ACTION_PENDING:
            return {
                ...state,
                fetching: true,
                fetched: false,
                failed: false
            };
        case GAME_ACTION_FULFILLED:
            return {
                ...state,
                fetching: false,
                fetched: true,
                failed: false
            };
        case GAME_ACTION_REJECTED:
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