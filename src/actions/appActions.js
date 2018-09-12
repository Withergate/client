import { fetchVersion } from '../services/appService';

export const FETCH_VERSION = 'FETCH_VERSION';
export const FETCH_VERSION_PENDING = 'FETCH_VERSION_PENDING';
export const FETCH_VERSION_FULFILLED = 'FETCH_VERSION_FULFILLED';
export const FETCH_VERSION_REJECTED = 'FETCH_VERSION_REJECTED';

const fetchVersionAction = () => ({
    type: FETCH_VERSION,
    payload: fetchVersion()
});

export { fetchVersionAction as fetchVersion };
