import {
    FETCH_LOCATIONS_PENDING,
    FETCH_LOCATIONS_FULFILLED,
    FETCH_LOCATIONS_REJECTED
} from '../actions/locationActions';

// INITIALIZE STATE

const initialState = {
    locations: [],
    fetching: false,
    fetched: false,
    failed: false,
    error: ''
};

// REDUCER

export const DataReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_LOCATIONS_PENDING:
            return {
                ...state,
                locations: [],
                fetching: true,
                fetched: false,
                failed: false,
                error: ''
            };
        case FETCH_LOCATIONS_FULFILLED:
            return {
                ...state,
                locations: action.payload,
                fetching: false,
                fetched: true,
                failed: false,
                error: ''
            };
        case FETCH_LOCATIONS_REJECTED:
            return {
                ...state,
                locations: [],
                fetching: false,
                fetched: false,
                failed: true,
                error: action.payload
            };
        default:
            return state;
    }
};