import {
    FETCH_NOTIFICATIONS_PENDING,
    FETCH_NOTIFICATIONS_FULFILLED,
    FETCH_NOTIFICATIONS_REJECTED,
    FETCH_GLOBAL_NOTIFICATION_PENDING,
    FETCH_GLOBAL_NOTIFICATION_FULFILLED,
    FETCH_GLOBAL_NOTIFICATION_REJECTED
} from '../actions/dataActions';

import {
    DISMISS_ERROR
} from '../actions/uiActions';

const initialState = {
    notifications: [],
    global: {
        active: false,
        message: '',
        fetching: false,
        fetched: false,
        failed: false,
    },
    fetching: false,
    fetched: false,
    failed: false,
    error: ''
};

export const NotificationReducer = (state = initialState, action) => {
    switch(action.type) {
        case DISMISS_ERROR:
            return {
                ...state,
                failed: false,
                error: ''
            };
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
        case FETCH_GLOBAL_NOTIFICATION_PENDING:
            return {
                ...state,
                global: {
                    ...state.global,
                    fetching: true,
                    fetched: false,
                    failed: false,
                }
            };
        case FETCH_GLOBAL_NOTIFICATION_FULFILLED:
            return {
                ...state,
                global: {
                    ...state.global,
                    message: action.payload.message,
                    active: action.payload.active,
                    fetching: false,
                    fetched: true,
                    failed: false,
                }
            };
        case FETCH_GLOBAL_NOTIFICATION_REJECTED:
            return {
                ...state,
                global: {
                    message: '',
                    active: false,
                    fetching: false,
                    fetched: false,
                    failed: true,
                }
            };
        default:
            return state;
    }
};