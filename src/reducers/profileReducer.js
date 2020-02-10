import {
    FETCH_PROFILE_PENDING,
    FETCH_PROFILE_FULFILLED,
    FETCH_PROFILE_REJECTED,
    FETCH_PROFILES_PENDING,
    FETCH_PROFILES_FULFILLED,
    FETCH_PROFILES_REJECTED,
    CREATE_PROFILE_PENDING,
    CREATE_PROFILE_FULFILLED,
    CREATE_PROFILE_REJECTED
} from '../actions/profileActions';

import {
    DISMISS_ERROR
} from '../actions/uiActions';
import { NOT_FOUND } from '../constants/constants';

// INITIALIZE STATE

const initialState = {
    profile: {
        data: undefined,
        fetching: false,
        fetched: false,
        failed: false,
        error: ''
    },
    profiles: {
        data: {
            number: 0
        },
        fetching: false,
        fetched: false,
        failed: false,
        error: ''
    },
    profileCreation: {
        fetching: false,
        fetched: false,
        failed: false,
        error: ''
    },
    exists: false
};

// REDUCER

export const ProfileReducer = (state = initialState, action) => {
    switch(action.type) {
        case DISMISS_ERROR:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    error: '',
                    failed: false
                },
                profiles: {
                    ...state.profiles,
                    error: '',
                    failed: false
                },
                profileCreation: {
                    ...state.profile,
                    error: '',
                    failed: false
                }
            };
        case FETCH_PROFILE_PENDING:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    data: action.payload,
                    fetching: true,
                    fetched: false,
                    failed: false,
                    error: ''
                }
            };
        case FETCH_PROFILE_FULFILLED:
            return {
                ...state,
                profile: {
                    data: action.payload,
                    fetching: false,
                    fetched: true,
                    failed: false,
                    error: ''
                },
                exists: true
            };
        case FETCH_PROFILE_REJECTED:
            // check if fetch failed or profile does not exists 
            if (action.payload === NOT_FOUND) {
                return {
                    ...state,
                    exists: false,
                    profile: {
                        ...state.profile,
                        fetching: false,
                        fetched: true,
                        failed: false,
                        error: ''
                    }
                };
            } else { // fetch failed
                return {
                    ...state,
                    profile: {
                        fetching: false,
                        fetched: false,
                        failed: true,
                        error: action.payload
                    },
                    exists: true,
                    
                };
            }
        case FETCH_PROFILES_PENDING:
            return {
                ...state,
                profiles: {
                    ...state.profiles,
                    fetching: true,
                    fetched: false,
                    failed: false
                }
            };
        case FETCH_PROFILES_FULFILLED:
            return {
                ...state,
                profiles: {
                    ...state.profiles,
                    data: action.payload,
                    fetching: false,
                    fetched: true,
                    failed: false,
                    error: ''
                }
            };
        case FETCH_PROFILES_REJECTED:
            return {
                ...state,
                profiles: {
                    data: [],
                    number: 0,
                    fetching: false,
                    fetched: false,
                    failed: true,
                    error: action.payload
                }
            };
        case CREATE_PROFILE_PENDING:
            return {
                ...state,
                profileCreation: {
                    fetching: true,
                    fetched: false,
                    failed: false,
                    error: ''
                },    
            };
        case CREATE_PROFILE_FULFILLED:
            return {
                ...state,
                profileCreation: {
                    fetching: false,
                    fetched: true,
                    failed: false,
                    error: '',
                }
            };
        case CREATE_PROFILE_REJECTED:
            return {
                ...state,
                profileCreation: {
                    fetching: false,
                    fetched: false,
                    failed: true,
                    error: action.payload,
                }
            };
        default:
            return state;
    }
};