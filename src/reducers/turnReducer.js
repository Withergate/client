import {
    FETCH_TURN_PENDING,
    FETCH_TURN_FULFILLED,
    FETCH_TURN_REJECTED
} from '../actions/turnActions';
const initialState = {
    turn: {},
    fetching: false,
    fetched: false,
    failed: false,
    error: ''
};

export const TurnReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_TURN_PENDING:
            return {
                ...state,
                turn: {},
                fetching: true,
                fetched: false,
                failed: false,
                error: ''
            };
        case FETCH_TURN_FULFILLED:
            return {
                ...state,
                turn: action.payload,
                fetching: false,
                fetched: true,
                failed: false,
                error: ''
            };
        case FETCH_TURN_REJECTED:
            return {
                ...state,
                turn: {},
                fetching: false,
                fetched: false,
                failed: true,
                error: action.payload
            };
        default:
            return state;
    }
};