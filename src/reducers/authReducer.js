import {
    FETCH_PRINCIPAL_PENDING,
    FETCH_PRINCIPAL_FULFILLED,
    FETCH_PRINCIPAL_REJECTED,
    RESTART_GAME_PENDING,
    RESTART_GAME_FULFILLED,
    RESTART_GAME_REJECTED,
    END_TURN_PENDING,
    END_TURN_FULFILLED,
    END_TURN_REJECTED
} from '../actions/authActions';

// INITIALIZE STATE

const initialState = {
    principal: null,
    loggedIn: false,
    fetching: false,
    fetched: false,
    failed: false,
    error: null
};

// REDUCER

export const AuthReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_PRINCIPAL_PENDING:
            return {
                ...state,
                principal: null,
                loggedIn: false,
                fetching: true,
                fetched: false,
                failed: false,
                error: null
            };
        case FETCH_PRINCIPAL_FULFILLED:
            return {
                ...state,
                principal: action.payload,
                loggedIn: true,
                fetching: false,
                fetched: true,
                failed: false,
                error: null
            };
        case FETCH_PRINCIPAL_REJECTED:
            return {
                ...state,
                principal: null,
                loggedIn: false,
                fetching: false,
                fetched: false,
                failed: true,
                error: action.payload
            };
        case RESTART_GAME_PENDING:
            return {
                ...state,
                fetching: true,
                fetched: false,
                failed: false,
                error: null
            };
        case RESTART_GAME_FULFILLED:
            return {
                ...state,
                fetching: false,
                fetched: true,
                failed: false,
                error: null
            };
        case RESTART_GAME_REJECTED:
            return {
                ...state,
                fetching: false,
                fetched: false,
                failed: true,
                error: action.payload
            };
        case END_TURN_PENDING:
            return {
                ...state,
                fetching: true,
                fetched: false,
                failed: false,
                error: null
            };
        case END_TURN_FULFILLED:
            return {
                ...state,
                fetching: false,
                fetched: true,
                failed: false,
                error: null
            };
        case END_TURN_REJECTED:
            return {
                ...state,
                fetching: false,
                fetched: false,
                failed: true,
                error: action.payload
            };    
        default:
            return state;
    }
};