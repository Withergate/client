import {
    FETCH_GAME_PROPERTIES_PENDING,
    FETCH_GAME_PROPERTIES_FULFILLED,
    FETCH_GAME_PROPERTIES_REJECTED,
    FETCH_GAME_INFO_PENDING,
    FETCH_GAME_INFO_FULFILLED,
    FETCH_GAME_INFO_REJECTED
} from '../actions/dataActions';

import {
    DISMISS_ERROR
} from '../actions/uiActions';

const initialState = {
    properties: {
        maxTurns: 0,
        turnTimes: '6,18'
    },
    info: {
        data: {},
        fetching: false,
        fetched: false,
        failed: false,
        error: null
    },
    fetching: false,
    fetched: false,
    failed: false,
    error: null
};

export const GameReducer = (state = initialState, action) => {
    switch(action.type) {
        case DISMISS_ERROR:
            return {
                ...state,
                failed: false,
                error: null
            };
        case FETCH_GAME_PROPERTIES_PENDING:
            return {
                ...state,
                fetching: true,
                fetched: false,
                failed: false,
                error: null
            };
        case FETCH_GAME_PROPERTIES_FULFILLED:
            return {
                ...state,
                properties: action.payload,
                fetching: false,
                fetched: true,
                failed: false,
                error: null
            };
        case FETCH_GAME_PROPERTIES_REJECTED:
            return {
                ...state,
                properties: {
                    maxTurns: 0,
                    turnTimes: '6,18'
                },
                fetching: false,
                fetched: false,
                failed: true,
                error: action.payload
            };
        case FETCH_GAME_INFO_PENDING:
            return {
                ...state,
                info: {
                    ...state.info,
                    fetching: true,
                    fetched: false,
                    failed: false
                }
            };
        case FETCH_GAME_INFO_FULFILLED:
            return {
                ...state,
                info: {
                    ...state.info,
                    data: action.payload,
                    fetching: false,
                    fetched: true,
                    failed: false,
                    error: null
                }
             };
        case FETCH_GAME_INFO_REJECTED:
            return {
                ...state,
                info: {
                    data: [],
                    fetching: false,
                    fetched: false,
                    failed: true,
                    error: action.payload
                }
            };
        default:
            return state;
    }
};