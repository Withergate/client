import { fetchLocations, visitLocation } from '../services/locationService';
import { fetchClan } from './clanActions';

export const FETCH_LOCATIONS = 'FETCH_LOCATIONS';
export const FETCH_LOCATIONS_PENDING = 'FETCH_LOCATIONS_PENDING';
export const FETCH_LOCATIONS_FULFILLED = 'FETCH_LOCATIONS_FULFILLED';
export const FETCH_LOCATIONS_REJECTED = 'FETCH_LOCATIONS_REJECTED';

export const VISIT_LOCATION = 'VISIT_LOCATIONS';
export const VISIT_LOCATION_PENDING = 'VISIT_LOCATIONS_PENDING';
export const VISIT_LOCATION_FULFILLED = 'VISIT_LOCATIONS_FULFILLED';
export const VISIT_LOCATION_REJECTED = 'VISIT_LOCATIONS_REJECTED';

const fetchLocationsAction = () => ({
    type: FETCH_LOCATIONS,
    payload: fetchLocations()
});

export { fetchLocationsAction as fetchLocations };

const visitLocationAction = (characterId, location) => {
    return (dispatch) => {
        return dispatch({
            type: VISIT_LOCATION,
            payload: visitLocation(characterId, location)
        })
        .then(() => dispatch(fetchClan()));
    };
};

export { visitLocationAction as visitLocation };