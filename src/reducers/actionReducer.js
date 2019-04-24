import {
    EQUIP_ITEM_FULFILLED,
    EQUIP_ITEM_REJECTED,
    EQUIP_ITEM_PENDING,
    UNEQUIP_ITEM_FULFILLED,
    UNEQUIP_ITEM_REJECTED,
    UNEQUIP_ITEM_PENDING,
    USE_CONSUMABLE_PENDING,
    USE_CONSUMABLE_FULFILLED,
    USE_CONSUMABLE_REJECTED,
    BUILDING_PENDING,
    BUILDING_FULFILLED,
    BUILDING_REJECTED,
    QUEST_PENDING,
    QUEST_FULFILLED,
    QUEST_REJECTED,
    TRADE_RESOURCES_PENDING,
    TRADE_RESOURCES_FULFILLED,
    TRADE_RESOURCES_REJECTED,
    VISIT_LOCATION_PENDING,
    VISIT_LOCATION_FULFILLED,
    VISIT_LOCATION_REJECTED
} from '../actions/actionActions';

import {
    DISMISS_ERROR
} from '../actions/uiActions';

// INITIALIZE STATE

const initialState = {
    fetching: false,
    fetched: true,
    failed: false,
    error: ''
};

export const ActionReducer = (state = initialState, action) => {
    switch(action.type) {
        case DISMISS_ERROR:
            return {
                ...state,
                failed: false,
                error: ''
            };
        case EQUIP_ITEM_PENDING:
            return {
                ...state,
                fetching: true,
                fetched: false,
                failed: false
            };
        case EQUIP_ITEM_FULFILLED:
            return {
                ...state,
                fetching: false,
                fetched: true,
                failed: false
            };
        case EQUIP_ITEM_REJECTED:
            return {
                ...state,
                fetching: false,
                fetched: true,
                failed: true,
                error: action.payload
            };
        case UNEQUIP_ITEM_PENDING:
            return {
                ...state,
                fetching: true,
                fetched: false,
                failed: false
            };
        case UNEQUIP_ITEM_FULFILLED:
            return {
                ...state,
                fetching: false,
                fetched: true,
                failed: false
            };
        case UNEQUIP_ITEM_REJECTED:
            return {
                ...state,
                fetching: false,
                fetched: true,
                failed: true,
                error: action.payload
            };
        case USE_CONSUMABLE_PENDING:
            return {
                ...state,
                fetching: true,
                fetched: false,
                failed: false
            };
        case USE_CONSUMABLE_FULFILLED:
            return {
                ...state,
                fetching: false,
                fetched: true,
                failed: false
            };
        case USE_CONSUMABLE_REJECTED:
            return {
                ...state,
                fetching: false,
                fetched: true,
                failed: true,
                error: action.payload
            };
        case BUILDING_PENDING:
            return {
                ...state,
                fetching: true,
                fetched: false,
                failed: false
            };
        case BUILDING_FULFILLED:
            return {
                ...state,
                fetching: false,
                fetched: true,
                failed: false
            };
        case BUILDING_REJECTED:
            return {
                ...state,
                fetching: false,
                fetched: true,
                failed: true,
                error: action.payload
            };
        case QUEST_PENDING:
            return {
                ...state,
                fetching: true,
                fetched: false,
                failed: false
            };
        case QUEST_FULFILLED:
            return {
                ...state,
                fetching: false,
                fetched: true,
                failed: false
            };
        case QUEST_REJECTED:
            return {
                ...state,
                fetching: false,
                fetched: true,
                failed: true,
                error: action.payload
            };
        case TRADE_RESOURCES_PENDING:
            return {
                ...state,
                fetching: true,
                fetched: false,
                failed: false
            };
        case TRADE_RESOURCES_FULFILLED:
            return {
                ...state,
                fetching: false,
                fetched: true,
                failed: false
            };
        case TRADE_RESOURCES_REJECTED:
            return {
                ...state,
                fetching: false,
                fetched: true,
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
                failed: false,
                error: ''
            };
        case VISIT_LOCATION_REJECTED:
            return {
                ...state,
                fetching: false,
                fetched: true,
                failed: true,
                error: action.payload
            };
        default:
            return state;
    }
};