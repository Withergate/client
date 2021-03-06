import {
    FETCH_TURN_PENDING,
    FETCH_TURN_FULFILLED,
    FETCH_TURN_REJECTED,
    DISPLAY_TURN_NOTIFICATIONS
} from '../actions/dataActions';

import {
    DISMISS_ERROR
} from '../actions/uiActions';

const initialState = {
    turn: {},
    turnDisplayed: 0,
    fetching: false,
    fetched: false,
    failed: false,
    error: null
};

export const TurnReducer = (state = initialState, action) => {
    switch(action.type) {
        case DISMISS_ERROR:
            return {
                ...state,
                failed: false,
                error: null
            };
        case FETCH_TURN_PENDING:
            return {
                ...state,
                turn: {},
                fetching: true,
                fetched: false,
                failed: false,
                error: null
            };
        case FETCH_TURN_FULFILLED:
            return {
                ...state,
                turn: action.payload,
                turnDisplayed: state.turnDisplayed === 0 ? action.payload.turnId - 1 : state.turnDisplayed,
                fetching: false,
                fetched: true,
                failed: false,
                error: null
            };
        case FETCH_TURN_REJECTED:
            return {
                ...state,
                turn: {},
                turnDisplayed: 0,
                fetching: false,
                fetched: false,
                failed: true,
                error: action.payload
            };
        case DISPLAY_TURN_NOTIFICATIONS:
            return {
                ...state,
                turnDisplayed: action.payload
            };
        default:
            return state;
    }
};