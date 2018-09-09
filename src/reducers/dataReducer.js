import {
    FETCH_LOCATIONS_PENDING,
    FETCH_LOCATIONS_FULFILLED,
    FETCH_LOCATIONS_REJECTED,
    VISIT_LOCATION_PENDING,
    VISIT_LOCATION_FULFILLED,
    VISIT_LOCATION_REJECTED
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
        case VISIT_LOCATION_PENDING:
            return {
                ...state,
                fetching: true,
                fetched: false,
                failed: false
            };
        case VISIT_LOCATION_FULFILLED:
            return {
                ...state,
                fetching: false,
                fetched: true,
                failed: false
            };
        case VISIT_LOCATION_REJECTED:
            return {
                ...state,
                fetching: false,
                fetched: true,
                failed: true
            };     
        default:
            return state;
    }
};