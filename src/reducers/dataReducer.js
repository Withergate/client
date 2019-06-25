import {
    FETCH_LOCATIONS_PENDING,
    FETCH_LOCATIONS_FULFILLED,
    FETCH_LOCATIONS_REJECTED,
    FETCH_CLANS_PENDING,
    FETCH_CLANS_FULFILLED,
    FETCH_CLANS_REJECTED,
    FETCH_MARKET_OFFERS_PENDING,
    FETCH_MARKET_OFFERS_FULFILLED,
    FETCH_MARKET_OFFERS_REJECTED,
    FETCH_DISASTER_PENDING,
    FETCH_DISASTER_FULFILLED,
    FETCH_DISASTER_REJECTED
} from '../actions/dataActions';

import {
    DISMISS_ERROR
} from '../actions/uiActions';

// INITIALIZE STATE

const initialState = {
    locations: [],
    clans: {
        content: [],
        number: 0
    },
    offers: [],
    disaster: {
        data: undefined,
        fetching: false,
        fetched: false,
        failed: false,
        error: ''
    },
    fetching: false,
    fetched: false,
    failed: false,
    error: ''
};

// REDUCER

export const DataReducer = (state = initialState, action) => {
    switch(action.type) {
        case DISMISS_ERROR:
            return {
                ...state,
                failed: false,
                error: ''
            };
        case FETCH_LOCATIONS_PENDING:
            return {
                ...state,
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
        case FETCH_CLANS_PENDING:
            return {
                ...state,
                fetching: true,
                fetched: false,
                failed: false
            };
        case FETCH_CLANS_FULFILLED:
            return {
                ...state,
                clans: action.payload,
                fetching: false,
                fetched: true,
                failed: false,
                error: ''
            };
        case FETCH_CLANS_REJECTED:
            return {
                ...state,
                clans: {
                    content: [],
                    number: 0
                },
                fetching: false,
                fetched: false,
                failed: true,
                error: action.payload
            };
        case FETCH_MARKET_OFFERS_PENDING:
            return {
                ...state,
                fetching: true,
                fetched: false,
                failed: false
            };
        case FETCH_MARKET_OFFERS_FULFILLED:
            return {
                ...state,
                offers: action.payload,
                fetching: false,
                fetched: true,
                failed: false,
                error: ''
            };
        case FETCH_MARKET_OFFERS_REJECTED:
            return {
                ...state,
                offers: [],
                fetching: false,
                fetched: false,
                failed: true,
                error: action.payload
            };
        case FETCH_DISASTER_PENDING:
            return {
                ...state,
                disaster: {
                    ...state.disaster,
                    fetching: true,
                    fetched: false,
                    failed: false
                }
            };
        case FETCH_DISASTER_FULFILLED:
            return {
                ...state,
                disaster: {
                    ...state.disaster,
                    data: action.payload,
                    fetching: false,
                    fetched: true,
                    failed: false,
                    error: ''
                    }
                };
        case FETCH_DISASTER_REJECTED:
            return {
                ...state,
                disaster: {
                    ...state.disaster,
                    data: undefined,
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