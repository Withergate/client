import {
    FETCH_PRINCIPAL_PENDING,
    FETCH_PRINCIPAL_FULFILLED,
    FETCH_PRINCIPAL_REJECTED,
    RESTART_GAME_PENDING,
    RESTART_GAME_FULFILLED,
    RESTART_GAME_REJECTED
} from '../actions/authActions';

// INITIALIZE STATE

const initialState = {
    principal: null,
    loggedIn: false,
    fetching: false,
    fetched: false,
    failed: false,
    error: ''
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
                error: ''
            };
        case FETCH_PRINCIPAL_FULFILLED:
            return {
                ...state,
                principal: action.payload,
                loggedIn: true,
                fetching: false,
                fetched: true,
                failed: false,
                error: ''
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
                error: ''
            };
        case RESTART_GAME_FULFILLED:
            return {
                ...state,
                fetching: false,
                fetched: true,
                failed: false,
                error: ''
            };
        case RESTART_GAME_REJECTED:
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