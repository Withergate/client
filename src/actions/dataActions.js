import { fetchClan, fetchClans, fetchLocations } from '../services/dataService';

export const FETCH_CLAN = 'FETCH_CLAN';
export const FETCH_CLAN_PENDING = 'FETCH_CLAN_PENDING';
export const FETCH_CLAN_FULFILLED = 'FETCH_CLAN_FULFILLED';
export const FETCH_CLAN_REJECTED = 'FETCH_CLAN_REJECTED';

export const FETCH_CLANS = 'FETCH_CLANS';
export const FETCH_CLANS_PENDING = 'FETCH_CLANS_PENDING';
export const FETCH_CLANS_FULFILLED = 'FETCH_CLANS_FULFILLED';
export const FETCH_CLANS_REJECTED = 'FETCH_CLANS_REJECTED';

export const FETCH_LOCATIONS = 'FETCH_LOCATIONS';
export const FETCH_LOCATIONS_PENDING = 'FETCH_LOCATIONS_PENDING';
export const FETCH_LOCATIONS_FULFILLED = 'FETCH_LOCATIONS_FULFILLED';
export const FETCH_LOCATIONS_REJECTED = 'FETCH_LOCATIONS_REJECTED';

const fetchClanAction = () => ({
    type: FETCH_CLAN,
    payload: fetchClan()
});
export { fetchClanAction as fetchClan };

const fetchClansAction = (page) => ({
    type: FETCH_CLANS,
    payload: fetchClans(page)
});
export { fetchClansAction as fetchClans };

const fetchLocationsAction = () => ({
    type: FETCH_LOCATIONS,
    payload: fetchLocations()
});
export { fetchLocationsAction as fetchLocations };
