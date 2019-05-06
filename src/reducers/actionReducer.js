import {
    CHARACTER_ACTION_PENDING,
    CHARACTER_ACTION_FULFILLED,
    CHARACTER_ACTION_REJECTED
} from '../actions/actionActions';

import {
    DISMISS_ERROR
} from '../actions/uiActions';

// INITIALIZE STATE

const initialState = {
    fetching: false,
    fetched: true,
    failed: false,
    error: ''
};

export const ActionReducer = (state = initialState, action) => {
    switch(action.type) {
        case DISMISS_ERROR:
            return {
                ...state,
                failed: false,
                error: ''
            };
        case CHARACTER_ACTION_PENDING:
            return {
                ...state,
                fetching: true,
                fetched: false,
                failed: false
            };
        case CHARACTER_ACTION_FULFILLED:
            return {
                ...state,
                fetching: false,
                fetched: true,
                failed: false
            };
        case CHARACTER_ACTION_REJECTED:
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