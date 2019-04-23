import {
    FETCH_NOTIFICATIONS_PENDING,
    FETCH_NOTIFICATIONS_FULFILLED,
    FETCH_NOTIFICATIONS_REJECTED
} from '../actions/dataActions';

const initialState = {
    notifications: [],
    fetching: false,
    fetched: false,
    failed: false,
    error: ''
};

export const NotificationReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_NOTIFICATIONS_PENDING:
            return {
                ...state,
                notifications: [],
                fetching: true,
                fetched: false,
                failed: false,
                error: ''
            };
        case FETCH_NOTIFICATIONS_FULFILLED:
            return {
                ...state,
                notifications: action.payload,
                fetching: false,
                fetched: true,
                failed: false,
                error: ''
            };
        case FETCH_NOTIFICATIONS_REJECTED:
            return {
                ...state,
                notifications: [],
                fetching: false,
                fetched: false,
                failed: true,
                error: action.payload
            };
        default:
            return state;
    }
};