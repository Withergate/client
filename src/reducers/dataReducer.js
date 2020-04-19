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
    FETCH_DISASTER_REJECTED,
    FETCH_ARENA_STATS_PENDING,
    FETCH_ARENA_STATS_FULFILLED,
    FETCH_ARENA_STATS_REJECTED,
    FETCH_FACTIONS_PENDING,
    FETCH_FACTIONS_FULFILLED,
    FETCH_FACTIONS_REJECTED,
    FETCH_FACTIONS_OVERVIEW_PENDING,
    FETCH_FACTIONS_OVERVIEW_FULFILLED,
    FETCH_FACTIONS_OVERVIEW_REJECTED,
    FETCH_CLAN_INTEL_PENDING,
    FETCH_CLAN_INTEL_FULFILLED,
    FETCH_CLAN_INTEL_REJECTED,
    FETCH_PROFILE_INTEL_PENDING,
    FETCH_PROFILE_INTEL_FULFILLED,
    FETCH_PROFILE_INTEL_REJECTED,
    FETCH_CRAFTING_ITEMS_PENDING,
    FETCH_CRAFTING_ITEMS_FULFILLED,
    FETCH_CRAFTING_ITEMS_REJECTED,
    FETCH_PENDING_MARKET_OFFERS_PENDING,
    FETCH_PENDING_MARKET_OFFERS_FULFILLED,
    FETCH_PENDING_MARKET_OFFERS_REJECTED
} from '../actions/dataActions';

import {
    DISMISS_ERROR
} from '../actions/uiActions';

// INITIALIZE STATE

const initialState = {
    locations: {
        data: [],
        fetching: false,
        fetched: false,
        failed: false,
        error: ''
    },
    clans: {
        data: {
            number: 0
        },
        fetching: false,
        fetched: false,
        failed: false,
        error: ''
    },
    offers: {
        data: {
            number: 0
        },
        fetching: false,
        fetched: false,
        failed: false,
        error: ''
    },
    pendingOffers: {
        data: {
            number: 0
        },
        fetching: false,
        fetched: false,
        failed: false,
        error: ''
    },
    disaster: {
        data: undefined,
        fetching: false,
        fetched: false,
        failed: false,
        error: ''
    },
    arenaStats: {
        data: [],
        fetching: false,
        fetched: false,
        failed: false,
        error: ''
    },
    factions: {
        data: [],
        fetching: false,
        fetched: false,
        failed: false,
        error: ''
    },
    factionsOverview: {
        data: undefined,
        fetching: false,
        fetched: false,
        failed: false,
        error: ''
    },
    clanIntel: {
        data: {},
        fetching: false,
        fetched: false,
        failed: false,
        error: ''
    },
    profileIntel: {
        data: {},
        fetching: false,
        fetched: false,
        failed: false,
        error: ''
    },
    crafting: {
        data: [],
        fetching: false,
        fetched: false,
        failed: false,
        error: ''
    }
};

// REDUCER

export const DataReducer = (state = initialState, action) => {
    switch(action.type) {
        case DISMISS_ERROR:
            return {
                ...state,
                failed: false,
                clans: {
                    ...state.clans,
                    failed: false
                },
                locations: {
                    ...state.locations,
                    failed: false
                },
                offers: {
                    ...state.offers,
                    failed: false
                },
                disaster: {
                    ...state.disaster,
                    failed: false
                },
                arenaStats: {
                    ...state.arenaStats,
                    failed: false
                },
                info: {
                    ...state.info,
                    failed: false
                },
                clanIntel: {
                    ...state.clanIntel,
                    failed: false
                },
                profileIntel: {
                    ...state.profileIntel,
                    failed: false
                },
                crafting: {
                    ...state.crafting,
                    failed: false
                }
            };
        case FETCH_LOCATIONS_PENDING:
            return {
                ...state,
                locations: {
                    ...state.locations,
                    fetching: true,
                    fetched: false,
                    failed: false,
                }
            };
        case FETCH_LOCATIONS_FULFILLED:
            return {
                ...state,
                locations: {
                    ...state.locations,
                    data: action.payload,
                    fetching: false,
                    fetched: true,
                    failed: false,
                    error: ''
                }
            };
        case FETCH_LOCATIONS_REJECTED:
            return {
                ...state,
                locations: {
                    ...state.locations,
                    data: [],
                    fetching: false,
                    fetched: false,
                    failed: true,
                    error: action.payload
                },
            };
        case FETCH_CLANS_PENDING:
            return {
                ...state,
                clans: {
                    ...state.clans,
                    fetching: true,
                    fetched: false,
                    failed: false
                }
            };
        case FETCH_CLANS_FULFILLED:
            return {
                ...state,
                clans: {
                    ...state.clans,
                    data: action.payload,
                    fetching: false,
                    fetched: true,
                    failed: false,
                    error: ''
                }
            };
        case FETCH_CLANS_REJECTED:
            return {
                ...state,
                clans: {
                    data: [],
                    number: 0,
                    fetching: false,
                    fetched: false,
                    failed: true,
                    error: action.payload
                }
            };
        case FETCH_MARKET_OFFERS_PENDING:
            return {
                ...state,
                offers: {
                    ...state.offers,
                    fetching: true,
                    fetched: false,
                    failed: false
                }
            };
        case FETCH_MARKET_OFFERS_FULFILLED:
            return {
                ...state,
                offers: {
                    ...state.offers,
                    data: action.payload,
                    fetching: false,
                    fetched: true,
                    failed: false,
                    error: ''
                }
            };
        case FETCH_MARKET_OFFERS_REJECTED:
            return {
                ...state,
                offers: {
                    ...state.offers,
                    fetching: false,
                    fetched: false,
                    failed: true,
                    error: action.payload
                }
            };
        case FETCH_PENDING_MARKET_OFFERS_PENDING:
            return {
                ...state,
                pendingOffers: {
                    ...state.pendingOffers,
                    fetching: true,
                    fetched: false,
                    failed: false
                }
            };
        case FETCH_PENDING_MARKET_OFFERS_FULFILLED:
            return {
                ...state,
                pendingOffers: {
                    ...state.pendingOffers,
                    data: action.payload,
                    fetching: false,
                    fetched: true,
                    failed: false,
                    error: ''
                }
            };
        case FETCH_PENDING_MARKET_OFFERS_REJECTED:
            return {
                ...state,
                pendingOffers: {
                    ...state.pendingOffers,
                    fetching: false,
                    fetched: false,
                    failed: true,
                    error: action.payload
                }
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
                },
            };
        case FETCH_ARENA_STATS_PENDING:
            return {
                ...state,
                arenaStats: {
                    ...state.arenaStats,
                    fetching: true,
                    fetched: false,
                    failed: false,
                }
            };
        case FETCH_ARENA_STATS_FULFILLED:
            return {
                ...state,
                arenaStats: {
                    ...state.arenaStats,
                    data: action.payload,
                    fetching: false,
                    fetched: true,
                    failed: false,
                    error: ''
                }
            };
        case FETCH_ARENA_STATS_REJECTED:
            return {
                ...state,
                arenaStats: {
                    ...state.arenaStats,
                    data: [],
                    fetching: false,
                    fetched: false,
                    failed: true,
                    error: action.payload
                },
            };
        case FETCH_FACTIONS_PENDING:
            return {
                ...state,
                factions: {
                    ...state.factions,
                    fetching: true,
                    fetched: false,
                    failed: false,
                }
            };
        case FETCH_FACTIONS_FULFILLED:
            return {
                ...state,
                factions: {
                    ...state.factions,
                    data: action.payload,
                    fetching: false,
                    fetched: true,
                    failed: false,
                    error: ''
                }
            };
        case FETCH_FACTIONS_REJECTED:
            return {
                ...state,
                factions: {
                    ...state.factions,
                    data: [],
                    fetching: false,
                    fetched: false,
                    failed: true,
                    error: action.payload
                },
            };
        case FETCH_FACTIONS_OVERVIEW_PENDING:
            return {
                ...state,
                factionsOverview: {
                    ...state.factionsOverview,
                    fetching: true,
                    fetched: false,
                    failed: false,
                }
            };
        case FETCH_FACTIONS_OVERVIEW_FULFILLED:
            return {
                ...state,
                factionsOverview: {
                    ...state.factionsOverview,
                    data: action.payload,
                    fetching: false,
                    fetched: true,
                    failed: false,
                    error: ''
                }
            };
        case FETCH_FACTIONS_OVERVIEW_REJECTED:
            return {
                ...state,
                factionsOverivew: {
                    ...state.factionsOverview,
                    data: undefined,
                    fetching: false,
                    fetched: false,
                    failed: true,
                    error: action.payload
                },
            };
        case FETCH_CLAN_INTEL_PENDING:
            return {
                ...state,
                clanIntel: {
                    ...state.clanIntel,
                    fetching: true,
                    fetched: false,
                    failed: false,
                }
            };
        case FETCH_CLAN_INTEL_FULFILLED:
            return {
                ...state,
                clanIntel: {
                    ...state.clanIntel,
                    data: action.payload,
                    fetching: false,
                    fetched: true,
                    failed: false,
                    error: ''
                }
            };
        case FETCH_CLAN_INTEL_REJECTED:
            return {
                ...state,
                clanIntel: {
                    ...state.clanIntel,
                    data: undefined,
                    fetching: false,
                    fetched: false,
                    failed: true,
                    error: action.payload
                },
            };
        case FETCH_PROFILE_INTEL_PENDING:
            return {
                ...state,
                profileIntel: {
                    ...state.profileIntel,
                    fetching: true,
                    fetched: false,
                    failed: false,
                }
            };
        case FETCH_PROFILE_INTEL_FULFILLED:
            return {
                ...state,
                profileIntel: {
                    ...state.profileIntel,
                    data: action.payload,
                    fetching: false,
                    fetched: true,
                    failed: false,
                    error: ''
                }
            };
        case FETCH_PROFILE_INTEL_REJECTED:
            return {
                ...state,
                profileIntel: {
                    ...state.profileIntel,
                    data: undefined,
                    fetching: false,
                    fetched: false,
                    failed: true,
                    error: action.payload
                },
            };
        case FETCH_CRAFTING_ITEMS_PENDING:
            return {
                ...state,
                crafting: {
                    ...state.crafting,
                    fetching: true,
                    fetched: false,
                    failed: false,
                }
            };
        case FETCH_CRAFTING_ITEMS_FULFILLED:
            return {
                ...state,
                crafting: {
                    ...state.crafting,
                    data: action.payload,
                    fetching: false,
                    fetched: true,
                    failed: false,
                    error: ''
                }
            };
        case FETCH_CRAFTING_ITEMS_REJECTED:
            return {
                ...state,
                crafting: {
                    ...state.crafting,
                    data: [],
                    fetching: false,
                    fetched: false,
                    failed: true,
                    error: action.payload
                },
            };
        default:
            return state;
    }
};