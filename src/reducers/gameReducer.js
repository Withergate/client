import {
    FETCH_GAME_PROPERTIES_PENDING,
    FETCH_GAME_PROPERTIES_FULFILLED,
    FETCH_GAME_PROPERTIES_REJECTED
} from '../actions/dataActions';

import {
    DISMISS_ERROR
} from '../actions/uiActions';

const initialState = {
    properties: {
        maxTurns: 0
    },
    fetching: false,
    fetched: false,
    failed: false,
    error: ''
};

export const GameReducer = (state = initialState, action) => {
    switch(action.type) {
        case DISMISS_ERROR:
            return {
                ...state,
                failed: false,
                error: ''
            };
        case FETCH_GAME_PROPERTIES_PENDING:
            return {
                ...state,
                fetching: true,
                fetched: false,
                failed: false,
                error: ''
            };
        case FETCH_GAME_PROPERTIES_FULFILLED:
            return {
                ...state,
                properties: action.payload,
                fetching: false,
                fetched: true,
                failed: false,
                error: ''
            };
        case FETCH_GAME_PROPERTIES_REJECTED:
            return {
                ...state,
                properties: {
                    maxTurns: 0
                },
                fetching: false,
                fetched: false,
                failed: true,
                error: action.payload
            };
        default:
            return state;
    }
};