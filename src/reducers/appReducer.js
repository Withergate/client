import {
    FETCH_VERSION_PENDING,
    FETCH_VERSION_FULFILLED,
    FETCH_VERSION_REJECTED
} from '../actions/dataActions';

const initialState = {
    version: '',
    fetching: false,
    fetched: false,
    failed: false,
    error: null
};

export const AppReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_VERSION_PENDING:
            return {
                ...state,
                fetching: true,
                fetched: false,
                failed: false
            };
        case FETCH_VERSION_FULFILLED:
            return {
                ...state,
                version: action.payload,
                fetching: false,
                fetched: true,
                failed: false,
                error: ''
            };
        case FETCH_VERSION_REJECTED:
            return {
                ...state,
                version: '',
                fetching: false,
                fetched: false,
                failed: true,
                error: action.payload
            };
        default:
            return state;
    }
};